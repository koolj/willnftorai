# willnftorai
As a webbased dApp, WillNFT running on OraiChain (testnet.scan.orai.io), users here can create NFT digital assets (based on IPFS, cw721) with a self-distinguishing mechanism for digital assets (text, images, audio) to ensure: uniqueness, ownership, and transferability. Users can buy, sell, exchange NFT digital assets with cryptos or via Momo vnd.

## problem
OraiChain or other blockchain networks' audience/fans could not find suitable way to unique and make copyright owner for that uniqueness of their NFT data  (images, audio/sound, text).

## solution
A cluster system to unique the data (images, audio/sound, text) before NFT engineering to OraiChain blockchain network (or any other blockchain network)

# main functions
## mint a nft, check nft file data (image/text/audio) is unique

1. User must have OraiChain wallet & account, pls register https://testnet.scan.orai.io/wallet/
2. User must authen via firebase (with Google email)
3. Do mint nft with data of audio/text/image files. This phase, system support ~2mb  audio/text/image files.
4. Then system will validate nft data is valid and unique
    - System normalizes data to be in RULES via: validate sound/audio text extraction/text/doc with rasa nlp (with [vn_spacy lib](https://gitlab.com/trungtv/vi_spacy)); validate image/images from videos with model (like [picpurify.com](https://picpurify.com)) via yolov5
    - Define text/doc uniqueness via: nearest distance from extracted chars/phrases features
    - Define audio/audio from video/sound uniqueness via: nearest distance from extracted spectral centroid features of audio with [librosa](https://librosa.org/doc/latest/index.html) library
    - Define image/images from video uniqueness via: smallest Euclidean [chisquare](https://en.wikipedia.org/wiki/Chi-squared_distribution) distance from extracted feature 128-bin color histogram of 5 regions of image
5. Next, system extends to support:
    - Support image file (.jpg, .png) from 2mb to 50mb
    - Support audio, sound, video file (.mp3, .mp4) from 2mb to 10gb
    - Support text, doc file (.txt, .doc) from 2mb to 20mb
    - Support unique detect model to 100k to 1 millions classic & famous items: literature, poem, paintings, personal & sightseeing identical pictures, movies, media art, music masterpieces, audio tracks...etc.
    - Support NFT auction play scene with some chosen audiences

![Design finding uniqueness](https://github.com/koolj/willnftorai/blob/main/web/web/img/uq.png?raw=true)


## transfer a nft

1. User views a nft
2. Add a price
3. Do transfer function
    - User should have wallet and address (Oraichain/ [Oraichain testnet](https://testnet.scan.orai.io/) or any other blockchains related)
    - User should have gas to pay fee transaction: ~10 or 1000 orai

![Design flows](https://github.com/koolj/willnftorai/blob/main/web/web/img/flow.png?raw=true)


## view
Build then access dApp to view and create, buy, sell NFTs

After building dapp & components, access dapp via
```
http://localhost:8077/nft/
```
Access OraiChain testnet to view transactions
```
//account
https://testnet.scan.orai.io/account/orai16dmsyrlcv8qa88hfkavttgg0xms7a6hjk8nrhj

//ow20
https://testnet.scan.orai.io/smart-contract/orai1gwhauj6vclhelqlllvc7hxlrc77fmasmctcxtc

//ow721 nft contract
https://testnet.scan.orai.io/smart-contract/orai1xesxn88e7uus008gsn6se379937h0dfcq2xaz3

//do auction
https://testnet.scan.orai.io/smart-contract/orai1nym892tcuysqkd5xus3wzmgu9rtewvkja2v5sc

//with local ipfs nft data
http://localhost:8080/ipfs/QmXqWhpF4oz9wqKLWRjMsrnxdDecdzKGj7gSEqTyRVByVY
```

# architecture
![Design Architecture](https://github.com/koolj/willnftorai/blob/main/web/web/img/art.png?raw=true)

```
- Frontend: html + bootstrap + cosmosjs
- Backend: nodejs + couchdb, port 8077
- Authentication: Google firebase
- Interact with blockchain: OraiChain (testnet)
- IPFS: nft data storage, port 8080
- API for AI bot validates image nft: elastichsearch, yolo, pytorch + flask, port 5000, [picpurify.com](https://picpurify.com) + api analyse v1.1
- API for AI bot validates text nft: elastichsearch, rasa, bart simpletransformer, python + flask, port 5001 & 5005
- API for AI bot validates audio/sound nft: elastichsearch, cnn, python + flask, port 5002
```

# prepare before build
### create firebase account with your project, and do authentication with sms and Google email
```
//follow, read and install
https://console.firebase.google.com/
```
### setup docker & docker compose that adapts with  your OS
```
//follow, read and install, docker-conpose should be >=1.26
https://docs.docker.com/compose/gettingstarted/

```
### get new OraiChain testnet account (if you dont have), setup go, cosmwasm, wasmd, vscode, cosmwasm-ide
```
//register oraichain testnet account
https://testnet.scan.orai.io/

//get some airdrop orai coin for testing
https://testnet-faucet.web.app/

//ex, my accounts address
orai16dmsyrlcv8qa88hfkavttgg0xms7a6hjk8nrhj

//install Rust, vscode, cosmwasm, wasmd, go
https://www.rust-lang.org/tools/install
https://code.visualstudio.com/download
https://docs.cosmwasm.com/docs/1.0/getting-started/installation 
https://go.dev/doc/install

//set $HOME/go/bin to PATH
```
### get html and bootstrap 4 tempalte, and cosmosjs library, to build frontend
```
//follow https://getbootstrap.com/docs/5.0/getting-started/download
//follow https://github.com/oraichain/cosmosjs 
//apply some sample scripts for contract interactions: https://github.com/oraichain/oraicli/tree/master/src/cmd/wasm/cmd
```
### run docker couchdb, create some tables
```
sudo docker run -d --name couchdb -p 5984:5984 -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=123 couchdb

//then create dbs: nftexp, nftu, nftasset, nftlog
```
### run docker redis
```
sudo docker run --name myredis -d -p 6379:6379 redis redis-server --requirepass "abcxyz123"
```
### get api and payment via Momo wallet
```
//this will be implemented next phase
//view and create organization test api payment via Momo
https://developers.momo.vn/v3/docs/payment/api/wallet/onetime

```
### run docker elasticsearch
```
//upgrade docker-compose to v 1.26
//git clone & and run docker
git clone https://github.com/deviantony/docker-elk 

//set xpack.security.enabled to FALSE on elasticsearch/config/elasticsearch.yml
cluster.name: "docker-cluster"
cluster.routing.allocation.disk.threshold_enabled: false
network.host: 0.0.0.0
xpack.license.self_generated.type: trial
xpack.security.enabled: false
xpack.monitoring.collection.enabled: false
http.host: 0.0.0.0
http.cors.enabled: true
http.cors.allow-origin: /.*/
http.cors.allow-headers: X-Requested-With,Content-Type,Content-Length,Authorization

//up run docker
docker-compose up -d elasticsearch kibana

//on elasticsearch, create index of "nft"

```

### run docker ipfs, send some image/text/audio files, get link
```
//run docker with 3 ipfs clusters
git clone  https://github.com/ipfs/ipfs-cluster 
cd <folder>
//open port 8080 gateway, and 5001 api on docker-compose.yml
docker-compose up -d

//install ipfs cli
wget https://dist.ipfs.io/ipfs-cluster-ctl/v1.0.0-rc4/ipfs-cluster-ctl_v1.0.0-rc4_linux-amd64.tar.gz --no-check-certificate
//cd to use
tar xvzf ipfs-cluster-ctl_v1.0.0-rc4_linux-amd64.tar.gz
cd ipfs-cluster-ctl

//add a file to ipfs cluster, with your local file of '/home/.../vd1.jpg'
./ipfs-cluster-ctl add '/home/../vd1.jpg'
//result will be: QmXqWhpF4oz9wqKLWRjMsrnxdDecdzKGj7gSEqTyRVByVY

//view added file status
./ipfs-cluster-ctl peers ls

//view file via gateway
http://localhost:8080/ipfs/QmXqWhpF4oz9wqKLWRjMsrnxdDecdzKGj7gSEqTyRVByVY

```
### setup api detect unique image
```
//view readme
```
### setup api detect unique text
```
//view readme
```
### setup api detect unique sound
```
//view readme
```

# build 
### build frontend
```
cd <git folder>/web
npm i
npm start

//ports prepare
8077/nft for frontend
5984 for couchdb
6379 for redis
5005 for rasa
5002 for sound compare
5000 for image compare
5003 for image RULE
8080 for ipfs nft url
5001 for ipfs api
9200 for elasticsearch

//after building dapp & components, access dapp via
http://localhost:8077/nft/
```
### build some blockchain contracts: cw_erc20, cw721, compile & deploy to OraiChain testnet
```
//build contract
//git https://github.com/oraichain/oraiwasm
//add .env where states the seed of your OraiChain account
//on vscode, install extension cosmwasm-ide, then update
sudo apt install binaryen -y
cargo install sccach
sudo chmod +x optimize.sh
//go to oraichain/oraiwasm, open with cosmwasm-ide

//go to oraiwasm/package/plus/ow20, then build with cosmwasm-ide and deploy
//go to oraiwasm/package/plus/oraichain_nft, then build with cosmwasm-ide and deploy
//add .env where states the seed of your OraiChain account
//then build contracts on vscode, then with cosmwasm-ide deploy to testnet.scan.orai.io

//then check, account
https://testnet.scan.orai.io/account/orai16dmsyrlcv8qa88hfkavttgg0xms7a6hjk8nrhj

//then check, ow20 contract
https://testnet.scan.orai.io/smart-contract/orai1gwhauj6vclhelqlllvc7hxlrc77fmasmctcxtc
//then check, ow721 nft contract
https://testnet.scan.orai.io/smart-contract/orai1xesxn88e7uus008gsn6se379937h0dfcq2xaz3
```


# document intro to Hakathon Oraichain 2022 contest
[Link here](https://drive.google.com/file/d/1tf8QPI0NKZU7gPTheyKE_cvhrZMVMXXV/view?usp=sharing)


# video clip intro
[Link here](https://drive.google.com/drive/folders/1qVdXkSDOQFMaeciy1Befm9Is83dGOJs4?usp=sharing)

# the team
[BookWorm](https://drive.google.com/file/d/1R-5JAnI37gZPZRZZaMh353DFzJt__p4V/view?usp=sharing)

# other projects from BookWorm
[Other project demos](https://dathoc.net/demo)