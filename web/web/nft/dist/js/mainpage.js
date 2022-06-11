/*
Created by koolj@
Apr 28, 2021.
*/

let sockhost = '';
let roothost = '';
let rooturl = "/";
var apiroot = "/api";
function gethttpapi(url, dataget){
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": url,
	  "method": "GET",
	  "headers": {
		"Content-Type": "application/json",
	  },
	  "data": dataget
	}
	$.ajax(settings).done(function (response) {
		//console.log(response);
		if(response.rep.result == "0"){
            apiroot = response.rep.message + "api";
            sockhost = response.rep.message + "";
			roothost = response.rep.message + "";
			console.log(roothost);
			console.log(apiroot);
		}
		else{
			//alert(response.rep.message);
		}
	});

};
//gethttpapi(apiroot + "/apilink?api=wth",{});


var dataPoints = [];
function isOdd(num) { return num % 2;}

function disAll(){
	$('#loginview').hide();
	$('#MedExamView').hide();
	$('#linklogin').show();
}
function disAlllogged(){
	$('#loginview').hide();
	$('#MedExamView').show();
	$('#linklogin').hide();
}

function displaySideNav(){
	var htmlSideNav = `  <!-- Navbar -->
	<nav class="main-header navbar navbar-expand navbar-white navbar-light">
	  <!-- Left navbar links -->
	  <ul class="navbar-nav">
		<li class="nav-item">
		  <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
		</li>
  
	  </ul>
  
	  <!-- SEARCH FORM -->
	  <div class="form-inline ml-3">
	  <input class="form-control form-control-navbar" id="siteSearchInput" type="search" placeholder="Search" aria-label="Search">
	  <div class="input-group-append">
		<button class="btn btn-navbar" id="siteSearchBtn">
		  <i class="fas fa-search"></i>
		</button>
	  </div>
	</div>
  
	  <!-- Right navbar links -->
	  <ul class="navbar-nav ml-auto">
		<!-- Messages Dropdown Menu -->
		<li class="nav-item dropdown">
		  <a class="nav-link" data-toggle="dropdown" href="#">
			<i class="far fa-comments"></i>
			<span class="badge badge-danger navbar-badge">3</span>
		  </a>
		  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
			<a href="#" class="dropdown-item">
			  <!-- Message Start -->
			  <div class="media">
				<img src="./dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
				<div class="media-body">
				  <h3 class="dropdown-item-title">
					KoolJ
					<span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
				  </h3>
				  <p class="text-sm">Hệ thống WillNFT bắt đầu thử nghiệm.</p>
				  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
				</div>
			  </div>
			  <!-- Message End -->
			</a>
			<div class="dropdown-divider"></div>
			<a href="#" class="dropdown-item">
			  <!-- Message Start -->
			  <div class="media">
				<img src="./dist/img/avatar5.png" alt="User Avatar" class="img-size-50 img-circle mr-3">
				<div class="media-body">
				  <h3 class="dropdown-item-title">
				  Nhân viên Thắng
					<span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
				  </h3>
				  <p class="text-sm">WillNFT xin hân hạnh phục vụ!</p>
				  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
				</div>
			  </div>
			  <!-- Message End -->
			</a>
			<div class="dropdown-divider"></div>
			<a href="#" class="dropdown-item">
			  <!-- Message Start -->
			  <div class="media">
				<img src="./dist/img/a3.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
				<div class="media-body">
				  <h3 class="dropdown-item-title">
				  Nhân viên Oanh
					<span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
				  </h3>
				  <p class="text-sm">Có 2 NFT mới đăng ký.</p>
				  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
				</div>
			  </div>
			  <!-- Message End -->
			</a>
			<div class="dropdown-divider"></div>
			<a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
		  </div>
		</li>
		<!-- Notifications Dropdown Menu -->
		<li class="nav-item dropdown">
		  <a class="nav-link" data-toggle="dropdown" href="#">
			<i class="far fa-bell"></i>
			<span class="badge badge-warning navbar-badge">15</span>
		  </a>
		  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
			<span class="dropdown-item dropdown-header">15 Notifications</span>
			<div class="dropdown-divider"></div>
			<a href="#" class="dropdown-item">
			  <i class="fas fa-envelope mr-2"></i> 4 new messages
			  <span class="float-right text-muted text-sm">3 mins</span>
			</a>
			<div class="dropdown-divider"></div>
			<a href="#" class="dropdown-item">
			  <i class="fas fa-users mr-2"></i> 8 friend requests
			  <span class="float-right text-muted text-sm">12 hours</span>
			</a>
			<div class="dropdown-divider"></div>
			<a href="#" class="dropdown-item">
			  <i class="fas fa-file mr-2"></i> 3 new reports
			  <span class="float-right text-muted text-sm">2 days</span>
			</a>
			<div class="dropdown-divider"></div>
			<a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
		  </div>
		</li>
	  </ul>
	</nav>
	<!-- /.navbar -->
  
  
  
	<!-- Main Sidebar Container -->
	<aside class="main-sidebar sidebar-dark-primary elevation-4">
	  <!-- Brand Logo -->
	  <a id = "dashboardfunclogo" href="#" class="brand-link">
		<img src="img/logo.png" alt="VHS Logo" >
	  </a>
  
	  <!-- Sidebar -->
	  <div class="sidebar">
    
		<!-- Sidebar Menu -->
		<nav class="mt-2">
		  <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
			<!-- Add icons to the links using the .nav-icon class
				 with font-awesome or any other icon font library -->
			<li class="nav-item has-treeview menu-open">
			  <a href="#" class="nav-link active">
				<i class="nav-icon fas fa-tachometer-alt"></i>
				<p>
				  Dashboard
				  <i class="right fas fa-angle-left"></i>
				</p>
			  </a>
			  <ul class="nav nav-treeview">
				<li class="nav-item">
				<a id="nftfunc"  class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Tài sản số NFT</p>
				</a>
				</li>

				<li class="nav-item">
				<a id="adminfunc" href="#" class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Administration</p>
				</a>
				</li>
			  </ul>
			</li>
  
  
  
		<div id= "linklogin">
		<li class="nav-item has-treeview menu-open">
		  <a id="loginfunc" href="#" class="nav-link active">
			<i class="nav-icon fas fa-sign-in-alt"></i>
			<p>&nbsp;Đăng nhập</p>
			</a>
		</li>
		</div>
  
		<div id= "linkguideline">
		  <li class="nav-item has-treeview menu-open">
			  <a id="helpfunc" href="#" class="nav-link active">
				  <i class="fab fa-glide"></i>
					<p>&nbsp;Hướng dẫn</p>
				  </a>
		  </li>
		</div>
		<!--
		<div id= "linklogout">
		  <li class="nav-item has-treeview menu-open">
			  <a id="logoutfunc" href="#" class="nav-link active">
				  <i class="nav-icon fas fa-sign-out-alt"></i>
					<p>&nbsp;Đăng xuất</p>
				  </a>
		  </li>
		</div>
		-->
  
  
  
		  </ul>
		</nav>
		<!-- /.sidebar-menu -->
	  </div>
	  <!-- /.sidebar -->
	</aside>`;
	$("#navid").empty();
	$("#navid").append(htmlSideNav);
}
displaySideNav();

function loginview(){
	var htmlVar =`
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
              <div class="col-sm-6">
                  <h1 class="m-0 text-dark">Đăng nhập/ Đăng ký</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Credentials</li>
                  </ol>
                </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
      <!-- /.content-header -->
  
      <!-- Main content LOGIN-->
    <div class="content">
      <div class="container-fluid">


            
        <div class="row">
          <div class="col-lg-6">
              <div class="card">
                <div class="card-header border-0">
                  <div class="d-flex justify-content-between">
                    <h3 class="card-title">Login/ Register</h3>
                  </div>
                </div>
                <div class="card-body">
                  <!-- /.d-flex -->


                  <div class="d-flex flex-ro	w justify-content-left">    
                    <div class="position-relative mb-4">
                      <label for="email">Số điện thoại:&nbsp;</label>
                      <input type="email" class="form-control" id="phoneid" style="width: 250px" autocomplete="on" placeholder="Thêm +84, ví dụ: +84983308279" name="email">
                    </div>
                  </div>


                    <div class="d-flex flex-row justify-content-left">  
                      <div class="position-relative mb-4">
						<span class="mr-2">
						<div id="vhsrecaptcha"></div>
                          <button id="btngetsms" name="x" class="btn btn-block btn-info">Nhận SMS code trên điện thoại</button>
                          <a class="text-sm">(kiểm tra sms điện thoại sau khi click)</a><br>
                        </span> 
                      </div>
                    </div>
                    <div class="d-flex flex-row justify-content-left">  
                      <div class="position-relative mb-4">
                        <label for="pwd">Mã xác nhận qua sms:</label>
                        <input type="email" class="form-control" id="pwd" style="width: 250px" placeholder="Mã 6 số, vd: 453234" name="pwd" autocomplete="off">
                      </div>
                    </div>
  

                    <div class="d-flex flex-row justify-content-left">  
                      <div class="position-relative mb-4">
                        <span class="mr-2">
                          <button id="btnloginsms" name="x" class="btn btn-block btn-info">Đăng nhập qua SMS</button>
                        </span> 
                      </div>
                    </div>
                    <hr>

                  <div class="d-flex flex-row justify-content-left">    
                    <div class="position-relative mb-4">
                      <label for="email">...hoặc đăng nhập qua Google:&nbsp;</label>
                     </div>
                  </div>

                  <div class="d-flex flex-row justify-content-left">  
                    <div class="position-relative mb-4">
                      <span class="mr-2">
                        <button id="btnlogingoogle" name="x" class="btn btn-block btn-info">Đăng nhập qua Google</button>
                      </span> 
                    </div>
                  </div>
              

                </div><!-- /.card body -->
              </div> <!-- /.card -->
            </div> <!-- /.col -->  
        </div>  <!-- /.row LOGIN-->
      </div><!-- /.fluid-->
    </div><!-- /.content-->`;
	$("#loginview").empty();
	$("#loginview").append(htmlVar);
};
loginview();
function getBase64(file) {
	return new Promise((resolve, reject) => {
	  const reader = new FileReader();
	  reader.readAsDataURL(file);
	  reader.onload = () => resolve(reader.result);
	  reader.onerror = error => reject(error);
	});
  }
function checkSoundRule(){
	var file = document.querySelector('#filetext').files[0];
	getBase64(file).then((data)=>{
		  console.log(data.substr(0,50)+"...");
		  //console.log(canvasdata.length);
		if ((data.length < 30) || (data.length > 22100000) ){   
			alert("Đầu vào cần có tệp tin audio, dung lượng <20mb.");
			stoploading();
		}else{    
			startloading();
			return fetch(apiroot+'/checksound', {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({ imgid: data})					
			})
			.then(res => res.json())
			.then((data2) => {
				console.log(data2);
				alert(data2.rep.message);
			})
		}	
	});
}
function checkLOCImg(){
	const canvasdata = $("#preview").prop('src');
	console.log(canvasdata.length);
	if ((canvasdata.length < 300) || (canvasdata.length > 22000000) ){   
		alert("Đầu vào cần có tệp tin ảnh jpg/png, kích cỡ 1024, dung lượng <20mb.");
		stoploading();
	}else{    
		startloading();
		return fetch(apiroot+'/checkLOCimg', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ imgid: canvasdata})					
		})
		.then(res => res.json())
		.then((data2) => {
			console.log(data2);
			stoploading();
			alert(data2.rep.message);
		})
	}
}
function checkImgRule(){
	const canvasdata = $("#preview").prop('src');
	console.log(canvasdata.length);
	if ((canvasdata.length < 300) || (canvasdata.length > 22000000) ){   
		alert("Đầu vào cần có tệp tin ảnh jpg/png, kích cỡ 1024, dung lượng <20mb.");
		stoploading();
	}else{    
		startloading();
		return fetch(apiroot+'/checkimg', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ imgid: canvasdata})					
		})
		.then(res => res.json())
		.then((data2) => {
			console.log(data2);
			stoploading();
			alert(data2.rep.message);
		})
	}
}

function viewLogin(){
	//startloading();
	disAll();
	$('#linklogin').show();
	$('#loginview').show();
	appearRecaptcha();
}

function gethttp(url, dataget){
	$("#loadingx").show();

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": url,
	  "method": "GET",
	  "headers": {
		"Content-Type": "application/json",
	  },
	  "data": dataget
	}
	$.ajax(settings).done(function (response) {
		$("#loadingx").hide();
		
		if(response.rep.result == "0"){
			var data;

		}
		else{
			//alert(response.rep.message);
		}
	});

}

var objXeLive = [];
var objXeSys = [];

var htmlvari = ``;
var currentsymp = "";
var currentmedexam = "";

function viewNFTS(obj,type,endhtml){
	var nfturl = "";
	if(type == 2) objv = obj.doc;
	console.log("=================== "+type+" =================");
	console.log(obj);
	obj.forEach(doc => {	
		if(type == 2) doc = doc.doc;
		console.log(doc._id);
		//console.log("---------" + doc.url);
		if(doc._id){
			nfturl = doc.owner;
			nftprice = parseInt(doc.price)/1000;
			nfturl = nfturl.substring(0,3)+"***"+nfturl.substring(nfturl.length-3,nfturl.length);
			//nft 0
			if(doc.type == 0){
				htmlvari = `
				<div class="position-relative mb-4" style="padding: 5px;" >
					<a href="`+doc.url+`" target="_blank">
						<img class="img-thumbnail2" style="padding: 0.2px; width:35%" id=`+doc.url+` src="./img/q.png"></img>
						<nft>`+nfturl+`</nft>
						<nft>Giá: `+nftprice+`k</nft>
						<nft>Xem: `+doc.view+`</nft>
					</a>
				</div>&nbsp;&nbsp;&nbsp;&nbsp;
				`;
				$(endhtml).append(htmlvari);	
				//createqrcode(doc.url,apiroot+`/getnftid?nftid=`+doc._id);
			}
			else if (doc.type == 1){
				//rooturl+doc.imglink
				//console.log(doc.imglink);
				htmlvari = `
				<div class="position-relative mb-4" style="padding: 5px;" >
					<a href="`+doc.url+`" target="_blank">
						<img class="img-thumbnail2" style="padding: 0.2px; width:35%" id=`+doc.url+` src="./img/doc.png"></img>
						<nft>`+nfturl+`</nft>
						<nft>Giá: `+nftprice+`k</nft>
						<nft>Xem: `+doc.view+`</nft>
					</a>
				</div>&nbsp;&nbsp;&nbsp;&nbsp;
				`;
				$(endhtml).append(htmlvari);	
				//createqrcode(doc.url,doc.url);
			}
			else if (doc.type == 2){
				//rooturl+doc.imglink
				//console.log(doc.imglink);
				htmlvari = `
				<div class="position-relative mb-4" style="padding: 5px;" >
					<a href="`+doc.url+`" target="_blank">
						<img class="img-thumbnail2" style="padding: 0.2px; width:35%" id=`+doc.url+` src="./img/sound.png"></img>
						<nft>`+nfturl+`</nft>
						<nft>Giá: `+nftprice+`k</nft>
						<nft>Xem: `+doc.view+`</nft>
					</a>
				</div>&nbsp;&nbsp;&nbsp;&nbsp;
				`;
				$(endhtml).append(htmlvari);	
				//createqrcode(doc.url,doc.url);
			}
			else if (doc.type == 3){
				//rooturl+doc.imglink
				//console.log(doc.imglink);
				htmlvari = `
				<div class="position-relative mb-4" style="padding: 5px;" >
					<a href="`+doc.url+`" target="_blank">
						<img class="img-thumbnail2" style="padding: 0.2px; width:35%" id=`+doc.url+` src="./img/video.png"></img>
						<nft>`+nfturl+`</nft>
						<nft>Giá: `+nftprice+`k</nft>
						<nft>Xem: `+doc.view+`</nft>
					</a>
				</div>&nbsp;&nbsp;&nbsp;&nbsp;
				`;
				$(endhtml).append(htmlvari);	
				//createqrcode(doc.url,doc.url);
			}
			else if (doc.type == 4){
				//rooturl+doc.imglink
				//console.log(doc.imglink);
				htmlvari = `
				<div class="position-relative mb-4" style="padding: 5px;" >
					<a href="`+doc.url+`" target="_blank">
						<img class="img-thumbnail2" style="padding: 0.2px; width:35%" id=`+doc.url+` src="`+doc.url+`"></img>
						<nft>`+nfturl+`</nft>
						<nft>Giá: `+nftprice+`k</nft>
						<nft>Xem: `+doc.view+`</nft>
					</a>
				</div>&nbsp;&nbsp;&nbsp;&nbsp;
				`;
				$(endhtml).append(htmlvari);	
				//createqrcode(doc.url,doc.url);
			}
		}
	})
}

function posthttp(url, jsonvar, currentpostVar){
	//$("#loadingx").show();
	startloading();
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": url,
	  "method": "POST",
	  "headers": {
		"Content-Type": "application/json",
	  },
	  "data": jsonvar
	}
	$.ajax(settings).done(function (response) {
		//$("#loadingx").hide();
		stoploading();
		console.log(response);
		//console.log(currentpostVar);
		if(response.rep.result == "0"){
			stoploading();

			//nft type 0
			var repstr = "";
			if(currentpostVar == 1){
				stoploading();
				currentpost = 0;

				if(response.rep.hit){
					response.rep.hit.forEach(element => {
						repstr = repstr + "Tỷ lệ khớp " + element._score.toString().substr(0,5) + " với NFT id: " + element._id.toString().substr(0,8)+"..."+"\n";
					});
				}
				//console.log(repstr);
				$("#dectID").empty()
				data2=response;
				if(data2.rep.foundid) $("#dectID").append("Found duplicated NFT id: " + data2.rep.foundid)
				else if (data2.rep.newid) $("#dectID").append("New NFT id: " + data2.rep.newid+"<br>TXT id: " + data2.rep.txt);
				getnft();
				get3nft();
				if(!response.rep.hit) alert(response.rep.message);
				else alert(response.rep.message + "\n--------------\n" + repstr)
			}	
			//get all nft
			else if(currentpostVar == 3){
				stoploading();
				currentpost = 0;
				$("#listnft").empty();
				viewNFTS(response.rep.message,0,"#listnft")
			}	
			//get last 3
			else if(currentpostVar == 5){
				stoploading();
				currentpost = 0;
				$("#last3nft").empty();
				viewNFTS(response.rep.message,2,"#last3nft")

			}	
			//get nft with id
			else if(currentpostVar == 4){
				stoploading();
				currentpost = 0;
				//console.log(response.rep);
				obj=[];
				doc = response.rep.message;
				obj.push(doc);
				$("#listnft").empty();
				viewNFTS(obj,3,"#listnft")
				//alert(response.rep.message + "\n--------------\n" + repstr)
			}	
			//logout
			else if(currentpostVar == 19){
				//console.log(response);
				stoploading();
				currentpost = 0;
				currentGtoken = "";
				disAll();	
				
				currentrule = 3;
				//console.log(response.rep);
				//console.log("---------------------");
				
				$('#linklogout').hide();
				$('#linklogin').show();
				$("#hiid").empty();
				$("#hiid").append("Xin chào bạn đến với WillNFT!" + " &nbsp;&nbsp;");
				
				//logout Google acct
				alert(response.rep.message);
				firebase.auth().signOut().then(() => {
					// Sign-out successful.
						stoploading();
					}).catch((error) => {
					// An error happened.
					});

				viewLogin();
				stoploading();
			}
			//login - checkGaccout
			else if(currentpostVar == 2){
				stoploading();
				currentpost = 0;
				currentrule = response.rep.message;
				//console.log(response.rep);
				if(currentrule == 0)
					$('#adminfunc').show();
				viewLoggedin(currentrule);
				$('#linklogout').show();
				$('#linklogin').hide();
				//return currentrule
			}		
		}	
		else{
			stoploading();
			currentpostVar = 19;
			alert(response.rep.message);
			
		};
		stoploading();
	});

}


function closeNav(){
	jQuery('body').removeClass('sidebar-open');
	jQuery('body').addClass('sidebar-collapse');
	stoploading();
}

function createqrcode(id,val) {
	//init qrcode
	QRCode.toCanvas(document.getElementById(id), val, function (error) {
		if (error) console.error(error)
		//console.log('QR '+id+' success!');
	});
}

var appVerifier;
var captchaID = '';

function appearRecaptcha(){
	//check reCaptcha v2
	$('vhsrecaptcha').empty();
	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('vhsrecaptcha');
	recaptchaVerifier.render().then((widgetId) => {
		window.recaptchaWidgetId = widgetId;
	});
	appVerifier = window.recaptchaVerifier;
	stoploading();
	
	setTimeout(function(){ stoploading(); }, 1000);
}
function loginSMS(phoneid){
	
	// signInWithPhoneNumber will call appVerifier.verify() which will resolve with a fake
	// reCAPTCHA response.
	firebase.auth().signInWithPhoneNumber(phoneid, appVerifier)
		.then(confirmationResult =>{
		// confirmationResult can resolve with the fictional testVerificationCode above.
			stoploading();
			//if(confirmationResult)
			window.confirmationResult = confirmationResult;
			//else	
			//console.log(confirmationResult.confirm(testVerificationCode));
			//$("#loadingx").hide();
			//stoploading();
			alert('Đã gửi mã code 6 số thành công tới số điện thoại của bạn!');
			//return confirmationResult.confirm(testVerificationCode)
		}).catch(function (error) {
		// Error; SMS not sent
			//$("#loadingx").hide();
			stoploading();
			console.log("Có lỗi: " + error);
		// ...
		});
}
var variCurrentUsername = '';
function codeSMS(codesms){
	if(codesms.length < 6){
		stoploading();
		alert('Code xác nhận cần 6 chữ số!')

	}else{
		if(window.confirmationResult){
			window.confirmationResult.confirm(codesms).then((result) => {
				//$("#loadingx").hide();
				stoploading();
				// User signed in successfully.
				const user = result.user;
				//console.log(result);
				currentUsername = user.phoneNumber;
				$("#hiid").empty();
				variCurrentUsername = currentUsername.substr(0,3) + "***" + currentUsername.substr(currentUsername.length - 3, currentUsername.length);
				$("#hiid").append("Xin chào " + variCurrentUsername + " &nbsp; &nbsp;");
				
				currentUsername = user.phoneNumber;
				currentGtoken = user.refreshToken;
				currentrule = 3;
				validateGaccount(currentUsername,currentGtoken,currentrule, firebase);
				//viewLoggedin(currentrule);
				viewMedExam();
				//console.log(user);
				// ...
			}).catch((error) => {
				//$("#loadingx").hide();
				stoploading();
				// User couldn't sign in (bad verification code?)
				console.log("Có lỗi: " + error);
				// ...
			});
		}else{
			stoploading();
			alert('Code sai định dạng, hoặc đã quá hạn!')
		}
	}
}
var currGmailuser ='';

function verifyPhoneid(txtPhone){
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(txtPhone)) {
		stoploading();
        return true;
    }
    else {
		//$("#loadingx").hide();
		stoploading();
        alert('Số điện thoại sai định dạng, ít nhất 10 chữ số!');
    }
}

$body = $("body");
function startloading(){
    $body.addClass("loading");
};
function stoploading(){
    $body.removeClass("loading"); 
};

//startloading();

function viewLoggedin(rule){
	disAlllogged();
	$('#adminfunc').hide();
	//if admin
	if((rule == 1) || (rule == 0)){
		viewDashboard();
		if (rule == 1)
			currentrule = 1;
		else if (rule == 0){
			currentrule = 0;
			$('#adminfunc').show();
		}	
	}//if mod
	else if (rule == 2){
		currentrule = 2;
		viewDiagnosis();
	}//if normal
	else if (rule == 3){
		currentrule = 3;
		viewMedExam();
	}//if normal
	else{
		viewLogin();
	}
	stoploading();
	closeNav();
}

//fill item
function getnft(){
	var htmlvarnftitem="";
	var url = apiroot+"/getnft";
	var jsonvar =  `{"token":"`
	+ currentGtoken 
	+ `"}`;
	currentpost = 3; //nft type 0
	posthttp(url, jsonvar, 3);
}
function get3nft(){
	var htmlvarnftitem="";
	var url = apiroot+"/get3nft";
	var jsonvar =  `{"token":"`
	+ currentGtoken 
	+ `"}`;
	currentpost = 5; //nft type 0
	posthttp(url, jsonvar, 5);
}

//getnft with id
function getnftid(id){
	var htmlvarnftitem="";
	var url = apiroot+"/getnftid";
	var jsonvar =  `{"nftid":"`
	+ "3"
	+ `","token":"` 
	+ currentGtoken 
	+ `"}`;
	currentpost = 4; //nft type 0
	posthttp(url, jsonvar, 4);
}
function viewMedExam(){
	if((currentGtoken != "") && ((currentrule == 1) || (currentrule == 0) || (currentrule == 3)) ){
		stoploading();
		$('#MedExamView').show();
		//drawLichkhambenh(dataArr);
		//fill symptoms
		//view data
		//loadSymp();
		//loadSche();

		//view chart
				
		$.get("https://canvasjs.com/data/gallery/javascript/netflix-stock-price.csv",getDataPointsFromCSV);
		//console.log(dataPoints);
		var chart3 = new CanvasJS.Chart("chartContainer51", {
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			subtitles: [{
				text: "Trung bình tuần"
			}],
			axisX: {
				interval: 1,
				valueFormatString: "MMM"
			},
			axisY: {
				prefix: "$",
				title: "Giá"
			},
			toolTip: {
				content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
			},
			width:450,
			height:300,
			data: [{
				indexLabelFontSize: 12,
				type: "candlestick",
				yValueFormatString: "$##0.00",
				dataPoints: dataPoints
			}]
		});
		function getDataPointsFromCSV(csv) {
			var csvLines = points = [];
			csvLines = csv.split(/[\r?\n|\r|\n]+/);
			for (var i = 0; i < csvLines.length; i++) {
				if (csvLines[i].length > 0) {
					points = csvLines[i].split(",");
					dataPoints.push({
						x: new Date(
							parseInt(points[0].split("-")[0]),
							parseInt(points[0].split("-")[1]),
							parseInt(points[0].split("-")[2])
						),
						y: [
							parseFloat(points[1]),
							parseFloat(points[2]),
							parseFloat(points[3]),
							parseFloat(points[4])
						]
					});
				}
			}
			chart3.render();
		}
		
		
		var chart4 = new CanvasJS.Chart("chartContainer4", {
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			exportEnabled: false,
			width:450,
			height:300,
			animationEnabled: true,
			data: [{
				type: "pie",
				startAngle: 25,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 12,
				indexLabel: "{label} - {y}%",
				dataPoints: [
				{ y: 51.08, label: "nft001" },
				{ y: 27.34, label: "nft002" },
				{ y: 10.62, label: "nft003" },
				{ y: 5.02, label: "nft004" },
				{ y: 4.07, label: "nft005" },
				{ y: 1.22, label: "nft006" },
				{ y: 0.44, label: "nft007" }
				]
			}]
		});
		chart4.render();
	
		//get all nft
		$("#listnft").empty();
		$("#last3nft").empty();
		setTimeout(()=>{
			getnft();
			get3nft();
		},5000)

		/*
		var url = apiroot+"/getlast200XElive";
		var jsonvar =  `{"token\":\"` 
		+ currentGtoken 
		+ `\"}`;
		currentpost = 3; //get all data xe
		posthttp(url, jsonvar, currentpost);
		*/

	}	
}

function validateGaccount(uid,token,crule,firebase){
	startloading();
	//viewLoggedin();
	var url = apiroot+"/valgoogle";
	var jsonvar =  `{"userid\":\"` 
	+ uid 
	+`","googletoken\":\"` 
	+ token 
	+`","role\":\"` 
	+ crule 
	+`","appid\":\"` 
	+ 2 
	+`","fb\":\"` 
	+ firebase
	+ `\"}`;
	//console.log(jsonvar);
	//console.log(url);
	currentpost = 2; //validateGaccount
	return posthttp(url, jsonvar, currentpost);	
}

function createLocalValue(item,data) {
	localStorage.setItem(item, data); 
} 
function getLocalValue(item) {
	return localStorage.getItem(item);  
}
function searchES(data){
	//fe1,val1,fe2,val2,fe3,val3  searchES
	var url = apiroot+"/searchES";
	var jsonvar =  `{"fe1\":\"` 
	+ ""
	+ `","val1\":\"` 
	+ data
	+ `","fe2\":\"` 
	+ ""
	+ `","val2\":\"` 
	+ ""
	+ `","fe3\":\"` 
	+ ""
	+ `","val3\":\"` 
	+ ""
	+ `\"}`;
	currentpost = 9; //logout
	posthttp(url, jsonvar, currentpost);
}
function viewInput(num){
	if(num == 0){
		$("#divfileimg").hide();
		$("#divinputvb").show();
		$("#divfiletext").hide();
	}else if (num ==1){
		$("#divfileimg").hide();
		$("#divinputvb").hide();
		$("#divfiletext").show();
	}else if (num ==2){
		$("#divfileimg").hide();
		$("#divinputvb").hide();
		$("#divfiletext").show();
	}else if (num ==3){
		$("#divfileimg").hide();
		$("#divinputvb").hide();
		$("#divfiletext").show();
	}
	else if (num ==4){
		$("#divfileimg").show();
		$("#divinputvb").hide();
		$("#divfiletext").hide();
	}
}

//site search
function siteSearch(value){
	if ((value.length < 6)){   
		stoploading();
		alert("Từ khoá tìm kiếm cần có giá trị đúng NFTID!");
	}
	else{	
		startloading();

		var url = apiroot+"/getnftid";
		var jsonvar =  `{"token\":\"` 
		+ currentGtoken 
		+ `","nftid":"` 
		+ value
		+ `\"}`;
		currentpost = 4; //site search
		posthttp(url, jsonvar, currentpost);
			
		closeNav();
	}
}
/*
====================================================================================================================
MAIN OPERATION
====================================================================================================================
*/
var currentnfttype = 0;
var currentpost = 0;
var currentget = 0;
var currenttoken = "";
var currentGtoken = "";
createLocalValue("bnopt",3);
createLocalValue("defrule",3);
var currentrule = getLocalValue("defrule");
var currentUsername = "";
$(document).ready(function () {
	//startloading();

	//get current nfts
	//getnft();
	//get3nft();

	$("#divfileimg").hide();
	$("#divinputvb").show();
	$("#divfiletext").hide();

	firebase.auth().languageCode = 'en';
	var provider = new firebase.auth.GoogleAuthProvider();
	
	//check authen Google
	firebase.auth()
	.getRedirectResult()
	.then((result) => {
	  console.log('---------------------------GO HERE---');
	  console.log(result);
	  if (result.credential) {
	  //stoploading();
	  //console.log(result.credential);
	  ///** @type {firebase.auth.OAuthCredential} */
	  var credential = result.credential;
	  // The signed-in user info.
	  //console.log(currGmailuser);
	  //alert(currGmailuser.email);
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  currentUsername = result.user.email;
	  currentGtoken = credential.accessToken;
	  console.log(currentrule);
	  validateGaccount(currentUsername,currentGtoken, currentrule, firebase);
	  $("#hiid").empty();
	  variCurrentUsername = currentUsername.substr(0,3) + "***" + currentUsername.substr(currentUsername.length - 3, currentUsername.length);
	  $("#hiid").append("Xin chào " + variCurrentUsername + " &nbsp; &nbsp;");
	  $('#linklogout').show();
	  $('#linklogin').hide();
	  viewMedExam();
	  // ...
	  
	  }
	}).catch((error) => {
	  stoploading();
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console("Có lỗi: " + errorMessage);
	  // The email of the user's account used.
	  //var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  //var credential = error.credential;
	  // ...
	});
	
	$("#btnlogingoogle").on('click', function(e) {
	  console.log('---------------------------GO HERE---');
	  closeNav();
	  firebase.auth().signInWithRedirect(provider);
	  //loginGoogle();
	});


	$("#hiid").empty();
	$("#hiid").append("Xin chào bạn đến với WillNFT!" + " &nbsp;&nbsp;")
	//init qr seed
	//createqrcode('farmseed','Team BookWorm giới thiệu:\nMạng giao dịch tàn sản số WillNFT.\nPhát triển bởi dathoc.net/nftg.\nHotline CSKH 0983308279.');

	//$("#hiid").append("Hi !")
	//view Login
	viewLogin();


	//site search
	$('#siteSearchInput').on('keypress', function(e) {
		//if(appearRecaptcha())
		if (e.keyCode == 13) {
			//$("#loadingx").show();
			startloading();
			siteSearch($("#siteSearchInput").val());
	
		}
	});
	$("#siteSearchBtn").on('click', function(e) {
		//$("#loadingx").show();
		startloading();
		siteSearch($("#siteSearchInput").val());
	});

	//get actor
	currentrule = getLocalValue("defrule");
	//set actor
	$("#adminfunc").hide();
	if(currentrule == 3)
		$("#bnopt").prop("checked", true);
	else if (currentrule == 2)
		$("#bsopt").prop("checked", true);
	else if (currentrule == 0)
		$("#adminfunc").show();

	//get SMS
	$("#btngetsms").on('click', function(e) {
		//$("#loadingx").show();
		startloading();
		var phoneidvar = $("#phoneid").val();
		//if(appearRecaptcha())
		if(verifyPhoneid(phoneidvar))
			loginSMS(phoneidvar);
	});
	$('#phoneid').on('keypress', function(e) {
		//if(appearRecaptcha())
		if (e.keyCode == 13) {
			//$("#loadingx").show();
			startloading();
			var phoneidvar = $("#phoneid").val();
			if(verifyPhoneid(phoneidvar))
				loginSMS(phoneidvar);
	
		}
	});

	//search MED
	$('#searchkeyR142').on('keypress', function(e) {
		//if(appearRecaptcha())
		if (e.keyCode == 13) {
			//$("#loadingx").show();
			startloading();
			searchES($('#searchkeyR142').val());
		}
	});
	$('#searchkeyR143').on('keypress', function(e) {
		//if(appearRecaptcha())
		if (e.keyCode == 13) {
			//$("#loadingx").show();
			startloading();
			searchES($('#searchkeyR143').val());;	
		}
	});
	$("#searchbtn").on('click', function(e) {
		//$("#loadingx").show();
		startloading();
		searchES($('#searchkeyR143').val());;
	});

	$("#searchbtn2").on('click', function(e) {
		//$("#loadingx").show();
		startloading();
		searchES($('#searchkeyR142').val());;
	});


	//login with CODE from SMS
	$('#pwd').on('keypress', function(e) {
		//if(appearRecaptcha())
		if (e.keyCode == 13) {
			//$("#loadingx").show();
			startloading();
			var codevar = $("#pwd").val();
			codeSMS(codevar);
		}
	});

	$("#btnloginsms").on('click', function(e) {
		closeNav();
		//$("#loadingx").show();
		startloading();
		var codevar = $("#pwd").val();
		codeSMS(codevar);
	});



	$('#linklogin').show();


	//login - registration
	$("#loginfunc").click(function(e){
		disAll();
		viewLogin();
		closeNav();
	});

	//create NFT
	$("#nftfunc").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
			
		}
		else{
			disAlllogged();
			if((currentrule == 0) || (currentrule == 1) || (currentrule == 3)){
				//viewMedExam();
				//$('#MedExamView').show();
				viewMedExam();
			}else{
				alert("Bạn không đủ quyền để truy cập!");
				viewLoggedin(currentrule);
				
			}		
			
		}	
		closeNav();

	});

	//view admin
	$("#adminfunc").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
		}
		else{
			disAlllogged();
			
			if((currentrule == 0)){
				//viewAdmin();
			}else{
				alert("Bạn không đủ quyền để truy cập!");
				viewLoggedin(currentrule);
				
			}	
		}					
		closeNav();
		//disAll();
		//$('#dashboardview').show();

	});

	$("#dashboardfunclogo").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
		}
		else{
			disAlllogged();
			
			if((currentrule == 0) || (currentrule == 1)){
				//viewDashboard();
			}else{
				alert("Bạn không đủ quyền để truy cập!");
				viewLoggedin(currentrule);
				
			}	
		}		
		closeNav();
	});

	//logout
	$("#logoutfunc").click(function(e){
		startloading();
		createLocalValue("bnopt",3);
		$("#adminfunc").hide();
		var url = apiroot+"/exptok";
		var jsonvar =  `{"tokenkey\":\"` 
		+ currentGtoken 
		+ `\"}`;
		currentpost = 19; //logout
		posthttp(url, jsonvar, currentpost);
			
		closeNav();
	});


	$('#table6').on('click', 'tr', function () {
        var data = table6bs.row( this ).data();
		alert(data[3]);
		//alert( 'You clicked on '+data[0]+'\'s row' );
		// imgxe
		//http://localhost:8077/_vhs/_clip/xeraham_cam1_2021-02-05_15-37-53.mp4
		/*
		$("#imgxe").empty();
		
		var img1 = roothost+'_vhs/sample.jpg';
		//var img1 = roothost + xeioLivearr[parseInt(data[0])][1];

		var htmlbody = `
		<a href="`+ img1 +`" target="_blank">
		<img id="im1" src="`+ img1 +`" style="width: 220px" class="img-thumbnail" alt="xe ra vao"/>
		</a>

		<video width="220px" controls="controls" preload="metadata">
			<source src="`+ img4 +`t=0.5" type="video/mp4">
		</video>

		`;
		$("#imgxe").append(htmlbody);
		*/
	} );


	//nft
	$('#nfttext').on('keypress', function(e) {
		currentnfttype = 0;
		if (e.keyCode == 13) {
			if(currentGtoken != "") {
				startloading();
				var url = apiroot+"/newnft";
				var jsonvar =  `{"db":"` 
				+ `nftdb`
				+ `","seed":"` 
				+ $('#acctseed').val() 
				+ `","text":"` 
				+ $('#nfttext').val() 
				+ `","type":"` 
				+ currentnfttype
				+ `","b64":"` 
				+ `","":"` 
				+ `","token":"` 
				+ currentGtoken 
				+ `"}`;

				//console.log(jsonvar);
				currentpost = 1; //nft type 0
				posthttp(url, jsonvar, currentpost);
				//getnft();
				//get3nft();
			}else
				alert("Bạn không đủ quyền để truy cập!");
	
		}
	});
	//check image
	$("#previewImg").hide();
	$(document).on("click", ".browse", function() {
		$("#previewImg").empty();
		$("#previewImg").show();
		//$("#arrresult").show();
		var file = $(this).parents().find(".file");
		file.trigger("click");
	});
	$('input[type="file"]').change(function(e) {
		$("#previewImg").show();
		//$("#arrresult").show();
		var fileName = e.target.files[0].name;
		$("#file").val(fileName);
	
		var reader = new FileReader();
		reader.onload = function(e) {
			$("#previewImg").empty();
			htmlimg = `<a href="#" target="_blank"><img id="preview" src="`+e.target.result+`" class="img-thumbnail" alt="c1"/> </a><br><br>`;
			$("#previewImg").append(htmlimg);
			//$("#previewImg").css("width",screenWxrayviewOri);
		};

		// read the image file as a data URL.
		reader.readAsDataURL(this.files[0]);
	});


	  


	$("#btntaonft").click(function(e){
		if(currentGtoken != "") {
			//nft type 0
			startloading();
			var url = apiroot+"/newnft";
			var textval = "";			
			if(currentnfttype == 0)  {
				textval=$('#nfttext').val() ;
				var jsonvar =  `{"db":"` 
				+ `nftdb`
				+ `","seed":"` 
				+ $('#acctseed').val() 
				+ `","text":"` 
				+ textval
				+ `","type":"` 
				+ currentnfttype
				+ `","token":"` 
				+ currentGtoken 
				+ `"}`;
				//console.log(jsonvar);
				currentpost = 1; //nft type 0
				posthttp(url, jsonvar, currentpost);
			}
			else if(currentnfttype == 1) {
				//const canvasdata = $("#filetext").prop('src');
				var file = document.querySelector('#filetext').files[0];
				getBase64(file).then((data)=>{
				  	console.log(data.substr(0,50)+"...");
				  	//console.log(canvasdata.length);
					if ((data.length < 30) || (data.length > 22100000) ){   
						alert("Đầu vào cần có tệp tin TEXT, dung lượng <20mb.");
						stoploading();
					}else{    
						startloading();
						return fetch(apiroot+'/nftfilesend', {
							method: 'POST',
							headers: { 'Content-type': 'application/json' },
							body: JSON.stringify({ fileid: data, seed:$('#acctseed').val()  , token: currentGtoken, type:1})					
						})
						.then(res => res.json())
						.then((data2) => {
							console.log(data2);
							stoploading();
							//alert(JSON.stringify(data))
							getnft();
							get3nft();
							$("#dectID").empty()
							if(data2.rep.foundid) $("#dectID").append("Found duplicated NFT id: " + data2.rep.foundid)
							else if (data2.rep.newid)$("#dectID").append("New NFT id: " + data2.rep.newid+"<br>TXT id: " + data2.rep.txt);
							alert(data2.rep.message);
						})
					}	
				});


			}
			else if(currentnfttype == 2) {
				var file = document.querySelector('#filetext').files[0];
				getBase64(file).then((data)=>{
				  	console.log(data.substr(0,50)+"...");
				  	//console.log(canvasdata.length);
					if ((data.length < 30) || (data.length > 22100000) ){   
						alert("Đầu vào cần có tệp tin audio, dung lượng <20mb.");
						stoploading();
					}else{    
						startloading();
						return fetch(apiroot+'/nftfilesend', {
							method: 'POST',
							headers: { 'Content-type': 'application/json' },
							body: JSON.stringify({ fileid: data, seed:$('#acctseed').val()  , token: currentGtoken, type:2})					
						})
						.then(res => res.json())
						.then((data2) => {
							console.log(data2);
							stoploading();
							//alert(JSON.stringify(data))
							getnft();
							get3nft();
							$("#dectID").empty()
							if(data2.rep.foundid) $("#dectID").append("Found duplicated NFT id: " + data2.rep.foundid)
							else if (data2.rep.newid)$("#dectID").append("New NFT id: " + data2.rep.newid+"<br>TXT id: " + data2.rep.txt);
							alert(data2.rep.message);
						})
					}	
				});
			}
			else if(currentnfttype == 3)  {
				var file = document.querySelector('#filetext').files[0];
				getBase64(file).then((data)=>{
				  	console.log(data.substr(0,50)+"...");
				  	//console.log(canvasdata.length);
					if ((data.length < 30) || (data.length > 22100000) ){   
						alert("Đầu vào cần có tệp tin video/mp4, dung lượng <20mb.");
						stoploading();
					}else{    
						startloading();
						return fetch(apiroot+'/nftfilesend', {
							method: 'POST',
							headers: { 'Content-type': 'application/json' },
							body: JSON.stringify({ fileid: data, seed:$('#acctseed').val()  , token: currentGtoken, type:3})					
						})
						.then(res => res.json())
						.then((data2) => {
							console.log(data2);
							stoploading();
							//alert(JSON.stringify(data))
							getnft();
							get3nft();
							$("#dectID").empty()
							if(data2.rep.foundid) $("#dectID").append("Found duplicated NFT id: " + data2.rep.foundid)
							else if (data2.rep.newid)$("#dectID").append("New NFT id: " + data2.rep.newid+"<br>TXT id: " + data2.rep.txt);
							alert(data2.rep.message);
						})
					}	
				});
			}
			else if(currentnfttype == 4)  {
				const canvasdata = $("#preview").prop('src');
				console.log(canvasdata.length);
				if ((canvasdata.length < 300) || (canvasdata.length > 22000000) ){   
					alert("Đầu vào cần có tệp tin ảnh jpg/png, kích cỡ 1024, dung lượng <20mb.");
					stoploading();
				}else{    
					startloading();
					return fetch(apiroot+'/nftsendimg', {
						method: 'POST',
						headers: { 'Content-type': 'application/json' },
						body: JSON.stringify({ imgid: canvasdata, seed:$('#acctseed').val()  ,token: currentGtoken})					
					})
					.then(res => res.json())
					.then((data2) => {
						console.log(data2);
						stoploading();
						//alert(JSON.stringify(data))
						getnft();
						get3nft();
						console.log(data2.rep.foundid);
						//dectID
						$("#dectID").empty()
						if(data2.rep.foundid) $("#dectID").append("Found duplicated NFT id: " + data2.rep.foundid)
						else if (data2.rep.newid)$("#dectID").append("New NFT id: " + data2.rep.newid+"<br>TXT id: " + data2.rep.txt);
						alert(data2.rep.message);
					})
				}					
			}	



		}else
			alert("Bạn không đủ quyền để truy cập!");
	});



	$("#dropbnsearch1menu a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		selText = $(this).text();
		currentsymp = $(this).prop("id");
		//console.log(selText);
		//console.log(currentsymp);
		if(currentsymp == "b001") currentnfttype = 0
		else if(currentsymp == "b002") currentnfttype = 1
		else if(currentsymp == "b003") currentnfttype = 2
		else if(currentsymp == "b004") currentnfttype = 3
		else if(currentsymp == "b005") currentnfttype = 4
		console.log(currentnfttype);	
		viewInput(currentnfttype);	
		$("#previewImg").empty();												
		$("#dropbnbenh").text(selText);
	});



});