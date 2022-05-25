# willnftorai
As a webbased dApp, WillNFT running on OraiChain (CliffNet testnet), users here can create NFT digital assets (based on IPFS, cw721) with a self-distinguishing mechanism for digital assets (text, images, audio) to ensure: uniqueness, ownership, and transferability. Users can buy, sell, exchange NFT digital assets with cryptos or Vietnamese dong.

# main functions
## min a nft
## check nft file data (image/text/audio) is unique
## transfer a nft
## view
Build then access dApp to view and create, buy, sell NFTs
```
//After building dapp & components, access dapp via
http://localhost:8077/nft/
```
Access CliffNet to view transactions
```
https://block-explorer.cliffnet.cosmwasm.com/
```

# architecture
```
- Frontend: html + bootstrap + cosmosjs
- Backend: nodejs + couchdb, port 8077
- Authentication: Google firebase
- Interact with blockchain: OraiChain (CliffNet testnet)
- IPFS: nft data storage, port 8080
- API for AI bot validates image nft: elastichsearch, yolo, pytorch + flask, port 5000
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
//follow https://github.com/cosmostation/cosmosjs
```
### run docker couchdb, create dbs
```
sudo docker run -d --name couchdb -p 5984:5984 -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=123 couchdb

//then creat 3 db: nftlog, nftu, nftasset
```
### run docker elasticsearch
```
//git clone & and run docker
//set xpack.security.enabled to FALSE on elasticsearch/config/elasticsearch.yml
git clone https://github.com/deviantony/docker-elk 
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
<tbd>
```
### setup api detect text
```
<tbd>
```
### setup api detect sound
```
<tbd>
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
### build some blockchain contracts: cw_erc20, cw721, comnpile & deploy to CliffNet
```
//accounts address
wasm1q25lcug98xprkln92urher0s7jknxk77j683mr

//build contract
//go to contracts/erc20, then build and deploy
//go to contracts/cw721-fixed-price, then build and deploy
RUSTFLAGS='-C link-arg=-s' cargo wasm

//deploy CW_ERC20 to CliffNet
RES=$(wasmd tx wasm store target/wasm32-unknown-unknown/release/cw_erc20.wasm --from wallet $TXFLAG -y --output json -b block)
CODE_ID=$(echo $RES | jq -r '.logs[0].events[-1].attributes[0].value')

//deploy CW_NFT to CliffNet
RES=$(wasmd tx wasm store target/wasm32-unknown-unknown/release/cw721_fixed_price.wasm --from wallet $TXFLAG -y --output json -b block)
CODE_ID=$(echo $RES | jq -r '.logs[0].events[-1].attributes[0].value')


//init
INIT='{"decimals":17,"initial_balances":[{"address":"wasm1q25lcug98xprkln92urher0s7jknxk77j683mr","amount":"100000000000000000"}],"name":"WillNFT","symbol":"WNFT"}'
wasmd tx wasm instantiate $CODE_ID "$INIT" --from wallet --label "erc20 of koolj" $TXFLAG -y  --no-admin

INIT='{"cw20_address":"wasm1vl4kjl647uunz46tjrvrjv70kwl354n0k9uj23tcrqejsshgvjaqt05jyw","max_tokens":1000,"name":"nfts of koolj","owner":"wasm1q25lcug98xprkln92urher0s7jknxk77j683mr","symbol":"KJNFT","token_code_id":1,"token_uri":"http://localhost:8080/ipfs/QmYNJDr4dFLzR87HrgcjVcWChSr8BdFRVyADhWoSi4xBiR","unit_price":"12"}'
wasmd tx wasm instantiate $CODE_ID "$INIT" --from wallet --label "nfts of koolj" $TXFLAG -y  --no-admin

//check contract status
CONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')
echo $CONTRACT
```
# get contract addresses
```
//check via https://block-explorer.cliffnet.cosmwasm.com
//contract address cw_erc20
wasm1vl4kjl647uunz46tjrvrjv70kwl354n0k9uj23tcrqejsshgvjaqt05jyw
//contract address cw721
wasm13llryqhs3nj8dvyva7xlf2ar2m09je2jf5mpp5jnv7zpa0aspk7qdk9lc8
```

# document intro to Hakathon Orai 2022
https://drive.google.com/file/d/1tf8QPI0NKZU7gPTheyKE_cvhrZMVMXXV/view?usp=sharing

# video clip intro
https://drive.google.com/drive/folders/1qVdXkSDOQFMaeciy1Befm9Is83dGOJs4?usp=sharing 
