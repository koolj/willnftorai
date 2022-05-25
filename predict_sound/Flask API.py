#!/usr/bin/env python
# coding: utf-8

# In[6]:


from flask import Flask, request, redirect, url_for, flash, jsonify
import numpy as np
import pickle
import json
import librosa
import os
from annoy import AnnoyIndex


# Các thông số ban đầu của mô hình:
f = 100
u = AnnoyIndex(f)
u.load(r'.\music.ann')

infile = open(r'.\songs.pk','rb')
songs = pickle.load(infile)


# Tạo hàm cần thiết
def extract_features(y, sr=16000, nfilt=10, winsteps=0.02):
    try:
        feat = mfcc(y, sr, nfilt=nfilt, winstep=winsteps)
        return feat
    except:
        raise Exception("Extraction feature error")
        
def crop_feature(feat, i = 0, nb_step=10, maxlen=100):
    crop_feat = np.array(feat[i : i + nb_step]).flatten()
    print(crop_feat.shape)
    crop_feat = np.pad(crop_feat, (0, maxlen - len(crop_feat)), mode='constant')
    return crop_feat


#Tạo app

app = Flask(__name__)

# Khai báo các route cho API
@app.route("/predict", methods=["POST"])

def infer_sound():
    if 'file' not in request.files:
        return "Please try again. The sounds doesn't exist"
    
    file = request.files.get('file')
    
    if not file:
        return
    # Lấy file sound người dùng upload lên
    sound = file.read()
    y, sr = librosa.load(sound)
    feat = extract_features(y)
    
    # Tìm đặc chưng của file upload
    results = []
    for i in range(0, feat.shape[0], 10):
        crop_feat = crop_feature(feat, i, nb_step=10)
        result = u.get_nns_by_vector(crop_feat, n=5)
        result_songs = [songs[k] for k in result]
        results.append(result_songs)
    
    results = np.array(results).flatten()
    
    # Kết quả
    unique, counts = np.unique(results, return_counts=True)
    a = dict(zip(unique, counts))
    b = []
    for key in a:
        if a[key] > 100:
            b.append(key)
    if len(b) == 0:
        print('Chúc mừng bạn đã có một NFT mới!')
    else:
        print('Có các NFT giống với sounds của bạn là: ')
        for i in range(len(b) - 1):
            print(b[i])
        print('Hãy chọn một bản nhạc khác làm NFT!')
    return

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5002)


# In[ ]:




