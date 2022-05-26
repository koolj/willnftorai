/*
Created by anhpt@
Jan 18, 2021.
*/
const {
	dbnftasset,dblog,dbu,dbexp,
	} = require('../database/database')

const esUrl = "http://localhost:9200";

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const dateFormat = require('dateformat')
const util = require('util');


const readFile = util.promisify(fs.readFile);
function getStuff(data) {
	return readFile('/home/kj/Documents/projects/_master_services/vinpyser/ul/'+data+'_detected.jpg', {encoding: 'base64'});
}
function readIMG(data) {
	return readFile(data, {encoding: 'base64'});
}

const FileType = require('file-type');
const readChunk = require('read-chunk');

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
				return {result: '0',message:"Bạn đã đăng xuất. Cám ơn đã dùng ứng dụng!"}
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
				//return {result: '1',message: 'Ký tự tìm kiếm cần là chữ hoặc số, không bao gồm ký tự đặc biệt.'}

			//}else 
			if(val1==""){
				return {result: '1',message: 'Cần có keyword để tìm kiếm.'}
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
					return {result: '1',message: 'Ký tự tìm kiếm cần là chữ hoặc số, không bao gồm ký tự đặc biệt.'}
			}	

		//}else
			//return {result: '1',message:'Bạn không đủ quyền để sử dụng chức năng này!'}
    } catch(error) {
        throw error
    }
}



var toesnft= async (db,rawdata,type,owner,b64,token,idobject) => {
    try {
		var searchURL = esUrl + "/nft/_doc?pretty";
		const headers = {}
		var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
		var texthash = '';
		for(i=0; i < 20; i++ )
			texthash += charset.charAt(Math.floor(Math.random() * charset.length));

		var ipfsFileUrl = "";
		var myObj = {
			"rawdata": rawdata,
			"nftid":texthash
		}

		//nft 4
		if(type == 4 ||  type == 1)
			myObj = {
				"imglink": rawdata,
				"nftid":texthash,
				"rawdata":b64
			}

		const request_config = {
			url: searchURL,
			method: "POST",
			headers:headers,
			data: myObj
		};
			//if(db == "nftdb"){
				//add to db

				//add to ES
				return await axios(request_config)
				.then(async(resp1,err) => {
					if(err)
						return {result: '1',message: err}
					else{
						//console.log(resp1.data);
						//to block
						var currunixtime = Math.floor(new Date().getTime() / 1000);
						rawdataB64 = Buffer.from(rawdata).toString('base64');
						ownerB64 = Buffer.from(owner).toString('base64');

						//console.log(rawdataB64);
						var blockobj={
							id:texthash,
							url:rawdataB64,
							owner:ownerB64,
							unixtime:currunixtime
						}

						//to ipfs
						var FormData = require('form-data');
						var fs = require('fs');
						var data = new FormData();
						data.append('path', fs.createReadStream(rawdata));
						var configIPFS = {
							method: 'post',
							url: 'http://localhost:5001/api/v0/add',
							headers: { 
							  ...data.getHeaders()
							},
							data : data
						};

						return await axios(configIPFS)
							.then(async(response)=>{
							//console.log(JSON.stringify(response.data));
							ipfsFileUrl = "http://localhost:8080/ipfs/" + response.data.Hash;
							
							
							//to blockchain
							var createblockqryres = "12"; //await createblockqry(token,blockobj,idobject)

							//to db
							//console.log("Block hash created: "+createblockqryres);
							if(createblockqryres.length > 1){
								//console.log("----- go here " + type);
								if((type == 0) ){
									return dbnftasset.insert({_id: texthash, url:texthash, owner: owner, view:0,price:50000, type:type,blockhash:createblockqryres,timecreated:dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")}).then(async(body) => {
										return {result: '0',message: "Tạo NFT #"+ createblockqryres +"...# thành công!",txt:createblockqryres}	
									}).catch(function (error) {
										return {result: '1',message: error}
									});
								}else if((type == 4) || (type == 1) || (type == 2) || (type == 3)){
									//console.log("----- go here6");
									return dbnftasset.insert({_id: texthash, url:ipfsFileUrl, owner: owner, view:0,price:50000, type:type,blockhash:createblockqryres,imglink:rawdata,timecreated:dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")}).then(async(body2) => {
										let resFinal = {result: '0',message: "Tạo NFT #"+ createblockqryres +"...# thành công!",txt:createblockqryres};
										console.log("-------------------- here 8 + " + resFinal);	
										return 	resFinal;
									}).catch((error)=> {
										return {result: '1',message: error}
									});
								}	
							}else return {result: '1',message: `Lỗi khi tạo NFT, bạn thử lại lúc khác!`}


						})
						.catch(function (error) {
							return {result: '1',message: error}
						});

				
					}				
				}).catch((error)=> {
					return {result: '1',message: error}
				});
			//}else return {result: '1',message: `Database không tồn tại!`}

    } catch(error) {
		return {result: '1',message: `Error: ${error}`}
    }
}
var searchesnft= async (db,val1,token,idobject) => {
    try {
		//console.log(token)
		var searchURL = esUrl + "/nft/_search?pretty";
		const headers = {};

			//if(db == "nftdb"){
				if(val1.toString().trim().length < 10){
					return {result: '0',message: 'Dữ liệu không đủ dài để tạo NFT! Phải> 10 ký tự'}
				}			
				else{
					//turn data to base 64
					val = val1;
					if(val1.indexOf("+") != -1 && val1.length > 50){
						var num1 =  val1.indexOf("+")
						var val2 = val1.substring(num1+1,val1.length)
						var num2 =  val2.indexOf("+")
						var val3 = val2.substring(num2+1,30)
							val = val3
					}	

					console.log("--------go search-----"+val)
					//console.log(val)

					return await axios({url:searchURL,
						method: 'GET',
						headers:headers,
						data:{
							"query": {
							"query_string": {
								"fields": [ "rawdata" ],
								"query": val +"*"
							}
							}
						}	
						})
						.then(async(resp1,err) => {
							console.log("datasearch..."+JSON.stringify(resp1.data.hits));
							console.log("err...."+err);
							if(err)
								return {result: '1',message: err}
							else	
								if(resp1.data.hits.hits.length > 0)
									return {result: '0',message: 'Đã tìm thấy NFT trùng lặp! Hãy chọn một NFT khác!',hit:resp1.data.hits.hits, stat: false}
								else
									return {result: '1',message: "Nothing found!", stat: true}	
							
						});

				}
			//}	
			//else
				//return {result: '1',message: `Database không tồn tại!`}

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
	console.log("====================== ORAICHAIN ========================");
	var addrOrai= "";
	try{
		addrOrai = cosmos.getAddress(mnemonic)
		mnemoStat = true
		return mnemoStat
	}catch(e){
		return mnemoStat
	} 
}

var newnft= async (db,seed,text,type,b64,token,idobject,chatbot) => {
    try {
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

				chatbot = "http://localhost:5005/webhooks/rest/webhook";
				//nft 0
				if(type == 0 ){
					if(text.length >= 8){
						if(text.length < 50){
							if (!(/[`'!@#$%^&'*()_+\-=\[\]{};':'"\\|,.<>\/?'~]/.test(text))) {
								return await validText(text,chatbot)
								.then(async(validTextvar) => {
									if(validTextvar){
										console.log("-------check dup---------------------")
										console.log(idobject.ip+"----"+text +"-----------" +type);
										return await searchesnft(db,text,token,idobject)
										.then(async(research) => {
											console.log(research)
											//console.log("----- go here4");
											if(research.stat){
												
												console.log("-------found duplicated---------------------")
												console.log(research.hit);
												return {result: '0',message: research.message,hit:research.hit}
											}
											else{
												console.log("-------no duplicated---------------------")
												return await toesnft(db,text,type,okdocter,b64,token,idobject)
												.then(async(research2) => {
													console.log("-------------------- here 81 + " + research2);
													return {result: '0',message: research2.message ,txt:research2.txt}
												})
												.catch((error)=>{ 
													return {result: '1',message: `Lỗi khi tạo NFT, bạn thử lại lúc khác!`}
												})
												//console.log(research2);
												
											}
										})
										.catch((error)=>{ 
											return {result: '1',message: `Lỗi khi tạo NFT, bạn thử lại lúc khác!`}
										})
									}	
									else
										return {result: '1',message: `Nội dung vi phạm nội quy mạng & pháp luật Việt Nam, vi phạm thuần phong mỹ tục! Vui lòng chọn nội dung khác!`}
								})	
								.catch((error)=>{ 
									return {result: '1',message: error}
								})
							}
							else
								return {result: '1',message: `Nội dung không được phép ký tự đặc biệt!\n`}
						}	
						else
							return {result: '1',message: `Dữ liệu quá dài! Hãy thử <50 ký tự!`}
					}	
					else
						return {result: '1',message: `Dữ liệu quá ngắn đối với NFT! Hãy thử> 10 ký tự`}
				}
				//nft 1,2,3
				else if((type == 1) || (type == 2) || (type == 3) || (type == 4)){
					console.log(idobject.ip+"----"+text.substr(0,35) +"-----------" +type);
					return await searchesnft(db,b64,token,idobject)
					.then(async(research2) => {
						//console.log(research2)
						
						if(!research2.stat){
							//console.log("------------------------------------------------------")
							
							return {result: '1',message: research2.message,hit:research2.hit}
						}
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
				}else return {result: '1',message: `Người dùng OraiChain không tồn tại!`}
			}else return {result: '1',message: `Người dùng không tồn tại!`}
		}else return {result: '1',message: `Phiên làm việc không được xác nhận.\nBạn cần đăng nhập lại để sử dụng!`}
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
					else return  {result: '1', message:'Nothing found!'}
				})

			}	
			else
				return {result: '1',message: `Người dùng không tồn tại!`}
		}
		else
			return {result: '1',message: `Phiên làm việc không được xác nhận.\nBạn cần đăng nhập lại để sử dụng!`}
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
				return await axios({url:"http://admin:123@localhost:5984/nftasset/_all_docs?limit=3&include_docs=true&descending=true",
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
						else
							return {result: '1',message: "Không tìm thấy thứ gì!"}	
					
				});

			}	
			else
				return {result: '1',message: `Người dùng không tồn tại!`}
		}
		else
			return {result: '1',message: `Phiên không hợp lệ!`}
    } catch(error) {
		return {result: '1',message: `Error: ${error}`}
    }
}
var getnftid= async (nftid,token,idobject) => {
	try {
		//validate token expire
		//let oktoken = await checkYESTokExp(token);
		//if(!oktoken){
			//let okdocter = await toUserfromTok(token);
			//validate user is existed
			//if(okdocter){

				const q = {
					selector: {
						_id: { "$eq": nftid},
					},
					limit:1000000
				};
				return await dbnftasset.find(q).then(async(body) => {
					console.log("---------------------------");
					console.log(body.docs);
					if(body.docs.length > 0) {
						//update view
						var newview =body.docs[0].view + 1
						await dbnftasset.insert({_id: body.docs[0]._id, _rev:body.docs[0]._rev,url:body.docs[0].url, owner: body.docs[0].owner, view:newview,price:body.docs[0].price, type:body.docs[0].type,timecreated:dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")}).then((body) => {});
						//nft 0
						if(body.docs[0].type == 0){
							//search ES with id
							let searchesidvar = await searchesnftid(body.docs[0].url);
							return {result: '0', message:searchesidvar.message}
						}	
					}else return  {result: '1', message:'Content has no data!'}
				})

			//}	
			//else
				//return {result: '1',message: `Người dùng không tồn tại!`}
		//}
		//else
			//return {result: '1',message: `Phiên làm việc không được xác nhận.\nBạn cần đăng nhập lại để sử dụng!`}
    } catch(error) {
		return {result: '1',message: `Error: ${error}`}
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
				console.log(base64Data.substring(0,23))
				if((imgid.length < 10000) || (imgid.length > 2000000) ){
					return {result:'1', message:"Tệp là hình ảnh không hợp lệ. Định dạng phải là jpg / png, độ phân giải 1024, kích thước <2mb."}
				}
				//else if(fileerr != 'jpg' || fileerr != 'jpg'){ return {result:'1', message:"Tệp tin ảnh size không đúng format JPEG/PNG. Cần ảnh jpg/png, kích cỡ 1024, dung lượng <2mb."} }
				else{

					//check same image
					
					/*
					return axios.post('http://localhost:5001/vc0',{"imgid":imghost+texthash+".jpg"}).then(async(resp2) => {
						//console.log('--0---------------');
						//console.log(resp2.data);

						if(resp2.data < 26){
							return {result:'1', message:"Tệp tin ảnh không đúng tiêu chuẩn XQuang. Cần ảnh jpg/png, phải là phim âm bản chụp XQuang, kích cỡ 1024, dung lượng 300kb."}
						}else{
						*/	
							//check purifypic
							//curl -X POST 'https://www.picpurify.com/analyse/1.1' -F '85tZFFbYXewXhleliKXLrsKgXIMzCZC6' -F 'task=porn_moderation,drug_moderation,gore_moderation' -F 'origin_id=xxxxxxxxx' -F 'reference_id=yyyyyyyy' -F 'file_image=@/path/to/local/file.jpg'
						
						//write file
						let savefile = await require('fs').writeFile(imghost+texthash+".jpg", base64Data, 'base64', async(err,data,) => {})
									
						//check same image
						await searchesnft("",base64Data,token,idobject)
						//console.log(research);
						.then(async(research) => {
						if(!research.stat){
							console.log("----found dup nft img -----------------------");
							console.log(research);
							return {result: '1',message: research.message,hit:research.hit}
						}
						else{
					
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

									return {result:'1', message: "Phát hiện vi phạm nội quy mạng & pháp luật Việt Nam, vi phạm thuần phong mỹ tục: "+resmark*100+"%!\nVui lòng chọn data khác!"}
								}else{
									//save to db
									//let newfntvar = await newnft("nftdb","_shared/"+texthash+".jpg",4,base64Data,token,idobject) 
									//return {result:'0', message: newfntvar}
									console.log("----found NO violated -----------------------")
									return await toesnft("nftdb","_shared/"+texthash+".jpg",4,okdocter,base64Data,token,idobject)
									.then((response) => {
										return response
									})
									
								}
							})
							.catch((error)=>{ 
								return {result: '1',message: error}
							})

						}						
						}) //search nft
					}	
			
				}else return {result: '1',message: `Người dùng OraiChain không tồn tại!`}
			}else return {result: '1',message: `Người dùng không tồn tại!`}
		}else return {result: '1',message: `Phiên không hợp lệ!`}
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
				//const imghost = imghostshare;
				//data:text/plain;base64



				// if TEXT file
				if(type == 1){

					var base64Data = fileid.replace(/^data:text\/plain;base64,/, "");
					var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
					var texthash = '';
					let rep = '';
					for(i=0; i < 20; i++ )
						texthash += charset.charAt(Math.floor(Math.random() * charset.length));

					var filedata = "";
					var foundword=[];
					var foundwordWE="";
					var foundBadWord = false;
					console.log(base64Data.length);
					//console.log(base64Data.substring(0,56))
					if((base64Data.length < 30) || (base64Data.length > 2000000) ){
						return {result:'1', message:"Tệp không hợp lệ! Hãy đảm bảo tệp là TEXT và kích thước <2mb."}
					}
					//else if(fileerr != 'txt' || fileerr != 'txt'){ return {result:'1', message:"Tệp tin format không đúng format TEXT. Cần file TXT, kích cỡ dung lượng <2mb."} }
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
										var wordscheck = ["/","{","}","*","#","@","tiên sư","\\x",
										"buồi",
										"lồn",
										"bím",
										"cặc",
										"đụ",
										"địt",
										"mẹ mày",
										"tổ cha",
										"thằng điên",
										"con điên",
										"con đĩ",
										"dái",
										"mất dạy",
										"đảng",
										"chính phủ",
										"chính quyền",
										"bác hồ",
										"cụ hồ",
										"thằng hồ",
										"con",
										"con thần kinh",
										"thần kinh",
										"lừa đảo",
										"liên hệ",
										"chuyên cung",
										"cu",
										"con chó",
										"đồ chó",
										"thằng chó",
										"thằng lợn",
										"gà",
										"lũ đười ươi",
										"đả đảo",
										"trời ơi đất hỡi",
										"ăn hại",
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
										"cướp",
										"giết",
										"hiếp",
										"chịch",
										"phang",
										"phản đối",
										"nhà nước",
										"dân chủ",
										"quyền",
										"tự do",
										"hãm",
										"mày",
										"tao",
										"nhục",
										"cứt",
										"tù",
										"đái",
										"nồn",
										"ỉa",
										"chim tao",
										"mọi rợ",
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
									return {result: '1',message: `Nội dung vi phạm nội quy mạng & pháp luật Việt Nam, vi phạm thuần phong mỹ tục.!\n-------------------------\n`+foundwordWE
									+`\n-------------------------\nChọn một tệp khác!`};
									
								}else{
									//console.log("----- go here 2");
									//console.log(filedata);
									//if (/^[a-z0-9.,"?]+$/.test(filedata)) {

										return await newnft("nftdb",seed,"_shared/"+texthash+".txt",1,base64Data,token,idobject,"")
										.then(async(foundX2)=>{
											//console.log("-------------------- here 82 + " + foundX2);
											return foundX2
										})
										.catch((error)=>{ 
											return {result: '1',message: `Lỗi khi tạo NFT, bạn thử lại lúc khác!`}
										})
									//}
									//else
										//return {result: '1',message: `Nội dung không cho phép ký tự đặc biệt!\n`}
								}
							}).catch((error)=>{ 
								return {result: '1',message: `Lỗi khi tạo NFT, bạn thử lại lúc khác!`}
							})
						}
				}	
				}else return {result: '1',message: `Người dùng OraiChain không tồn tại!`}
			}else return {result: '1',message: `Người dùng không tồn tại!`}
		}else return {result: '1',message: `Phiên không hợp lệ!`}
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
			console.log(resp1.data[0].text)
			console.log(resp1.data[0].text)
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
	exptok,valgoogle,searchesnftid, newnft,getnft,getnftid,get3nft,nftsendimg,nftfilesend
}
//dbvhspark,dbvhslog,dbu,dbexp,dbvhsnews,dbvhscomm,dbvhsecoservice,dblog
// currentGtoken = "";
// currentrule = 3;
// currentUsername = "";
