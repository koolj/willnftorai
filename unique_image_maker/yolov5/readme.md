# guideline rules detection via yolov5 image detection technology

//not included: dataset for topics: 'nude', 'fight', 'hcm', 'protest', 'mona'

//git and setup yolov5 envi: https://github.com/ultralytics/yolov5/wiki/Train-Custom-Data

//get image data from Google
//using crawl tool https://github.com/koolj/heraforweb, to get images that related to topics: 'nude', 'fight', 'hcm', 'protest', 'mona'

//train customed data with rtx 2080 vga card, 12gb ram.
```
python train.py --img 640 --batch 20 --epochs 60 --data rule.yaml --weights yolov5s.pt

```
//check results, and test detection
```
python detect.py --source testdata/*.jpg   --weights weights/last.pt

```