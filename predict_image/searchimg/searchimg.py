#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Jan 17 23:05:23 2021

@author: kj
"""
# import the necessary packages
import pandas as pd
import numpy as np
import csv

def chi2_distance(histA, histB, eps = 1e-10):
	d = 0.5 * np.sum([((a - b) ** 2) / (a + b + eps)
		for (a, b) in zip(histA, histB)])
	return d
class Searcher:
	def __init__(self, indexPath):
		# store our index path
		self.indexPath = indexPath
	def search(self, queryFeatures, limit = 10):
		# initialize our dictionary of results
		#print(queryFeatures)
		results = {}
        # open the index file for reading
		with open(self.indexPath) as f:
			# initialize the CSV reader
			reader = csv.reader(f)
			# loop over the rows in the index
			for row in reader:
				num = [x.replace("[","").replace("]","").split(" ") for x in row[1:]]
				print(num)
				if  "jpg" in  str(row):
					num1 = num[0]
				print(num1)
				features = [float(y) for y in num1 if len(y)>0]
				#print(row[1:].[3:len(row[1:])-1])
				#features = [float(x) for x in row[1:].[3:len(row[1:])-1]]
				#print("-----------------------------")
				#print(features)
				#print(queryFeatures)
				d = chi2_distance(features, queryFeatures)
				print(d)
				# now that we have the distance between the two feature
				# vectors, we can udpate the results dictionary -- the
				# key is the current image ID in the index and the
				# value is the distance we just computed, representing
				# how 'similar' the image in the index is to our query
				results[row[0]] = d
			# close the reader
			f.close()
		# sort our results, so that the smaller distances (i.e. the
		# more relevant images are at the front of the list)
		results = sorted([(v, k) for (k, v) in results.items()])
		# return our (limited) results
		return results[:limit]
