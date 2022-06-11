# guideline

## detect unique sound/audio
//not included

music.ann  ~130 mb

not full songs

//set FLASK
```
pip3 install flask_restful
pip3 install librosa
pip3 install annoy
pip3 install pickle

export FLASK_APP=audio_detect
```
//run
```
    flask run -h localhost -p 5002
```
//api

http://localhost:5002/predict

## deployment
//deployment with Spark cluster, follow guideline deployment folder