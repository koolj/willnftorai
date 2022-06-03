# guideline yolov5

//not included: dataset for topics: 'nude', 'fight', 'hcm', 'protest', 'mona'

//git and setup yolov5 envi: https://github.com/ultralytics/yolov5/wiki/Train-Custom-Data

//get image data from Google
//using crawl tool https://github.com/koolj/heraforweb, to get images that related to topics: 'nude', 'fight', 'hcm', 'protest', 'mona'

//train custom data
```
python train.py --img 640 --batch 10 --epochs 10 --data rule.yaml --weights '' --cfg rule_cfg.yaml

```
//check results, and test detection
```
python detect.py --source testdata/*.jpg   --weights weights/last.pt

```