/*
Created by anhpt@
Dec 29, 2020.
*/

let sockhost = 'https://08a05d0d.ngrok.io/';


$(document).ready(function () {

	// Create WebSocket connection.
	var socket = io.connect(sockhost);
	// Listen for messages
	$('#output').empty();
  	//run each 30 seconds
 	 var step = 0;
	socket.on('message', function (msg) {
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
});


