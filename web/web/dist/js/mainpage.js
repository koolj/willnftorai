/*
Created by anhpt@
Jan 18, 2021.
*/

//let sockhost = 'https://xxx.ngrok.io/';
var apiroot = '/api';


function disAll(){
	$('#loadingx').hide();
}

function searchText(text){
	return fetch(apiroot+'/searchtxt', {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({ txt: text })
	})
	.then(res => res.json())
	.then(data => {
			$('#loadingx').hide();
			console.log(data)

			if(data.rep.message.length == 0){
				$("#searchno").show();
				$("#searchyes").hide();
			}	
			else{
				$("#arrresult").empty();
				$("#searchno").hide();
				$("#searchyes").show();
				console.log(data.rep.message.length)
				$("#numresult").text(data.rep.message.length)
				
				htmlbody = ``;
				for(i=0; i<data.rep.message.length ;i++){
					htmlbody = `<a href="/brands/`+ data.rep.message[i]+`" target="_blank">
				<img id="im`+i+`" src="/brands/`+ data.rep.message[i]+`" style="width: 220px" class="img-thumbnail" alt="c1"/> </a>`
					$("#arrresult").append(htmlbody);
				}
			}
	})
}
  
/*
====================================================================================================================
MAIN OPERATION
====================================================================================================================
*/
$(document).ready(function () {

	$("#searchno").hide();
	$("#searchyes").hide();
	//disable ALL
	disAll(); 

	//click tab
	$(".nav-item").click(function(e){
		$("#arrresult").empty();
		$("#searchno").hide();
		$("#searchyes").hide();
	})

	//input text to search
	$("#btnSearchText").click(function(e){
		var value = $("#txtinput").val();
		if(value.length > 0)
			searchText(value); 
		else	
			alert("テキスト検索は空であってはなりません \nText should not be null.")	
	})	

	$('#txtinput').on('keypress', function(e) {
		if (e.keyCode == 13) {
			var value = $("#txtinput").val();
			if(value.length > 0)
				searchText(value);
			else	 
				alert("テキスト検索は空であってはなりません \nText should not be null.")	
		}
	});

	//upload image to search
	$("#btnSearchImg").click(function(e){
		const canvasdata = $("#preview").prop('src');
		//console.log(canvasdata)
		
		if (canvasdata.length < 2000){   
			alert("画像はここにあるはずです \nPlease snapshot a picture!");
		}else{    
			$("#searchno").hide();
			$("#searchyes").hide();
			$('#loadingx').show();
			return fetch(apiroot+'/searchimg', {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({ imgid: canvasdata })
			})
			.then(res => res.json())
			.then(data => {
					$('#loadingx').hide();
					console.log(data)
					if(data.rep.message.length == 0){
						$("#searchno").show();
						$("#searchyes").hide();
						//alert(data.rep.message)
					}	
					else{
						$("#arrresult").empty();
						$("#searchno").hide();
						$("#searchyes").show();
						console.log(data.rep.message.length)
						$("#numresult").text(data.rep.message.length)
						
						htmlbody = ``;
						for(i=0; i<data.rep.message.length ;i++){
							htmlbody = `<a href="/brands/`+ data.rep.message[i]+`" target="_blank">
						<img id="im`+i+`" src="/brands/`+ data.rep.message[i]+`" style="width: 220px" class="img-thumbnail" alt="c1"/> </a>`
							$("#arrresult").append(htmlbody);
						}
					}
					//alert(data.message); 
			})
		};
	});

});
$(document).on("click", ".browse", function() {
	var file = $(this).parents().find(".file");
	file.trigger("click");
  });
  $('input[type="file"]').change(function(e) {
	var fileName = e.target.files[0].name;
	$("#file").val(fileName);
  
	var reader = new FileReader();
	reader.onload = function(e) {
	  // get loaded data and render thumbnail.
	  document.getElementById("preview").src = e.target.result;
	};
	// read the image file as a data URL.
	reader.readAsDataURL(this.files[0]);
  });