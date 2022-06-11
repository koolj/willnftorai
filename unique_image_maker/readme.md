# guideline

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

//deployment with Spark cluster, follow guideline deployment folder