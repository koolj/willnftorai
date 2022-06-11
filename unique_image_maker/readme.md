# guideline

## compare image
//prepare
```
pip3 install flask_restful
pip3 install opencv-python
pip3 install imutils
pip3 install tourch
```
//install python & flask: https://flask.palletsprojects.com/en/2.1.x/installation/

//set FLASK
```
export FLASK_APP=imsearch_svr
```
//run
```
flask run -h localhost -p 5000
```
//api

http://localhost:5000/vc

## RULE image, normalize image
```
cd yolov5
pip install -r requirements.txt
```
//set FLASK
```
export FLASK_APP=detect_svr
```
//run
```
flask run -h localhost -p 5003
```
//api

http://localhost:5003/detectimg

## deployment
//deployment with Spark cluster, follow guideline deployment folder