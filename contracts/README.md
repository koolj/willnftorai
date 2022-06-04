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
```

# build some blockchain contracts: cw_erc20, cw721, compile & deploy to OraiChain testnet
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

//do auction
https://testnet.scan.orai.io/smart-contract/orai1nym892tcuysqkd5xus3wzmgu9rtewvkja2v5sc
```
