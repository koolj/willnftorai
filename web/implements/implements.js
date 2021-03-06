
/*
Created by anhpt@
Jan 18, 2021.
*/

const esUrl = "http://localhost:9200";
const ipfsApiUrl = "http://localhost:5001";
const ipfsUrl = "http://localhost:8080";
const couchdbUrl = "http://admin:123@localhost:5984";
const rasaUrl = "http://localhost:5005";
const checkLOCURL= "http://localhost:5003/detectimg";
const checksoundURL = "http://localhost:5002/predict";

const {
	dbnftasset,dblog,dbu,dbexp,
	} = require('../database/database')

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const dateFormat = require('dateformat')
const util = require('util');


const readFile = util.promisify(fs.readFile);
function getStuff(data) {
	return readFile('/../'+data+'_detected.jpg', {encoding: 'base64'});
}
function readIMG(data) {
	return readFile(data, {encoding: 'base64'});
}

const FileType = require('file-type');
const readChunk = require('read-chunk');
const { off } = require('process');


//check google login
var valgoogle= async (userid,googletoken,role,appid,idobject,fb) => {
    try {
		//search check userid
		currentGtoken = googletoken;
		currentUsername = userid;

		//calculate mem use
		var usedmem = process.memoryUsage().heapUsed / 1024 / 1024;
		var memtotal = Math.round(usedmem * 100) / 100;

		//check tok existed
		var existedTok = '';
		var exprev = '';

		//nft app
		if(appid == "2"){
			await dblog.insert({ip:idobject.ip, userid:userid,typeofaction: idobject.act, sysmem:memtotal,timecreated:dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")}).then(async(body) => {});
			var rev='';

			//check user in DB
			// if user existed
			return dbu.get(userid).then(async(body5) => {
				currentrule = role;
			
				//find userid, replace token
				const q = {
					selector: {
						userid: { "$eq": userid}
					},
					limit:10
				};
				exprev = '';
				return dbexp.get(googletoken).then(async(body6) => {
					return {result: '0',message:currentrule};
				}).catch(async(err) => {
					return await dbexp.find(q).then(async(body2) => {
						if(body2.docs.length >0){
							exprev = body2.docs[0]._rev;
							await dbexp.destroy(body2.docs[0]._id,exprev).then(async(body7) => {})
							return exprev;

						}else{
							return exprev
						}
					}).then(async(exprev) => {
						if(exprev != "")
							return await dbexp.insert({_id:googletoken,rule:currentrule,userid:userid,stat:1,timecreated:dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")}).then(async(body6,err) => {
								return {result: '0',message:currentrule}						
							})
						else return {result: '1',message:"User not existed!"};	
					})
				})
			//user not existed	
			}).catch(async(err) => {				
				return dbu.insert({_id: userid, rule:role, timecreated:dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")}).then(async(body3) => {
					return await dbexp.insert({_id:googletoken, rule:role,userid:userid, stat:1,timecreated:dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")}).then(async(body4) => {
						return {result: '0',message:role}
					});
				})
			})

		}
    } catch(error) {
		return {result: '1',message:error.message}
        //throw error
    }
}




//add exp token
const addtokexp = async (ActUserjsonObject) => {
	try {
			return dbexp.insert({_id: ActUserjsonObject.token,email:ActUserjsonObject.id, stat:ActUserjsonObject.stat}).then((body) => {
				//console.log("Done logging-----------" +idobject.id+" --- added!")
				return ("New tok from --- "+JSON.stringify(ActUserjsonObject)+" --- added!")
			})
			//return rep
	}catch(error) {
			return error.message
	}
}
//check token YES expired
var checkYESTokExp= async (token) => {
    try {
		return dbexp.get(token).then((body) => {
			let currentstat = body.stat;
			//console.log(currentstat);
			if(currentstat == 1){
				return false
			} else {
				return true
			}
		}).catch((err) => {
			return true
		})

    } catch(error) {
        throw error
    }
}

//check user existed
var checkUser = async (email) => {
    try {
		return dbu.get(email).then((body) => {
			return true
		}).catch((err) => {
			return false
		})
    } catch(error) {
        throw error
    }
}

//to user from token
var toUserfromTok = async (token) => {
    try {
		return dbexp.get(token).then(async(body) => {
			let okUser = await checkUser(body.userid);
			if(okUser)
				return body.userid
			else
				return false
		}).catch((err) => {
			return false
		})
    } catch(error) {
        throw error
    }
}
//get current user role
var checkRole = async (email) => {
    try {
		return dbu.get(email).then((body) => {
			return body.rule
		}).catch((err) => {
			return dbu.get(email).then((body) => {
				return body.rule
			}).catch((err) => {
				return false
			})
		})
    } catch(error) {
        throw error
    }
}
var exptok= async (tokenkey,appid) => {
    try {
		return await dbexp.get(tokenkey).then(async(body) => {
			var cRecID = body._id;
			var cRev = body._rev;
			var cRule = body.rule;
			var cState = body.status;
			return await dbexp.insert({_id:cRecID, _rev:cRev,rule:cRule,status:0,timecreated:dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")}).then((body) => {
				return {result: '0',message:"B???n ???? ????ng xu???t. C??m ??n ???? d??ng ???ng d???ng!"}
			})	
				
		}).catch((err) => {
			return false
		})
    } catch(error) {
        throw error
    }
}

//check token live
var checkTok = async (token) => {
    try {
		return await dbexp.get(token).then(async(body) => {
			var cState = body.status;
			if(cState == 1)
				return true
			else
				return false	
		}).catch((err) => {
			return false
		})	
    } catch(error) {
        throw error
	}
}	


var searchES= async (fe1,val1,fe2,val2,fe3,val3) => {
    try {
		//console.log(token)
		//let tokstat = await checkTok(token)
		//console.log(tokstat)
		//if(tokstat){
			//var spformat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
			//if ((spformat.test(val1) || spformat.test(val2) || spformat.test(val3))){
				//return {result: '1',message: 'K?? t??? t??m ki???m c???n l?? ch??? ho???c s???, kh??ng bao g???m k?? t??? ?????c bi???t.'}

			//}else 
			if(val1==""){
				return {result: '1',message: 'C???n c?? keyword ????? t??m ki???m.'}
			}
			
			else{
				if(fe1 == "" && val1 != "" && val2 == ""){
					return await axios({url:esUrl + '/testdb/_search?pretty',
					method: 'GET',
					data:{
						"query": {
						"query_string": {
							"fields": [ "rawdata", "segmentdata" ],
							"query": "(" + val1 +")"
						}
						}
					}	
					})
					.then(async(resp1) => {
						return {result: '0',message: resp1.data}
						
					});
				}
				else if(fe1 == "" && val1 != "" && val2 != ""){

					return axios({url:esUrl + '/testdb/_search?pretty',
					method: 'GET',
					data:{
						"query": {
						"query_string": {
							"fields": [ "rawdata" ],
							"query":  val1 +" AND " + val2 
						}
						}
					}	
					})
					.then(async(resp1) => {
						return {result: '0',message: resp1.data}
						
					});

				}	
				else if(fe1 == "" && val1 != "" && val2 != "" && val3 != ""){
					return axios({url:esUrl + '/testdb/_search?pretty',
					method: 'GET',
					data:{
						"query": {
						"query_string": {
							"fields": [ "rawdata", "segmentdata" ],
							"query": "\"("+val1 + " OR " + val2+ " OR " + val3+")\"",
						}
						}
					}	
					})
					.then(async(resp1) => {
						return {result: '0',message: resp1.data}
						
					});
				}
				else if(fe1 != "" && val1 != "" && val2 != "" && fe2 != ""){

					return axios({url:esUrl + '/testdb/_search?pretty',
					method: 'GET',
					data:{
						"query": {
						"query_string": {
							"fields": "[ \""+fe1+"\", \""+fe2+"\" ]",
							"query": "\"("+val1 + " AND " + val2 + ")\""
						}
						}
					}	
					})
					.then(async(resp1) => {
						return {result: '0',message: resp1.data}
						
					});
				}

				
				else
					return {result: '1',message: 'K?? t??? t??m ki???m c???n l?? ch??? ho???c s???, kh??ng bao g???m k?? t??? ?????c bi???t.'}
			}	

		//}else
			//return {result: '1',message:'B???n kh??ng ????? quy???n ????? s??? d???ng ch???c n??ng n??y!'}
    } catch(error) {
        throw error
    }
}


math = require("mathjs")
var toesnft= async (db,rawdata,type,owner,b64,token,idobject) => {
    try {
		var searchURL = esUrl + "/nft/_doc?pretty";
		const headers = {}
		var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
		var texthash = '';
		for(i=0; i < 20; i++ )
			texthash += charset.charAt(Math.floor(Math.random() * charset.length));
		
		//console.log(b64);
		//split data
		sttGroup = "";
		splitRemainer = "";
		b64 = b64.toString();
		
		
		var ipfsFileUrl = "";

		console.log("--------------TO ES---------------");
				return new Promise((resolve, reject) => {
						axiosReq=[];
						sttGroupArr = [];
						if(type == 0 || type ==1) sttGroupArr = b64.match(/.{1,10}/g);
						else sttGroupArr = b64.match(/.{1,550}/g);
			
						//for(i=0; i < sttGroupArr.length; i++ ){
						var i = 0;
						var found = 0;
						let searchESin = setInterval(()=>{
							i++;
							sttGroup = sttGroupArr[i] + " ";
							myObj = {
								"imglink": rawdata,
								"nftid":texthash,
								"rawdata":sttGroup
							};
							request_config = {
								url: searchURL,
								method: "POST",
								headers:headers,
								data: myObj
							};
							axios(request_config).then((resp1) => {
								if(resp1){
									found++;
									console.log("Inserting..." + (i/sttGroupArr.length*100) + " %..");
								}	
							}).catch((error)=>{
								console.log(error.data);
								reject();
							});
							if(i == sttGroupArr.length){
								clearInterval(searchESin);
								resolve(found);
							}
						},5)


				}).then(async(doneRes)=>{
					//console.log(doneRes);
					//to ipfs
					var FormData = require('form-data');
					var fs = require('fs');
					var data = new FormData();
					data.append('path', fs.createReadStream(rawdata));

					var configIPFS = {
						method: 'post',
						url: ipfsApiUrl+ '/api/v0/add',
						headers: { 
							...data.getHeaders()
						},
						data : data
					};

					return await axios(configIPFS)
						.then(async(response)=>{
						//console.log(JSON.stringify(response.data));
						ipfsFileUrl = ipfsUrl + "/ipfs/" + response.data.Hash;
						
						
						//to blockchain
						var createblockqryres = "12"; //await createblockqry(token,blockobj,idobject)

						//to db
						//console.log("Block hash created: "+createblockqryres);
						if(createblockqryres.length > 1){
							//console.log("----- go here " + type);
							return dbnftasset.insert({_id: texthash, url:ipfsFileUrl, owner: owner, view:0,price:50000, type:type,blockhash:createblockqryres,imglink:rawdata,timecreated:dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")}).then(async(body2) => {
								//console.log(body2);
								let resFinal = {result: '0',message: "T???o NFT #"+ createblockqryres +"...# th??nh c??ng!",newid:body2.id,txt:createblockqryres};
								//console.log("-------------------- here 8 + " + resFinal);	
								return 	resFinal;
							}).catch((error)=> {
								return {result: '1',message: error.data}
							});

						}else return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}


					})
					.catch((error)=>{
						console.log("----IPFS--" + JSON.stringify(error.data));
						return {result: '1',message: error}
					});

				}).catch((error)=>{
					console.log(error);
					return {result: '1',message: error}
				});


    } catch(error) {
		return {result: '1',message: `Error: ${error}`}
    }
}

var searchesnft= async (db,val1,token,type) => {
    try {
		var searchURL = esUrl + "/nft/_search?pretty";
		const headers = {};
		var strArrLength = 0;
		var foundId = "";
		var found = 0;

		var strArr = 0;
		console.log("--------------CHECK & SEARCH ES---------------");
		return new Promise((resolve, reject) => {
			console.log("Checking...");
			axiosReq=[];
			sttGroupArr = [];

			if(type == 0 || type ==1) sttGroupArr = val1.match(/.{1,10}/g);
			else sttGroupArr = val1.match(/.{1,550}/g);

			strArrLength = sttGroupArr.length;
			//console.log(sttGroupArr);
			//for(i=0; i < sttGroupArr.length; i++ ){
			var i = 0;			
			
			searchESin = setInterval(()=>{
				i++;
				sttGroup = sttGroupArr[i] + " ";
				keysearch ={
					"query": {
						"query_string": {
						  "query": sttGroup,
						  "default_field": "rawdata"
						}
					  }
				};
				request_config = {
					url:searchURL,
					method: 'GET',
					headers:headers,
					data:keysearch
				};
				axios(request_config).then((resp1) => {
					console.log(resp1.data);
					//console.log("Checking..." + i + " %..");
					if(resp1.data.hits.hits.length > 0){
						found++;
						foundId = resp1.data.hits.hits[0]._source.nftid;
						rate = (found/50)*100;
						//console.log("Checking..." + rate + "%..");
						
						//if(found > 50){clearInterval(searchESin);//resolve(found);} 
					}
				})
				if(i == sttGroupArr.length){
					clearInterval(searchESin);
					resolve(found);
					//return {result: '0',message:"", stat: false}
				}
			},12)

		}).then(async(foundSame)=>{
			console.log(foundSame);
			console.log(strArrLength);
			console.log(foundId);
			let sameChances = Math.round(foundSame/strArrLength * 100);
			console.log(sameChances + " ... %");

			if(sameChances < 49) return {result: '0',message:"", stat: true}
			else return {result: '1',message: 'T??m th???y NFT tr??ng l???p, t??? l??? tr??ng kh???p >'+ sameChances +' %!\n----------------\n'+foundId+'\n----------------\nH??y ch???n m???t NFT kh??c!', stat: false, foundId: foundId}
		}).catch((error)=>{
			console.log(error);
			return {result: '1',message: error, stat: false}
		});
    } catch(error) {
        return {result: '1',message: `Error: ${error}`}
    }
}

var searchesnftid= async (id,idobject) => {
    try {
		//console.log(token)
		var searchURL = esUrl + "/nft/_search?pretty";
		const headers = {};

		return await axios({url:searchURL,
			method: 'GET',
			headers:headers,
			data:{
				"query": {
				"query_string": {
					"fields": [ "nftid" ],
					"query": "(" + id +")"
				}
				}
			}	
			})
			.then(async(resp1,err) => {
				//console.log(resp1.data.hits.hits);
				console.log(resp1.data.hits.hits[0]._source.rawdata);
				if(err)
					return {result: '1',message: err}
				else	
					if(resp1.data.hits.hits.length > 0)
						return {result: '0',message: resp1.data.hits.hits[0]._source.rawdata}
					else
						return {result: '1',message: "Nothing found!"}	
				
			});

    } catch(error) {
        return {result: '1',message: `Error: ${error}`}
    }
}

const Cosmos = require("@oraichain/cosmosjs").default;
const lcdUrl = "https://testnet-lcd.orai.io";
const chainId = "Oraichain-testnet";
const cosmos = new Cosmos(lcdUrl, chainId);
cosmos.setBech32MainPrefix('orai');

var checkOraichainValid= async (seed) =>{
	//check Oraichain Account
	var mnemoStat = false;
	const mnemonic = seed;
	//account ----- orai16dmsyrlcv8qa88hfkavttgg0xms7a6hjk8nrhj
	//account 2 ----- orai12r3n3njnsqmw65u9agcwagjuff6kjfkhq5u0sd
	//cw721 ----- orai1xesxn88e7uus008gsn6se379937h0dfcq2xaz3
	//cw721 ----- orai1xqx4u4uh4awv2teaw76s6nmrrrpjwdkav0m4jy
	//auction ----- orai1nym892tcuysqkd5xus3wzmgu9rtewvkja2v5sc
	//cw20 ----- orai1gwhauj6vclhelqlllvc7hxlrc77fmasmctcxtc
	console.log("====================== ORAICHAIN ========================");
	var addrOrai= "";
	try{
		addrOrai = cosmos.getAddress(mnemonic)
		console.log(addrOrai);
		mnemoStat = true
		return mnemoStat
	}catch(e){
		return mnemoStat
	} 
}

var newnft= async (db,seed,text,type,b64,token,idobject,chatbot) => {
    try {
		const imghost = path.join(__dirname+"/../_shared/");
		var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
		var texthash = '';
		let rep = '';
		for(i=0; i < 20; i++ )
			texthash += charset.charAt(Math.floor(Math.random() * charset.length));
		//validate token expire
		let oktoken = await checkYESTokExp(token);
		if(!oktoken){
			let okdocter = await toUserfromTok(token);
			//validate user is existed
			if(okdocter){
				let okorair = await checkOraichainValid(seed);
				console.log(okorair);
				if(okorair){

				//console.log("----- go here3");

				chatbot = rasaUrl + "/webhooks/rest/webhook";
				//nft 0
				if(type == 0 ){
					if(text.length >= 8){
						if(text.length < 100){
							if (!(/[`'!@#$%^&'*()_+\-=\[\]{};':'"\\|,.<>\/?'~]/.test(text))) {
								return await validText(text,chatbot)
								.then(async(validTextvar) => {
									if(validTextvar){
										console.log("-------check dup---------------------")
										//console.log(idobject.ip+"----"+text +"-----------" +type);
										return await searchesnft(db,text,token,type)
										.then(async(research) => {
											console.log(research)
											//console.log("----- go here4");
											if(!research.stat){
												
												console.log("-------found duplicated---------------------")
												console.log(research.hit);
												return {result: '0',message: research.message,hit:research.hit,foundid:research.foundId}
											}
											else{
												console.log("-------no duplicated---------------------")
												return new Promise((resolve, reject) => {
													require('fs').writeFile(imghost+texthash+".txt", text, 'utf8', async(err,data,) => {
														//read file content
														filedata = fs.readFileSync(imghost+texthash+".txt", 'utf8',async(err,data2,) => {
															
														});
														resolve(filedata);
													})	
												}).then(async(filedata) => {
													return await toesnft(db,imghost+texthash+".txt",0,okdocter,text,token,idobject)
													.then(async(research2) => {
														//console.log("-------------------- here 81 + " + research2);
														return {result: '0',message: research2.message ,txt:research2.txt}
													})
													.catch((error)=>{ 
														return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}
													})

												})	


												
											}
										})
										.catch((error)=>{ 
											return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}
										})
									}	
									else
										return {result: '1',message: `N???i dung vi ph???m n???i quy m???ng & ph??p lu???t Vi???t Nam, vi ph???m thu???n phong m??? t???c! Vui l??ng ch???n n???i dung kh??c!`}
								})	
								.catch((error)=>{ 
									return {result: '1',message: error}
								})
							}
							else
								return {result: '1',message: `N???i dung kh??ng ???????c ph??p k?? t??? ?????c bi???t!\n`}
						}	
						else
							return {result: '1',message: `D??? li???u qu?? d??i! H??y th??? <50 k?? t???!`}
					}	
					else
						return {result: '1',message: `D??? li???u qu?? ng???n ?????i v???i NFT! H??y th???> 10 k?? t???`}
				}
				//nft 1,2,3
				else if((type == 1) || (type == 2) || (type == 3) || (type == 4)){
					//console.log(idobject.ip+"----"+text.substr(0,35) +"-----------" +type);
					return await searchesnft(db,b64,token,type)
					.then(async(research2) => {
						//console.log(research2)
						
						if(!research2.stat){
							return {result: '1',message: research2.message,hit:research2.hit,foundid:research2.foundId}						}
						else{
							//console.log("=============" + text);
							return await toesnft(db,text,type,okdocter,b64,token,idobject);
						}
					})
				}	
				/*
				//nft 4 
				else if(type == 4){
					let research = await toesnft(db,text,type,okdocter,b64,token,idobject);
					console.log(research);
					return {result: '0'}
				}
				*/
				}else return {result: '1',message: `Ng?????i d??ng OraiChain kh??ng t???n t???i!`}
			}else return {result: '1',message: `Ng?????i d??ng kh??ng t???n t???i!`}
		}else return {result: '1',message: `Phi??n l??m vi???c kh??ng ???????c x??c nh???n.\nB???n c???n ????ng nh???p l???i ????? s??? d???ng!`}
    } catch(error) {
        //return {result: '1',message: `Error: ${error}`}
    }
}
var getnft= async (token,idobject) => {
	try {
		//validate token expire
		let oktoken = await checkYESTokExp(token);
		if(!oktoken){
			let okdocter = await toUserfromTok(token);
			//validate user is existed
			if(okdocter){

				const q = {
					selector: {
					},
					limit:1000000
				};
				return await dbnftasset.find(q).then(async(body) => {
					//console.log(body.docs);
					if(body.docs.length > 0) return {result: '0', message:body.docs}
					//else return  {result: '1', message:'Kh??ng t??m th???y!'}
				})

			}	
			else
				return {result: '1',message: `Ng?????i d??ng kh??ng t???n t???i!`}
		}
		else
			return {result: '1',message: `Phi??n l??m vi???c kh??ng ???????c x??c nh???n.\nB???n c???n ????ng nh???p l???i ????? s??? d???ng!`}
    } catch(error) {
		return {result: '1',message: `Error: ${error}`}
    }
}
var get3nft= async (token,idobject) => {
	try {
		//validate token expire
		let oktoken = await checkYESTokExp(token);
		if(!oktoken){
			let okdocter = await toUserfromTok(token);
			//validate user is existed
			if(okdocter){

				//
				return await axios({url:couchdbUrl + "/nftasset/_all_docs?limit=3&include_docs=true&descending=true",
				method: 'GET',
				data:{}	
				})
				.then(async(resp1,err) => {
					//console.log(resp1.data);
					if(err)
						return {result: '1',message: err}
					else	
						if(resp1.data.rows.length > 0)
							return {result: '0', message:resp1.data.rows}
						//else
							//return {result: '1',message: "Kh??ng t??m th???y!"}	
					
				});

			}	
			else
				return {result: '1',message: `Ng?????i d??ng kh??ng t???n t???i!`}
		}
		else
			return {result: '1',message: `Phi??n kh??ng h???p l???!`}
    } catch(error) {
		return {result: '1',message: `Error: ${error}`}
    }
}
var getnftid= async (nftid,token,idobject) => {
	try {
		
		//validate token expire
		let oktoken = await checkYESTokExp(token);
		if(!oktoken){
			//let okdocter = await toUserfromTok(token);
			//validate user is existed
			//if(okdocter){
/*
				const q = {
					selector: {
						_id: { "$eq": nftid},
					},
					limit:1000000
				};
*/				
				return await dbnftasset.get(nftid).then(async(body) => {
					
					//console.log(body);
					if(body) {
						return {result: '0', message:body}
						/*
						//update view
						var newview =body.docs[0].view + 1
						await dbnftasset.insert({_id: body.docs[0]._id, _rev:body.docs[0]._rev,url:body.docs[0].url, owner: body.docs[0].owner, view:newview,price:body.docs[0].price, type:body.docs[0].type,timecreated:dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")}).then((body) => {});
						//nft 0
						if(body.docs[0].type == 0){
							//search ES with id
							let searchesidvar = await searchesnftid(body.docs[0].url);
							return {result: '0', message:searchesidvar.message}
						}	
						*/
					}
				}).catch((error)=>{ 
					return {result: '1',message: "D??? li???u kh??ng t???n t???i!"}
				})

			//}	
			//else
				//return {result: '1',message: `Ng?????i d??ng kh??ng t???n t???i!`}
		}
		else
			return {result: '1',message: `Phi??n l??m vi???c kh??ng ???????c x??c nh???n.\nB???n c???n ????ng nh???p l???i ????? s??? d???ng!`}
    } catch(error) {
		return {result: '1',message: `Error: ${error}`}
    }
}
var checkLOCimg= async (imgid) => {
	//const checkLOCURL="http://localhost:5003/detectimg";
	const imghost = path.join(__dirname+"/../_shared/");
	var base64Data = imgid.replace(/^data:image\/jpeg;base64,/, "");
	var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
	var texthash = '';
	let rep = '';
	for(i=0; i < 20; i++ )
		texthash += charset.charAt(Math.floor(Math.random() * charset.length));

	return new Promise((resolve, reject) => {
		require('fs').writeFile(imghost+texthash+".jpg", base64Data, 'base64', async(err,data,) => {
			resolve(imghost+texthash+".mp3");
		})	
	}).then(async(filename)=>{
		//compare sound
		request_config = {
			url:checkLOCURL,
			method: 'POST',
			headers:'',
			data:{filename:filename}
		};
		axios(request_config).then((resp1) => {
			console.log(resp1.data);
		})


	}).catch((error)=>{ 
		return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}
	})	
}
var checkGPimg= async (imgid) => {
	const imghost = path.join(__dirname+"/../_shared/");
	var base64Data = imgid.replace(/^data:image\/jpeg;base64,/, "");
	var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
	var texthash = '';
	let rep = '';
	for(i=0; i < 20; i++ )
		texthash += charset.charAt(Math.floor(Math.random() * charset.length));

	//write file
	let savefile = await require('fs').writeFile(imghost+texthash+".jpg", base64Data, 'base64', async(err,data,) => {})


	//check gore/porn
	const axios = require('axios')
	const fs = require('fs');
	const FormData = require('form-data');
	var picpurifyUrl = 'https://www.picpurify.com/analyse/1.1';
	var imagePath = imghost+texthash+".jpg"

	const form = new FormData();
	form.append('file_image', fs.createReadStream(imagePath));
	form.append('API_KEY', '...rsKgXIMzCZC6');
	form.append('task','porn_moderation,drug_moderation,gore_moderation,weapon_moderation,obscene_gesture_moderation,suggestive_nudity_moderation,hate_sign_moderation');
	form.append('origin_id',"xxxxxxxxx");
	form.append('reference_id',"yyyyyyyy");

	return await axios.post(picpurifyUrl, form, { headers: form.getHeaders() })
	.then(async(response) => {
		console.log(response.data.confidence_score_decision)
		console.log(response.data.final_decision)
		console.log("----check violation, porn... -----------------------")
		var resmark = response.data.confidence_score_decision.toFixed(2);
		if(response.data.final_decision != "OK"){
			console.log("----found violated -----"+resmark*100+"------------------")

			return {result:'1', message: "Ph??t hi???n vi ph???m n???i quy m???ng & ph??p lu???t Vi???t Nam, vi ph???m thu???n phong m??? t???c: "+resmark*100+"%!\nVui l??ng ch???n data kh??c!"}
		}else{
			console.log("----found NO violated -----------------------");
			return {result:'0', message: 'Found NO violated!'};

		}						
	})//check violate 
	.catch((error)=>{ 
		return {result: '1',message: error}
	})
}
var checkGPsound= async (imgid) => {
	const imghost = path.join(__dirname+"/../_shared/");
	
	var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
	var texthash = '';
	let rep = '';
	for(i=0; i < 20; i++ )
		texthash += charset.charAt(Math.floor(Math.random() * charset.length));

	var base64Data = imgid.replace(/^data:audio\/mpeg;base64,/, "");
	//console.log(base64Data.substring(0,56))
	if((base64Data.length < 30) || (base64Data.length > 22000000) || (imgid.indexOf("data:audio/mpeg;base64,") == -1) ){
		return {result:'1', message:"T???p kh??ng h???p l???! H??y ?????m b???o t???p l?? mp3/audio v?? k??ch th?????c <20mb."}
	}
	else{
		return new Promise((resolve, reject) => {
			require('fs').writeFile(imghost+texthash+".mp3", base64Data, 'base64', async(err,data,) => {
				resolve(imghost+texthash+".mp3");
				//console.log(fileid.substr(0,65));
				
			})	
		}).then(async(filename)=>{
			//compare sound
			request_config = {
				url:checksoundURL,
				method: 'POST',
				headers:'',
				data:{filename:filename}
			};
			axios(request_config).then((resp1) => {
				console.log(resp1.data);
				console.log(resp1.data);
			})


		}).catch((error)=>{ 
			return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}
		})	
	}
}
var nftsendimg= async (imgid,seed,token,idobject) => {
    try {
		//validate token expire
		let oktoken = await checkYESTokExp(token);
		if(!oktoken){
			let okdocter = await toUserfromTok(token);
			//validate user is existed
			if(okdocter){
				let okorair = await checkOraichainValid(seed);
				if(okorair){
				console.log("-----new nft image----------------------")
				const imghost = path.join(__dirname+"/../_shared/");
				const imghostshare = imghost; //"/home/kj/Documents/_projects/wormtelehealth/wt_master/_shared/";
				//const imghost = imghostshare;
				var base64Data = imgid.replace(/^data:image\/jpeg;base64,/, "");
				var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
				var texthash = '';
				let rep = '';
				for(i=0; i < 20; i++ )
					texthash += charset.charAt(Math.floor(Math.random() * charset.length));

				var fileerr = '';

				//console.log(base64Data);
				//console.log(base64Data.substring(1,15))
				if((imgid.length < 10000) || (imgid.length > 22000000) ){
					return {result:'1', message:"T???p l?? h??nh ???nh kh??ng h???p l???. ?????nh d???ng ph???i l?? jpg / png, ????? ph??n gi???i 1024, k??ch th?????c <20mb."}
				}
				else{

					//check same image
					
					//write file
					let savefile = await require('fs').writeFile(imghost+texthash+".jpg", base64Data, 'base64', async(err,data,) => {})
								
				
					//console.log("----found no dup  -----------------------")

					//check gore/porn
					const axios = require('axios')
					const fs = require('fs');
					const FormData = require('form-data');
					var picpurifyUrl = 'https://www.picpurify.com/analyse/1.1';
					var imagePath = imghost+texthash+".jpg"
					
					const form = new FormData();
					form.append('file_image', fs.createReadStream(imagePath));
					form.append('API_KEY', '85tZFFbYXewXhleliKXLrsKgXIMzCZC6');
					form.append('task','porn_moderation,drug_moderation,gore_moderation,weapon_moderation,obscene_gesture_moderation,suggestive_nudity_moderation,hate_sign_moderation');
					form.append('origin_id',"xxxxxxxxx");
					form.append('reference_id',"yyyyyyyy");
					
					return await axios.post(picpurifyUrl, form, { headers: form.getHeaders() })
					.then(async(response) => {
						console.log(response.data.confidence_score_decision)
						console.log(response.data.final_decision)
						console.log("----check violation, porn... -----------------------")
						var resmark = response.data.confidence_score_decision.toFixed(2);
						if(response.data.final_decision != "OK"){
							console.log("----found violated -----"+resmark*100+"------------------")

							return {result:'1', message: "Ph??t hi???n vi ph???m n???i quy m???ng & ph??p lu???t Vi???t Nam, vi ph???m thu???n phong m??? t???c: "+resmark*100+"%!\nVui l??ng ch???n data kh??c!"}
						}else{
							console.log("----found NO violated -----------------------");
							//check same image
							return await searchesnft("",base64Data,token,4)
							//console.log(research);
							.then(async(research) => {
								if(!research.stat){
									console.log("----found dup nft img -----------------------");
									console.log(research);
									return {result: '1',message: research.message,foundid: research.foundId}
								}
								else{

									return await toesnft("nftdb","_shared/"+texthash+".jpg",4,okdocter,base64Data,token,idobject)
									.then((response2) => {
										//console.log(response2);
										return response2;
									})
									
								}
							})//search nft
							.catch((error)=>{ 
								return {result: '1',message: error}
							})

						}						
					})//check violate 
					.catch((error)=>{ 
						return {result: '1',message: error}
					})
				}	
			
				}else return {result: '1',message: `Ng?????i d??ng OraiChain kh??ng t???n t???i!`}
			}else return {result: '1',message: `Ng?????i d??ng kh??ng t???n t???i!`}
		}else return {result: '1',message: `Phi??n kh??ng h???p l???!`}
    } catch(error) {
        return {result: '1',message: `Error: ${error}`}
    }
}


var nftfilesend= async (fileid,seed,token, type,idobject) => {
    try {
		//validate token expire
		let oktoken = await checkYESTokExp(token);
		if(!oktoken){
			let okdocter = await toUserfromTok(token);
			//validate user is existed
			if(okdocter){
				let okorair = await checkOraichainValid(seed);
				if(okorair){
				//console.log(fileid)
				const imghost = path.join(__dirname+"/../_shared/");
				const imghostshare = imghost; //"/home/kj/Documents/_projects/wormtelehealth/wt_master/_shared/";

				var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
				var texthash = '';
				let rep = '';
				for(i=0; i < 20; i++ )
					texthash += charset.charAt(Math.floor(Math.random() * charset.length));

				// if TEXT file

				
				if(type == 1){

					var base64Data = fileid.replace(/^data:text\/plain;base64,/, "");

					var filedata = "";
					var foundword=[];
					var foundwordWE="";
					var foundBadWord = false;
					console.log(base64Data.length);
					//console.log(base64Data.substring(0,56))
					if((base64Data.length < 30) || (base64Data.length > 22000000) || (fileid.indexOf("data:text/plain;base64,") == -1)){
						return {result:'1', message:"T???p kh??ng h???p l???! H??y ?????m b???o t???p l?? TEXT v?? k??ch th?????c <20mb."}
					}
					//else if(fileerr != 'txt' || fileerr != 'txt'){ return {result:'1', message:"T???p tin format kh??ng ????ng format TEXT. C???n file TXT, k??ch c??? dung l?????ng <2mb."} }
					else{
						var datatocheck = "";
						//write file
						var foundX = false;
						
							//console.log(base64Data);
							return new Promise((resolve, reject) => {
								require('fs').writeFile(imghost+texthash+".txt", base64Data, 'base64', (err,data,) => {
									//read file content
									
									filedata = fs.readFileSync(imghost+texthash+".txt", 'utf8',async(err,data,) => {})
									//console.log(filedata);

										//console.log(filedata); 
										
										//while(filedata.indexOf("\n") != -1){
											//filedata = filedata.replace("\n"," ");
										//}
										datatocheck = filedata.toLowerCase();
										//console.log(datatocheck);
										//console.log("111"+foundX);
										var wordscheck = ["/","{","}","*","#","@","ti??n s??","\\x",
										"bu???i",
										"l???n",
										"b??m",
										"c???c",
										"?????",
										"?????t",
										"m??? m??y",
										"t??? cha",
										"th???ng ??i??n",
										"con ??i??n",
										"con ????",
										"d??i",
										"m???t d???y",
										"?????ng",
										"ch??nh ph???",
										"ch??nh quy???n",
										"b??c h???",
										"c??? h???",
										"th???ng h???",
										"con",
										"con th???n kinh",
										"th???n kinh",
										"l???a ?????o",
										"li??n h???",
										"chuy??n cung",
										"cu",
										"con ch??",
										"????? ch??",
										"th???ng ch??",
										"th???ng l???n",
										"g??",
										"l?? ???????i ????i",
										"????? ?????o",
										"tr???i ??i ?????t h???i",
										"??n h???i",
										"09",
										"http",
										".com",
										".net",
										".info",
										".io",
										".org",
										".vn",
										".biz",
										".jp",
										".us",
										".uk",
										"c?????p",
										"gi???t",
										"hi???p",
										"ch???ch",
										"phang",
										"ph???n ?????i",
										"nh?? n?????c",
										"d??n ch???",
										"quy???n",
										"t??? do",
										"h??m",
										"m??y",
										"tao",
										"nh???c",
										"c???t",
										"t??",
										"????i",
										"n???n",
										"???a",
										"chim tao",
										"m???i r???",
										"hack"
										];
										var wordArrlength = wordscheck.length;
										
										var countFound = 0;

										console.log("----- go here 1");
										while(wordArrlength--) {
											
											if (datatocheck.indexOf(wordscheck[wordArrlength])!=-1) {
												//found bad word
												console.log("----- go here " + wordArrlength);
												foundword.push(wordscheck[wordArrlength]);
												foundwordWE = wordscheck[wordArrlength];
												foundX = true
												console.log("FOUND..."+wordscheck[wordArrlength]);
												resolve(foundX)
												break;
											}
											if(wordArrlength == 0) resolve(foundX)
										}
										

									//});
								})	
							})
							.then(async(foundX2)=>{
								console.log("333"+foundX2)
								//console.log("----- go here 2");
								if(foundX2){
									//console.log("----- go here");
									return {result: '1',message: `N???i dung vi ph???m n???i quy m???ng & ph??p lu???t Vi???t Nam, vi ph???m thu???n phong m??? t???c.!\n-------------------------\n`+foundwordWE
									+`\n-------------------------\nCh???n m???t t???p kh??c!`};
									
								}else{
									return await newnft("nftdb",seed,"_shared/"+texthash+".txt",type,filedata,token,idobject,"")
									.then(async(foundX2)=>{
										//console.log("-------------------- here 82 + " + foundX2);
										return foundX2
									})
									.catch((error)=>{ 
										return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}
									})
								}
							}).catch((error)=>{ 
								return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}
							})
						}
				}else if(type == 2){
					
					var base64Data = fileid.replace(/^data:audio\/mpeg;base64,/, "");
					//console.log(base64Data.substring(0,56))
					if((base64Data.length < 30) || (base64Data.length > 22000000) || (fileid.indexOf("data:audio/mpeg;base64,") == -1) ){
						return {result:'1', message:"T???p kh??ng h???p l???! H??y ?????m b???o t???p l?? mp3/audio v?? k??ch th?????c <20mb."}
					}
					else{
						return new Promise((resolve, reject) => {
							require('fs').writeFile(imghost+texthash+".mp3", base64Data, 'base64', async(err,data,) => {
								//read file content
								filedata = fs.readFileSync(imghost+texthash+".mp3", '',async(err,data2,) => {

								});
								//console.log(fileid.substr(0,65));
								resolve(data);
							})	
						}).then(async(donwReadFile)=>{
							//console.log(donwReadFile);
							return await newnft("nftdb",seed,"_shared/"+texthash+".mp3",type,base64Data,token,idobject,"")
							.then(async(foundX2)=>{
								//console.log("-------------------- here 82 + " + foundX2);
								return foundX2
							})
							.catch((error)=>{ 
								return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}
							})
		
						}).catch((error)=>{ 
							return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}
						})	
					}
				}else if(type == 3){
					console.log(fileid.substr(0,35));
					//data:video/mp4;base64
					var base64Data = fileid.replace(/^data:video\/mp4;base64,/, "");
					//console.log(base64Data.substring(0,56))
					if((base64Data.length < 30) || (base64Data.length > 22000000) || (fileid.indexOf("data:video/mp4;base64,") == -1) ){
						return {result:'1', message:"T???p kh??ng h???p l???! H??y ?????m b???o t???p l?? mp4/video v?? k??ch th?????c <20mb."}
					}
					else{
						return new Promise((resolve, reject) => {
							require('fs').writeFile(imghost+texthash+".mp4", base64Data, 'base64', async(err,data,) => {
								//read file content
								filedata = fs.readFileSync(imghost+texthash+".mp4", '',async(err,data2,) => {});
								resolve(data);
							})	
						}).then(async(donwReadFile)=>{
							return await newnft("nftdb",seed,"_shared/"+texthash+".mp4",type,base64Data,token,idobject,"")
							.then(async(foundX2)=>{
								//console.log("-------------------- here 82 + " + foundX2);
								return foundX2
							})
							.catch((error)=>{ 
								return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}
							})
						}).catch((error)=>{ 
							return {result: '1',message: `L???i khi t???o NFT, b???n th??? l???i l??c kh??c!`}
						})	

					}
				}
				
				}else return {result: '1',message: `Ng?????i d??ng OraiChain kh??ng t???n t???i!`}
			}else return {result: '1',message: `Ng?????i d??ng kh??ng t???n t???i!`}
		}else return {result: '1',message: `Phi??n kh??ng h???p l???!`}
    } catch(error) {
        return {result: '1',message: `Error: ${error}`}
    }
}
var validText= async (message,chatbot) => {
    try {
		console.log("------check VN culture-------------")
		
		return axios.post(chatbot,
		{
			"sender": "us1",
			"message": message
		}
		)
		.then(async(resp1) => {
			if(resp1.data[0].text.indexOf("bad") != -1)
				return false
			else
				return true
			
		});	
    } catch(error) {
        throw error
    }
}

module.exports = {
	exptok,valgoogle,searchesnftid, newnft,getnft,getnftid,get3nft,nftsendimg,nftfilesend,checkGPimg,checkGPsound,checkLOCimg
}
//dbvhspark,dbvhslog,dbu,dbexp,dbvhsnews,dbvhscomm,dbvhsecoservice,dblog
// currentGtoken = "";
// currentrule = 3;
// currentUsername = "";
