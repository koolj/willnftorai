

RES=$(wasmd tx wasm store target/wasm32-unknown-unknown/release/cw721_fixed_price.wasm --from wallet $TXFLAG -y --output json -b block)

INIT='{"purchase_price":{"amount":"100","denom":"upebble"},"transfer_price":{"amount":"999","denom":"upebble"}}'

diff target/wasm32-unknown-unknown/release/cw721_fixed_price.wasm download.wasm


INIT='{"cw20_address":null,"max_tokens":"100","name":"nfts of koolj","owner":"wasm1yyu3z36cx74pmm3yrey5jy0h4vs7d9l26r8378","symbol":"KJNFT","token_code_id":"http://localhost:8080/ipfs/QmYNJDr4dFLzR87HrgcjVcWChSr8BdFRVyADhWoSi4xBiR","unit_price":"12"}'

INIT='{"admin":[],"cw20_addr":""}'

RES=$(wasmd tx wasm store target/wasm32-unknown-unknown/release/cw20_pot.wasm --from wallet $TXFLAG -y --output json -b block)



    "cw20_address",
    "max_tokens",
    "name",
    "owner",
    "symbol",
    "token_code_id",
    "token_uri",
    "unit_price"


INIT='{"purchase_price":{"amount":"100","denom":"upebble"},"transfer_price":{"amount":"999","denom":"upebble"}}'


INIT='{"cw20_address":"wasm1vl4kjl647uunz46tjrvrjv70kwl354n0k9uj23tcrqejsshgvjaqt05jyw", "max_tokens": 1000, "name":"nfts of koolj","owner":"", "symbol":"KJNFT","token_code_id"}'

INIT='{"cw20_address":"wasm1vl4kjl647uunz46tjrvrjv70kwl354n0k9uj23tcrqejsshgvjaqt05jyw","max_tokens":1000,"name":"nfts of koolj","owner":"wasm1q25lcug98xprkln92urher0s7jknxk77j683mr","symbol":"KJNFT","token_code_id":1,"token_uri":"http://localhost:8080/ipfs/QmYNJDr4dFLzR87HrgcjVcWChSr8BdFRVyADhWoSi4xBiR","unit_price":"12"}'


INIT='{"admin":[],"cw20_addr":"wasm1q25lcug98xprkln92urher0s7jknxk77j683mr"}'


wasmd tx wasm instantiate $CODE_ID "$INIT" --from wallet --label "cw20 of koolj" $TXFLAG -y --no-admin
=======================================================

//git projects
git clone https://github.com/CosmWasm/cw-nfts
git clone https://github.com/CosmWasm/cw-plus.git

//build contract
//go to cw-plus/tree/main/contracts/erc20, then build and deploy
//go to cw-nfts/contracts/cw721-fixed-price, then build and deploy
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

//contract id cw_erc20
wasm1vl4kjl647uunz46tjrvrjv70kwl354n0k9uj23tcrqejsshgvjaqt05jyw
//contract id cw_nfts
wasm13llryqhs3nj8dvyva7xlf2ar2m09je2jf5mpp5jnv7zpa0aspk7qdk9lc8


QRY='{"balance":{"address":"wasm1q25lcug98xprkln92urher0s7jknxk77j683mr"}}'

https://github.com/oraichain/oraiwasm
https://github.com/oraichain/cosmosjs
https://github.com/oraichain/oraicli
orai16dmsyrlcv8qa88hfkavttgg0xms7a6hjk8nrhj
orai1gwhauj6vclhelqlllvc7hxlrc77fmasmctcxtc