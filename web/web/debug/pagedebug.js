/*
Created by anhpt@
Dec 29, 2020.
*/

let apiroot = 'https://b63312091814.ngrok.io/api';

function posthttp(url, dataget){
	$("#loadingx").show();

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": url,
	  "method": "POST",
	  "headers": {
		"Content-Type": "application/json",
	  },
	  "data": dataget
	}
	$.ajax(settings).done(function (response) {
		$("#loadingx").hide();
		console.log(response);
		if(response.rep.result == "0"){
			if(currentget == 1) //call all count people
			{
				//$('#output').empty();

				$('#output').prepend("-------END OF REC-------------------------<br>");
				
				for (var i = 4; i>=0; i--){
					$('#output').prepend('IDvethang: '+ response.rep.message.ra208[i].idvethang +"<br>-------------<br>");
					$('#output').prepend('giovao: '+ response.rep.message.ra208[i].giovao +"<br>");
					$('#output').prepend('giora: '+ response.rep.message.ra208[i].giora +"<br>");
					$('#output').prepend('bienvao: '+ response.rep.message.ra208[i].bienvao +"<br>");
					$('#output').prepend('bienra: '+ response.rep.message.ra208[i].bienra +"<br>");
					$('#output').prepend('biendk: '+ response.rep.message.ra208[i].biendk +"<br>");
					$('#output').prepend('masothe: '+ response.rep.message.ra208[i].masothe +"<br>");
					$('#output').prepend('maytramra: '+ response.rep.message.ra208[i].maytramra +"<br>");
					$('#output').prepend('maytramvao: '+ response.rep.message.ra208[i].maytramvao +"<br>");
				}	
				$('#output').prepend("---SVR 4--------" + new Date(Date.now()).toLocaleString()+ "<br>");	

				for (var i = 4; i>=0; i--){
					$('#output').prepend('IDvethang: '+ response.rep.message.ra101[i].idvethang +"<br>-------------<br>");
					$('#output').prepend('giovao: '+ response.rep.message.ra101[i].giovao +"<br>");
					$('#output').prepend('giora: '+ response.rep.message.ra101[i].giora +"<br>");
					$('#output').prepend('bienvao: '+ response.rep.message.ra101[i].bienvao +"<br>");
					$('#output').prepend('bienra: '+ response.rep.message.ra101[i].bienra +"<br>");
					$('#output').prepend('biendk: '+ response.rep.message.ra101[i].biendk +"<br>");
					$('#output').prepend('masothe: '+ response.rep.message.ra101[i].masothe +"<br>");
					$('#output').prepend('maytramra: '+ response.rep.message.ra101[i].maytramra +"<br>");
					$('#output').prepend('maytramvao: '+ response.rep.message.ra101[i].maytramvao +"<br>");
				}	
				$('#output').prepend("---SVR 3--------"+ new Date(Date.now()).toLocaleString() + "<br>");	

				for (var i = 4; i>=0; i--){
					$('#output').prepend('IDvethang: '+ response.rep.message.vaora208[i].idvethang +"<br>-------------<br>");
					$('#output').prepend('giovao: '+ response.rep.message.vaora208[i].giovao +"<br>");
					$('#output').prepend('giora: '+ response.rep.message.vaora208[i].giora +"<br>");
					$('#output').prepend('bienvao: '+ response.rep.message.vaora208[i].bienvao +"<br>");
					$('#output').prepend('bienra: '+ response.rep.message.vaora208[i].bienra +"<br>");
					$('#output').prepend('biendk: '+ response.rep.message.vaora208[i].biendk +"<br>");
					$('#output').prepend('masothe: '+ response.rep.message.vaora208[i].masothe +"<br>");
					$('#output').prepend('maytramra: '+ response.rep.message.vaora208[i].maytramra +"<br>");
					$('#output').prepend('maytramvao: '+ response.rep.message.vaora208[i].maytramvao +"<br>");
				}	
				$('#output').prepend("---SVR 2--------" + new Date(Date.now()).toLocaleString()+ "<br>");	
				
				for (var i = 4; i>=0; i--){
					$('#output').prepend('IDvethang: '+ response.rep.message.vaora101[i].idvethang +"<br>-------------<br>");
					$('#output').prepend('giovao: '+ response.rep.message.vaora101[i].giovao +"<br>");
					$('#output').prepend('giora: '+ response.rep.message.vaora101[i].giora +"<br>");
					$('#output').prepend('bienvao: '+ response.rep.message.vaora101[i].bienvao +"<br>");
					$('#output').prepend('bienra: '+ response.rep.message.vaora101[i].bienra +"<br>");
					$('#output').prepend('biendk: '+ response.rep.message.vaora101[i].biendk +"<br>");
					$('#output').prepend('masothe: '+ response.rep.message.vaora101[i].masothe +"<br>");
					$('#output').prepend('maytramra: '+ response.rep.message.vaora101[i].maytramra +"<br>");
					$('#output').prepend('maytramvao: '+ response.rep.message.vaora101[i].maytramvao +"<br>");
				}	
				$('#output').prepend("---SVR 1--------"+ new Date(Date.now()).toLocaleString() + "<br>");	
				}
		}
		else
			alert(JSON.stringify(response));

	});

}
$(document).ready(function () {
	$("#btndebugupdate").click(function(e){
		currentget = 1;
		token = "abc";
		posthttp(apiroot+"/qrylastrec",`{"token\":\"` + token + `\"}`)
	})
	$("#btndebugclean").click(function(e){
		$('#output').empty();
	})

	/*
	// Create WebSocket connection.
	var socket = io.connect(sockhost);
	// Listen for messages
	$('#output').empty();
  	//run each 30 seconds
 	 var step = 0;
	socket.on('ivhs', function (msg) {
		//$('#output').empty();
		if(msg != null){
			var todaydate = new Date();

			$('#output').prepend("-----------------------<br>");
			//$('#output').prepend(msg.rep.lng+"<br>");
			//$('#output').prepend(msg.rep.lat+"<br>");
			//$('#output').prepend("OUTPUT: "+ msg.rep.add+"<br>");
			//$('#output').prepend("INPUT: "+ msg.input+"<br>");
			$('#output').prepend(msg+"<br>");
        }

	});
	*/
});


