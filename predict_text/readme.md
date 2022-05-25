//not included
optimizer.pt  ~600 mb
pytorch_model.bin ~300 mb
stopwords not full

//guideline to phrase nlp
https://www.youtube.com/watch?v=CSASqIPjzNI&list=PL0ANjPcxElLgn0tuyGqt2LbMULLC0Hqkd

//build rasa to validate text normalization
//follow: https://rasa.com/docs/rasa/installation/
//train nlu, with intents: badwords
rasa train

//start api rasa text normalization
rasa run -m models --enable-api --cors "*" -p 5005 --log-file out.log