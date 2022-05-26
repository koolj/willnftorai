# build some blockchain contracts: cw_erc20, cw721, compile & deploy to OraiChain testnet
```
//accounts address
orai16dmsyrlcv8qa88hfkavttgg0xms7a6hjk8nrhj

//build contract
//git https://github.com/oraichain/oraiwasm
//go to oraiwasm/package/plus/ow20, then build and deploy
//go to oraiwasm/package/plus/oraichain_nft, then build and deploy
//on vscode, install extension cosmwasm-ide, then update
sudo apt install binaryen -y
cargo install sccach
sudo chmod +x optimize.sh
//add .env where states the seed of your OraiChain account
//then build contracts on vscode, then deploy to testnet.scan.orai.io
//then check, account
https://testnet.scan.orai.io/account/orai16dmsyrlcv8qa88hfkavttgg0xms7a6hjk8nrhj

//then check, ow20 contract
https://testnet.scan.orai.io/smart-contract/orai1gwhauj6vclhelqlllvc7hxlrc77fmasmctcxtc
//then check, ow721 nft contract
https://testnet.scan.orai.io/smart-contract/orai1xesxn88e7uus008gsn6se379937h0dfcq2xaz3
```
