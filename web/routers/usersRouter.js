/*
Created by anhpt@
Jan 18, 2021.
*/

const express = require('express');
const router = express.Router();

const {
	valgoogle,newnft,getnftid,get3nft,nftsendimg, getnft,nftfilesend
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
			let rep = await newnft(db,seed,text,type,b64,token,idobject,chatbot)
			res.json({rep})
		} catch(error) {
			console.log(error)
			res.json({
			result: '1',
			message: `Could not search on ES: Internal Error!`
			})
		}
});

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
			let rep = await searchesnftid(id,idobject)
			res.json({rep})
		} catch(error) {
			console.log(error)
			res.json({
			result: '1',
			message: `Could not search on ES: Internal Error!`
			})
		}
	});

	router.get('/getnftid', async (req, res) =>{
		//console.log(req)
		let {nftid} = req.query
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
				let rep = await getnftid(nftid,idobject)
				res.render("view_nft34.html", {stream:rep.message});
	
				res.json({rep})
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
				let rep = await get3nft(token,idobject)
				res.json({rep})
			} catch(error) {
				console.log(error)
				res.json({
				result: '1',
				message: `Could not get nft: Internal Error!`
				})
			}
	});
	router.post('/nftsendimg', async (req, res) =>{
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
					
			let rep = await nftsendimg(imgid,seed,token,idobject)
			//console.log('--vinxray---------------');
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
	router.post('/nftfilesend', async (req, res) =>{
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
			let rep = await nftfilesend(fileid,seed,token, type,idobject)
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