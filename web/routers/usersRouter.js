/*
Created by anhpt@
Jan 18, 2021.
*/
const redisUrl = 'redis:///fc7a55934642.ap.ngrok.io'; 

const express = require('express');
const router = express.Router();

const {
	valgoogle,newnft,getnftid,get3nft,nftsendimg, getnft,nftfilesend, checkGPimg
} = require('../implements/implements')
//const { itestredis } = require('../database/models/coremap');
var path    = require("path");
//const fetch = require('node-fetch');
//const { stringify } = require('querystring');

const fs = require('fs');
router.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/web/index.html'));
    throw 'Welcome to some demos from Dathoc.NET!'
});

const requestIp = require('request-ip');
var currentip = "";
var reqip = "";
const axios = require('axios');
const dateFormat = require('dateformat')

//redis
const redis = require('redis');
//"http://localhost:6379";
const clientredis = redis.createClient(redisUrl);
clientredis.auth("abcxyz123");
//var georedis = require('georedis').initialize(clientredis)

clientredis.on('error', (err) => console.log('Redis Client Error', err));

const callSRE = async() => {
	var rep= "";
	try {
		
		//rep = new Promise((resolve, reject) => {
		//console.log("===================");
		rep = await clientredis.sinter(['vinh tuy 2'],function(err, replies) {
			if(err) {return  err}
			else {
				console.log("======111=============");
				console.log(replies);
				
				if(replies.length > 0)
					for (var i=0; i< replies.length; i++){						
						console.log("----------RAW---"+ replies[i] )
						var elestr = replies[i].toString()

						if(i == replies.length - 1) return replies
					}	
				else return replies
			}
		})
		//})		
	}catch(error) {
		return error.message
    }
}
const connRedis = async() => {
	//await clientredis.connect()
	//.then(async()=>{
		clientredis.sadd('ha dong',' hanoi, lat:21.1963845, lng:105.8443959'); 
		clientredis.sadd('vinh tuy','vinh tuy, lat:21.19529, lng:105.84473');
		clientredis.sadd('vinh tuy 2','vinh tuy, lat:21.19529, lng:105.84473');
		clientredis.sadd('4 vinh tuy','vinh tuy, lat:21.19529, lng:105.84473');
		return await callSRE();
	//})
}
connRedis();

module.exports = function(io) {
	router.post('/valgoogle', async (req, res) =>{
		//console.log(userid,googletoken,role,appid);
		let {userid,googletoken,role,appid,fb} = req.body
		try {
			//get ip
			clientIp = requestIp.getClientIp(req); 
			reqip = clientIp.toString().replace(":fff:","");
			reqip = reqip.replace(":ffff:","");
			reqip = reqip.replace(":","");
			let idobject = {
				ip: reqip,
				id: userid,
				act: "google access"
			}
			var appname = "nft";
			console.log("-----from ip: " +reqip+"---" + userid+ "---LOGIN "+appname+"--- at "+ dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")+"-----")
			let rep = await valgoogle(userid,googletoken,role,appid,idobject,fb)
	
			res.json({
					rep
			})
	
		} catch(error) {
				//console.log(error)
				res.json({
				result: 1,
				message: `${error}`
				})
		}
	})
router.post('/newnft', async (req, res) =>{
	
	let {db,seed,text,type,b64,token} = req.body
	try {
			//get ip
			clientIp = requestIp.getClientIp(req); 
			reqip = clientIp.toString().replace(":fff:","");
			reqip = reqip.replace(":ffff:","");
			reqip = reqip.replace(":","");
			let idobject = {
				ip: reqip,
				act: "newnft"
			}
			chatbot="";
			await newnft(db,seed,text,type,b64,token,idobject,chatbot)
			.then((rep)=>{
				console.log("-------------CHAR--" + JSON.stringify(rep));
				res.json({
					rep
				})
			})
		} catch(error) {
			console.log(error)
			res.json({
			result: '1',
			message: `Could not create new NFT: Internal Error!`
			})
		}
});
const ms = require('ms');
function setConnectionTimeout(time) {
	var delay = typeof time === 'string'
	  ? ms(time)
	  : Number(time || 5000);
  
	return function (req, res, next) {
	  res.connection.setTimeout(delay);
	  next();
	}
}
router.post('/checkimg',setConnectionTimeout('1h'), async (req, res) =>{
	let {imgid} = req.body
  //      console.log(req.body)
	try {
		//get ip
		clientIp = requestIp.getClientIp(req); 
		reqip = clientIp.toString().replace(":fff:","");
		reqip = reqip.replace(":ffff:","");
		reqip = reqip.replace(":","");
		let idobject = {
			ip: reqip,
			act: "check img"
		}

		//console.log(imgid);
				
		await checkGPimg(imgid)
		.then((rep)=>{
			console.log("------------IMG---" +  + JSON.stringify(rep));
			res.json({
				rep
			})
		})
		
	} catch(error) {
		console.log(error)
		res.json({
			result: '1',
			message: `Could not send nft image: Internal Error!`
		})
	}
})
router.post('/nftsendimg',setConnectionTimeout('1h'), async (req, res) =>{
	let {imgid,seed, token} = req.body
  //      console.log(req.body)
	try {
		//get ip
		clientIp = requestIp.getClientIp(req); 
		reqip = clientIp.toString().replace(":fff:","");
		reqip = reqip.replace(":ffff:","");
		reqip = reqip.replace(":","");
		let idobject = {
			ip: reqip,
			act: "send img"
		}

		//console.log(imgid);
				
		await nftsendimg(imgid,seed,token,idobject)
		.then((rep)=>{
			console.log("------------IMG---" +  + JSON.stringify(rep));
			res.json({
				rep
			})
		})
		
	} catch(error) {
		console.log(error)
		res.json({
			result: '1',
			message: `Could not send nft image: Internal Error!`
		})
	}
})
router.post('/nftfilesend',setConnectionTimeout('1h'),  async (req, res) =>{
	let {fileid,seed, token, type} = req.body
//console.log(req.body)
	try {
		//get ip
		clientIp = requestIp.getClientIp(req); 
		reqip = clientIp.toString().replace(":fff:","");
		reqip = reqip.replace(":ffff:","");
		reqip = reqip.replace(":","");
		let idobject = {
			ip: reqip,
			act: "send file"
		}

		//console.log(base64data);
		await nftfilesend(fileid,seed,token, type,idobject)
		.then((rep)=>{
			console.log("----------------TEXT,AUD,VID---- " +  + JSON.stringify(rep));
			res.json({
				rep
			})
		})
	} catch(error) {
		console.log(error)
		res.json({
			result: '1',
			message: `Could not send nft file: Internal Error!`
		})
	}

})
router.post('/searchES', async (req, res) =>{
	//console.log(req)
	let {id} = req.body
	try {
			//get ip
			clientIp = requestIp.getClientIp(req); 
			reqip = clientIp.toString().replace(":fff:","");
			reqip = reqip.replace(":ffff:","");
			reqip = reqip.replace(":","");
			let idobject = {
				ip: reqip,
				act: "search nft"
			}
			await searchesnftid(id,idobject)
			.then((rep)=>{
				//console.log("-------------------- here 9 + " + rep);
				res.json({
					rep
				})
			})
		} catch(error) {
			console.log(error)
			res.json({
			result: '1',
			message: `Could not search on ES: Internal Error!`
			})
		}
	});

	router.post('/getnftid', async (req, res) =>{	
		let {token,nftid} = req.body
		//console.log(nftid)
		try {
				//get ip
				clientIp = requestIp.getClientIp(req); 
				reqip = clientIp.toString().replace(":fff:","");
				reqip = reqip.replace(":ffff:","");
				reqip = reqip.replace(":","");
				let idobject = {
					ip: reqip,
					act: "get nft with id"
				}
				await getnftid(nftid,token,idobject)
				.then((rep)=>{
					//console.log("-------------------- here 9 + " + rep);
					res.json({
						rep
					})
				})
			} catch(error) {
				console.log(error)
				res.json({
				result: '1',
				message: `Could not get nft: Internal Error!`
				})
			}
	});
	router.post('/get3nft', async (req, res) =>{
		//console.log(req)
		let {token} = req.body
	
		try {
				//get ip
				clientIp = requestIp.getClientIp(req); 
				reqip = clientIp.toString().replace(":fff:","");
				reqip = reqip.replace(":ffff:","");
				reqip = reqip.replace(":","");
				let idobject = {
					ip: reqip,
					act: "get nft with id"
				}
				await get3nft(token,idobject)
				.then((rep)=>{
					//console.log("-------------------- here 9 + " + rep);
					res.json({
						rep
					})
				})
			} catch(error) {
				console.log(error)
				res.json({
				result: '1',
				message: `Could not get nft: Internal Error!`
				})
			}
	});

	router.post('/getnft', async (req, res) =>{
		let {token} = req.body
		try {
				//get ip
				clientIp = requestIp.getClientIp(req); 
				reqip = clientIp.toString().replace(":fff:","");
				reqip = reqip.replace(":ffff:","");
				reqip = reqip.replace(":","");
				let idobject = {
					ip: reqip,
					act: "get all nft"
				}
				let rep = await getnft(token,idobject)
	
				res.json({rep})
			} catch(error) {
				console.log(error)
				res.json({
				result: '1',
				message: `Could not get nft: Internal Error!`
				})
			}
	});

/*	
router.post('/blockqry', async (req, res) =>{
	let {token} = req.body
	try {
		console.log(token)
		//get ip
		clientIp = requestIp.getClientIp(req); 
		reqip = clientIp.toString().replace(":fff:","");
		reqip = reqip.replace(":ffff:","");
		reqip = reqip.replace(":","");
		let idobject = {
			ip: reqip,
			act: "query all"
		}

		//console.log(base64data);
		let rep = await blockqry(token,idobject)
		//console.log('--checkfile---------------');
		//console.log(rep)
		res.json({
				rep
			})
	} catch(error) {
		console.log(error)
		res.json({
			result: '1',
			message: `Could not query all: Internal Error!`
		})
	}

})

router.post('/nftfilesend', async (req, res) =>{
	let {fileid, token, type} = req.body
//console.log(req.body)
	try {
		//get ip
		clientIp = requestIp.getClientIp(req); 
		reqip = clientIp.toString().replace(":fff:","");
		reqip = reqip.replace(":ffff:","");
		reqip = reqip.replace(":","");
		let idobject = {
			ip: reqip,
			act: "send file"
		}

		//console.log(base64data);
		let rep = await nftfilesend(fileid,token, type,idobject)
		//console.log('--checkfile---------------');
		//console.log(rep)
		res.json({
				rep
			})
	} catch(error) {
		console.log(error)
		res.json({
			result: '1',
			message: `Could not send nft image: Internal Error!`
		})
	}

})









router.post('/exptok', async (req, res) =>{
	let {tokenkey,appid} = req.body
try {
		
		let rep = await exptok(tokenkey,appid)
		var appname = "nft";
		console.log("-----from ip: " +reqip+"---LOGOUT "+appname+"--- at "+ dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")+"-----")
		res.json({
			rep
		})
	} catch(error) {
		res.json({
		result: '1',
		message: `${error}`
		})
	}
})





router.post('/saveimghamxebase64', async (req, res) =>{
	//console.log(req)
	let {imgurl,imgid} = req.body
	try {
			//console.log(imgurl.substring(0,65));
			//console.log(imgid);
			let rep = await saveIMGHamXeBase64live(imgurl,imgid)
			res.json({rep})
		} catch(error) {
			console.log(error)
			res.json({
			result: '1',
			message: `${error}`
			})
		}
	})	
router.post('/vinsearchimg', async (req, res) =>{
	let {imgid} = req.body
	try {
		//get ip
		clientIp = requestIp.getClientIp(req); 
		reqip = clientIp.toString().replace(":fff:","");
		reqip = reqip.replace(":ffff:","");
		reqip = reqip.replace(":","");
		let idobject = {
			ip: reqip,
			act: "vinxray"
		}
		//console.log(base64data);
		let rep = await vinsearchimg(imgid,idobject)
		console.log('--3---------------');
		console.log(rep)
		res.json({
				rep
			})
	} catch(error) {
		res.json({
			result: '1',
			message: `Could not storing img by: ${error}`
		})
	}
})	


const fs = require('fs');
const FormData = require('form-data');	
router.post('/gettextaudio', async (req, res) =>{
	let {url} = req.body
try {
		//get ip
		clientIp = requestIp.getClientIp(req); 
		reqip = clientIp.toString().replace(":fff:","");
		reqip = reqip.replace(":ffff:","");
		reqip = reqip.replace(":","");

		console.log("Text from " + reqip + " session is: "+ url.toString().substr(0,65)+"...");
		const urlfptai = "https://api.fpt.ai/hmi/asr/general";
		const apikey = "XimoEJjOVAArUTu71dHy1uclnwQxoZ2L";
		const headers = {
			'content-type': 'multipart/form-data',
			'api_key': apikey
		}

		//save audio to file:
		var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
		var texthash = '';
		let rep = '';
		for(i=0; i < 20; i++ )
			texthash += charset.charAt(Math.floor(Math.random() * charset.length));


		//write to audio file
		let formData = new FormData();
		var myWenemFile = "";
		var base64Data = url.replace(/^data:audio\/webm;codecs=opus;base64,/, "");
		fs.writeFile(reqPath + '/../vinpyser/ul/au_'+texthash+'.webm', base64Data, 'base64', async(err) =>{
			//console.log(texthash);	
			myWenemFile = fs.createReadStream(reqPath + '/../vinpyser/ul/au_'+texthash+'.webm');
			formData.append('file', myWenemFile);
			const request_config = {
				method: "POST",
				url: urlfptai,
				headers:headers,
				data: formData
			};	
			//post audio to STT 
			rep = await axios(request_config)
			.then((resp1,err) => {
				//console.log(resp1.data);
				var txtout = resp1.data.hypotheses[0].utterance;
				console.log(txtout);
				return {result:'0', message:txtout}
			});
	
			res.json({
				result: '0',
				message: rep
			})

		});

	} catch(error) {
		console.log(error);
		res.json({
			result: '1',
			message: `Could not STT: Internal Error!`
		})
	}
})
*/

return router;
}