
# build frontend
```
cd <git folder>/web
npm i
npm start

//After building dapp & components, access dapp via
http://localhost:8077/nft/
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
### get api and payment via Momo wallet
```
//view and create organization test api payment via Momo
https://developers.momo.vn/v3/docs/payment/api/wallet/onetime

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