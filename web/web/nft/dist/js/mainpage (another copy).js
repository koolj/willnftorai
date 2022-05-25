/*
Created by koolj@
Apr 28, 2021.
*/

let sockhost = '';
let roothost = '';

var apiroot = apiroot; //'https://afe9033d4a27.ngrok.io/api';
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

};gethttpapi(apiroot + "/apilink?api=wth",{});

var table3 ='';
var table4 ='';
var table5 ='';
var table5wiki = '';
var table6congvan = '';
function isOdd(num) { return num % 2;}

function disAll(){
	$('#loginview').hide();
	$('#DiagnosisView').hide();
	$('#MedExamView').hide();
	$('#dashboardview').hide();
	$('#helpview').hide();
	$('#LookPlantView').hide();
	$('#ManageMedView').hide();
	$('#AdminView').hide();
	
	$('#linklogout').hide();
	$('#linklogin').show();
}
function disAlllogged(){
	$('#loginview').hide();
	$('#DiagnosisView').hide();
	$('#MedExamView').hide();
	$('#dashboardview').hide();
	$('#helpview').hide();
	$('#LookPlantView').hide();
	$('#ManageMedView').hide();
	$('#AdminView').hide();

	$('#linklogin').hide();
	$('#linklogout').show();
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
	  <form class="form-inline ml-3">
		<div class="input-group input-group-sm">
		  <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
		  <div class="input-group-append">
			<button class="btn btn-navbar" type="submit">
			  <i class="fas fa-search"></i>
			</button>
		  </div>
		</div>
	  </form>
  
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
				  <p class="text-sm">Hệ thống WormTelehealth bắt đầu thử nghiệm.</p>
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
				  <p class="text-sm">WormTelehealth xin hân hạnh phục vụ!</p>
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
				<a id="dashboardfunc"  class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Dashboard</p>
				</a>
				</li>

				<li class="nav-item">
				<a id="medexamfunc"  class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Khám livestream</p>
				</a>
				</li>

				<li class="nav-item">
				<a id="diagnosisfunc"  class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Chẩn bệnh</p>
				</a>
				</li>

				<li class="nav-item">
				<a id="lookupplantfunc" href="#" class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Tra cứu cây vị thuốc Nam</p>
				</a>
				</li>

				<li class="nav-item">
				<a id="managemedfunc" href="#" class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Quản trị dược sĩ, bệnh án</p>
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
		<div id= "linklogout">
		  <li class="nav-item has-treeview menu-open">
			  <a id="logoutfunc" href="#" class="nav-link active">
				  <i class="nav-icon fas fa-sign-out-alt"></i>
					<p>&nbsp;Đăng xuất</p>
				  </a>
		  </li>
		</div>
  
  
  
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



				  <div class="d-flex flex-row justify-content-left">   
				  	<label for="email">Bạn là:&nbsp;</label>
				  </div>
				  <div class="d-flex flex-row justify-content-left"> 
				  	<div class="position-relative mb-4">
						<img src="/img/pt.png" style="width: 150px" class="img-thumbnail" alt="c1"/><br>
					</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<div class="position-relative mb-4">
						<img src="/img/dt.png" style="width: 150px" class="img-thumbnail" alt="c1"/><br>
					</div>
				  </div>


				  <div class="d-flex flex-row justify-content-left"> 

					<div class="form-check">
						<input class="form-check-input" id="bnopt" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
						Bệnh nhân
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<div class="form-check">
						<input class="form-check-input" id="bsopt" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
						Bác sĩ
					</div>

				  </div>
				  <br>	


                  <div class="d-flex flex-row justify-content-left">    
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
              
                  <hr>                
                  <div class="d-flex flex-row justify-content-end">
                    <span class="mr-2">
                      <p>...hoặc nhận trợ giúp qua contact BookWorm Team.</p>
                      <canvas class="form-control" style="padding: 5px" id="farmseed"></canvas>&nbsp;
                    </span>
                  </div>
                  <hr>                
                  <div class="d-flex flex-row justify-content-end">
                    <span class="mr-2">
                      <p>
					  Xem hướng dẫn sử dụng tại:</p>
					  <a href="https://docs.google.com/document/d/1XYOwdTQCKc94iUHuTjFvMpuq1K06heNZ7Vss56P4ZkY/edit?usp=sharing"  target=”_blank”><b>Hướng dẫn sử dụng - WormTelehealth v0.9</b></a>
                    </span>
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

function cardmagshow(){
	var htmlVar =`
  `;
	$("#DiagnosisView").empty();
	$("#DiagnosisView").append(htmlVar);
};
//cardmagshow();

function viewhelp(){
	var htmlVar=`         
	<div class="content-header">
	<div class="container-fluid">
	  <div class="row mb-2">
		  <div class="col-sm-6">
			  <h1 class="m-0 text-dark">Guideline</h1>
			</div><!-- /.col -->
			<div class="col-sm-6">
			  <ol class="breadcrumb float-sm-right">
				<li class="breadcrumb-item"><a href="#">Home</a></li>
				<li class="breadcrumb-item active">User Guide</li>
			  </ol>
			</div><!-- /.col -->
	  </div><!-- /.row -->
	</div><!-- /.container-fluid -->
</div>
  <!-- /.content-header -->

  <!-- Main content LABELING-->
<div class="content">
  <div class="container-fluid">


		
	  <div class="row"> 
		  <div class="col-md-12">
			<!-- general form elements -->


			<div class="card">
			<div class="card-body">

			  <div class="position-relative mb-4">
				<h1>
				  Hướng dẫn sử dụng hệ thống
				</h1>

				<!--user list-->
				<div id="helplink" class="uitab">
			   Xem hướng dẫn chi tiết tại: 
			   <a href="https://docs.google.com/document/d/1XYOwdTQCKc94iUHuTjFvMpuq1K06heNZ7Vss56P4ZkY/edit?usp=sharing"  target=”_blank”><b>Hướng dẫn sử dụng - WormTelehealth v0.9</b></a>

				 </div>       
			  </div>        
			</div>
			</div><!--card  -->
			
		  </div><!--/.col  -->
		</div><!-- /.row -->


  </div><!-- /.fluid-->
</div><!-- /.content-->   `
	$("#helpview").empty();
	$("#helpview").append(htmlVar);
};
viewhelp();


function viewVehicle(){
	var htmlVar=`
  `;
	$("#MedExamView").empty();
	$("#MedExamView").append(htmlVar);
};
//viewVehicle();

function viewMonitorAPI(){
	if((currentGtoken != "") && ((currentrule == 1) || (currentrule == 0)) ){
		//startloading();
		$('#ManageMedView').show();
		/*
		var url = apiroot+"/getlast200XElive";
		var jsonvar =  `{"token\":\"` 
		+ currentGtoken 
		+ `\"}`;
		currentpost = 3; //get all data xe
		posthttp(url, jsonvar, currentpost);
		*/
	}	
	
};
function viewAdmin(){
	if((currentGtoken != "") && ((currentrule == 0)) ){
		//startloading();
		$('#AdminView').show();
		/*
		var url = apiroot+"/getlast200XElive";
		var jsonvar =  `{"token\":\"` 
		+ currentGtoken 
		+ `\"}`;
		currentpost = 3; //get all data xe
		posthttp(url, jsonvar, currentpost);
		*/
	}	
	
};
//viewMonitorAPI();

table6 = $('#table6').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 30,
	"lengthChange": false,
	dom: 'Bfrtip',
	buttons: [
		'copy', 'csv', 'excel', 'pdf', 'print'
	]
} );

table7 = $('#table7').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 30,
	"lengthChange": false,
	dom: 'Bfrtip',
	buttons: [
		'copy', 'csv', 'excel', 'pdf', 'print'
	]
} );

//chan benh
table8 = $('#table8').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 30,
	"lengthChange": false,
	dom: 'Bfrtip',
	buttons: [
		'copy', 'csv', 'excel', 'pdf', 'print'
	]
} );
table9 = $('#table9').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 30,
	"lengthChange": false,
	"searching": false
} );
table12 = $('#table12').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 30,
	"lengthChange": false,
	"searching": false
} );


//kham benh
table10 = $('#table10').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 30,
	"lengthChange": false,
	dom: 'Bfrtip',
	buttons: [
		'copy', 'csv', 'excel', 'pdf', 'print'
	]
} );
table11 = $('#table11').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 30,
	"lengthChange": false,
	"searching": false
} );


function viewDigidoc(){
	if((currentGtoken != "") && ((currentrule == 1) || (currentrule == 0) || (currentrule == 2)) ){
		//startloading();
		$('#LookPlantView').show();
		/*
		var url = apiroot+"/getlast200XElive";
		var jsonvar =  `{"token\":\"` 
		+ currentGtoken 
		+ `\"}`;
		currentpost = 3; //get all data xe
		posthttp(url, jsonvar, currentpost);
		*/
	}	
};
//viewDigidoc();


function viewDashboard(){
	//viewDash();
	$('#dashboardview').show();
	//first, get all count people
	currentget = 1
	//gethttp(apiroot+"/allcount",{})
	stoploading();
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
		console.log(response);
		//console.log(currentpostVar);
		if(response.rep.result == "0"){
			/*
			if(currentpostVar == 1){
				stoploading();
				currentpost = 0;
				disAll();
				viewDashboard();
			}
			*/
			//logout
			if(currentpostVar == 19){
				//console.log(response);
				currentpost = 0;
				currentGtoken = "";
				disAll();
				
				currentrule = 3;
				//console.log(response.rep);
				//console.log("---------------------");
				alert(response.rep.message);
				$('#linklogout').hide();
				$('#linklogin').show();
				$("#hiid").empty();
				$("#hiid").append("Xin chào bạn đến với WormTelehealth!" + " &nbsp;&nbsp;");
				stoploading();
				//logout Google acct
				firebase.auth().signOut().then(() => {
					// Sign-out successful.
						stoploading();
					}).catch((error) => {
					// An error happened.
					});

				viewLogin();
			}
			//login - checkGaccout
			else if(currentpostVar == 2){
				currentpost = 0;
				currentrule = response.rep.message;
				console.log(response.rep);
				if(currentrule == 0)
					$('#adminfunc').show();
				viewLoggedin(currentrule);
				$('#linklogout').show();
				$('#linklogin').hide();
				//return currentrule
			}
/*			
			//get all data XE
			else if(currentpostVar == 3){
				currentpost = 0;
				//console.log(response.rep.message);

				objXeLive = response.rep.message;
				updateDataXeLive(objXeSys, objXeLive);
				//currentrule = response.rep.message;
				//viewLoggedin(currentrule);
				//$('#linklogout').show();
				//$('#linklogin').hide();
				//return 1
			}
			//get all data XE
			else if(currentpostVar == 4){
				currentpost = 0;
				objXeSys = response.rep.message;
				updateDataXeLive(objXeSys, objXeLive);
			}


			else if(currentpostVar == 5){
				currentpost = 0;
				console.log(response.rep.len);
				$("#x7d").empty().append(response.rep.len);
			}
			else if(currentpostVar == 6){
				currentpost = 0;
				$("#x3d").empty().append(response.rep.len);
			}
			else if(currentpostVar == 7){
				currentpost = 0;
				$("#x24h").empty().append(response.rep.len);
			}
			else if(currentpostVar == 8){
				currentpost = 0;
				$("#x3h").empty().append(response.rep.len);
			}
			else if(currentpostVar == 9){
				currentpost = 0;
				$("#x1h").empty().append(response.rep.len);
			}	
			else if(currentpostVar == 10 || currentpostVar == 11 || currentpostVar == 12 || currentpostVar == 13 || currentpostVar == 14){
				stoploading();
				currentpost = 0;

				var obj1 = response.rep.message;
				if(obj1.length > 0){
					table5.clear();
		
					for(var j= obj1.length - 1; j > 0; j-- ){
						diff = diffhours(obj1[j].giovao,obj1[j].giora);
								
						if(obj1[j].kieuxe == 2){
							kieuxe = 'Xe máy';
							if (diff < 1)
								xekeepcost = 5000;
							else
								xekeepcost = diff * 5000;	
						}else{
							kieuxe = 'Ôtô';
							if (diff < 1)
								xekeepcost = 30000;
							else
								xekeepcost = diff * 30000;
							xekeepcost = xekeepcost.toFixed(0);	
						}
						table5.row.add([
							obj1[j].giovao,
							obj1[j].giora,
							obj1[j].masothe,	
							obj1[j].biendk,
							obj1[j].bienvao,
							obj1[j].bienra,
							obj1[j].idvethang,
							kieuxe,
							diff,
							xekeepcost
						]).draw();

						//xekeepcost = 0;
						//}

						//end calculating, stop loading
						if(j == obj1.length -1)
							stoploading();	
					}
				}else{
					stoploading();
					alert ("Không có tín hiệu vi phạm!");
				}        
			}
*/			
		}	
		else{
			stoploading();
			currentpostVar = 19;
			alert(response.rep.message);
			
		}
	});

}
/*
table3 = $('#table3').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 20,
	"lengthChange": false
} );

table4 = $('#table4').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 20,
	"lengthChange": false
} );

table5 = $('#table5').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 20,
	"lengthChange": false,
	dom: 'Bfrtip',
	buttons: [
		'copy', 'csv', 'excel', 'pdf', 'print'
	]
} );
*/

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

/*
function initDatatable1() {
	//$("#table1").DataTable();
    $('#table1').DataTable({
      "paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true,
    });
}
function initDatatable2() {
	//$("#table1").DataTable();
	$('#table2').DataTable({
		"paging": true,
		"lengthChange": true,
		"searching": true,
		"ordering": true,
		"info": true,
		"autoWidth": true,
	});
}
*/

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
	
	setTimeout(function(){ stoploading(); }, 2000);
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
				variCurrentUsername = currentUsername.substr(0,3) + "***"+currentUsername.substr(currentUsername.length-3,currentUsername.length);
				$("#hiid").append("Xin chào " + variCurrentUsername + " &nbsp; &nbsp;");
				
				currentUsername = user.phoneNumber;
				currentGtoken = user.refreshToken;
				currentrule =  validateGaccount(currentUsername,currentGtoken,currentrule);
				viewLoggedin(currentrule);
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

startloading();

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
//benh nhan
function viewMedExam(){
	if((currentGtoken != "") && ((currentrule == 1) || (currentrule == 0) || (currentrule == 3)) ){
		//startloading();
		$('#MedExamView').show();
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
//bacsi
function viewDiagnosis(){
	if((currentGtoken != "") && ((currentrule == 1) || (currentrule == 0) || (currentrule == 2)) ){
		//startloading();
		$('#DiagnosisView').show();
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
/*

*/
/*
(function myLoop(i) {
	setTimeout(function() {
		if( (currentGtoken != "") && ((currentrule == 1) || (currentrule == 0)) ){
			startloading();
			$('#MedExamView').show();
			//get all XE data
			var url = apiroot+"/getlast200XElive";
			var jsonvar =  `{"token\":\"` 
			+ currentGtoken 
			+ `\"}`;
			currentpost = 3; //get all data xe
			posthttp(url, jsonvar, currentpost);

			var url = apiroot+"/getlast200XEsys";
			currentpost = 4; //get all data xe
			posthttp(url, jsonvar, currentpost);
			
				//console.log(i);            
			if (--i) {
				myLoop(i);
			}
		}
	}, 300000)
})(1000000);
*/
function validateGaccount(uid,token,crule){
	startloading();
	//viewLoggedin();
	var url = apiroot+"/valgoogle";
	var jsonvar =  `{"userid\":\"` 
	+ uid 
	+`","googletoken\":\"` 
	+ token 
	+`","role\":\"` 
	+ crule 
	+ `\"}`;
	currentpost = 2; //validateGaccount
	return posthttp(url, jsonvar, currentpost);	
}

function diffhours(dtvao, dtra) 
{
	const ms = moment(dtra, "YYYY/MM/DD HH:mm:ss").diff(moment(dtvao, "YYYY/MM/DD HH:mm:ss"));
	const d = moment.duration(ms);

	var diff = d/1000/60/60;
	return diff.toFixed(1); 
}

/*
table3s = $('#table3s').DataTable( {
	"scrollY":        "500px",
	"scrollCollapse": true,
	"paging":         true,
	"pageLength": 20,
	"lengthChange": false,
	"responsive": true,
	dom: 'Bfrtip',
	buttons: [
		'copy', 'csv', 'excel', 'pdf', 'print'
	]
} );
*/
//view vehicle status
/*
function viewMedExam(){
	if( (currentGtoken != "") && ((currentrule == 1) || (currentrule == 0)) ){
		startloading();
		$('#MedExamView').show();
		//get all XE data
		var url = apiroot+"/getlast200XElive";
		var jsonvar =  `{"token\":\"` 
		+ currentGtoken 
		+ `\"}`;
		currentpost = 3; //get all data xe
		posthttp(url, jsonvar, currentpost);

		var url = apiroot+"/getlast200XEsys";
		currentpost = 4; //get all data xe
		posthttp(url, jsonvar, currentpost);
		return 1
	}	
}


//turn date to col
Date.prototype.getMonthText = function(a) {
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return months[a];
}

function dateSymbols(e){
	var d = new Date(2018, 1, 1);
	//console.log(d.getDate());
	var numdays = d.getDate() + e.value;
	//console.log(numdays);
	var datestring = "";
	if(Number(numdays) >= 30)
		datestring = d.getMonthText(Math.floor((d.getMonth()-1) + e.value/30)) + " " + (d.getDate() + e.value) % 30 ;
	else
		datestring = d.getMonthText(d.getMonth()-1) + " " + (d.getDate() + e.value);  
	return datestring
}
*/

//draw meeting slot
Date.prototype.getMonthText = function(a) {
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return months[a];
}

function dateSymbols(e){
	var d = new Date(2021, 1, 1);
	//console.log(e);
	var numdays = d.getDate() + e.value;
	//console.log(numdays);
	var datestring = "";
	if(Number(numdays) >= 30)
		datestring = d.getMonthText(Math.floor((d.getMonth()-1) + e.value/30)) + " " + (d.getDate() + e.value) % 30 ;
	else
		datestring = d.getMonthText(d.getMonth()-1) + " " + (d.getDate() + e.value);  
	return datestring
}
/*
function drawfreeSlots(data) {
	var step = 5;
	//console.log(data);


	let data2 = [
		{ x: 10, y:[15, 115], label: "Ca h012" },
		{ x: 20, y:[31, 141], label: "Ca h102" },
		{ x: 30, y:[52, 53], label: "Ca h077" },
		{ x: 40, y:[64, 132], label: "Ca h202" },
		{ x: 50, y:[82, 152], label: "Ca h044" },
		{ x: 60, y:[15, 22], label: "Ca h012" },
		{ x: 60, y:[31, 141], label: "Ca h012" },
		{ x: 30, y:[77, 140], label: "Ca h077" },
		{ x: 70, y:[64, 132], label: "Ca h081" },
		{ x: 80, y:[82, 152], label: "Ca h099" }
		
	];
	var slotchart = new CanvasJS.Chart("chartContainer2",
	{
		height: 400,
		axisY: {
			labelFormatter: dateSymbols
		},
		data: [{
		type: "rangeBar",
		showInLegend: false,
		yValueFormatString: "# x 5 phút",
		toolTipContent: "<b>{label}</b>: {y[0]}",
		dataPoints: data2
		}]
	});

	slotchart.render();
};

function drawfreeSlots2(data) {
	var step = 5;
	//console.log(data);


	let data2 = [
		{ x: 1, y:[0.01, 0.05], label: "Bác sĩ A" },
		{ x: 2, y:[0.05, 0.1], label: "Bác sĩ B" },
		{ x: 3, y:[0.15, 0.20], label: "Bác sĩ C" }
		
	];
	var slotchart = new CanvasJS.Chart("chartContainer3",
	{
		height: 400,
		axisY: {
			labelFormatter: dateSymbols
		},
		data: [{
		type: "rangeBar",
		showInLegend: false,
		yValueFormatString: "# x 5 phút",
		toolTipContent: "<b>{label}</b>: {y[0]}",
		dataPoints: data2
		}]
	});

	slotchart.render();
};

function addSymbols(e){
	var suffixes = ["", "K", "M", "B"];
	var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
	if(order > suffixes.length - 1)
		order = suffixes.length - 1;
	var suffix = suffixes[order];
	return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}


function calculateSMA(dps, count){
	var avg = function(dps){
		var sum = 0, count = 0, val;
		for (var i = 0; i < dps.length; i++) {
		val = dps[i].y[3]; sum += val; count++;
		}
		return sum / count;
	};
	var result = [], val;
	count = count || 5;
	for (var i=0; i < count; i++)
		result.push({ x: dps[i].x , y: null});
	for (var i=count - 1, len=dps.length; i < len; i++){
		val = avg(dps.slice(i - count + 1, i));
		if (isNaN(val))
		result.push({ x: dps[i].x, y: null});
		else
		result.push({ x: dps[i].x, y: val});
	}
	return result;
}




function calculateEMA(dps,count) {
	var k = 2/(count + 1);
	var emaDps = [{x: dps[0].x, y: dps[0].y.length ? dps[0].y[3] : dps[0].y}];
	for (var i = 1; i < dps.length; i++) {
		emaDps.push({x: dps[i].x, y: (dps[i].y.length ? dps[i].y[3] : dps[i].y) * k + emaDps[i - 1].y * (1 - k)});
	}
	return emaDps;
}
*/

//store image data
var canvasdata ='';
imgdoc = new Image(); 
//imgdoc.crossOrigin = "*";
//imgdoc.src = 'https://192.168.1.129:8080/';
function recapIMG(){
	$("#idcanvassource").show()
	canvas = document.getElementById("idcanvassource");
	ctx = canvas.getContext('2d');

	//imgdoc.crossOrigin = "*";
	//imgdoc.src = 'https://192.168.1.129:8080/';
	imgdoc = document.querySelector("#iddocsource");
	ctx.drawImage(imgdoc, 0,0, canvas.width, canvas.height);

	//const captcha = document.querySelector('#g-recaptcha-response').value;
	canvasdata = canvas.toDataURL('image/jpeg', 1);
	//console.log(canvasdata)
}
function uploadIMG(){
	//save snapshot to s3
	//$("#savesnaps3").click(function(e){
		//e.preventDefault(); 
		canvas = document.querySelector("#idcanvassource");
		ctx = canvas.getContext('2d');

		imgdoc.crossOrigin = "*";
		//imgdoc.src = 'https://192.168.1.129:8080/';
		//imgdoc = document.querySelector("#iddocsource");
		ctx.drawImage(imgdoc, 0,0, canvas.width, canvas.height);
	
		//const captcha = document.querySelector('#g-recaptcha-response').value;
		canvasdata = canvas.toDataURL('image/jpeg', 1.0);

		return fetch(apiroot+'/doccanvas', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ canvasdata})
		})
		.then(res => res.json())
		.then(data => {
				alert(data.message); 
					

		}); 
	//});
	
}
function createLocalItem(data) {
	localStorage.setItem('r', data); 
} 
function getLocalValue() {
	return localStorage.getItem('r');  
}


/*
====================================================================================================================
MAIN OPERATION
====================================================================================================================
*/
var currentpost = 0;
var currentget = 0;
var currenttoken = "";
var currentGtoken = "";
var currentrule = getLocalValue();
var currentUsername = "";
$(document).ready(function () {
	startloading();

	firebase.auth().languageCode = 'en';
	var provider = new firebase.auth.GoogleAuthProvider();

	$("#hiid").empty();
	$("#hiid").append("Xin chào bạn đến với WormTelehealth!" + " &nbsp;&nbsp;")
	//init qr seed
	createqrcode('farmseed','Team BookWorm.\nMạng Y học cổ truyền khám chữa bệnh từ xa WormTelehealth.\nPhát triển bởi dathoc.net/wtg.\nHotline CSKH 0983308279.');

	//$("#hiid").append("Hi !")
	//view Login
	viewLogin();

	//get actor
	currentrule = getLocalValue();
	//set actor
	$("#adminfunc").hide();
	if(currentrule == 3)
		$("#bnopt").prop("checked", true);
	else if (currentrule == 2)
		$("#bsopt").prop("checked", true);
	else if (currentrule == 0)
		$("#adminfunc").show();

	var radioValue1 = $("input[id='bnopt']:checked").val();
	var radioValue2 =$("input[id='bsopt']:checked").val();
	$("#bnopt").on('click', function(e) {
		//currentrule = 3;
		createLocalItem(3);
		currentrule = getLocalValue();
		$("#bsopt").prop("checked", false);
		$("#bnopt").prop("checked", true);
		radioValue1 = $("input[id='bnopt']:checked").val();
		radioValue2 = $("input[id='bsopt']:checked").val();
		if(radioValue1){
			//console.log("Benh nhan " + radioValue1);
			console.log("U " + currentrule);
		}
		
		//alert("Benh nhan");
	});
	$("#bsopt").on('click', function(e) {
		//alert("Bac si");
		//currentrule = 2;
		createLocalItem(2);
		currentrule = getLocalValue();
		$("#bsopt").prop("checked", true);
		$("#bnopt").prop("checked", false);
		radioValue1 = $("input[id='bnopt']:checked").val();
		radioValue2 = $("input[id='bsopt']:checked").val();
		if(radioValue2){
			//console.log("Bac si " + radioValue2);
			console.log("U " + currentrule);
		}
		
	});

/*
	//create new room chat
	const domain = 'localhost:8443'; //'86b3687c8285.ngrok.io'; //
	const options = {
		roomName: 'KJroom1',
		width: '100%',
		height: 700,
		configOverwrite: { 
			startWithAudioMuted: true,
			disableInviteFunctions : true,
			defaultLanguage: 'vi',
			enableClosePage: false,
			disable1On1Mode: false,
			enableWelcomePage: false,
			toolbarButtons: [
				    'microphone', 'camera', 'closedcaptions', 'fullscreen',
				    'fodeviceselection', 'chat', 'raisehand'
			],
		},
		interfaceConfigOverwrite: { 
			APP_NAME: 'Worm Telehealth',
			AUDIO_LEVEL_PRIMARY_COLOR: 'rgba(255,255,255,0.4)',
			AUDIO_LEVEL_SECONDARY_COLOR: 'rgba(255,255,255,0.2)',
			TILE_VIEW_MAX_COLUMNS: 2,
			DEFAULT_LOCAL_DISPLAY_NAME: 'me',
			DEFAULT_LOGO_URL: 'images/watermark.svg',
			DEFAULT_REMOTE_DISPLAY_NAME: 'Fellow BookWormer',
			DEFAULT_WELCOME_PAGE_LOGO_URL: 'images/watermark.svg',
		},
		parentNode: document.querySelector('#meet')
	};
	const api = new WTMeetExternalAPI(domain, options);
	console.log("========================================================");
	console.log(api);
*/


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
	
	//check authen Google
	firebase.auth()
	.getRedirectResult()
	.then((result) => {
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
		validateGaccount(currentUsername,currentGtoken, currentrule);
		$("#hiid").empty();
		variCurrentUsername = currentUsername.substr(0,3) + "***"+currentUsername.substr(currentUsername.length-3,currentUsername.length);
		$("#hiid").append("Xin chào " + variCurrentUsername + " &nbsp; &nbsp;");
		$('#linklogout').show();
		$('#linklogin').hide();
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

	$("#btnlogingoogle").on('click', function(e) {
		closeNav();
		firebase.auth().signInWithRedirect(provider);
		//loginGoogle();
	});


	$('#linklogin').show();

	//trendgeo login
	$("#trendgeo").click(function(e){
		$('#charttrend').hide();
		$('#maptrend').show();
	})
	$("#trend2d").click(function(e){
		$('#charttrend').show();
		$('#maptrend').hide();
		chartcaro3("","","carocount3");
	})

	

	//guideline
	$("#helpfunc").click(function(e){
		if (currentGtoken == ""){
			disAll();
			$('#linklogin').show();
			$('#helpview').show();	
		}
		else{
			disAlllogged();
			$('#helpview').show();
		}	
		
		closeNav();
	});

	//login - registration
	$("#loginfunc").click(function(e){
		disAll();
		viewLogin();
		closeNav();
	});

	//view chan benh
	$("#diagnosisfunc").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
			
		}
		else{
			
			disAlllogged();
			
			if((currentrule == 0) || (currentrule == 1)|| (currentrule == 2)){
				viewDiagnosis();
				//$('#DiagnosisView').show();
			}else{
				alert("Bạn không đủ quyền để truy cập!");
				viewLogin();
				
			}			
			
		}
		closeNav();

	})

	//view kham live
	$("#medexamfunc").click(function(e){
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
				viewLogin();
				
			}		
			
		}	
		closeNav();

	});

	//view search
	$("#lookupplantfunc").click(function(e){

		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
			
		}
		else{
			disAlllogged();
			if((currentrule == 0) || (currentrule == 1) || (currentrule == 2)){
			   viewDigidoc();
			   
			}else{
				alert("Bạn không đủ quyền để truy cập!");
				viewLogin();
				
			}		
		}
		closeNav();

	});

	//view manage
	$("#managemedfunc").click(function(e){
		
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
		}
		else{
			disAlllogged();
			if((currentrule == 0) || (currentrule == 1)){
				viewMonitorAPI();
				
			}else{
				alert("Bạn không đủ quyền để truy cập!");
				viewLogin();
				
			}	
		}
		closeNav();
	});

	//view dashboard
	$("#dashboardfunc").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
		}
		else{
			disAlllogged();
			
			if((currentrule == 0) || (currentrule == 1)){
				viewDashboard();
			}else{
				alert("Bạn không đủ quyền để truy cập!");
				viewLogin();
				
			}	
		}					
		closeNav();
		//disAll();
		//$('#dashboardview').show();

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
				viewAdmin();
			}else{
				alert("Bạn không đủ quyền để truy cập!");
				viewLogin();
				
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
				viewDashboard();
			}else{
				alert("Bạn không đủ quyền để truy cập!");
				viewLogin();
				
			}	
		}		
		closeNav();
	});

	//logout
	$("#logoutfunc").click(function(e){
		startloading();
		createLocalItem(3);
		$("#adminfunc").hide();
		var url = apiroot+"/exptok";
		var jsonvar =  `{"tokenkey\":\"` 
		+ currentGtoken 
		+ `\"}`;
		currentpost = 19; //logout
		posthttp(url, jsonvar, currentpost);
			
		closeNav();
	});

	//scan doc
	$("#docnew").hide();
	$("#hidecreatebtn").hide();

	//scan doc, save image
	$("#savedocbtn").click(function(e){
		uploadIMG();
	});
	$("#recapdocbtn").click(function(e){
		$("#idcanvassource").show();
		$("#savedocbtn").show()
		recapIMG();

	});
	$("#dropsearch1ham a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		$("#dropsearchHam").text(selText);
	});


	//scan doc, show doc new
	$("#hidecreatebtn").hide();
	$("#savedocbtn").hide();
	$("#recapdocbtn").hide();
	
	$("#createbtn").on('click', function(e) {
		$("#docnew").show();
		$("#idcanvassource").show();
		
		$("#hidecreatebtn").show();
		$("#createbtn").hide();
		$("#savedocbtn").hide();
		$("#recapdocbtn").show();
		
	});
	$("#hidecreatebtn").on('click', function(e) {
		$("#docnew").hide();
		//$("#idcanvassource").hide();
		$("#createbtn").show();
		$("#hidecreatebtn").hide();
		//$("#savedocbtn").hide()
		//$("#recapdocbtn").hide();
	});

	//scan doc, hide image
	$("#idcanvassource").hide()

	$('#table6').on('click', 'tr', function () {
        var data = table6.row( this ).data();
		alert(data);
		//alert( 'You clicked on '+data[0]+'\'s row' );
		// imgxe
		//http://localhost:8077/_vhs/_clip/xeraham_cam1_2021-02-05_15-37-53.mp4
		/*
		$("#imgxe").empty();
		
		var img1 = roothost+'_vhs/sample.jpg';
		var img2 = roothost+'_vhs/sample.jpg';
		var img3 = roothost+'_vhs/sample.jpg';
		var img4 = roothost+'_vhs/_clip/xeraham_cam1_2021-02-05_15-37-53.mp4' ;
		var img5 = roothost+'_vhs/sample.jpg';
		//var img4 = roothost + xeioLivearr[parseInt(data[0])][4];
		//var img1 = roothost + xeioLivearr[parseInt(data[0])][1];
		//var img2 = roothost + xeioLivearr[parseInt(data[0])][2];
		//var img3 = roothost + xeioLivearr[parseInt(data[0])][3];
		//var img5 = roothost+'_vhs/sample.jpg';

		var htmlbody = `
		<a href="`+ img1 +`" target="_blank">
		<img id="im1" src="`+ img1 +`" style="width: 220px" class="img-thumbnail" alt="xe ra vao"/>
		</a>
		<a href="`+ img2 +`" target="_blank">
		<img id="im2" src="`+ img2 +`" style="width: 220px" class="img-thumbnail" alt="xe ra vao"/>
		</a>
		<a href="`+ img3 +`" target="_blank">
		<img id="im3" src="`+ img3 +`" style="width: 220px" class="img-thumbnail" alt="xe ra vao"/>
		</a>

		<video width="220px" controls="controls" preload="metadata">
			<source src="`+ img4 +`t=0.5" type="video/mp4">
		</video>

		`;
		$("#imgxe").append(htmlbody);
		*/
	} );
	$('#table7').on('click', 'tr', function () {
        var data = table7.row( this ).data();
		alert(data);
	} );


/*
	//create WebSocket connection.
	var socket = io.connect(sockhost);
	// Listen for messages
	$('#output').empty();
	//new localstorage
	var myStorage = window.localStorage;
  	//update sock live
  	var step = 0;
	socket.on('message', function (msg) {
		$('#output').empty();
		if(msg != null){
            $('#output').append(msg.site+"<br>");
				$('#output').append(JSON.stringify(msg.data));

				//update localStorage
				if(msg.site.indexOf('count') != -1){

					countdata = JSON.stringify(msg.data);
					//console.log(countdata);
					if (countdata.last_visit)
						tolocaldata = JSON.stringify({age:countdata.age,cid:countdata.idname,fromcamp:countdata.campid,idsame:countdata.idsame,imgurl:countdata.imgurl,numsame:countdata.numsame,sex:countdata.sex,last_visit:countdata.last_visit});
					else
						tolocaldata = JSON.stringify({age:countdata.age,cid:countdata.idname,fromcamp:countdata.campid,idsame:countdata.idsame,imgurl:countdata.imgurl,numsame:countdata.numsame,sex:countdata.sex,last_visit:new Date()});
					myStorage.setItem(countdata.idname+"_"+countdata.campid,tolocaldata);

					siteid = countdata.campid;
					displaycount(myStorage);
				}
				//replace main img
				if(msg.site.indexOf('count') == -1)
					updateliveimg(msg.site);
        }
	});
*/

});