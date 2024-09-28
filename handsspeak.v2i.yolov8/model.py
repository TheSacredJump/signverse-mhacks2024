from ultralytics import YOLO

model = YOLO('yolov8n.yaml') 

# replace with your path
model.train(data='/Users/sumitbahadur/Mhacks 2024/speaky-mhacks2024/handsspeak.v2i.yolov8/data.yaml', epochs=100, imgsz=640, )
