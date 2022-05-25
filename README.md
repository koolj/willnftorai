# willnftorai
As a webbased dApp, WillNFT running on OraiChain (CliffNet testnet), users here can create NFT digital assets (based on IPFS, cw721) with a self-distinguishing mechanism for digital assets (text, images, audio) to ensure: uniqueness, ownership, and transferability. Users can buy, sell, exchange NFT digital assets with cryptos or Vietnamese dong.

# main functions
## mint a nft
```
//authen via firebase (with gmail)
//do mint nft with data of audio/text/image
//then system will validate nft data is valid and unique
```
## check nft file data (image/text/audio) is unique
```
//view a nft
//add a price
//do transfer function
```
## transfer a nft
```
//add
```
## view
Build then access dApp to view and create, buy, sell NFTs
```
//After building dapp & components, access dapp via
http://localhost:8077/nft/
```
Access OraiChain testnet to view transactions
```
//account
https://testnet.scan.orai.io/account/orai16dmsyrlcv8qa88hfkavttgg0xms7a6hjk8nrhj

//ow20
https://testnet.scan.orai.io/smart-contract/orai1gwhauj6vclhelqlllvc7hxlrc77fmasmctcxtc

//ow712 nft contract
https://testnet.scan.orai.io/smart-contract/orai1xesxn88e7uus008gsn6se379937h0dfcq2xaz3
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
- API for AI bot validates image nft: elastichsearch, yolo, pytorch + flask, port 5000, picpurify.com + api analyse v1.1
- API for AI bot validates text nft: elastichsearch, rasa, bart simpletransformer, python + flask, port 5001
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
//follow, read and install
https://docs.docker.com/compose/gettingstarted/

```
### get html and bootstrap 4 tempalte, and cosmosjs library, to build frontend
```
//follow https://getbootstrap.com/docs/5.0/getting-started/download
//follow https://github.com/oraichain/cosmosjs 
```
### run docker couchdb, create dbs
```
sudo docker run -d --name couchdb -p 5984:5984 -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=123 couchdb

//then creat 3 db: nftlog, nftu, nftasset
```
### run docker elasticsearch
```
//git clone & and run docker
git clone https://github.com/deviantony/docker-elk 

//set xpack.security.enabled to FALSE on elasticsearch/config/elasticsearch.yml
cluster.name: "docker-cluster"
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
### setup api detect image
```
//view readme
```
### setup api detect text
```
//view readme
```
### setup api detect sound
```
//view readme
```
# build 
### build frontend
```
cd <git folder>/web
npm i
npm start

//After building dapp & components, access dapp via
http://localhost:8077/nft/
```
### build some blockchain contracts: cw_erc20, cw721, comnpile & deploy to OraiChainet
```
//accounts address
orai16dmsyrlcv8qa88hfkavttgg0xms7a6hjk8nrhj

//build contract
//go to contracts/erc20, then build and deploy
//go to contracts/cw721-fixed-price, then build and deploy
//then check, account
https://testnet.scan.orai.io/account/orai16dmsyrlcv8qa88hfkavttgg0xms7a6hjk8nrhj

//then check, ow20 contract
https://testnet.scan.orai.io/smart-contract/orai1gwhauj6vclhelqlllvc7hxlrc77fmasmctcxtc
//then check, ow712 nft contract
https://testnet.scan.orai.io/smart-contract/orai1xesxn88e7uus008gsn6se379937h0dfcq2xaz3
```

# document intro to Hakathon Orai 2022
https://drive.google.com/file/d/1tf8QPI0NKZU7gPTheyKE_cvhrZMVMXXV/view?usp=sharing

# video clip intro
https://drive.google.com/drive/folders/1qVdXkSDOQFMaeciy1Befm9Is83dGOJs4?usp=sharing 
