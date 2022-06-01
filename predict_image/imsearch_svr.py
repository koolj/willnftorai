from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import json
import argparse
import time
from pathlib import Path

from colordescriptor import ColorDescriptor
from searchimg import Searcher
import argparse
import cv2


def checkimg(imgurl):
    resscore = 0
    # construct the argument parser and parse the arguments
    ap = argparse.ArgumentParser()
    ap.add_argument("-i", "--index", default='./base.csv', required = False,
        help = "Path to where the computed index will be stored")
    ap.add_argument("-q", "--query", required = False,
        help = "Path to the query image")
    ap.add_argument("-r", "--result-path", required = False,
        help = "Path to the result path")
    args = vars(ap.parse_args())
    # initialize the image descriptor
    cd = ColorDescriptor((8, 12, 3))

    # load the query image and describe it
    query = cv2.imread(imgurl)
    features = cd.describe(query)
    # perform the search
    searcher = Searcher('./base.csv')
    results = searcher.search(features)

    # display the query
    #cv2.imshow("Query", query)
    # loop over the results
    for (score, resultID) in results:
        # load the result image and display it
        #result = cv2.imread(args["result_path"] + "/" + resultID)
        #cv2.imshow("Result", result)
        #print(result)
        print(str(int(score)))
        #cv2.waitKey(0)
        resscore = int(score)
    return json.dumps(resscore) 


app = Flask(__name__)
api = Api(app)
class Quotes(Resource):
    def get(self):
        return 'BookWorm says: Hi!'

api.add_resource(Quotes, '/')

@app.route('/vc0', methods=['POST'])

def vc0():
    data = request.json
    imgurl=data['imgid']
    print('-----------------------------------------------------')
    print(imgurl)
    print('-----------------------------------------------------')
    returnval2 = 0
    returnval2 = checkimg(imgurl)
    return returnval2
if __name__ == '__main__':
    app.run(debug=True,port=5000)
