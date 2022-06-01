## guideline

//not included

optimizer.pt  ~600 mb

pytorch_model.bin ~300 mb

stopwords not full

//guideline to phrase nlp

https://www.youtube.com/watch?v=CSASqIPjzNI&list=PL0ANjPcxElLgn0tuyGqt2LbMULLC0Hqkd


//build rasa to validate text normalization
//setup rasa, follow: https://rasa.com/docs/rasa/installation/
//setup pyvi, vn_model, install Viet nlp spacy
pip3 install spacy==2.2.3 --user
pip3 install pyvi --user
pip3 install https://github.com/trungtv/vi_spacy/raw/master/packages/vi_spacy_model-0.2.1/dist/vi_spacy_model-0.2.1.tar.gz --user
python3 -m spacy link vi_spacy_model vi_spacy_model

//train nlu, with intents: badwords
```
rasa train
```

//start api rasa text normalization
```
rasa run -m models --enable-api --cors "*" -p 5005 --log-file out.log
```

//api out
```
http://localhost:5005/webhooks/rest/webhook
```