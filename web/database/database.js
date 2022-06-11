/*
Created by anhpt@
Jan 18, 2021.
*/
const couchdbUrl = "https://admin:123@localhost:5984";
const nano = require('nano')(couchdbUrl);
const dblog = nano.use('nftlog');
const dbexp = nano.use('nftexp');
const dbu = nano.use('nftu');
const dbnftasset = nano.use('nftasset');

module.exports = {
    dbnftasset,dblog,dbu,dbexp
}
