from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from vncorenlp import VnCoreNLP
import json

import pandas as pd
import sklearn

from simpletransformers.seq2seq import (
    Seq2SeqModel
)


model_args = {
    "train_batch_size": 30,
    "num_train_epochs": 50,
    "save_eval_checkpoints": False,
    "save_model_every_epoch": True,
    "evaluate_during_training": False,
    "evaluate_generated_text": True,
    "evaluate_during_training_verbose": False,
    "use_multiprocessing": False,
    "overwrite_output_dir": True,
    "max_length": 150,
    "manual_seed": 4,
}

model1 = Seq2SeqModel(
    encoder_decoder_type="marian",
    encoder_decoder_name="_out_bk",
    args=model_args,
)

model2 = Seq2SeqModel(
    encoder_decoder_type="marian",
    encoder_decoder_name="_out_av",
    args=model_args,
)

model3 = Seq2SeqModel(
    encoder_decoder_type="marian",
    encoder_decoder_name="out_err",
    args=model_args,
)

from nltk.cluster.util import cosine_distance
import numpy as np
import networkx as nx

stopwords    = [ 'a lô', 'a ha', 'ai', 'ai ai', 'ai nấy', 'ai đó', 'alô', 'amen', 'anh', 'anh ấy', 'ba', 'ba ba', 'b', 'a bản', 'ba cùng', 'ba họ', 'ba ngày', 'ba ngôi', 'ba tăng', 'bao giờ', 'bao lâu', 'bao nhiêu', 'bao nả', 'bay biến', 'biết', 'biết bao', 'biết bao nhiêu', 'biết chắc', 'biết chừng nào', 'biết mình', 'biết mấy', 'biết thế', 'biết trước', 'biết việc', 'biết đâu', 'biết đâu chừng', 'biết đâu đấy', 'biết được', 'buổi', 'buổi làm', 'buổi mới', 'buổi ngày', 'buổi sớm', 'bà', 'bà ấy', 'bài', 'bài bác', 'bài bỏ', 'bài cái', 'bác', 'bán', 'bán cấp', 'bán dạ', 'bán thế', 'bây bẩy', 'bây chừ', 'bây giờ', 'bây nhiêu', 'bèn', 'béng', 'bên', 'bên bị', 'bên có', 'bên cạnh', 'bông', 'bước', 'bước khỏi', 'bước tới', 'bước đi', 'bạn', 'bản', 'bản bộ', 'bản riêng', 'bản thân', 'bản ý', 'bất chợt', 'bất cứ', 'bất giác', 'bất kì', 'bất kể', 'bất kỳ', 'bất luận', 'bất ngờ', 'bất nhược', 'bất quá', 'bất quá chỉ', 'bất thình lình', 'bất tử', 'bất đồ', 'bấy', 'bấy chầy', 'bấy chừ', 'bấy giờ', 'bấy lâu', 'bấy lâu nay', 'bấy nay', 'bấy nhiêu', 'bập bà bập bõm', 'bập bõm', 'bắt đầu', 'bắt đầu từ', 'bằng', 'bằng cứ', 'bằng không', 'bằng người', 'bằng nhau', 'bằng như', 'bằng nào', 'bằng nấy', 'bằng vào', 'bằng được', 'bằng ấy', 'bển', 'bệt', 'bị', 'bị chú', 'bị vì', 'bỏ', 'bỏ bà', 'bỏ cha', 'bỏ cuộc', 'bỏ không', 'bỏ lại', 'bỏ mình', 'bỏ mất', 'bỏ mẹ', 'bỏ nhỏ', 'bỏ quá', 'bỏ ra', 'bỏ riêng', 'bỏ việc', 'bỏ xa', 'bỗng', 'bỗng chốc', 'bỗng dưng', 'bỗng không', 'bỗng nhiên', 'bỗng nhưng', 'bỗng thấy', 'bỗng đâu', 'bộ', 'bộ thuộc', 'bộ điều', 'bội phần', 'bớ', 'bởi', 'bởi ai', 'bởi chưng', 'bởi nhưng', 'bởi sao', 'bởi thế', 'bởi thế cho nên', 'bởi tại', 'bởi vì', 'bởi vậy', 'bởi đâu', 'bức', 'cao', 'cao lâu', 'cao ráo', 'cao răng', 'cao sang', 'cao số', 'cao thấp', 'cao thế', 'cao xa', 'cha', 'cha chả', 'chao ôi', 'chia sẻ', 'chiếc', 'cho', 'cho biết', 'cho chắc', 'cho hay', 'cho nhau', 'cho nên', 'cho rằng', 'cho rồi', 'cho thấy', 'cho tin', 'cho tới', 'cho tới khi', 'cho về', 'cho ăn', 'cho đang', 'cho được', 'cho đến', 'cho đến khi', 'cho đến nỗi', 'choa', 'chu cha', 'chui cha', 'chung', 'chung cho', 'chung chung', 'chung cuộc', 'chung cục', 'chung nhau', 'chung qui', 'chung quy', 'chung quy lại', 'chung ái', 'chuyển', 'chuyển tự', 'chuyển đạt', 'chuyện', 'chuẩn bị', 'chành chạnh', 'chí chết', 'chính', 'chính bản', 'chính giữa', 'chính là', 'chính thị', 'chính điểm', 'chùn chùn', 'chùn chũn', 'chú', 'chú dẫn', 'chú khách', 'chú mày', 'chú mình', 'chúng', 'chúng mình', 'chúng ta', 'chúng tôi', 'chúng ông', 'chăn chắn', 'chăng', 'chăng chắc', 'chăng nữa', 'chơi', 'chơi họ', 'chưa', 'chưa bao giờ', 'chưa chắc', 'chưa có', 'chưa cần', 'chưa dùng', 'chưa dễ', 'chưa kể', 'chưa tính', 'chưa từng', 'chầm chập', 'chậc', 'chắc', 'chắc chắn', 'chắc dạ', '=', '-', '0', '9', '8', '7', '6', '5', '4', '3', '2', '1', '/',];

def read_article(strval):
    article = strval.split(".")
    sentences = []
    

    for sentence in article:
        print(sentence)
        if(len(sentence) > 3):
            sentences.append(sentence.replace("[^a-zA-Z]", " ").split(" "))
    sentences.pop() 
    print (sentences)
    return sentences

def sentence_similarity(sent1, sent2, stopwords=None):
    if stopwords is None:
        stopwords = []
 
    sent1 = [w.lower() for w in sent1]
    sent2 = [w.lower() for w in sent2]
 
    all_words = list(set(sent1 + sent2))
 
    vector1 = [0] * len(all_words)
    vector2 = [0] * len(all_words)
 
    # build the vector for the first sentence
    for w in sent1:
        if w in stopwords:
            continue
        vector1[all_words.index(w)] += 1
 
    # build the vector for the second sentence
    for w in sent2:
        if w in stopwords:
            continue
        vector2[all_words.index(w)] += 1
 
    return 1 - cosine_distance(vector1, vector2)
 
def build_similarity_matrix(sentences, stop_words):
    # Create an empty similarity matrix
    similarity_matrix = np.zeros((len(sentences), len(sentences)))
 
    for idx1 in range(len(sentences)):
        for idx2 in range(len(sentences)):
            if idx1 == idx2: #ignore if both are same sentences
                continue 
            similarity_matrix[idx1][idx2] = sentence_similarity(sentences[idx1], sentences[idx2], stop_words)

    return similarity_matrix


def generate_summary(file_name, top_n=5):
    stop_words = stopwords
    summarize_text = []

    #Read text anc split it
    sentences =  read_article(file_name)

    #Generate Similary Martix across sentences
    sentence_similarity_martix = build_similarity_matrix(sentences, stop_words)

    #Rank sentences in similarity martix
    sentence_similarity_graph = nx.from_numpy_array(sentence_similarity_martix)
    scores = nx.pagerank(sentence_similarity_graph)

    #Sort the rank and pick top sentences
    ranked_sentence = sorted(((scores[i],s) for i,s in enumerate(sentences)), reverse=True)    
    print("Indexes of top ranked_sentence order are ", ranked_sentence)    

    for i in range(top_n):
      summarize_text.append(" ".join(ranked_sentence[i][1]))

    #Output
    return ". ".join(summarize_text)

#generate_summary( str, 2)
def runSum(txtid):
    print(txtid)
    return generate_summary(txtid, 2)


annotator = VnCoreNLP(address="http://127.0.0.1", port=9000) 

def runpossegner(txtid):
    return annotator.annotate(txtid)

def runautogenkey(txtid):
    return json.dumps(annotator.tokenize(txtid))


def runtransVA(txtid):
    print(txtid)
    return json.dumps(model1.predict([txtid]))

def runtransAV(txtid):
    print(txtid)
    return json.dumps(model2.predict([txtid]))

def runspell(txtid):
    print(txtid)
    return json.dumps(model3.predict([txtid]))


app = Flask(__name__)
api = Api(app)
class Quotes(Resource):
    def get(self):
        return 'SmartRep by KoolJ, admin@dathoc.net says: Hi!'

class nlpoperate(Resource):
    def get(self, togo_id):
        if togo_id == '1':
            return adddata()
        if togo_id == '2':
            return addfeature()   


api.add_resource(nlpoperate, '/<string:togo_id>')
api.add_resource(Quotes, '/')

@app.route('/runsum', methods=['POST'])
def runsum():
    data = request.json
    returnval = runSum(data['txtid'])
    return returnval

@app.route('/possegner', methods=['POST'])
def possegner():
    data = request.json
    returnval = runpossegner(data['txtid'])
    return returnval

@app.route('/autogenkey', methods=['POST'])
def autogenkey():
    data = request.json
    returnval = runautogenkey(data['txtid'])
    return returnval

@app.route('/transVA', methods=['POST'])
def transVA():
    data = request.json
    returnval = runtransVA(data['txtid'])
    return returnval

@app.route('/transAV', methods=['POST'])
def transAV():
    data = request.json
    returnval = runtransAV(data['txtid'])
    return returnval

@app.route('/checkspell', methods=['POST'])
def checkspell():
    data = request.json
    returnval = runspell(data['txtid'])
    return returnval


if __name__ == '__main__':
    app.run(debug=True)
