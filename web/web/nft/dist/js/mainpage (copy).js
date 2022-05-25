/*
Created by koolj@
Apr 28, 2021.
*/

/*
let sockhost = 'http://localhost:8077/';
let roothost = 'http://localhost:8077/';
let apiroot = 'http://localhost:8077/api';
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
			//gethttp(apiroot + "/getdoneslot",{});
			//viewChart();
            //drawCamera();
            //$("#camimg").hide();
		}
		else{
			//alert(response.rep.message);
		}
	});

};gethttpapi(apiroot + "/apilink?api=vhs",{});

function drawCamera() {
    realIMGwidth = $("#mapimg").width();
	realIMGheight = $("#mapimg").height();

	var canvas = document.getElementById('canvasimg3');
	$('#canvasimg3').prop('width', realIMGwidth);
	$('#canvasimg3').prop('height', realIMGheight);

    var ctx = canvas.getContext('2d');
    var img = document.getElementById("camimg");

    ctx.drawImage(img, 0, 0, realIMGwidth,realIMGheight)
    
   
}


var table3 ='';
var table4 ='';
var table5 ='';
var table5wiki = '';
var table6congvan = '';
function isOdd(num) { return num % 2;}

function disAll(){
	$('#dashboardview').hide();
	$('#loginview').hide();
	$('#cardmaginoutview').hide();
	$('#slotvehicleview').hide();
	$('#helpview').hide();
	$('#vehicleinoutview').hide();
	$('#requestinoutview').hide();
	$('#dashboardview').hide();
	$('#helpview').hide();
	$('#digidocview').hide();
	$('#monitorapiview').hide();
	$('#reportview').hide();
	$('#wikidocview').hide();
	
	$('#linklogout').hide();
	$('#linklogin').hide();
}
function disAlllogged(){
	$('#loginview').hide();
	$('#cardmaginoutview').hide();
	$('#slotvehicleview').hide();
	$('#helpview').hide();
	$('#vehicleinoutview').hide();
	$('#requestinoutview').hide();
	$('#dashboardview').hide();
	$('#helpview').hide();
	$('#digidocview').hide();
	$('#monitorapiview').hide();
	$('#reportview').hide();
	$('#wikidocview').hide();

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
				<a id="trendingfunc"  class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Khám livestream</p>
				</a>
				</li>

				<li class="nav-item">
				<a id="cardmagneticboardfunc"  class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Chẩn bệnh</p>
				</a>
				</li>

				<li class="nav-item">
				<a id="digidocfunc" href="#" class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Tra cứu cây vị thuốc Nam</p>
				</a>
				</li>

				<li class="nav-item">
				<a id="sitefunc" href="#" class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Quản trị dược sĩ, bệnh án</p>
				</a>
				<li class="nav-item">
					<a href="#" class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Báo cáo cuối ngày</p>
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
 <!--
                  <div class="d-flex flex-row justify-content-left">    
                    <div class="position-relative mb-4">
                      <label for="email">Số điện thoại đã đăng ký với VHS:&nbsp;</label>
                      <input type="email" class="form-control" id="email" style="width: 250px" autocomplete="on" placeholder="Ví dụ: 84983308279" name="email">
                    </div>
                  </div>


                  <div class="d-flex flex-row justify-content-left">
                    <div class="position-relative mb-4">
                      <span class="mr-2"></span> 
                        <form action="?" method="POST">
                          <div class="g-recaptcha" data-sitekey="6LdJ_swUAAAAALY6TVGgTlJ9213eBz5i3eei6x1q"></div>
                        </form>
                      </span> 
                    </div>
                  </div>



                  <div class="d-flex flex-row justify-content-left">  
                    <div class="position-relative mb-4">
                      <span class="mr-2">
                        <button id="btnsms" name="x" class="btn btn-block btn-info">Nhận SMS code</button>
                      </span> 
                    </div>
                  </div>

                  <div class="d-flex flex-row justify-content-left">  
                    <div class="position-relative mb-4">
                      <label for="pwd">Mã xác nhận qua sms:</label>
                      <input type="email" class="form-control" id="pwd" style="width: 250px" placeholder="Mã 6 số" name="pwd" autocomplete="off">
                    </div>
                  </div>


                  <div class="d-flex flex-row justify-content-end">
                    <span class="mr-2">
                      <button id="btnlogin" name="x" class="btn btn-block btn-info">Đăng nhập</button>
                    </span>
                  </div>
  -->                 
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
    <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
              <div class="col-sm-6">
                  <h1 class="m-0 text-dark">Site Detail</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Site</li>
                  </ol>
                </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
      <!-- /.content-header -->
  
      <!-- Main content SITE-->
    <div class="content">
      <div class="container-fluid">
          <div class="dropdown">
              <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Site selection
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Site 1</a>
                <a class="dropdown-item" href="#">Site 2</a>
                <a class="dropdown-item" href="#">Site 3</a>
              </div>
            </div>
            <br>


        <div class="row">



          <div class="col-lg-6">
              <div class="card">




                <div class="card-header border-0">
                  <div class="d-flex justify-content-between">
                    <h3 class="card-title">Cam 1</h3>
                  </div>
                </div>
                <div class="card-body">
                  <!-- /.d-flex -->
                  <div class="position-relative mb-4">
                      <img id="carosite" src="./clip/IMG20201223113000.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
                  </div>

                </div>
              </div> <!-- /.card -->
            </div> <!-- /.col -->  

            <div class="col-lg-6">
                <div class="card">
                  <div class="card-header border-0">
                    <div class="d-flex justify-content-between">
                      <h3 class="card-title">Cam 2</h3>
                    </div>
                  </div>
                  <div class="card-body">
                    <!-- /.d-flex -->
                    <div class="position-relative mb-4">
                        <img id="carosite" src="./clip/IMG20201223113000.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
                    </div>
  
                  </div>
                </div> <!-- /.card -->
              </div> <!-- /.col -->  
  


                  <div class="col-12">
                      <div class="card">
                          <div class="card-header">
                            <h3 class="card-title">Data detail</h3>
                          </div>
                          <!-- /.card-header -->
                          <div class="card-body">
                            <table id="table1" class="table table-bordered table-striped">
                              <thead>
                              <tr>
                                <th>Rendering engine</th>
                                <th>Browser</th>
                                <th>Platform(s)</th>
                                <th>Engine version</th>
                                <th>CSS grade</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td>Trident</td>
                                <td>Internet
                                  Explorer 4.0
                                </td>
                                <td>Win 95+</td>
                                <td> 4</td>
                                <td>X</td>
                              </tr>
                              </tbody>
                              <tfoot>
                              <tr>
                                <th>Rendering engine</th>
                                <th>Browser</th>
                                <th>Platform(s)</th>
                                <th>Engine version</th>
                                <th>CSS grade</th>
                              </tr>
                              </tfoot>
                            </table>
                          </div>
                          <!-- /.card-body -->
                        </div>
  
                  </div>
            

        </div>  <!-- /.row-->
      </div><!-- /.fluid-->
    </div><!-- /.content-->   `;
	$("#cardmaginoutview").empty();
	$("#cardmaginoutview").append(htmlVar);
};
cardmagshow();

function slotvehicleview(){
	var htmlVar =`
	<div class="content-header">
	  <div class="container-fluid">
	  <div class="row mb-2">
		  <div class="col-sm-6">
			<h1 class="m-0 text-dark">Tính toán slot đậu xe, hướng dẫn chỉ đường chỗ trống đỗ xe </h1>
			<p class="text-sm"></p>
		  </div><!-- /.col -->
		<div class="col-sm-6">
		<ol class="breadcrumb float-sm-right">
		  <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
		  <li class="breadcrumb-item active">Xử lý slot đậu xe</li>
		</ol>
		</div><!-- /.col -->
	  </div><!-- /.row -->
	  </div><!-- /.container-fluid -->
	</div>
	<!-- /.content-header -->
	
	<!-- Main content -->
	<div class="content">
	<div class="container-fluid">
	  <!-- /.detail data -->


	   <!-- /.map -->
	  <div class="row">
		<div class="col-12">
		  <div class="card">
			<div class="card-body">
	  
			  <div class="d-flex justify-content-left">
				<div class="position-relative mb-4">

				  <div class="dropdown">
					<button class="btn btn-info dropdown-toggle" type="button" id="dropsearchHam" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					  Chọn tầng
					</button>
					<div id="dropsearch1ham" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					  <a class="dropdown-item" >Hầm</a>
					  <a class="dropdown-item" >Tầng 3</a>
					  <a class="dropdown-item" >Tầng 4</a>
					  <a class="dropdown-item" >Tầng 5</a>
					</div>
				  </div>


				</div>
			  </div>

			  <div class="d-flex justify-content-left">
				<div class="position-relative mb-4">
				  <canvas id="canvasimg" width="2277" height="1304" style = "position:absolute;"></canvas>
				  <canvas id="canvasimg2" width="2277" height="1304" style = "position:absolute;"></canvas>
				  <canvas id="canvasimg3" width="2277" height="1304" style = "position:absolute;"></canvas>
				  <img id ="camimg" src="./img/hamxe3.png" alt="User Avatar" style="width: 1800px " class="img-thumbnail">
				  <img id ="mapimg" src="./img/hamtest.jpg" alt="User Avatar" style="width: 1500px" class="img-thumbnail">
				</div>
			  </div>



			  <div class="d-flex justify-content-left">
				  <div id="chartContainer" style="height: 400px; width: 100%;"></div>
			  </div>



			</div>
		  </div>  
		</div>  
	  </div>


	  <!-- /.rate dashboard -->
	  <div class="row">
		<div class="col-12">
		  <div class="card">
			<div class="card-body">
	  
			  <div class="d-flex justify-content-left">
				<h1 class="m-0 text-dark">3/256</h1>
			  </div>
			</div>
		  </div>  
		</div>  
	  </div>

	  <!-- /.report -->
	  <div class="row">
		<div class="col-12">
			<div class="card">
			  
			  <div class="card-header border-0">
				<div class="d-flex justify-content-left">
				<h3 class="card-title">Thống kê, báo cáo, in ấn, tìm kiếm</h3>
				
				</div>
		
			  </div>
			  
			   
  
  
			  <div class="card-body">
  
				<div class="d-flex justify-content-left">
						  <div class="position-relative mb-4">
							<div class="dropdown">
							  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearchRepo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							  Chọn báo cáo
							  </button>
							  <div id="dropsearchRepomenu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							  <a class="dropdown-item" >Báo cáo mật độ vị trí trông giữ xe</a>
							  <a class="dropdown-item" >Báo cáo slot time nhàn rỗi từng vị trí</a>
							  </div>
							</div>
						  </div>
						  &nbsp;&nbsp;
	  
  
  
						  <div class="position-relative mb-4">
							<div class="dropdown">
							<button class="btn btn-info dropdown-toggle" type="button" id="dropsearchView" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							  Chọn hiển thị
							</button>
							<div id="dropsearchViewmenu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							  <a class="dropdown-item" id="trend2d" href="#">In ra PDF</a>
							  <a class="dropdown-item" id="trend2d" href="#">In ra máy in</a>
							  <a class="dropdown-item" id="trend2d" href="#">Biểu đồ 2D</a>
							  <a class="dropdown-item" id="trendcompare" href="#">Biểu đồ so sánh với hôm qua</a>
							  <a class="dropdown-item" id="trendtime"  href="#">Biểu đồ biến đổi theo thời gian</a>
							</div>
							</div>
						  </div>
				 </div>


  
				  <div class="d-flex justify-content-left">
						  <h3 class="card-title">Tìm kiếm mở rộng</h3><br>
				  </div>
  
  
				  <div class="d-flex justify-content-left">
						  <div class="position-relative mb-4">
							<input type="email" class="form-control" id="searchkeyR1slot" style="width: 250px" autocomplete="on" placeholder="Enter keyword" name="email">
						  </div>

				  </div> 
				  <div class="d-flex justify-content-left">

						  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;</div>
						  <div class="position-relative mb-4">From&nbsp;&nbsp;</div>

						  <div class="position-relative mb-4">  
							<div class="form-group">
							  <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
							  <input type="text"  id="searchRslot" class="form-control datetimepicker-input" data-target="#datetimepicker1" />
							  <span class="input-group-addon" data-target="#datetimepicker1" data-toggle="datetimepicker">
									  <span class="fa fa-calendar"></span>
							  </span>
							  </div>
							</div>                      
						  </div>

				  </div> 
				  <div class="d-flex justify-content-left">

						  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;</div>
						  <div class="position-relative mb-4">To&nbsp;&nbsp;</div>
						  <div class="position-relative mb-4">  
							<div class="form-group">
							  <div class="input-group date" id="datetimepickerR2" data-target-input="nearest">
								<input type="text"  id="searchRTslot" class="form-control datetimepicker-input" data-target="#datetimepicker2" />
								<span class="input-group-addon" data-target="#datetimepicker2" data-toggle="datetimepicker">
										<span class="fa fa-calendar"></span>
								</span>
							  </div>
							</div>
						  </div>


				   </div>
  
				<div class="d-flex justify-content-left">
				  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
				  và &nbsp;&nbsp;      
  
						  <div class="position-relative mb-4">
							<div class="dropdown">
							  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearchR1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							  None
							  </button>
							  <div id="dropsearch1menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" >Mã số thẻ</a>
								<a class="dropdown-item" >Biển xe đăng ký</a>
								<a class="dropdown-item" >ID vé tháng</a>
								<a class="dropdown-item" >Kiểu xe</a>
								<a class="dropdown-item" >Vị trí</a>
								<a class="dropdown-item" >Số giờ trông giữ</a>
							  </div>
							</div>
						  </div>

						  &nbsp;&nbsp;
						  <div class="position-relative mb-4">
							<input type="email" class="form-control" id="searchkeyR2slot" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
						  </div>


				</div> 
				<div class="d-flex justify-content-left">


						  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
						  và &nbsp;&nbsp;
						  <div class="position-relative mb-4">
							<div class="dropdown">
							  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							  None
							  </button>
							  <div id="dropsearch2menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" >Mã số thẻ</a>
								<a class="dropdown-item" >Biển xe đăng ký</a>
								<a class="dropdown-item" >ID vé tháng</a>
								<a class="dropdown-item" >Kiểu xe</a>
								<a class="dropdown-item" >Vị trí</a>
								<a class="dropdown-item" >Số giờ trông giữ</a>
							  </div>
							</div>
						  </div>
						  &nbsp;&nbsp;
						  <div class="position-relative mb-4">
							<input type="email" class="form-control" id="searchkeyR3slot" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
						  </div>


			  </div> 
			  <div class="d-flex justify-content-left">

						  
						  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
						  và &nbsp;&nbsp;
						  <div class="position-relative mb-4">
							<div class="dropdown">
							  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							  None
							  </button>
							  <div id="dropsearch3menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							  <a class="dropdown-item" >Mã số thẻ</a>
							  <a class="dropdown-item" >Biển xe đăng ký</a>
							  <a class="dropdown-item" >ID vé tháng</a>
							  <a class="dropdown-item" >Kiểu xe</a>
							  <a class="dropdown-item" >Vị trí</a>
							  <a class="dropdown-item" >Số giờ trông giữ</a>
							  </div>
							</div>
						  </div>
						  &nbsp;&nbsp;
						  <div class="position-relative mb-4">
							<input type="email" class="form-control" id="searchkeyR4slot" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
						  </div>
						  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							 
  
			  </div> 
			  <div class="d-flex justify-content-left">


						  <div class="position-relative mb-4">
							<span class="mr-2">
							  <button id="searchbtn" name="x" class="btn btn-block btn-info">&nbsp;&nbsp;Search</button>
							</span>
						  </div>
				</div>
  
  
  
				<div class="d-flex justify-content-left">
				  <span id = "searchres" class="text-trend4 text-sm">Đang cập nhật...</span>
				-</div>
				<br>
  
				<div class="d-flex justify-content-left">
				  <h3 class="card-title">In ấn, xuất pdf, csv</h3><br>
				</div>

  
				 <div class="d-flex justify-content-left">                     
					  <table id="table3s" class="display" style="width:100%">
						<thead>
						  <tr>
							<th>Time vào</th>
							<th>Time ra</th>
							<th>Mã số thẻ</th>
							<th>Biển xe</th>
							<th>ID vé tháng</th>
							<th>Kiểu xe</th>
							<th>Vị trí</th>
							<th>Giờ trông giữ</th>
						  </tr>
						</thead>
						<tbody>
						  <tr>
							<td>2020-1-2 12:03:21</td>
							<td>2020-1-2 12:03:21</td>
							<td>234322111</td>
							<td>29A-99 3829</td>
							<td>1223</td>
							<td>1</td>
							<td>CT1-12</td>
							<td>3,5</td>
						  </tr>
						</tbody>
					  </table>            
				</div><!-- /d-flex table -->

	
			  </div> <!-- /.card body -->
			</div> <!-- /.card -->
	  </div><!-- /.col -->
  
	</div> <!-- /.row -->
  
  
	</div><!-- /.container fluid -->
	</div><!-- /.content -->
 `;
	$("#slotvehicleview").empty();
	$("#slotvehicleview").append(htmlVar);
};
//slotvehicleview();

function viewnavrow(){
	var htmlVar=` `;
	$("#navrowid").empty();
	$("#navrowid").append(htmlVar);
};
viewnavrow();

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
	var htmlVar=`      <!-- Content Header (Page header) -->
	<div class="content-header">
	  <div class="container-fluid">
		<div class="row mb-2">
		<div class="col-sm-6">
		<h1 class="m-0 text-dark">Xe trông giữ ra vào</h1>
	  </div><!-- /.col -->  
		<div class="col-sm-6">
			<ol class="breadcrumb float-sm-right">
			  <li class="breadcrumb-item"><a href="#">Home</a></li>
			  <li class="breadcrumb-item active">Xe ra vào</li>
			</ol>
		  </div><!-- /.col -->
		</div><!-- /.row -->
	  </div><!-- /.container-fluid -->
	</div>
	<!-- /.content-header -->
  
	<!-- Main content -->
	<div class="content">
	<div class="container-fluid">
		<!-- /.detail data -->
		<div class="row">
  
		  <div class="col-12">
			<div class="card">
				<!-- /.card-header -->
				<div class="card-header">
				  <div class="d-flex justify-content-left">
					<h3 class="card-title">Kiểm toán nghiệp vụ: xe trông giữ ra vào bãi xe (live)</h3><br>
					
				  </div>
				  <div class="d-flex justify-content-left">
					<span class="text-trend4 text-sm">Đang cập nhật...</span>
				  </div>

				  <div class="d-flex  justify-content-left">
					<div class="position-relative mb-4" id="imgxe">
						<a href="./clip/Screenshot from 2021-01-02 20-10-46.png" target="_blank">
						<img id="im1" src="./clip/Screenshot from 2021-01-02 20-10-46.png" style="width: 220px" class="img-thumbnail" alt="c1"/>
						</a>
						
						<a href="./clip/cam21_1609046798.jpg" target="_blank">
						<img id="im2" src="./clip/cam21_1609046798.jpg" style="width: 220px" class="img-thumbnail" alt="c1"/>
						</a>
						<a href="./clip/Screenshot from 2021-01-02 20-11-04.png" target="_blank">
						<img id="im3" src="./clip/Screenshot from 2021-01-02 20-11-04.png" style="width: 220px" class="img-thumbnail" alt="c1"/>
						</a>
						<a href="./clip/cam21_1609047273.jpg" target="_blank">
						<img id="im4" src="./clip/cam21_1609047273.jpg" style="width: 220px" class="img-thumbnail" alt="c1"/>
						</a>
					</div>

				  
					<div class="position-relative mb-2 p-2">
						<h1 class="card-title">7 Cảnh báo gần đây nhất</h1><br>
						<span class="text-trend1" ><a >Phát hiện <a style="font-size:x-large" id="l1h">5</a> lượt xe vào không có cập nhật server trong 1h qua</a></span><br>
						<span class="text-trend2"><a >Phát hiện <a style="font-size:x-large" id="l3h">33</a> lượt xe ra không có cập nhật server trong 3h qua</a></span><br>
						<span class="text-trend3"><a >Phát hiện <a style="font-size:x-large" id="x1h">3</a> lượt vi phạm trong 1h qua</a></span><br>
						<span class="text-trend4"><a >Phát hiện <a style="font-size:x-large" id="x3h">24</a> lượt xe vi phạm trong 3h qua</a></span><br>
						<span class="text-trend3"><a >Phát hiện <a style="font-size:x-large" id="x24h">78</a> lượt xe vi phạm trong 24h qua</a></span><br>
						<span class="text-trend2"> <a >Phát hiện <a style="font-size:x-large" id="x3d">126</a> lượt xe vi phạm trong 3 ngày qua</a></span><br>
						<span class="text-trend1"><a >Phát hiện <a style="font-size:x-large" id="x7d">543</a> lượt xe vi phạm trong 7 ngày qua</a></span><br>
					</div>
				  </div>
				</div>



				<!-- /.card-body -->
				<div class="card-body">
				  <div class="d-flex justify-content-left">






				   <div id= "tablerend3" class="position-relative mb-4"> 
				   <h3 class="card-title">Tín hiệu từ camera</h3><br>
				   <table id="table3" class="display" style="width:100%">
				   <thead>
					   <tr>
					   	   <th>#</th>
						   <th>Xe ra CAM</th>
						   <th>Loại xe</th>
					   </tr>
				   </thead>
				   <tbody>
					   <tr>
					       <td>1</td>
						   <td>aa</td>
						   <td>bb</td>

					   </tr>
				   </tbody>    
				   <tfoot>
					   <tr>
							<th>#</th>		
							<th>Xe ra CAM</th>
							<th>Loại xe</th>

					   </tr>
				   </tfoot>
				   </table>

				   </div>





				 <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
				<div class="position-relative mb-4"> 
				<h3 class="card-title">Dữ liệu từ HiTech</h3><br>
				<table id="table4" class="display" style="width:100%">
				<thead>
					<tr>
						<th>Xe ra HITECH</th>
						<th>Loại xe</th>
						<th>Biển đăng ký</th>
						<th>Biển nhận dạng</th>
						<th>Giờ để trong bãi</th>
					</tr>
				</thead>
				<tbody>
					<tr>

						<td>aa</td>
						<td>bb</td>
						<td>aa</td>
						<td>bb</td>
						<td>bb</td>
					</tr>
				</tbody>    
				<tfoot>
					<tr>
						 <th>Xe ra HITECH</th>
						 <th>Loại xe</th>
						 <th>Biển đăng ký</th>
						 <th>Biển nhận dạng</th>
						 <th>Giờ để trong bãi</th>
					</tr>
				</tfoot>
				</table>
				</div>  






				





			  </div> <!-- d-flex -->
			  </div> <!-- /.card-body -->
			  </div>

		</div>


	</div><!-- /.row -->

	<div class="row">
		   <!-- /.chart map -->
		<div class="col-12">
					<div class="card">
					  
						<div class="card-header border-0">
						  <div class="d-flex justify-content-left">
							<h3 class="card-title">Thống kê, báo cáo, in ấn, tìm kiếm</h3>
							
						  </div>
						</div>
						 


						<div class="card-body">



							<div class="d-flex justify-content-left">
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Chọn báo cáo
								  </button>
								  <div id="dropsearch5menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Báo cáo doanh thu trông giữ xe theo tháng</a>
									<a class="dropdown-item" >Báo cáo doanh thu của năm tới thời điểm hiện tại</a>
									<a class="dropdown-item" >Báo cáo thẻ xe vé lượt vé tháng</a>
									<a class="dropdown-item" >Báo cáo so khớp xe từ camera và lưu trữ</a>
									<a class="dropdown-item" id="bcx7d">Báo cáo xe gian lận trong 7 ngày qua</a>
									<a class="dropdown-item" id="bcx3d">Báo cáo xe gian lận trong 3 ngày qua</a>
									<a class="dropdown-item" id="bcx24h">Báo cáo xe gian lận trong 24h qua</a>
									<a class="dropdown-item" id="bcx3h">Báo cáo xe gian lận trong 3h qua</a>
									<a class="dropdown-item" id="bcx1h">Báo cáo xe gian lận trong 1h qua</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;



								<div class="position-relative mb-4">
								  <div class="dropdown">
									<button class="btn btn-info dropdown-toggle" type="button" id="dropsearch6menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									  Chọn hiển thị
									</button>
									<div id="dropsearch6menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									  <a class="dropdown-item" id="trend2d" href="#">In ra PDF</a>
									  <a class="dropdown-item" id="trend2d" href="#">In ra máy in</a>
									  <a class="dropdown-item" id="trend2d" href="#">Biểu đồ 2D</a>
									  <a class="dropdown-item" id="trendcompare" href="#">Biểu đồ so sánh với hôm qua</a>
									  <a class="dropdown-item" id="trendtime"  href="#">Biểu đồ biến đổi theo thời gian</a>
									</div>
								  </div>
								</div>


							 </div>

							 <div class="d-flex justify-content-left">
							  <div class="position-relative mb-4">
								<div id= "charttrend" class="position-relative mb-4">
								  <div id="carocount3"></div>
								</div>
							  </div>
							 </div>

							 <div class="d-flex justify-content-left">
								<h3 class="card-title">Tìm kiếm mở rộng</h3><br>
							  </div>


							  <div class="d-flex justify-content-left">
								<div class="position-relative mb-4">
								  <input type="email" class="form-control" id="searchkey1" style="width: 250px" autocomplete="on" placeholder="Enter keyword" name="email">
								</div>

								<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<div class="position-relative mb-4">From&nbsp;&nbsp;</div>
								  


									  <div class="position-relative mb-4">  
										<div class="form-group">
										  <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
											<input type="text"  id="searchF" class="form-control datetimepicker-input" data-target="#datetimepicker1" />
											<span class="input-group-addon" data-target="#datetimepicker1" data-toggle="datetimepicker">
														  <span class="fa fa-calendar"></span>
											</span>
										  </div>
										</div>
								  
									  </div>



								<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<div class="position-relative mb-4">To&nbsp;&nbsp;</div>
								


									  <div class="position-relative mb-4">  
										<div class="form-group">
										  <div class="input-group date" id="datetimepicker2" data-target-input="nearest">
											<input type="text"  id="searchT" class="form-control datetimepicker-input" data-target="#datetimepicker2" />
											<span class="input-group-addon" data-target="#datetimepicker2" data-toggle="datetimepicker">
														  <span class="fa fa-calendar"></span>
											</span>
										  </div>
										</div>
									  </div>
							 </div>

							 <div class="d-flex justify-content-left">
							  và &nbsp;&nbsp;      

							   <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch1menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkey2" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch2menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkey3" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch3menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkey4" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch4menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkey5" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>


							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>

							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  <div class="position-relative mb-4">
								<span class="mr-2">
								  <button id="searchbtn" name="x" class="btn btn-block btn-info">&nbsp;&nbsp;Search</button>
								</span>
							  </div>
							</div>



							 <div class="d-flex justify-content-left">
								<span id = "searchres" class="text-trend4 text-sm">Đang cập nhật...</span>
							</div>
							<br>

							 <div class="d-flex justify-content-left">
							  <h3 class="card-title">In ấn, xuất pdf, csv</h3><br>
							 </div>



							 <div class="d-flex justify-content-left">
								<div id= "tablerend4" class="position-relative mb-4"> 
								
								<table id="table5" class="display" style="width:100%">
								  <thead>
									  <tr>
										  <th>Time vào</th>
										  <th>Time ra</th>
										  <th>Mã số thẻ</th>
										  <th>Biển xe DK</th>
										  <th>Biển xe vào</th>
										  <th>Biển xe ra</th>
										  <th>ID vé tháng</th>
										  <th>Kiểu xe</th>
										  <th>Giờ trông giữ</th>
										  <th>Thu tiền</th>
									  </tr>
								  </thead>
								  <tbody>
									  <tr>
										  <td>2020-1-2 12:03:21</td>
										  <td>2020-1-2 12:03:21</td>
										  <td>234322111</td>
										  <td>29A-99 3829</td>
										  <td>29A-99 3829</td>
										  <td>29A-99 3829</td>
										  <td>1223</td>
										  <td>Không nhận biển</td>
										  <td>7,3</td>
										  <td>25000</td>
									  </tr>
									</tbody>
								  <tfoot>
									  <tr>
										<th>Time vào</th>
										<th>Time ra</th>
										<th>Mã số thẻ</th>
										<th>Biển xe DK</th>
										<th>Biển xe vào</th>
										<th>Biển xe ra</th>
										<th>ID vé tháng</th>
										<th>Kiểu xe</th>
										<th>Giờ trông giữ</th>
										<th>Thu tiền</th>
									  </tr>
								  </tfoot>
							  </table>
							</div>              

						  </div><!-- /d-flex table -->


						<!-- <style>
						#map { position: absolute; top: 0; bottom: 0; width: 100%; };
						</style> -->

	
					  </div> <!-- /.card body -->
					</div> <!-- /.card -->
		</div><!-- /.col -->

	</div> <!-- /.row -->


	</div><!-- /.container fluid -->
	</div><!-- /.content -->`;
	$("#vehicleinoutview").empty();
	$("#vehicleinoutview").append(htmlVar);
};
viewVehicle();

function viewRequest(){
	var htmlVar=`      <!-- Content Header (Page header) -->
	<div class="content-header">
	  <div class="container-fluid">
		<div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0 text-dark">Xử lý góp ý, thông báo</h1>
        </div><!-- /.col -->
		  <div class="col-sm-6">
			<ol class="breadcrumb float-sm-right">
			  <li class="breadcrumb-item"><a href="#">Home</a></li>
			  <li class="breadcrumb-item active">Xử lý góp ý, thông báo</li>
			</ol>
		  </div><!-- /.col -->
		</div><!-- /.row -->
	  </div><!-- /.container-fluid -->
	</div>
	<!-- /.content-header -->
  
	<!-- Main content -->
	<div class="content">
	<div class="container-fluid">
		<!-- /.detail data -->
		<div class="row">
		   <!-- /.chart map -->
		<div class="col-12">
					<div class="card">
					  
						<div class="card-header border-0">
						  <div class="d-flex justify-content-left">
							<h3 class="card-title">Thống kê, báo cáo, in ấn, tìm kiếm</h3>
							</div>
						  </div>
						</div>
						 


						<div class="card-body">

							<div class="d-flex justify-content-left">
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Chọn báo cáo
								  </button>
								  <div id="dropsearch5menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Báo cáo doanh thu trông giữ xe theo tháng</a>
									<a class="dropdown-item" >Báo cáo doanh thu của năm tới thời điểm hiện tại</a>
									<a class="dropdown-item" >Báo cáo thẻ xe vé lượt vé tháng</a>
									<a class="dropdown-item" >Báo cáo so khớp xe từ camera và lưu trữ</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;



								<div class="position-relative mb-4">
								  <div class="dropdown">
									<button class="btn btn-info dropdown-toggle" type="button" id="dropsearch6menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									  Chọn hiển thị
									</button>
									<div id="dropsearch6menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									  <a class="dropdown-item" id="trend2d" href="#">In ra PDF</a>
									  <a class="dropdown-item" id="trend2d" href="#">In ra máy in</a>
									  <a class="dropdown-item" id="trend2d" href="#">Biểu đồ 2D</a>
									  <a class="dropdown-item" id="trendcompare" href="#">Biểu đồ so sánh với hôm qua</a>
									  <a class="dropdown-item" id="trendtime"  href="#">Biểu đồ biến đổi theo thời gian</a>
									</div>
								  </div>
								</div>


							 </div>

							 <div class="d-flex justify-content-left">
							  <div class="position-relative mb-4">
								<div id= "charttrend" class="position-relative mb-4">
								  <div id="carocount3"></div>
								</div>
							  </div>
							 </div>

							 <div class="d-flex justify-content-left">
								<h3 class="card-title">Tìm kiếm mở rộng</h3><br>
							  </div>


							  <div class="d-flex justify-content-left">
								<div class="position-relative mb-4">
								  <input type="email" class="form-control" id="searchkeyR1" style="width: 250px" autocomplete="on" placeholder="Enter keyword" name="email">
								</div>

								<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<div class="position-relative mb-4">From&nbsp;&nbsp;</div>
								  


									  <div class="position-relative mb-4">  
										<div class="form-group">
										  <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
											<input type="text"  id="searchR" class="form-control datetimepicker-input" data-target="#datetimepicker1" />
											<span class="input-group-addon" data-target="#datetimepicker1" data-toggle="datetimepicker">
														  <span class="fa fa-calendar"></span>
											</span>
										  </div>
										</div>
								  
									  </div>



								<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<div class="position-relative mb-4">To&nbsp;&nbsp;</div>
								


									  <div class="position-relative mb-4">  
										<div class="form-group">
										  <div class="input-group date" id="datetimepickerR2" data-target-input="nearest">
											<input type="text"  id="searchRT" class="form-control datetimepicker-input" data-target="#datetimepicker2" />
											<span class="input-group-addon" data-target="#datetimepicker2" data-toggle="datetimepicker">
														  <span class="fa fa-calendar"></span>
											</span>
										  </div>
										</div>
									  </div>
							 </div>

							 <div class="d-flex justify-content-left">
							  và &nbsp;&nbsp;      

							   <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearchR1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch1menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR2" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch2menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR3" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch3menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR4" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch4menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR5" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>


							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>

							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  <div class="position-relative mb-4">
								<span class="mr-2">
								  <button id="searchbtn" name="x" class="btn btn-block btn-info">&nbsp;&nbsp;Search</button>
								</span>
							  </div>
							</div>



							 <div class="d-flex justify-content-left">
								<span id = "searchres" class="text-trend4 text-sm">Đang cập nhật...</span>
							</div>
							<br>

							 <div class="d-flex justify-content-left">
							  <h3 class="card-title">In ấn, xuất pdf, csv</h3><br>
							 </div>



							 <div class="d-flex justify-content-left">
								<div id= "tablerend4" class="position-relative mb-4"> 
								
								<table id="table52" class="display" style="width:100%">
								  <thead>
									  <tr>
										  <th>Time vào</th>
										  <th>Time ra</th>
										  <th>Mã số thẻ</th>
										  <th>Biển xe DK</th>
										  <th>Biển xe vào</th>
										  <th>Biển xe ra</th>
										  <th>ID vé tháng</th>
										  <th>Kiểu xe</th>
										  <th>So khớp biển số</th>
										  <th>Cảnh báo</th>
										  <th>Giờ trông giữ</th>
										  <th>Thu tiền</th>
										  <th>Dùng thẻ cho xe khác</th>
										  <th>IDREC</th>
									  </tr>
								  </thead>
								  <tbody>
									  <tr>
										  <td>2020-1-2 12:03:21</td>
										  <td>2020-1-2 12:03:21</td>
										  <td>234322111</td>
										  <td>29A-99 3829</td>
										  <td>29A-99 3829</td>
										  <td>29A-99 3829</td>
										  <td>1223</td>
										  <td>1</td>
										  <td>Không nhận biển</td>
										  <td>Biển số không khớp</td>
										  <td>7,3</td>
										  <td>25000</td>
										  <td>0</td>
										  <td>32456</td>
									  </tr>
									</tbody>
								  <tfoot>
									  <tr>
										<th>Time vào</th>
										<th>Time ra</th>
										<th>Mã số thẻ</th>
										<th>Biển xe DK</th>
										<th>Biển xe vào</th>
										<th>Biển xe ra</th>
										<th>ID vé tháng</th>
										<th>Kiểu xe</th>
										<th>So khớp biển số</th>
										<th>Cảnh báo</th>
										<th>Giờ trông giữ</th>
										<th>Thu tiền</th>
										<th>Dùng thẻ cho xe khác</th>
										<th>IDREC</th>
									  </tr>
								  </tfoot>
							  </table>
							</div>              

						  </div><!-- /d-flex table -->


						<!-- <style>
						#map { position: absolute; top: 0; bottom: 0; width: 100%; };
						</style> -->

	
					  </div> <!-- /.card body -->
					</div> <!-- /.card -->
		</div><!-- /.col -->

	</div> <!-- /.row -->


	</div><!-- /.container fluid -->
	</div><!-- /.content -->`;
	$("#requestinoutview").empty();
	$("#requestinoutview").append(htmlVar);
};
viewRequest();
function viewMonitorAPI(){
	var htmlVar=`      <!-- Content Header (Page header) -->
	<div class="content-header">
	  <div class="container-fluid">
		<div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0 text-dark">Giám sát luồng, api, dịch vụ hệ thống</h1>
        </div><!-- /.col -->
		  <div class="col-sm-6">
			<ol class="breadcrumb float-sm-right">
			  <li class="breadcrumb-item"><a href="#">Home</a></li>
			  <li class="breadcrumb-item active">Giám sát API</li>
			</ol>
		  </div><!-- /.col -->
		</div><!-- /.row -->
	  </div><!-- /.container-fluid -->
	</div>
	<!-- /.content-header -->
  
	<!-- Main content -->
	<div class="content">
	<div class="container-fluid">
		<!-- /.detail data -->
		<div class="row">
		   <!-- /.chart map -->
		<div class="col-12">
					<div class="card">
					  
						<div class="card-header border-0">
						  <div class="d-flex justify-content-left">
							<h3 class="card-title">Thống kê, báo cáo, in ấn, tìm kiếm</h3>
							</div>
						  </div>
						</div>
						 


						<div class="card-body">

							<div class="d-flex justify-content-left">
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Chọn báo cáo
								  </button>
								  <div id="dropsearch5menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Báo cáo doanh thu trông giữ xe theo tháng</a>
									<a class="dropdown-item" >Báo cáo doanh thu của năm tới thời điểm hiện tại</a>
									<a class="dropdown-item" >Báo cáo thẻ xe vé lượt vé tháng</a>
									<a class="dropdown-item" >Báo cáo so khớp xe từ camera và lưu trữ</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;



								<div class="position-relative mb-4">
								  <div class="dropdown">
									<button class="btn btn-info dropdown-toggle" type="button" id="dropsearch6menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									  Chọn hiển thị
									</button>
									<div id="dropsearch6menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									  <a class="dropdown-item" id="trend2d" href="#">In ra PDF</a>
									  <a class="dropdown-item" id="trend2d" href="#">In ra máy in</a>
									  <a class="dropdown-item" id="trend2d" href="#">Biểu đồ 2D</a>
									  <a class="dropdown-item" id="trendcompare" href="#">Biểu đồ so sánh với hôm qua</a>
									  <a class="dropdown-item" id="trendtime"  href="#">Biểu đồ biến đổi theo thời gian</a>
									</div>
								  </div>
								</div>


							 </div>

							 <div class="d-flex justify-content-left">
							  <div class="position-relative mb-4">
								<div id= "charttrend" class="position-relative mb-4">
								  <div id="carocount3"></div>
								</div>
							  </div>
							 </div>

							 <div class="d-flex justify-content-left">
								<h3 class="card-title">Tìm kiếm mở rộng</h3><br>
							  </div>


							  <div class="d-flex justify-content-left">
								<div class="position-relative mb-4">
								  <input type="email" class="form-control" id="searchkeyR12" style="width: 250px" autocomplete="on" placeholder="Enter keyword" name="email">
								</div>

								<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<div class="position-relative mb-4">From&nbsp;&nbsp;</div>
								  


									  <div class="position-relative mb-4">  
										<div class="form-group">
										  <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
											<input type="text"  id="searchR2" class="form-control datetimepicker-input" data-target="#datetimepicker1" />
											<span class="input-group-addon" data-target="#datetimepicker1" data-toggle="datetimepicker">
														  <span class="fa fa-calendar"></span>
											</span>
										  </div>
										</div>
								  
									  </div>



								<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<div class="position-relative mb-4">To&nbsp;&nbsp;</div>
								


									  <div class="position-relative mb-4">  
										<div class="form-group">
										  <div class="input-group date" id="datetimepickerR2" data-target-input="nearest">
											<input type="text"  id="searchRT2" class="form-control datetimepicker-input" data-target="#datetimepicker2" />
											<span class="input-group-addon" data-target="#datetimepicker2" data-toggle="datetimepicker">
														  <span class="fa fa-calendar"></span>
											</span>
										  </div>
										</div>
									  </div>
							 </div>

							 <div class="d-flex justify-content-left">
							  và &nbsp;&nbsp;      

							   <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearchR1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch1menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR22" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch2menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR32" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch3menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR42" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch4menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR52" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>


							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>

							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  <div class="position-relative mb-4">
								<span class="mr-2">
								  <button id="searchbtn" name="x" class="btn btn-block btn-info">&nbsp;&nbsp;Search</button>
								</span>
							  </div>
							</div>



							 <div class="d-flex justify-content-left">
								<span id = "searchres" class="text-trend4 text-sm">Đang cập nhật...</span>
							</div>
							<br>

							 <div class="d-flex justify-content-left">
							  <h3 class="card-title">In ấn, xuất pdf, csv</h3><br>
							 </div>



							 <div class="d-flex justify-content-left">
								<div id= "tablerend4" class="position-relative mb-4"> 
								
								<table id="table53" class="display" style="width:100%">
								  <thead>
									  <tr>
										  <th>Time vào</th>
										  <th>Time ra</th>
										  <th>Mã số thẻ</th>
										  <th>Biển xe DK</th>
										  <th>Biển xe vào</th>
										  <th>Biển xe ra</th>
										  <th>ID vé tháng</th>
										  <th>Kiểu xe</th>
										  <th>So khớp biển số</th>
										  <th>Cảnh báo</th>
										  <th>Giờ trông giữ</th>
										  <th>Thu tiền</th>
										  <th>Dùng thẻ cho xe khác</th>
										  <th>IDREC</th>
									  </tr>
								  </thead>
								  <tbody>
									  <tr>
										  <td>2020-1-2 12:03:21</td>
										  <td>2020-1-2 12:03:21</td>
										  <td>234322111</td>
										  <td>29A-99 3829</td>
										  <td>29A-99 3829</td>
										  <td>29A-99 3829</td>
										  <td>1223</td>
										  <td>1</td>
										  <td>Không nhận biển</td>
										  <td>Biển số không khớp</td>
										  <td>7,3</td>
										  <td>25000</td>
										  <td>0</td>
										  <td>32456</td>
									  </tr>
									</tbody>
								  <tfoot>
									  <tr>
										<th>Time vào</th>
										<th>Time ra</th>
										<th>Mã số thẻ</th>
										<th>Biển xe DK</th>
										<th>Biển xe vào</th>
										<th>Biển xe ra</th>
										<th>ID vé tháng</th>
										<th>Kiểu xe</th>
										<th>So khớp biển số</th>
										<th>Cảnh báo</th>
										<th>Giờ trông giữ</th>
										<th>Thu tiền</th>
										<th>Dùng thẻ cho xe khác</th>
										<th>IDREC</th>
									  </tr>
								  </tfoot>
							  </table>
							</div>              

						  </div><!-- /d-flex table -->


						<!-- <style>
						#map { position: absolute; top: 0; bottom: 0; width: 100%; };
						</style> -->

	
					  </div> <!-- /.card body -->
					</div> <!-- /.card -->
		</div><!-- /.col -->

	</div> <!-- /.row -->


	</div><!-- /.container fluid -->
	</div><!-- /.content -->`;
	$("#monitorapiview").empty();
	$("#monitorapiview").append(htmlVar);
};
viewMonitorAPI();

function viewReport(){
	var htmlVar=`      <!-- Content Header (Page header) -->
	<div class="content-header">
	  <div class="container-fluid">
		<div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0 text-dark">Báo cáo</h1>
        </div><!-- /.col -->
		  <div class="col-sm-6">
			<ol class="breadcrumb float-sm-right">
			  <li class="breadcrumb-item"><a href="#">Home</a></li>
			  <li class="breadcrumb-item active">Báo cáo</li>
			</ol>
		  </div><!-- /.col -->
		</div><!-- /.row -->
	  </div><!-- /.container-fluid -->
	</div>
	<!-- /.content-header -->
  
	<!-- Main content -->
	<div class="content">
	<div class="container-fluid">
		<!-- /.detail data -->
		<div class="row">
		   <!-- /.chart map -->
		<div class="col-12">
					<div class="card">
					  
						<div class="card-header border-0">
						  <div class="d-flex justify-content-left">
							<h3 class="card-title">Thống kê, báo cáo, in ấn, tìm kiếm</h3>
							</div>
						  </div>
						</div>
						 


						<div class="card-body">

							<div class="d-flex justify-content-left">
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Chọn báo cáo
								  </button>
								  <div id="dropsearch5menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Báo cáo doanh thu trông giữ xe theo tháng</a>
									<a class="dropdown-item" >Báo cáo doanh thu của năm tới thời điểm hiện tại</a>
									<a class="dropdown-item" >Báo cáo thẻ xe vé lượt vé tháng</a>
									<a class="dropdown-item" >Báo cáo so khớp xe từ camera và lưu trữ</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;



								<div class="position-relative mb-4">
								  <div class="dropdown">
									<button class="btn btn-info dropdown-toggle" type="button" id="dropsearch6menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									  Chọn hiển thị
									</button>
									<div id="dropsearch6menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									  <a class="dropdown-item" id="trend2d" href="#">In ra PDF</a>
									  <a class="dropdown-item" id="trend2d" href="#">In ra máy in</a>
									  <a class="dropdown-item" id="trend2d" href="#">Biểu đồ 2D</a>
									  <a class="dropdown-item" id="trendcompare" href="#">Biểu đồ so sánh với hôm qua</a>
									  <a class="dropdown-item" id="trendtime"  href="#">Biểu đồ biến đổi theo thời gian</a>
									</div>
								  </div>
								</div>


							 </div>

							 <div class="d-flex justify-content-left">
							  <div class="position-relative mb-4">
								<div id= "charttrend" class="position-relative mb-4">
								  <div id="carocount3"></div>
								</div>
							  </div>
							 </div>

							 <div class="d-flex justify-content-left">
								<h3 class="card-title">Tìm kiếm mở rộng</h3><br>
							  </div>


							  <div class="d-flex justify-content-left">
								<div class="position-relative mb-4">
								  <input type="email" class="form-control" id="searchkeyR13" style="width: 250px" autocomplete="on" placeholder="Enter keyword" name="email">
								</div>

								<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<div class="position-relative mb-4">From&nbsp;&nbsp;</div>
								  


									  <div class="position-relative mb-4">  
										<div class="form-group">
										  <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
											<input type="text"  id="searchR3" class="form-control datetimepicker-input" data-target="#datetimepicker1" />
											<span class="input-group-addon" data-target="#datetimepicker1" data-toggle="datetimepicker">
														  <span class="fa fa-calendar"></span>
											</span>
										  </div>
										</div>
								  
									  </div>



								<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<div class="position-relative mb-4">To&nbsp;&nbsp;</div>
								


									  <div class="position-relative mb-4">  
										<div class="form-group">
										  <div class="input-group date" id="datetimepickerR2" data-target-input="nearest">
											<input type="text"  id="searchRT3" class="form-control datetimepicker-input" data-target="#datetimepicker2" />
											<span class="input-group-addon" data-target="#datetimepicker2" data-toggle="datetimepicker">
														  <span class="fa fa-calendar"></span>
											</span>
										  </div>
										</div>
									  </div>
							 </div>

							 <div class="d-flex justify-content-left">
							  và &nbsp;&nbsp;      

							   <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearchR1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch1menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR23" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch2menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR33" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch3menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR43" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch4menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR53" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>


							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>

							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  <div class="position-relative mb-4">
								<span class="mr-2">
								  <button id="searchbtn" name="x" class="btn btn-block btn-info">&nbsp;&nbsp;Search</button>
								</span>
							  </div>
							</div>



							 <div class="d-flex justify-content-left">
								<span id = "searchres" class="text-trend4 text-sm">Đang cập nhật...</span>
							</div>
							<br>

							 <div class="d-flex justify-content-left">
							  <h3 class="card-title">In ấn, xuất pdf, csv</h3><br>
							 </div>



							 <div class="d-flex justify-content-left">
								<div id= "tablerend4" class="position-relative mb-4"> 
								
								<table id="table54" class="display" style="width:100%">
								  <thead>
									  <tr>
										  <th>Time vào</th>
										  <th>Time ra</th>
										  <th>Mã số thẻ</th>
										  <th>Biển xe DK</th>
										  <th>Biển xe vào</th>
										  <th>Biển xe ra</th>
										  <th>ID vé tháng</th>
										  <th>Kiểu xe</th>
										  <th>So khớp biển số</th>
										  <th>Cảnh báo</th>
										  <th>Giờ trông giữ</th>
										  <th>Thu tiền</th>
										  <th>Dùng thẻ cho xe khác</th>
										  <th>IDREC</th>
									  </tr>
								  </thead>
								  <tbody>
									  <tr>
										  <td>2020-1-2 12:03:21</td>
										  <td>2020-1-2 12:03:21</td>
										  <td>234322111</td>
										  <td>29A-99 3829</td>
										  <td>29A-99 3829</td>
										  <td>29A-99 3829</td>
										  <td>1223</td>
										  <td>1</td>
										  <td>Không nhận biển</td>
										  <td>Biển số không khớp</td>
										  <td>7,3</td>
										  <td>25000</td>
										  <td>0</td>
										  <td>32456</td>
									  </tr>
									</tbody>
								  <tfoot>
									  <tr>
										<th>Time vào</th>
										<th>Time ra</th>
										<th>Mã số thẻ</th>
										<th>Biển xe DK</th>
										<th>Biển xe vào</th>
										<th>Biển xe ra</th>
										<th>ID vé tháng</th>
										<th>Kiểu xe</th>
										<th>So khớp biển số</th>
										<th>Cảnh báo</th>
										<th>Giờ trông giữ</th>
										<th>Thu tiền</th>
										<th>Dùng thẻ cho xe khác</th>
										<th>IDREC</th>
									  </tr>
								  </tfoot>
							  </table>
							</div>              

						  </div><!-- /d-flex table -->


						<!-- <style>
						#map { position: absolute; top: 0; bottom: 0; width: 100%; };
						</style> -->

	
					  </div> <!-- /.card body -->
					</div> <!-- /.card -->
		</div><!-- /.col -->

	</div> <!-- /.row -->


	</div><!-- /.container fluid -->
	</div><!-- /.content -->`;
	$("#reportview").empty();
	$("#reportview").append(htmlVar);
};
viewReport();


function viewDigidoc(){
	var htmlVar=`      <!-- Content Header (Page header) -->
	<div class="content-header">
	  <div class="container-fluid">
		<div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0 text-dark">Số hoá tài liệu</h1>
        </div><!-- /.col -->
		  <div class="col-sm-6">
			<ol class="breadcrumb float-sm-right">
			  <li class="breadcrumb-item"><a href="#">Home</a></li>
			  <li class="breadcrumb-item active">Số hoá tài liệu</li>
			</ol>
		  </div><!-- /.col -->
		</div><!-- /.row -->
	  </div><!-- /.container-fluid -->
	</div>
	<!-- /.content-header -->
  
	<!-- Main content -->
	<div class="content">
	<div class="container-fluid">
		<!-- /.detail data -->
		<div class="row">
		   <!-- /.chart map -->
		<div class="col-12">
					<div class="card">
					  
						<div class="card-header border-0">
						  <div class="d-flex justify-content-left">
							<h3 class="card-title">Thống kê, báo cáo, in ấn, tìm kiếm</h3>
							</div>
						  </div>
						</div>
						 


						<div class="card-body">

							<div class="d-flex justify-content-left">
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Chọn báo cáo
								  </button>
								  <div id="dropsearch5menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Báo cáo doanh thu trông giữ xe theo tháng</a>
									<a class="dropdown-item" >Báo cáo doanh thu của năm tới thời điểm hiện tại</a>
									<a class="dropdown-item" >Báo cáo thẻ xe vé lượt vé tháng</a>
									<a class="dropdown-item" >Báo cáo so khớp xe từ camera và lưu trữ</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;



								<div class="position-relative mb-4">
								  <div class="dropdown">
									<button class="btn btn-info dropdown-toggle" type="button" id="dropsearch6menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									  Chọn hiển thị
									</button>
									<div id="dropsearch6menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									  <a class="dropdown-item" id="trend2d" href="#">In ra PDF</a>
									  <a class="dropdown-item" id="trend2d" href="#">In ra máy in</a>
									  <a class="dropdown-item" id="trend2d" href="#">Biểu đồ 2D</a>
									  <a class="dropdown-item" id="trendcompare" href="#">Biểu đồ so sánh với hôm qua</a>
									  <a class="dropdown-item" id="trendtime"  href="#">Biểu đồ biến đổi theo thời gian</a>
									</div>
								  </div>
								</div>


							 </div>

							 <div class="d-flex justify-content-left">
							  <div class="position-relative mb-4">
								<div id= "charttrend" class="position-relative mb-4">
								  <div id="carocount3"></div>
								</div>
							  </div>
							 </div>

							 <div class="d-flex justify-content-left">
								<h3 class="card-title">Tìm kiếm mở rộng</h3><br>
							  </div>


							  <div class="d-flex justify-content-left">
								<div class="position-relative mb-4">
								  <input type="email" class="form-control" id="searchkeyR14" style="width: 250px" autocomplete="on" placeholder="Enter keyword" name="email">
								</div>

								<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<div class="position-relative mb-4">From&nbsp;&nbsp;</div>
								  


									  <div class="position-relative mb-4">  
										<div class="form-group">
										  <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
											<input type="text"  id="searchR4" class="form-control datetimepicker-input" data-target="#datetimepicker1" />
											<span class="input-group-addon" data-target="#datetimepicker1" data-toggle="datetimepicker">
														  <span class="fa fa-calendar"></span>
											</span>
										  </div>
										</div>
								  
									  </div>



								<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
								<div class="position-relative mb-4">To&nbsp;&nbsp;</div>
								


									  <div class="position-relative mb-4">  
										<div class="form-group">
										  <div class="input-group date" id="datetimepickerR2" data-target-input="nearest">
											<input type="text"  id="searchRT4" class="form-control datetimepicker-input" data-target="#datetimepicker2" />
											<span class="input-group-addon" data-target="#datetimepicker2" data-toggle="datetimepicker">
														  <span class="fa fa-calendar"></span>
											</span>
										  </div>
										</div>
									  </div>
							 </div>

							 <div class="d-flex justify-content-left">
							  và &nbsp;&nbsp;      

							   <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearchR1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch1menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR24" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch2menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR34" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch3menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR44" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>
							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  và &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<div class="dropdown">
								  <button class="btn btn-info dropdown-toggle" type="button" id="dropsearch4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									None
								  </button>
								  <div id="dropsearch4menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" >Mã số thẻ</a>
									<a class="dropdown-item" >Biển xe đăng ký</a>
									<a class="dropdown-item" >Biển xe vào</a>
									<a class="dropdown-item" >Biển xe ra</a>
									<a class="dropdown-item" >ID vé tháng</a>
									<a class="dropdown-item" >Kiểu xe</a>
									<a class="dropdown-item" >Có cảnh báo</a>
									<a class="dropdown-item" >Số giờ trông giữ</a>
									<a class="dropdown-item" >Thẻ dùng >n xe</a>
									<a class="dropdown-item" >So khớp camera</a>
									<a class="dropdown-item" >IDREC</a>
								  </div>
								</div>
							  </div>
							  &nbsp;&nbsp;
							  <div class="position-relative mb-4">
								<input type="email" class="form-control" id="searchkeyR54" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
							  </div>


							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>

							  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
							  <div class="position-relative mb-4">
								<span class="mr-2">
								  <button id="searchbtn" name="x" class="btn btn-block btn-info">&nbsp;&nbsp;Search</button>
								</span>
							  </div>
							</div>



							 <div class="d-flex justify-content-left">
								<span id = "searchres" class="text-trend4 text-sm">Đang cập nhật...</span>
							</div>
							<br>

							 <div class="d-flex justify-content-left">
							  <h3 class="card-title">In ấn, xuất pdf, csv</h3><br>
							 </div>



							 <div class="d-flex justify-content-left">
								<div id= "tablerend4" class="position-relative mb-4"> 
								
								<table id="table55" class="display" style="width:100%">
								  <thead>
									  <tr>
										  <th>Time vào</th>
										  <th>Time ra</th>
										  <th>Mã số thẻ</th>
										  <th>Biển xe DK</th>
										  <th>Biển xe vào</th>
										  <th>Biển xe ra</th>
										  <th>ID vé tháng</th>
										  <th>Kiểu xe</th>
										  <th>So khớp biển số</th>
										  <th>Cảnh báo</th>
										  <th>Giờ trông giữ</th>
										  <th>Thu tiền</th>
										  <th>Dùng thẻ cho xe khác</th>
										  <th>IDREC</th>
									  </tr>
								  </thead>
								  <tbody>
									  <tr>
										  <td>2020-1-2 12:03:21</td>
										  <td>2020-1-2 12:03:21</td>
										  <td>234322111</td>
										  <td>29A-99 3829</td>
										  <td>29A-99 3829</td>
										  <td>29A-99 3829</td>
										  <td>1223</td>
										  <td>1</td>
										  <td>Không nhận biển</td>
										  <td>Biển số không khớp</td>
										  <td>7,3</td>
										  <td>25000</td>
										  <td>0</td>
										  <td>32456</td>
									  </tr>
									</tbody>
								  <tfoot>
									  <tr>
										<th>Time vào</th>
										<th>Time ra</th>
										<th>Mã số thẻ</th>
										<th>Biển xe DK</th>
										<th>Biển xe vào</th>
										<th>Biển xe ra</th>
										<th>ID vé tháng</th>
										<th>Kiểu xe</th>
										<th>So khớp biển số</th>
										<th>Cảnh báo</th>
										<th>Giờ trông giữ</th>
										<th>Thu tiền</th>
										<th>Dùng thẻ cho xe khác</th>
										<th>IDREC</th>
									  </tr>
								  </tfoot>
							  </table>
							</div>              

						  </div><!-- /d-flex table -->


						<!-- <style>
						#map { position: absolute; top: 0; bottom: 0; width: 100%; };
						</style> -->

	
					  </div> <!-- /.card body -->
					</div> <!-- /.card -->
		</div><!-- /.col -->

	</div> <!-- /.row -->


	</div><!-- /.container fluid -->
	</div><!-- /.content -->`;
	$("#digidocview").empty();
	$("#digidocview").append(htmlVar);
};
viewDigidoc();
function viewWikidoc(){
	var htmlVar=`                 <!-- Content Header (Page header) -->
	<div class="content-header">
	  <div class="container-fluid">
	  <div class="row mb-2">
		  <div class="col-sm-6">
			<h1 class="m-0 text-dark">Wiki VHS</h1>
			
		  </div><!-- /.col -->
		<div class="col-sm-6">
		<ol class="breadcrumb float-sm-right">
		  <li class="breadcrumb-item"><a href="#">Home</a></li>
		  <li class="breadcrumb-item active">Wiki VHS</li>
		</ol>
		</div><!-- /.col -->
	  </div><!-- /.row -->
	  </div><!-- /.container-fluid -->
	</div>
	<!-- /.content-header -->

<!-- Main content -->
<div class="content">
<div class="container-fluid">
  <!-- /.detail data -->
  <div class="row">
	<!-- /.chart map -->
  <div class="col-12">
		<div class="card">
		  
		  <div class="card-header border-0">
			<div class="d-flex justify-content-left">
				<h3 class="m-0 text-dark">Các thông báo mới. Văn bản quy trình cho nhân viên mới. Tham khảo quy trình thủ tục các nghiệp vụ VHS</h3>
				
			</div>

		  </div>
		  

		  <hr>	
		  <div class="card-body">
		  	
		  	<div class="d-flex justify-content-left">
			  	
				<h3 class="m-0 text-dark">Công văn mới về</h3>
				<br>
			</div>
			
			<div class="d-flex justify-content-left">

			<div id= "tablerend6congvan" class="position-relative mb-4"> 
			
			<table id="table66congvan" class="display" style="width:100%">
				<thead>
				<tr>
				<th>Số TT</th>
				<th>Tên tài liệu</th>
				<th>Thuộc phòng ban</th>
				<th>Ngày phát hành</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>cv001</td>
					<td>Thông báo cắt điện</td>
					<td>BQL</td>
					<td>25-3-2021</td>
				</tr>
				<tr>
					<td>cv002</td>
					<td>Thông báo cắt điện</td>
					<td>BQL</td>
					<td>25-3-2021</td>
					</tr>
					<tr>
					<td>cv003</td>
					<td>Thông báo cắt điện</td>
					<td>BQL</td>
					<td>25-3-2021</td>
					</tr>
				</tbody>
			</table>
			</div>              

			</div><!-- /d-flex table -->    


			<hr>
			<div class="d-flex justify-content-left">
				<h3 class="m-0 text-dark">Thống kê, báo cáo, in ấn, tìm kiếm</h3>
				<br>
				<br>
			</div>
			<div class="d-flex justify-content-left">
			  <div class="position-relative mb-4">
			  <div class="dropdown">
				<button class="btn btn-info dropdown-toggle" type="button" id="dropsearch5wiki" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Chọn tài liệu
				</button>
				<div id="dropsearch5menuwiki" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item" >Thông báo mới, công văn mới</a>
				<a class="dropdown-item" >Khoá học đào tạo nhân viên mới</a>
				<a class="dropdown-item" >Quy trình Nhân sự, tuyển dụng cho VHS</a>
				<a class="dropdown-item" >Quy trình các thủ tục Kế toán cho VHS</a>
				<a class="dropdown-item" >Quy trình các thủ tục Hành chính công</a>
				<a class="dropdown-item" >Quy trình cho Lễ tân</a>
				<a class="dropdown-item" >Quy trình khác</a>
				</div>
			  </div>
			  </div>
			  &nbsp;&nbsp;



			  <div class="position-relative mb-4">
				<div class="dropdown">
				<button class="btn btn-info dropdown-toggle" type="button" id="dropsearch6menuwiki" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				  Chọn hiển thị
				</button>
				<div id="dropsearch6menuwiki" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				  <a class="dropdown-item" id="trend2dwiki" href="#">In ra PDF</a>
				  <a class="dropdown-item" id="trend2dwiki" href="#">In ra máy in</a>
				</div>
				</div>
			  </div>


			</div>

			<div class="d-flex justify-content-left">
			  <div class="position-relative mb-4">
			  <div id= "charttrendwiki" class="position-relative mb-4">
				<div id="carocount3wiki"></div>
			  </div>
			  </div>
			</div>


			  <div class="d-flex justify-content-left">
			  	<div class="position-relative mb-4">
				<input type="email" class="form-control" id="searchkeyR14wiki" style="width: 250px" autocomplete="on" placeholder="Enter keyword" name="email">
			  </div>

			  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
			  <div class="position-relative mb-4">From&nbsp;&nbsp;</div>
				


				  <div class="position-relative mb-4">  
				  <div class="form-group">
					<div class="input-group date" id="datetimepicker1wiki" data-target-input="nearest">
					<input type="text"  id="searchR4wiki" class="form-control datetimepicker-input" data-target="#datetimepicker1" />
					<span class="input-group-addon" data-target="#datetimepicker1" data-toggle="datetimepicker">
							<span class="fa fa-calendar"></span>
					</span>
					</div>
				  </div>
				
				  </div>



			  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
			  <div class="position-relative mb-4">To&nbsp;&nbsp;</div>

				  <div class="position-relative mb-4">  
				  <div class="form-group">
					<div class="input-group date" id="datetimepickerR2wiki" data-target-input="nearest">
					<input type="text"  id="searchRT4wiki" class="form-control datetimepicker-input" data-target="#datetimepicker2" />
					<span class="input-group-addon" data-target="#datetimepicker2" data-toggle="datetimepicker">
							<span class="fa fa-calendar"></span>
					</span>
					</div>
				  </div>
				  </div>
			</div>

			<div class="d-flex justify-content-left">
			  và &nbsp;&nbsp;      

			  <div class="position-relative mb-4">
			  <div class="dropdown">
				<button class="btn btn-info dropdown-toggle" type="button" id="dropsearchR1wiki" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				None
				</button>
				<div id="dropsearch1menuwiki" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item" >Phòng ban</a>
				<a class="dropdown-item" >Thuộc quy trình</a>
				<a class="dropdown-item" >Thuộc chuyên môn</a>
				<a class="dropdown-item" >Người cập nhật</a>
				<a class="dropdown-item" >Loại kiểu văn bản</a>
				</div>
			  </div>
			  </div>
			  &nbsp;&nbsp;
			  <div class="position-relative mb-4">
			  <input type="email" class="form-control" id="searchkeyR24wiki" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
			  </div>
			  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
			  và &nbsp;&nbsp;
			  <div class="position-relative mb-4">
			  <div class="dropdown">
				<button class="btn btn-info dropdown-toggle" type="button" id="dropsearch2wiki" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				None
				</button>
				<div id="dropsearch2menuwiki" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item" >Phòng ban</a>
				<a class="dropdown-item" >Thuộc quy trình</a>
				<a class="dropdown-item" >Thuộc chuyên môn</a>
				<a class="dropdown-item" >Người cập nhật</a>
				<a class="dropdown-item" >Loại kiểu văn bản</a>
				</div>
			  </div>
			  </div>
			  &nbsp;&nbsp;
			  <div class="position-relative mb-4">
			  <input type="email" class="form-control" id="searchkeyR54wiki" style="width: 130px" autocomplete="on" placeholder="Enter keyword" name="email">
			  </div>


			  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>

			  <div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;</div>
			  <div class="position-relative mb-4">
			  <span class="mr-2">
				<button id="searchbtnwiki" name="x" class="btn btn-block btn-info">&nbsp;&nbsp;Search</button>
			  </span>
			  </div>
			</div>



			<div class="d-flex justify-content-left">
			  <span id = "searchres" class="text-trend4 text-sm">Đang cập nhật...</span>
			</div>
			<br>


			<hr>
			<div class="d-flex justify-content-left">
				
				<h3 class="m-0 text-dark">Văn bản quy trình</h3>
				<br>
			</div>



			<div class="d-flex justify-content-left">

			  <div id= "tablerend4wiki" class="position-relative mb-4"> 
			  
			  <table id="table55wiki" class="display" style="width:100%">
				<thead>
				  <tr>
				  <th>Số TT</th>
				  <th>Tên tài liệu</th>
				  <th>Thuộc phòng ban</th>
				  <th>Thuộc chuyên môn</th>
				  <th>Ngày phát hành</th>
				  <th>Ngày cập nhật cuối</th>
				  <th>Phiên bản cập nhật</th>
				  <th>Người làm</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>d001</td>
					<td>Nội quy công ty VHS</td>
					<td>HR</td>
					<td>Quy trình</td>
					<td>25-3-2021</td>
					<td>25-3-2021</td>
					<td>0.9</td>
					<th>Nguyễn Văn A</th>
				  </tr>
				  <tr>
					<td>d002</td>
					<td>Quy trình Kế toán</td>
					<td>HR</td>
					<td>Quy trình</td>
					<td>25-3-2021</td>
					<td>25-3-2021</td>
					<td>0.9</td>
					<th>Nguyễn Văn A</th>
					</tr>
					<tr>
						<td>d003</td>
						<td>Quy trình Lễ tân</td>
						<td>HR</td>
						<td>Quy trình</td>
						<td>25-3-2021</td>
						<td>25-3-2021</td>
						<td>0.9</td>
						<th>Nguyễn Văn A</th>
					</tr>
					<tr>
						<td>d003</td>
						<td>Khoá học cho Nhân viên mới</td>
						<td>HR</td>
						<td>Đào tạo</td>
						<td>25-3-2021</td>
						<td>25-3-2021</td>
						<td>0.9</td>
						<th>Nguyễn Văn A</th>
					</tr>
				</tbody>
			  </table>
			</div>              

			</div><!-- /d-flex table -->
			



		  </div> <!-- /.card body -->
		</div> <!-- /.card -->
  </div><!-- /.col -->
  </div> <!-- /.row -->
</div><!-- /.container fluid -->
</div><!-- /.content -->    `;
	$("#wikidocview").empty();
	$("#wikidocview").append(htmlVar);
};
viewWikidoc();

function viewDash(){
	var htmlVar=`
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
       <div class="row">

		    <div class="col-lg-6">
            <div class="card">
              <div class="card-header border-0">
                <div class="d-flex justify-content-between">
                  <h3 class="card-title">Xe trông giữ ra vào bãi xe</h3>
                  <a href="./dist/pages/caro.html">Go to site</a>
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex">
                  <p class="d-flex flex-column">
                    <span class="text-bold text-lg">820</span>
                    <span>Members</span>
                  </p>

                </div>
                <!-- /.d-flex -->

                <div class="position-relative mb-4">
                  <img id="carosite" src="./clip/Screenshot from 2021-01-02 20-10-46.png" style="width: 500px" class="img-thumbnail" alt="c1"/>
                </div>

                <div class="d-flex flex-row justify-content-end">
                  <span class="mr-2">
                    <button id="heatEmap" name="x" class="btn btn-block btn-info">Enable heatmap view</button>
                  </span>

                </div>


              </div>
            </div>
            <!-- /.card -->
          </div>


          <div class="col-lg-6">
              <div class="card">
                      <div class="card-header border-0">
                        <h3 class="card-title">Check-In live</h3>
                        <div class="card-tools">
                          <a href="#" class="btn btn-tool btn-sm">
                            <i class="fas fa-download"></i>
                          </a>
                          <a href="#" class="btn btn-tool btn-sm">
                            <i class="fas fa-bars"></i>
                          </a>
                        </div>
                      </div>
                      <div class="card-body p-0">
                        <table class="table table-striped table-valign-middle">
                          <thead>
                          <tr>
                            <th>ID</th>
                            <th>Time CheckIn</th>
                            <th>Loop</th>

                          </tr>
                          </thead>
                          <tbody id ="carocheckin">
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <!-- /.card -->
          </div>


          <div class="col-lg-6">
                      <div class="card">
                        <div class="card-header border-0">
                          <div class="d-flex justify-content-between">
                            <h3 class="card-title">Check-In progress</h3>
                            <a href="javascript:void(0);">View Report</a>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="d-flex">
                            <p class="d-flex flex-column">
                              <span class="text-bold text-lg">820</span>
                              <span>Counts Over Time</span>
                            </p>
                            <p class="ml-auto d-flex flex-column text-right">
                              <span class="text-success">
                                <i class="fas fa-arrow-up"></i> 12.5%
                              </span>
                              <span class="text-muted">Since last week</span>
                            </p>
                          </div>
                          <!-- /.d-flex -->

                          <div class="position-relative mb-4">
                              <div id="carocount1"></div>
                          </div>

                          <div class="d-flex flex-row justify-content-end">

                          </div>
                        </div>
                      </div>
                      <!-- /.card -->
          </div>


          <div class="col-lg-6">

                    <!-- /.col-md-6 -->
                      <div class="card">
                        <div class="card-header border-0">
                          <div class="d-flex justify-content-between">
                            <h3 class="card-title">Gender, age</h3>
                            <a href="javascript:void(0);">View Report</a>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="d-flex">
                            <p class="d-flex flex-column">
                              <span class="text-bold text-lg">18,230.00</span>
                              <span>Counts Over Time</span>
                            </p>
                            <p class="ml-auto d-flex flex-column text-right">
                              <span class="text-success">
                                <i class="fas fa-arrow-up"></i> 33.1%
                              </span>
                              <span class="text-muted">Since last month</span>
                            </p>
                          </div>
                          <!-- /.d-flex -->

                          <div class="position-relative mb-4">
                            <div id="carocount2"></div>
                          </div>

                          <div class="d-flex flex-row justify-content-end">

                          </div>
                        </div>
                      </div>
                      <!-- /.card -->

                  </div> <!-- /.col-md-6 -->
          </div> <!-- /.row -->





        <div class="row">

            <div class="col-lg-6">

                    <div class="card">
                      <div class="card-header border-0">
                        <div class="d-flex justify-content-between">
                          <h3 class="card-title">Thẻ cửa từ ra vào sảnh, các tầng</h3>
                          <a href="./dist/pages/kj.html">Go to site</a>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex">
                          <p class="d-flex flex-column">
                            <span class="text-bold text-lg">820</span>
                            <span>Members</span>
                          </p>

                        </div>
                        <!-- /.d-flex -->

                        <div class="position-relative mb-4">
                          <img id="testsite" src="./clip/IMG20201223113000.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
                        </div>

                        <div class="d-flex flex-row justify-content-end">
                          <span class="mr-2">
                            <button id="heatEmap" name="x" class="btn btn-block btn-info">Enable heatmap view</button>
                          </span>

                        </div>


                      </div>
                    </div>
                    <!-- /.card -->
        </div>





        <div class="col-lg-6">
              <div class="card">
                      <div class="card-header border-0">
                        <h3 class="card-title">Check-In live</h3>
                        <div class="card-tools">
                          <a href="#" class="btn btn-tool btn-sm">
                            <i class="fas fa-download"></i>
                          </a>
                          <a href="#" class="btn btn-tool btn-sm">
                            <i class="fas fa-bars"></i>
                          </a>
                        </div>
                      </div>
                      <div class="card-body p-0">
                        <table class="table table-striped table-valign-middle">
                          <thead>
                          <tr>
                            <th>ID</th>
                            <th>Time CheckIn</th>
                            <th>Loop</th>

                          </tr>
                          </thead>
                          <tbody id ="testsitecheckin">
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <!-- /.card -->

        </div>






        <div class="col-lg-6">
                    <div class="card">
                      <div class="card-header border-0">
                        <div class="d-flex justify-content-between">
                          <h3 class="card-title">Check-In progress</h3>
                          <a href="javascript:void(0);">View Report</a>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex">
                          <p class="d-flex flex-column">
                            <span class="text-bold text-lg">820</span>
                            <span>Counts Over Time</span>
                          </p>
                          <p class="ml-auto d-flex flex-column text-right">
                            <span class="text-success">
                              <i class="fas fa-arrow-up"></i> 12.5%
                            </span>
                            <span class="text-muted">Since last week</span>
                          </p>
                        </div>
                        <!-- /.d-flex -->

                        <div class="position-relative mb-4">
                            <div id="testcount1"></div>
                        </div>

                        <div class="d-flex flex-row justify-content-end">

                        </div>
                      </div>
                    </div>
                    <!-- /.card -->
        </div>




        <div class="col-lg-6">
                  <!-- /.col-md-6 -->
                    <div class="card">
                      <div class="card-header border-0">
                        <div class="d-flex justify-content-between">
                          <h3 class="card-title">Gender, age</h3>
                          <a href="javascript:void(0);">View report</a>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex">
                          <p class="d-flex flex-column">
                            <span class="text-bold text-lg">18,230.00</span>
                            <span>Counts Over Time</span>
                          </p>
                          <p class="ml-auto d-flex flex-column text-right">
                            <span class="text-success">
                              <i class="fas fa-arrow-up"></i> 33.1%
                            </span>
                            <span class="text-muted">Since last month</span>
                          </p>
                        </div>
                        <!-- /.d-flex -->

                        <div class="position-relative mb-4">
                            <div id="testcount2"></div>
                        </div>

                        <div class="d-flex flex-row justify-content-end">

                        </div>
                      </div>
                    </div>
                    <!-- /.card -->

                  </div>
                  <!-- /.col-md-6 -->
        </div>
                </div>
                <!-- /.row -->





                <div class="row">

                  <div class="col-lg-6">
      
                          <div class="card">
                            <div class="card-header border-0">
                              <div class="d-flex justify-content-between">
                                <h3 class="card-title">Số hóa tài liệu, tìm kiếm văn bản</h3>
                                <a href="./dist/pages/kj.html">Go to site</a>
                              </div>
                            </div>
                            <div class="card-body">
                              <div class="d-flex">
                                <p class="d-flex flex-column">
                                  <span class="text-bold text-lg">820</span>
                                  <span>Members</span>
                                </p>
      
                              </div>
                              <!-- /.d-flex -->
      
                              <div class="position-relative mb-4">
                                <img id="testsite" src="./clip/sh.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
                              </div>
      
                              <div class="d-flex flex-row justify-content-end">
                                <span class="mr-2">
                                  <button id="heatEmap" name="x" class="btn btn-block btn-info">Enable heatmap view</button>
                                </span>
      
                              </div>
      
      
                            </div>
                          </div>
                          <!-- /.card -->
              </div>

              <div class="col-lg-6">
                    <div class="card">
                            <div class="card-header border-0">
                              <h3 class="card-title">Check-In live</h3>
                              <div class="card-tools">
                                <a href="#" class="btn btn-tool btn-sm">
                                  <i class="fas fa-download"></i>
                                </a>
                                <a href="#" class="btn btn-tool btn-sm">
                                  <i class="fas fa-bars"></i>
                                </a>
                              </div>
                            </div>
                            <div class="card-body p-0">
                              <table class="table table-striped table-valign-middle">
                                <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Time CheckIn</th>
                                  <th>Loop</th>
      
                                </tr>
                                </thead>
                                <tbody id ="testsitecheckin">
                                  
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <!-- /.card -->
      
              </div>

              <div class="col-lg-6">
                          <div class="card">
                            <div class="card-header border-0">
                              <div class="d-flex justify-content-between">
                                <h3 class="card-title">Check-In progress</h3>
                                <a href="javascript:void(0);">View Report</a>
                              </div>
                            </div>
                            <div class="card-body">
                              <div class="d-flex">
                                <p class="d-flex flex-column">
                                  <span class="text-bold text-lg">820</span>
                                  <span>Counts Over Time</span>
                                </p>
                                <p class="ml-auto d-flex flex-column text-right">
                                  <span class="text-success">
                                    <i class="fas fa-arrow-up"></i> 12.5%
                                  </span>
                                  <span class="text-muted">Since last week</span>
                                </p>
                              </div>
                              <!-- /.d-flex -->
      
                              <div class="position-relative mb-4">
                                  <div id="testcount1"></div>
                              </div>
      
                              <div class="d-flex flex-row justify-content-end">
      
                              </div>
                            </div>
                          </div>
                          <!-- /.card -->
              </div>
      
              <div class="col-lg-6">
                        <!-- /.col-md-6 -->
                          <div class="card">
                            <div class="card-header border-0">
                              <div class="d-flex justify-content-between">
                                <h3 class="card-title">Gender, age</h3>
                                <a href="javascript:void(0);">View report</a>
                              </div>
                            </div>
                            <div class="card-body">
                              <div class="d-flex">
                                <p class="d-flex flex-column">
                                  <span class="text-bold text-lg">18,230.00</span>
                                  <span>Counts Over Time</span>
                                </p>
                                <p class="ml-auto d-flex flex-column text-right">
                                  <span class="text-success">
                                    <i class="fas fa-arrow-up"></i> 33.1%
                                  </span>
                                  <span class="text-muted">Since last month</span>
                                </p>
                              </div>
                              <!-- /.d-flex -->
      
                              <div class="position-relative mb-4">
                                  <div id="testcount2"></div>
                              </div>
      
                              <div class="d-flex flex-row justify-content-end">
      
                              </div>
                            </div>
                          </div>
                          <!-- /.card -->
      
                        </div>
                        <!-- /.col-md-6 -->
              </div>
                      </div>
                      <!-- /.row -->









					  <div class="row">

					  <div class="col-lg-6">
		  
							  <div class="card">
								<div class="card-header border-0">
								  <div class="d-flex justify-content-between">
									<h3 class="card-title">Xử lý góp ý, thông báo</h3>
									<a href="./dist/pages/kj.html">Go to site</a>
								  </div>
								</div>
								<div class="card-body">
								  <div class="d-flex">
									<p class="d-flex flex-column">
									  <span class="text-bold text-lg">820</span>
									  <span>Members</span>
									</p>
		  
								  </div>
								  <!-- /.d-flex -->
		  
								  <div class="position-relative mb-4">
									<img id="testsite" src="./clip/dancu.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
								  </div>
		  
								  <div class="d-flex flex-row justify-content-end">
									<span class="mr-2">
									  <button id="heatEmap" name="x" class="btn btn-block btn-info">Enable heatmap view</button>
									</span>
		  
								  </div>
		  
		  
								</div>
							  </div>
							  <!-- /.card -->
				  </div>
	
				  <div class="col-lg-6">
						<div class="card">
								<div class="card-header border-0">
								  <h3 class="card-title">Check-In live</h3>
								  <div class="card-tools">
									<a href="#" class="btn btn-tool btn-sm">
									  <i class="fas fa-download"></i>
									</a>
									<a href="#" class="btn btn-tool btn-sm">
									  <i class="fas fa-bars"></i>
									</a>
								  </div>
								</div>
								<div class="card-body p-0">
								  <table class="table table-striped table-valign-middle">
									<thead>
									<tr>
									  <th>ID</th>
									  <th>Time CheckIn</th>
									  <th>Loop</th>
		  
									</tr>
									</thead>
									<tbody id ="testsitecheckin">
									  
									</tbody>
								  </table>
								</div>
							  </div>
							  <!-- /.card -->
		  
				  </div>
	
				  <div class="col-lg-6">
							  <div class="card">
								<div class="card-header border-0">
								  <div class="d-flex justify-content-between">
									<h3 class="card-title">Check-In progress</h3>
									<a href="javascript:void(0);">View Report</a>
								  </div>
								</div>
								<div class="card-body">
								  <div class="d-flex">
									<p class="d-flex flex-column">
									  <span class="text-bold text-lg">820</span>
									  <span>Counts Over Time</span>
									</p>
									<p class="ml-auto d-flex flex-column text-right">
									  <span class="text-success">
										<i class="fas fa-arrow-up"></i> 12.5%
									  </span>
									  <span class="text-muted">Since last week</span>
									</p>
								  </div>
								  <!-- /.d-flex -->
		  
								  <div class="position-relative mb-4">
									  <div id="testcount1"></div>
								  </div>
		  
								  <div class="d-flex flex-row justify-content-end">
		  
								  </div>
								</div>
							  </div>
							  <!-- /.card -->
				  </div>
		  
				  <div class="col-lg-6">
							<!-- /.col-md-6 -->
							  <div class="card">
								<div class="card-header border-0">
								  <div class="d-flex justify-content-between">
									<h3 class="card-title">Gender, age</h3>
									<a href="javascript:void(0);">View report</a>
								  </div>
								</div>
								<div class="card-body">
								  <div class="d-flex">
									<p class="d-flex flex-column">
									  <span class="text-bold text-lg">18,230.00</span>
									  <span>Counts Over Time</span>
									</p>
									<p class="ml-auto d-flex flex-column text-right">
									  <span class="text-success">
										<i class="fas fa-arrow-up"></i> 33.1%
									  </span>
									  <span class="text-muted">Since last month</span>
									</p>
								  </div>
								  <!-- /.d-flex -->
		  
								  <div class="position-relative mb-4">
									  <div id="testcount2"></div>
								  </div>
		  
								  <div class="d-flex flex-row justify-content-end">
		  
								  </div>
								</div>
							  </div>
							  <!-- /.card -->
		  
							</div>
							<!-- /.col-md-6 -->
				  </div>
						  </div>
						  <!-- /.row -->












                <div class="row">

            <div class="col-lg-6">

                    <div class="card">
                      <div class="card-header border-0">
                        <div class="d-flex justify-content-between">
                          <h3 class="card-title">BQL camp</h3>
                          <a href="./dist/pages/mira.html">Go to site</a>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex">
                          <p class="d-flex flex-column">
                            <span class="text-bold text-lg">820</span>
                            <span>Members</span>
                          </p>

                        </div>
                        <!-- /.d-flex -->

                        <div class="position-relative mb-4">
                          <img id="mirasite" src="./clip/ec.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
                        </div>

                        <div class="d-flex flex-row justify-content-end">
                          <span class="mr-2">
                            <button id="heatEmap" name="x" class="btn btn-block btn-info">Enable heatmap view</button>
                          </span>

                        </div>


                      </div>
                    </div>
                    <!-- /.card -->
        </div>
        <div class="col-lg-6">
              <div class="card">
                      <div class="card-header border-0">
                        <h3 class="card-title">Check-In live</h3>
                        <div class="card-tools">
                          <a href="#" class="btn btn-tool btn-sm">
                            <i class="fas fa-download"></i>
                          </a>
                          <a href="#" class="btn btn-tool btn-sm">
                            <i class="fas fa-bars"></i>
                          </a>
                        </div>
                      </div>
                      <div class="card-body p-0">
                        <table class="table table-striped table-valign-middle">
                          <thead>
                          <tr>
                            <th>ID</th>
                            <th>Time CheckIn</th>
                            <th>Loop</th>

                          </tr>
                          </thead>
                          <tbody id ="miracheckin">
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <!-- /.card -->

        </div>
        <div class="col-lg-6">
                    <div class="card">
                      <div class="card-header border-0">
                        <div class="d-flex justify-content-between">
                          <h3 class="card-title">Check-In progress</h3>
                          <a href="javascript:void(0);">View Report</a>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex">
                          <p class="d-flex flex-column">
                            <span class="text-bold text-lg">820</span>
                            <span>Counts Over Time</span>
                          </p>
                          <p class="ml-auto d-flex flex-column text-right">
                            <span class="text-success">
                              <i class="fas fa-arrow-up"></i> 12.5%
                            </span>
                            <span class="text-muted">Since last week</span>
                          </p>
                        </div>
                        <!-- /.d-flex -->

                        <div class="position-relative mb-4">
                            <div id="miracount1"></div>
                        </div>

                        <div class="d-flex flex-row justify-content-end">

                        </div>
                      </div>
                    </div>
                    <!-- /.card -->
        </div>
        <div class="col-lg-6">
                  <!-- /.col-md-6 -->
                    <div class="card">
                      <div class="card-header border-0">
                        <div class="d-flex justify-content-between">
                          <h3 class="card-title">Gender, age</h3>
                          <a href="javascript:void(0);">View Report</a>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex">
                          <p class="d-flex flex-column">
                            <span class="text-bold text-lg">18,230.00</span>
                            <span>Counts Over Time</span>
                          </p>
                          <p class="ml-auto d-flex flex-column text-right">
                            <span class="text-success">
                              <i class="fas fa-arrow-up"></i> 33.1%
                            </span>
                            <span class="text-muted">Since last month</span>
                          </p>
                        </div>
                        <!-- /.d-flex -->

                        <div class="position-relative mb-4">
                            <div id="miracount2"></div>
                        </div>

                        <div class="d-flex flex-row justify-content-end">

                        </div>
                      </div>
                    </div>
                    <!-- /.card -->
        </div>
                  <!-- /.col-md-6 -->
		</div>
		
		</div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content -->
		`;
	$("#dashboardview").empty();
	$("#dashboardview").append(htmlVar);
};
//viewDash();

function viewDashboard(){
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
var veColoNew ='#32f01d';  //cho danh cho xe
var veColoDone ='#8c0009';  //cho da co xe
var veColoRe ='#6b00ad';  //cho dat truoc
var imgFirstWidth = 2277;
var imgFirstHeight = 1304;
var slotVwidth = 48;
var slotVheight = 80;
var slotHwidth = 80;
var slotHheight = 48;

var table3s ='';
var dataslot = [];

var dataNewSlot={
	"x":244,
	"y":382,
	"type":2,
	"color":veColoNew
};
var slotmapdata=[
{"key":1, "value":{"x":390, "y": 550, "type":2,"color":"#8c0009"}},
{"key":2, "value":{"x":390, "y": 493, "type":2,"color":"#8c0009"}},
{"key":3, "value":{"x":390, "y": 435, "type":2,"color":"#8c0009"}},
{"key":4, "value":{"x":390, "y": 382, "type":2,"color":"#8c0009"}},
{"key":5, "value":{"x":244, "y": 550, "type":2,"color":"#8c0009"}},
{"key":6, "value":{"x":244, "y": 493, "type":2,"color":"#8c0009"}},
{"key":7, "value":{"x":244, "y": 435, "type":2,"color":"#8c0009"}},
{"key":8, "value":{"x":244, "y": 382, "type":2,"color":"#8c0009"}},
{"key":9, "value":{"x":244, "y": 280, "type":2,"color":"#8c0009"}},
{"key":10, "value":{"x":244, "y": 222, "type":2,"color":"#8c0009"}},
{"key":11, "value":{"x":390, "y": 270, "type":2,"color":"#8c0009"}},
{"key":12, "value":{"x":390, "y": 320, "type":2,"color":"#8c0009"}},
{"key":13, "value":{"x":500, "y": 270, "type":1,"color":"#8c0009"}},
{"key":14, "value":{"x":542, "y": 270, "type":1,"color":"#8c0009"}},
{"key":15, "value":{"x":610, "y": 270, "type":1,"color":"#8c0009"}},
{"key":16, "value":{"x":660, "y": 270, "type":1,"color":"#8c0009"}},
{"key":17, "value":{"x":773, "y": 270, "type":1,"color":"#8c0009"}},
{"key":18, "value":{"x":830, "y": 270, "type":1,"color":"#8c0009"}},
{"key":19, "value":{"x":500, "y": 112, "type":1,"color":"#8c0009"}},
{"key":20, "value":{"x":552, "y": 112, "type":1,"color":"#8c0009"}},
{"key":21, "value":{"x":610, "y": 112, "type":1,"color":"#8c0009"}},
{"key":22, "value":{"x":658, "y": 112, "type":1,"color":"#8c0009"}},
{"key":23, "value":{"x":773, "y": 112, "type":1,"color":"#8c0009"}}
]

var onClickChart = (data) => {
	//alert(  e.dataSeries.type + ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" );
	drawDoneSlot(dataslot[data.dataPointIndex]);
}
var dataPoints1 = [],dataPoints1b = [], dataPoints2 = [],dataPoints2b = [],dataPoints2c = [], dataPoints3 = [];
/*
var stockChart = new CanvasJS.StockChart("chartContainer",{
	theme: "light2",
	charts: [{
		height: 200,
		toolTip: {
		shared: true,
		fontSize: 12,
		},

		axisY: {
		prefix: ""
		},
		legend: {
		verticalAlign: "left",
		cursor: "pointer",
		itemclick: function (e) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
			} else {
			e.dataSeries.visible = true;
			}
			e.chart.render();
		}
		},
		data: [
		{
		showInLegend: true,
		click: onClickChart,
		name: "Slot xe bận",
		yValueFormatString: "#,###",
		type: "line",
		dataPoints : dataPoints1
		},		
		{
			showInLegend: true,
			click: onClickChart,
			name: "Slot xe đặt trước",
			yValueFormatString: "#,###",
			type: "line",
			dataPoints : dataPoints1b
			}
	
		]
	},               
	{
		height: 100,
		dataPointWidth: 10,
		toolTip: {
		shared: true
		},
		axisY: {
		suffix: " slot"
		//labelFormatter: addSymbols
		},
		legend: {
		verticalAlign: "left"
		},
		data: [
		{
			showInLegend: true,
			name: "Tổng slot xe bận",
			yValueFormatString: "#,### slot",
			dataPoints : dataPoints2
		}
		,
		{
			showInLegend: true,
			name: "Slot xe bận",
			yValueFormatString: "#,### slot",
			dataPoints : dataPoints2b
		}
		,
		{
			showInLegend: true,
			name: "Slot xe đặt trước",
			yValueFormatString: "#,### slot",
			dataPoints : dataPoints2c
		}
		]
	}                    

	],
	navigator:
		{
		height: 50,
		dataPointWidth: 10,
		legend: {
		verticalAlign: "left"
		},
		data: [{
			dataPoints: dataPoints3
		}],
		slider: {
			showInLegend: true,
			name: "Tổng hợp xu thế",
			minimum: new Date(2018, 01, 01),
			maximum: new Date(2018, 05, 01)
		}
		}                    
	}
	
);
*/

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
			//currentget = 1;
/*			
			if(currentget == 2) //call chart
			{
				currentget = 0;
				//console.log(response.rep.message);
				data = response.rep.message;

				dataPoints4 = [];			
				var currentname = "";	
				
				for(var i = 0; i < data.length; i++){
					//console.log(data[i].doc._id);
					//console.log(new Date(data[i].doc._id*1000));
					dataslot.push(data[i].doc.listslot);

					datevar = new Date(data[i].doc._id*1000)
					slotvol = data[i].doc.listslot.length
					slottypedone = 0;
					slottypere = 0;

					for(var j = 0; j < slotvol; j++){
						if(data[i].doc.listslot[j].color == "#8c0009")
							slottypedone++;
						else if (data[i].doc.listslot[j].color == "#6b00ad")
							slottypere++;
					}

					dataPoints1.push({x: new Date(datevar), y: Number(slotvol)});
					dataPoints1b.push({x: new Date(datevar), y: Number(slottypere)});
					//[Number(data[i].open), Number(data[i].high), Number(data[i].low), Number(data[i].close)]
					dataPoints2.push({x: new Date(datevar), y: Number(slotvol)});
					dataPoints2b.push({x: new Date(datevar), y: Number(slottypedone)});
					dataPoints2c.push({x: new Date(datevar), y: Number(slottypere)});
					dataPoints3.push({x: new Date(datevar), y: Number(slotvol)});
					//dataPoints4.push({x: new Date(datevar), y: Number(slotvol)});	
					
					if (currentname != data[i].hsname){
			
					}
					else{
			
					}
					currentname = data[i].hsname;
			
				}
				//console.log("RENDER CHART --------------");
				//console.log(dataPoints4);

				stockChart.render();
				var sma = calculateSMA(dataPoints3, 7);
				//stockChart.navigator2.addTo("data2", { type: "line", dataPoints: dataPoints2, showInLegend: true, yValueFormatString: "$#,###.00"})
				stockChart.charts[0].addTo("data", { type: "line", dataPoints: sma, showInLegend: false, yValueFormatString: "$#,###.00", name: "Dự báo kỳ tới"})
				stockChart.charts[0].addTo("data", { type: "line", dataPoints: dataPoints4, showInLegend: false, yValueFormatString: "$#,###.00", name: "A1234"})

				
				
				//draw done slot
				drawDoneSlot(data[0].doc.listslot);

				//stockChart2.render();
			}
*/
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
		//console.log(response);
		//console.log(currentpostVar);
		if(response.rep.result == "0"){
			//login
			if(currentpostVar == 1){
				stoploading();
				currentpost = 0;
				disAll();
				viewDashboard();
			}
			//logout
			else if(currentpostVar == 19){
				//console.log(response);
				currentpost = 0;
				currentGtoken = "";
				disAll();
				
				currentrule = 5;
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
			//checkGaccout
			else if(currentpostVar == 2){
				currentpost = 0;
				currentrule = response.rep.message;
				console.log(response.rep);
				viewLoggedin(currentrule);
				$('#linklogout').show();
				$('#linklogin').hide();
				//return currentrule
			}
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
		}	
		else{
			stoploading();
			currentpostVar = 19;
			alert(response.rep.message);
			
		}
	});

}
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
//$('#datetimepicker1').datetimepicker();
//$("#datetimepicker2").datetimepicker();
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
			alert("Có lỗi: " + error);
		// ...
		});
}
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
				$("#hiid").append("Xin chào " + currentUsername + " &nbsp; &nbsp;");
				
				currentUsername = user.phoneNumber;
				currentGtoken = user.refreshToken;
				currentrule =  validateGaccount(currentUsername,currentGtoken);
				viewLoggedin(currentrule);
				//console.log(user);
				// ...
			}).catch((error) => {
				//$("#loadingx").hide();
				stoploading();
				// User couldn't sign in (bad verification code?)
				alert("Có lỗi: " + error);
				// ...
			});
		}else{
			stoploading();
			alert('Code sai định dạng, hoặc đã quá hạn!')
		}
	}
}
var currGmailuser ='';
/*
function loginGoogle(){
	//closeNav();
	
	firebase.auth()
	.getRedirectResult()
	.then((result) => {
	  if (result.credential) {
		//console.log(result.credential);
		var credential = result.credential;
		currentGtoken = credential.accessToken;
  	   //The signed-in user info.
		var currGmailuser = result.user;
		currentUsername = currGmailuser.email;
		//console.log(currGmailuser);
		//alert(currGmailuser.email);
		$("#hiid").empty();
		$("#hiid").append("Xin chào " + currGmailuser.email+ " &nbsp; &nbsp;")
		validateGaccount(currentUsername,currentGtoken);
		$('#linklogout').show();
		$('#linklogin').hide();
		
	  }
	}).catch((error) => {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  alert("Có lỗi: " + error.message)
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
}
*/
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

	//if admin
	if(rule == 0){
		currentrule = 0;
		viewDashboard();
	}//if mod
	else if (rule == 1){
		currentrule = 1;
		viewDashboard();
	}//if normal
	else{
		currentrule = 3;
		viewDashboard();
	}
	stoploading();
	closeNav();
}
function viewVehicleTrend(){
	if( (currentGtoken != "") && ((currentrule == 1) || (currentrule == 0)) ){
		startloading();
		$('#vehicleinoutview').show();
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



		var url = apiroot+"/getfakexe1";
		jsonvar =  `{"token\":\"` 
		+ currentGtoken + `\",`
		+ `\"day1\":\"`+ "7d" + `\",`
		+ `\"day2\":\"`+ "" + `\",`
		+ `\"val1\":\"`+ "" + `\",`
		+ `\"val2\":\"`+ "" + `\",`
		+ `\"val3\":\"`+ "" + `\"`
		+ `}`;
		currentpost = 5; //get all data xe
		posthttp(url, jsonvar, currentpost);

		var url = apiroot+"/getfakexe1";
		jsonvar =  `{"token\":\"` 
		+ currentGtoken + `\",`
		+ `\"day1\":\"`+ "3d" + `\",`
		+ `\"day2\":\"`+ "" + `\",`
		+ `\"val1\":\"`+ "" + `\",`
		+ `\"val2\":\"`+ "" + `\",`
		+ `\"val3\":\"`+ "" + `\"`
		+ `}`;
		currentpost = 6; //get all data xe
		posthttp(url, jsonvar, currentpost);

		var url = apiroot+"/getfakexe1";
		jsonvar =  `{"token\":\"` 
		+ currentGtoken + `\",`
		+ `\"day1\":\"`+ "24h" + `\",`
		+ `\"day2\":\"`+ "" + `\",`
		+ `\"val1\":\"`+ "" + `\",`
		+ `\"val2\":\"`+ "" + `\",`
		+ `\"val3\":\"`+ "" + `\"`
		+ `}`;
		currentpost = 7; //get all data xe
		posthttp(url, jsonvar, currentpost);

		var url = apiroot+"/getfakexe1";
		jsonvar =  `{"token\":\"` 
		+ currentGtoken + `\",`
		+ `\"day1\":\"`+ "3h" + `\",`
		+ `\"day2\":\"`+ "" + `\",`
		+ `\"val1\":\"`+ "" + `\",`
		+ `\"val2\":\"`+ "" + `\",`
		+ `\"val3\":\"`+ "" + `\"`
		+ `}`;
		currentpost = 8; //get all data xe
		posthttp(url, jsonvar, currentpost);

		var url = apiroot+"/getfakexe1";
		jsonvar =  `{"token\":\"` 
		+ currentGtoken + `\",`
		+ `\"day1\":\"`+ "1h" + `\",`
		+ `\"day2\":\"`+ "" + `\",`
		+ `\"val1\":\"`+ "" + `\",`
		+ `\"val2\":\"`+ "" + `\",`
		+ `\"val3\":\"`+ "" + `\"`
		+ `}`;
		currentpost = 9; //get all data xe
		posthttp(url, jsonvar, currentpost);
  
	}	
}

(function myLoop(i) {
	setTimeout(function() {
		if( (currentGtoken != "") && ((currentrule == 1) || (currentrule == 0)) ){
			startloading();
			$('#vehicleinoutview').show();
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

function validateGaccount(uid,token){
	startloading();
	//viewLoggedin();
	var url = apiroot+"/valgoogle";
	var jsonvar =  `{"userid\":\"` 
	+ uid 
	+`","googletoken\":\"` 
	+ token 
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



function isOdd(num) { return num % 2;}

var xeioarr = [];
var xeioLivearr = [];
var objxe = {};
var xekeepcost = 0;
function updateDataXeLive(obj1,obj2){
	//var myTable = $(table).DataTable();
	//obj1 : Sys
	//obj2 : Live

	if(obj1.length > 1 && obj2.length > 1){
		table3.clear();
		table4.clear();
		table5.clear();
		var obj1timexeout = '';
		var obj2timexeout = '';
		var biendk = '';
		var kieuxe = '';
		var bienimgra = '';
		var diff = '';

		//add to data XE LIVE
		for(var i=obj2.length -1; i >= 0; i-- ){
			//console.log(obj2[i].doc.time.substring(0,19));

			obj2timexeout = obj2[i].doc.time.substring(0,19);
			obj2type = obj2[i].doc.type;
			table3.row.add([
				i,
				obj2timexeout,
				obj2type
			]).draw();
			xeioLivearr.push([i,obj2[i].doc.url1,obj2[i].doc.url2,obj2[i].doc.url3,obj2[i].doc.clip])
		}	

		
		//add to data XE SYS	
		for(var j= obj1.length - 1; j > 0; j-- ){
			//console.log(obj1);
			obj1timexeout = obj1[j].doc.giora;
			biendk = obj1[j].doc.biendk;
			bienimgra = obj1[j].doc.bienra ;


			diff = diffhours(obj1[j].doc.giovao,obj1[j].doc.giora);
			
			if(obj1[j].doc.kieuxe == 2){
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
			
			//console.log(obj1[j].doc._id +  "---"  +obj1[j].doc.giora);
			
			//if(xekeepcost >0 ){
				//console.log(kieuxe +  "---"  + obj1[j].doc.giora + "---" + diff + "---" + xekeepcost);
				table4.row.add([
					obj1timexeout,
					kieuxe,
					biendk,
					bienimgra,
					diff
				]).draw();

				table5.row.add([
					obj1[j].doc.giovao,
					obj1timexeout,
					obj1[j].doc.masothe,	
					biendk,
					obj1[j].doc.bienvao,
					obj1[j].doc.bienra,
					obj1[j].doc.idvethang,
					kieuxe,
					diff,
					xekeepcost
				]).draw();

				//xekeepcost = 0;
			//}
			
			//end calculating, stop loading
			if(j == obj1.length -1)
				//console.log(obj1);
				//console.log(obj2);
				stoploading();	
		}	
	}
}

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

//view vehicle status
/*
function viewVehicleTrend(){
	if( (currentGtoken != "") && ((currentrule == 1) || (currentrule == 0)) ){
		startloading();
		$('#vehicleinoutview').show();
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
*/

var IMGrate,realIMGwidth, realIMGheight;

function drawLineArrow(ctx,x,y,tx,ty,veColo){
	var headlen = 15;
	var dx = tx - x;
	var dy = ty - y;
	var angle = Math.atan2(dy, dx);
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(tx , ty);
	ctx.lineTo(tx - headlen * Math.cos(angle - Math.PI / 6), ty - headlen * Math.sin(angle - Math.PI / 6));
	ctx.moveTo(tx, ty);
	ctx.lineTo(tx - headlen * Math.cos(angle + Math.PI / 6), ty - headlen * Math.sin(angle + Math.PI / 6));
	ctx.strokeStyle = veColo;
	ctx.lineWidth = 3;
	ctx.stroke();
}

function drawInstructParking(ctx,x,y,rate,veColo){

	//y 110 - 600
	//y 700 - 1250
	//x 240 - 1160
	//x 1290 - 2200

	var newx = x * rate;
	var newy = y * rate;

	var areax1 = 240 * rate;
	var areax2 = 1160 * rate;
	var areax3 = 1290 * rate;
	var areax4 = 2200 * rate;

	var areay1 = 110 * rate;
	var areay2 = 600 * rate;
	var areay3 = 700 * rate;
	var areay4 = 1250 * rate;


	//slot p1
	if((areax1 < newx && newx < areax2) && (areay1 < newy && newy < areay2)){
		//console.log("area----------111");

		// 110 - 280
		if(areay1 < newy && newy < (280 *rate)){
			//ngang
			x= 1200 * IMGrate;
			y= 70 * IMGrate;
			tx= x + 1 ;
			ty= 200 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 1270 * IMGrate;
			y= 220 * IMGrate;
			tx= 2020 * IMGrate;
			ty= y +1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 2030 * IMGrate;
			y= 260 * IMGrate;
			tx= x + 1 ;
			ty= 1100 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)

			x= 2020 * IMGrate;
			y= 1110 * IMGrate;
			tx= 370  * IMGrate ;
			ty= y + 1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 370 * IMGrate;
			y= 1100 * IMGrate;
			tx= x + 1;
			ty= 230 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)

			//customize
			x= 395 * IMGrate;
			y= 240 * IMGrate;
			tx= newx - 10;
			ty= y + 1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
		}
		else if((280 *rate) < newy && newy < areay2){
			//doc
			x= 1200 * IMGrate;
			y= 70 * IMGrate;
			tx= x + 1 ;
			ty= 200 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 1270 * IMGrate;
			y= 220 * IMGrate;
			tx= 2020 * IMGrate;
			ty= y +1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 2030 * IMGrate;
			y= 260 * IMGrate;
			tx= x + 1 ;
			ty= 1100 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 2020 * IMGrate;
			y= 1110 * IMGrate;
			tx= 370  * IMGrate ;
			ty= y + 1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 370 * IMGrate;
			y= 1100 * IMGrate;
			tx= x + 1;
			ty= 640 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)

			//customize
			x= 370 * IMGrate;
			y= 580 * IMGrate;
			tx= x + 1;
			ty= newy + 30;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		}
	}

	//slot p2
	else if((areax3 < newx && newx < areax4) && (areay1 < newy && newy < areay2)){
		//console.log("area----------222");
		// 110 - 280
		if(areay1 < newy && newy < (280 *rate)){
			x= 1200 * IMGrate;
			y= 70 * IMGrate;
			tx= x + 1 ;
			ty= 200 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			//customize
			x= 1270 * IMGrate;
			y= 220 * IMGrate;
			tx= newx - 10;
			ty= y +1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		}
		else if((280 *rate) < newy && newy < areay2){
			x= 1200 * IMGrate;
			y= 70 * IMGrate;
			tx= x + 1 ;
			ty= 200 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)

			x= 1270 * IMGrate;
			y= 220 * IMGrate;
			tx= 2020 * IMGrate;
			ty= y +1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			//customize
			x= 2030 * IMGrate;
			y= 260 * IMGrate;
			tx= x + 1 ;
			ty= newy - 20;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
	
		}	
	
	}
	//slot p3
	else if((areax1 < newx && newx < areax2) && (areay3 < newy && newy < areay4)){
		//console.log("area----------333");

		if(areay3 < newy && newy < (950 *rate)){
			x= 1200 * IMGrate;
			y= 70 * IMGrate;
			tx= x + 1 ;
			ty= 200 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 1270 * IMGrate;
			y= 220 * IMGrate;
			tx= 2020 * IMGrate;
			ty= y +1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)

			x= 2030 * IMGrate;
			y= 260 * IMGrate;
			tx= x + 1 ;
			ty= 1100 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)

			x= 2010 * IMGrate;
			y= 1100 * IMGrate;
			tx= 350 * IMGrate ;
			ty= y + 1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			//customize
			x= 370 * IMGrate;
			y= 1100 * IMGrate;
			tx= x + 1;
			ty= newy + 20;
			drawLineArrow(ctx,x,y,tx,ty,veColo)

		}
		else if((950 *rate) < newy && newy < areay4){
			x= 1200 * IMGrate;
			y= 70 * IMGrate;
			tx= x + 1 ;
			ty= 200 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 1270 * IMGrate;
			y= 220 * IMGrate;
			tx= 2020 * IMGrate;
			ty= y +1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)

			x= 2030 * IMGrate;
			y= 260 * IMGrate;
			tx= x + 1 ;
			ty= 1100 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			//customize
			x= 2010 * IMGrate;
			y= 1110 * IMGrate;
			tx= newx + 30 ;
			ty= y + 1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		}

	}
	//slot p4
	else if((areax3 < newx && newx < areax4) && (areay3 < newy && newy < areay4)){
		//console.log("area----------444");
		if(areay3 < newy && newy < (950 *rate)){
			x= 1200 * IMGrate;
			y= 70 * IMGrate;
			tx= x + 1 ;
			ty= 200 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 1270 * IMGrate;
			y= 220 * IMGrate;
			tx= 2020 * IMGrate;
			ty= y +1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)

			x= 2030 * IMGrate;
			y= 260 * IMGrate;
			tx= x + 1 ;
			ty= 600 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			//customize
			x= 2030 * IMGrate;
			y= 650 * IMGrate;
			tx= x + 1 ;
			ty= newy - 10 ;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		}
		else if((950 *rate) < newy && newy < areay4){
			x= 1200 * IMGrate;
			y= 70 * IMGrate;
			tx= x + 1 ;
			ty= 200 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 1270 * IMGrate;
			y= 220 * IMGrate;
			tx= 2020 * IMGrate;
			ty= y +1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		
			x= 2030 * IMGrate;
			y= 260 * IMGrate;
			tx= x + 1 ;
			ty= 1100 * IMGrate;
			drawLineArrow(ctx,x,y,tx,ty,veColo)

			//customize
			x= 2010 * IMGrate;
			y= 1100 * IMGrate;
			tx= newx + 30 ;
			ty= y + 1;
			drawLineArrow(ctx,x,y,tx,ty,veColo)
		}
	}	
	//drawLineArrow(ctx,x,y,tx,ty,veColo)
}

function drawSlot(data){
	realIMGwidth = $("#mapimg").width();
	realIMGheight = $("#mapimg").height();
	//console.log(realIMGwidth);	
	//console.log(realIMGheight);

	//calculate rate
	IMGrate = realIMGwidth/imgFirstWidth;
	IMGrate = IMGrate +  0.015
	var canvas = document.getElementById('canvasimg');
	$('#canvasimg').prop('width', realIMGwidth);
	$('#canvasimg').prop('height', realIMGheight);

	//draw slot
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = data.color;

	var x = 0;
	var y = 0;
	x= data.x * IMGrate;
	y= data.y * IMGrate;


	if(data.type == 1)
		ctx.fillRect(x, y, slotVwidth * IMGrate , slotVheight* IMGrate);
	else	
		ctx.fillRect(x, y, slotHwidth * IMGrate , slotHheight* IMGrate);

	//draw arrow
	drawInstructParking(ctx,data.x,data.y,IMGrate,veColoNew);

}
function drawDoneSlot(data){
	console.log('DATA DONE ---------------');
	console.log(data);
	realIMGwidth = $("#mapimg").width();
	realIMGheight = $("#mapimg").height();

	//calculate rate
	IMGrate = realIMGwidth/imgFirstWidth;
	IMGrate = IMGrate +  0.015
	var canvas = document.getElementById('canvasimg2');
	$('#canvasimg2').prop('width', realIMGwidth);
	$('#canvasimg2').prop('height', realIMGheight);
	var x = 0;
	var y = 0;
	var ctx = canvas.getContext('2d');

	//draw slot
	for (var i=0; i<data.length; i++){
		ctx.fillStyle = data[i].color
		x= data[i].x * IMGrate;
		y= data[i].y * IMGrate;
		if(data[i].type == 1)
			ctx.fillRect(x, y, slotVwidth * IMGrate , slotVheight* IMGrate);
		else	
			ctx.fillRect(x, y, slotHwidth * IMGrate , slotHheight* IMGrate);
	}	

}


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

function viewSlotChart() {
	currentget = 2;
	gethttp(apiroot + "/getdoneslot",{});
}


function viewNewSlot(){
	viewSlotChart();
	//draw parking slot
	(function myLoop(i) {
		setTimeout(function() {
			$('#canvasimg').show();
			drawSlot(dataNewSlot);
			//console.log(i);            
			if (--i) {
				myLoop(i);
			}
		}, 1500)
	})(1000000);

	//clear parking slot
	(function myLoop2(i2) {
	setTimeout(function() {
		$('#canvasimg').hide();
		//console.log("-----"+i2);           
		if (--i2) {
			myLoop2(i2);
		}	
	}, 1800)
	})(1000000);

	$('#table3s').on('click', 'tr', function () {
		var data = table3s.row( this ).data();
	} );

	//create WebSocket connection.
	var socket = io.connect(sockhost);

	socket.on('connect', function (msg) {
		//socket.emit('vhs', 'Hello World from VHS client');
	});
	// Listen for messages
		//update sock live
		var step = 0;
	socket.on('vhs', function (msg) {
		//$('#output').empty();
		//console.log(msg.listslot);
		if(msg != null){
			//update localStorage
			dataslot = [];	
			for(var i = 0; i < msg.listslot.length; i++){
				for(var j = 0; j < slotmapdata.length; j++)
					if(slotmapdata[j]['key'] ==  msg.listslot[i])
						dataslot.push(slotmapdata[j]['value']);

			}	
			drawDoneSlot(dataslot);
		}
	});
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
var currentrule = 5;
var currentUsername = "";
$(document).ready(function () {
	startloading();

	firebase.auth().languageCode = 'en';
	var provider = new firebase.auth.GoogleAuthProvider();

	$("#hiid").empty();
	$("#hiid").append("Xin chào bạn đến với WormTelehealth!" + " &nbsp;&nbsp;")
	//init qr seed
	createqrcode('farmseed','Team BookWorm.\nMạng Y học cổ truyền khám chữa bệnh từ xa WormTelehealth.\nPhát triển bởi dathoc.net/wtd.\nHotline CSKH 0983308279.');

	//$("#hiid").append("Hi !")
	//view Login
	viewLogin();

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


	//recaptcha site key
	// data-sitekey="6LdJ_swUAAAAALY6TVGgTlJ9213eBz5i3eei6x1q"

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
		validateGaccount(currentUsername,currentGtoken);
		$("#hiid").empty();
		$("#hiid").append("Xin chào " + currentUsername + " &nbsp; &nbsp;");
		$('#linklogout').show();
		$('#linklogin').hide();
		// ...
		
	  }

	}).catch((error) => {
	  stoploading();
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  alert("Có lỗi: " + errorMessage);
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


	$("#dropsearch1ham a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		$("#dropsearchHam").text(selText);
	});



	$("#dropsearch1menu a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		$("#dropsearch1").text(selText);
	});
	$("#dropsearch2menu a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		$("#dropsearch2").text(selText);
	});	 
	$("#dropsearch3menu a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		$("#dropsearch3").text(selText);
	});
	$("#dropsearch4menu a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		$("#dropsearch4").text(selText);
	});
	$("#dropsearch5menu a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();

		$("#dropsearch5").text(selText);
		startloading();
		if( $(this).attr("id") == "bcx7d"){
			var url = apiroot+"/getfakexe1";
			jsonvar =  `{"token\":\"` 
			+ currentGtoken + `\",`
			+ `\"day1\":\"`+ "7d" + `\",`
			+ `\"day2\":\"`+ "" + `\",`
			+ `\"val1\":\"`+ "" + `\",`
			+ `\"val2\":\"`+ "" + `\",`
			+ `\"val3\":\"`+ "" + `\"`
			+ `}`;
			currentpost = 10; //get all data xe
			posthttp(url, jsonvar, currentpost);
	

		}else if($(this).attr("id") == "bcx3d"){
			var url = apiroot+"/getfakexe1";
			jsonvar =  `{"token\":\"` 
			+ currentGtoken + `\",`
			+ `\"day1\":\"`+ "3d" + `\",`
			+ `\"day2\":\"`+ "" + `\",`
			+ `\"val1\":\"`+ "" + `\",`
			+ `\"val2\":\"`+ "" + `\",`
			+ `\"val3\":\"`+ "" + `\"`
			+ `}`;
			currentpost = 11; //get all data xe
			posthttp(url, jsonvar, currentpost);
	

		}else if($(this).attr("id") == "bcx24h"){
			var url = apiroot+"/getfakexe1";
			jsonvar =  `{"token\":\"` 
			+ currentGtoken + `\",`
			+ `\"day1\":\"`+ "24h" + `\",`
			+ `\"day2\":\"`+ "" + `\",`
			+ `\"val1\":\"`+ "" + `\",`
			+ `\"val2\":\"`+ "" + `\",`
			+ `\"val3\":\"`+ "" + `\"`
			+ `}`;
			currentpost = 12; //get all data xe
			posthttp(url, jsonvar, currentpost);

		}else if($(this).attr("id") == "bcx3h"){
	
			var url = apiroot+"/getfakexe1";
			jsonvar =  `{"token\":\"` 
			+ currentGtoken + `\",`
			+ `\"day1\":\"`+ "3h" + `\",`
			+ `\"day2\":\"`+ "" + `\",`
			+ `\"val1\":\"`+ "" + `\",`
			+ `\"val2\":\"`+ "" + `\",`
			+ `\"val3\":\"`+ "" + `\"`
			+ `}`;
			currentpost = 13; //get all data xe
			posthttp(url, jsonvar, currentpost);
	

		}else if($(this).attr("id") == "bcx1h"){
			var url = apiroot+"/getfakexe1";
			jsonvar =  `{"token\":\"` 
			+ currentGtoken + `\",`
			+ `\"day1\":\"`+ "1h" + `\",`
			+ `\"day2\":\"`+ "" + `\",`
			+ `\"val1\":\"`+ "" + `\",`
			+ `\"val2\":\"`+ "" + `\",`
			+ `\"val3\":\"`+ "" + `\"`
			+ `}`;
			currentpost = 14; //get all data xe
			posthttp(url, jsonvar, currentpost);
		}
	});
	$("#dropsearch6menu a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		$("#dropsearch6").text(selText);
	});

	$('#searchres').text("Kết quả tìm kiếm: cập nhật bảng dưới.");
	


	//table3.ajax.reload();
	//table4.ajax.reload();



	$('#table3').on('click', 'tr', function () {
        var data = table3.row( this ).data();
		//alert( 'You clicked on '+data[0]+'\'s row' );
		// imgxe
		//http://localhost:8077/_vhs/_clip/xeraham_cam1_2021-02-05_15-37-53.mp4
		$("#imgxe").empty();
		
		var img1 = roothost+'_vhs/sample.jpg';
		var img2 = roothost+'_vhs/sample.jpg';
		var img3 = roothost+'_vhs/sample.jpg';
		var img4 = roothost+'_vhs/_clip/' ;
		var img5 = roothost+'_vhs/play.jpg';
		//var img4 = roothost + xeioLivearr[parseInt(data[0])][4];
		var img1 = roothost + xeioLivearr[parseInt(data[0])][1];
		var img2 = roothost + xeioLivearr[parseInt(data[0])][2];
		var img3 = roothost + xeioLivearr[parseInt(data[0])][3];
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

		<a href="`+ img4 +`" target="_blank">
		<img id="im4" src="`+ img5 +`" style="width: 220px" class="img-thumbnail" alt="xe ra vao"/>
		</a>


		`;
		$("#imgxe").append(htmlbody);
		
	} );
	

	$('#table4').on('click', 'tr', function () {
        var data = table4.row( this ).data();
        //alert( 'You clicked on '+data[0]+'\'s row' );
    } );


	
	//initDatatable1();
	//initDatatable2();

	//view trending
	$("#loadingx").hide();
	//viewSocialTrend();


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


	//view req
	$("#reqfunc").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");	
			disAll();
			viewLogin();
		}
		else{
			disAlllogged();
			if((currentrule == 0) || (currentrule == 1))
				$('#requestinoutview').show();
			else
				alert("Bạn không đủ quyền để truy cập!");			
			
		}
		closeNav();
	})
	//reqfunc

	

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

	//card mag i/o
	
	$("#cardmagneticboardfunc").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
		}
		else{
			disAlllogged();
			if((currentrule == 0) || (currentrule == 1))
				$('#cardmaginoutview').show();
			else
				alert("Bạn không đủ quyền để truy cập!");			
			
		}
		closeNav();
	})

	//view vehicle
	
	$("#vehiclefunc").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
			
		}
		else{
			disAlllogged();
			if((currentrule == 0) || (currentrule == 1))
				viewVehicleTrend();
			else
				alert("Bạn không đủ quyền để truy cập!");		
			
		}	
		closeNav();
	});

	//view digidoc
	$("#digidocfunc").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
			
		}
		else{
			disAlllogged();
			if((currentrule == 0) || (currentrule == 1)){
			   viewDigidoc();
			   $('#digidocview').show();
			}else
				alert("Bạn không đủ quyền để truy cập!");		
		}
		closeNav();
	});

	//view monitor
	$("#monitorfunc").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();
		}
		else{
			disAlllogged();
			if((currentrule == 0) || (currentrule == 1)){
				viewMonitorAPI();
				$('#monitorapiview').show();
			}else
				alert("Bạn không đủ quyền để truy cập!");		
			
		}
		closeNav();
	});

	//view report
	$("#reportfunc").click(function(e){
		if (currentGtoken == ""){
			alert("Bạn không đủ quyền để truy cập!");
			disAll();
			viewLogin();

		}
		else{
			disAlllogged();
			if((currentrule == 0) || (currentrule == 1)){
				viewReport();
				$('#reportview').show();
			}else
				alert("Bạn không đủ quyền để truy cập!");		
		}
		closeNav();
	});



	//view dashboard
	$("#dashboardfunc").click(function(e){
		if (currentGtoken == ""){
			disAll();
			viewDashboard();
			$('#linklogin').show();
		}
		else{
			disAlllogged();
			viewDashboard();
		}					
		closeNav();

	});
	$("#dashboardfunclogo").click(function(e){
		if (currentGtoken == ""){
			disAll();
			viewDashboard();;
			$('#linklogin').show();
		}
		else{
			disAlllogged();
			viewDashboard();
		}		
		closeNav();
	});

	$("#slotvehiclefunc").click(function(e){
		
		if (currentGtoken == ""){
			disAll();
			window.open('/ps', '_blank');
		}
		else{
			disAlllogged();
			if((currentrule == 0) || (currentrule == 1)){
				$('#slotvehicleview').show();
				viewNewSlot();
			 }else
				 alert("Bạn không đủ quyền để truy cập!");	
		}		
		closeNav();
		
	});

	//view wiki
	$("#wikifunc").click(function(e){
		stoploading();
		disAlllogged();
		//if((currentrule == 0) || (currentrule == 1)){
		
		$('#wikidocview').show();
		viewWikidoc();
		table5wiki = $('#table55wiki').DataTable( {
			"scrollY":        "500px",
			"scrollCollapse": true,
			"paging":         true,
			"pageLength": 20,
			"lengthChange": false
		} );
		table6congvan = $('#table66congvan').DataTable( {
			"scrollY":        "500px",
			"scrollCollapse": true,
			"paging":         true,
			"pageLength": 20,
			"lengthChange": false
		} );
		//}else
			//alert("Bạn không đủ quyền để truy cập!");		
		closeNav();
	});



	//logout
	$("#logoutfunc").click(function(e){
		startloading();
		var url = apiroot+"/exptok";
		var jsonvar =  `{"tokenkey\":\"` 
		+ currentGtoken 
		+ `\"}`;
		currentpost = 19; //logout
		posthttp(url, jsonvar, currentpost);
			
		closeNav();
	});

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