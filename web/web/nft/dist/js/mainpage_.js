/*
Created by koolj@
Dec 29, 2020.
*/

//let sockhost = 'http://localhost:8076//';
var apiroot = 'https://9341539e3f0b.ngrok.io/api';
//https://9341539e3f0b.ngrok.io/
//http://localhost:8076

function isOdd(num) { return num % 2;}

function disAll(){
	$('#dashboardview').hide();
	$('#loginview').hide();
	$('#newcampview').hide();
	$('#configuserview').hide();
	$('#configreportview').hide();
	$('#reportview').hide();
	$('#admincontrol').hide();
	$('#cusreg').hide();
	$('#linklogout').hide();
	$('#linklogin').hide();
	$('#inforlogin').hide();
	$('#cardmaginoutview').hide();
	$('#manageuserview').hide();
	$('#configSNSview').hide();
	$('#reportview').hide();
	$('#helpview').hide();
	$('#vehicleinoutview').hide();
	
	//helpview
}
function disAlllogged(){
	$("#loadingx").hide()
	$('#dashboardview').hide();
	$('#loginview').hide();
	$('#newcampview').hide();
	$('#configuserview').hide();
	$('#configreportview').hide();
	$('#configSNSview').hide();
	$('#reportview').hide();
	$('#cardmaginoutview').hide();
	$('#manageuserview').hide();
	$('#configSNSview').hide();
	$('#reportview').hide();
	$('#vehicleinoutview').hide();
	$('#helpview').hide();
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
				<img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
				<div class="media-body">
				  <h3 class="dropdown-item-title">
					KoolJ
					<span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
				  </h3>
				  <p class="text-sm">Hệ thống WillNFT Dathoc.NET bắt đầu thử nghiệm.</p>
				  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
				</div>
			  </div>
			  <!-- Message End -->
			</a>
			<div class="dropdown-divider"></div>
			<a href="#" class="dropdown-item">
			  <!-- Message Start -->
			  <div class="media">
				<img src="dist/img/avatar5.png" alt="User Avatar" class="img-size-50 img-circle mr-3">
				<div class="media-body">
				  <h3 class="dropdown-item-title">
					William
					<span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
				  </h3>
				  <p class="text-sm">WilNFT xin hân hạnh phục vụ!</p>
				  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
				</div>
			  </div>
			  <!-- Message End -->
			</a>
			<div class="dropdown-divider"></div>
			<a href="#" class="dropdown-item">
			  <!-- Message Start -->
			  <div class="media">
				<img src="dist/img/a3.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
				<div class="media-body">
				  <h3 class="dropdown-item-title">
					Jane
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
		<img src="img/logo.png" alt="Miraway Logo" >
	  </a>
  
	  <!-- Sidebar -->
	  <div class="sidebar">
  
		<!-- Sidebar user panel (optional) -->
		<div id="inforlogin">
		<div class="user-panel mt-3 pb-3 mb-3 d-flex">
		  <div class="image">
			<img id="Uimg" src="" class="img-circle elevation-2" alt="User Image">
		  </div>
		  <div class="info">
			<a id = "Uname" href="#" class="d-block">Admin Anh Phạm</a>
		  </div>
		</div>
		</div>
  
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
					<p>Tạo tài sản số NFT</p>
				  </a>
				</li>
  
				<li class="nav-item">
				  <a id="cardmagneticboardfunc"  class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Sàn giao dịch tài sản số</p>
				  </a>
				</li>
  
				<li class="nav-item">
				  <a id="digidocfunc" href="#" class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Đăng bán tài sản số</p>
				  </a>
				</li>
  
				<li class="nav-item">
				  <a id="sitefunc" href="#" class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Về cá nhân</p>
				  </a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">
					  <i class="far fa-circle nav-icon"></i>
					  <p>Botchat hỏi đáp</p>
					</a>
				  </li>
  				<li class="nav-item">
					<a href="#" class="nav-link">
					  <i class="far fa-circle nav-icon"></i>
					  <p>Đăng ký Token WillNFT</p>
					</a>
				  </li>
				  <li class="nav-item">
				  <a href="#" class="nav-link">
					<i class="far fa-circle nav-icon"></i>
					<p>Về  DongXuanCoin</p>
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
                  <h1 class="m-0 text-dark">Đăng nhập</h1>
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
                    <h3 class="card-title">Login</h3>
                  </div>
                </div>
                <div class="card-body">
                  <!-- /.d-flex -->
                  <div class="d-flex flex-row justify-content-left">    
                    <div class="position-relative mb-4">
                      <label for="email">Số điện thoại đã đăng ký với  WillNFT:&nbsp;</label>
                      <input type="email" class="form-control" id="phoneid" style="width: 250px" autocomplete="on" placeholder="Thêm +84, ví dụ: +84 98 330 8279" name="email">
                    </div>
                  </div>
                    <div class="d-flex flex-row justify-content-left"> 
                      <div class="position-relative mb-4">
                      </div>
                    </div>


                          


                    <div class="d-flex flex-row justify-content-left">  
                      <div class="position-relative mb-4">
						<span class="mr-2">
						<div id=" WillNFTrecaptcha"></div>
                          <button id="btngetsms" name="x" class="btn btn-block btn-info">Nhận SMS code trên điện thoại</button>
                          <a class="text-sm">(kiểm tra điện thoại sau khi click)</a><br>
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
                      <label for="email">Số điện thoại đã đăng ký với  WillNFT:&nbsp;</label>
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
                      <br>
                      <p>...hoặc nhận trợ giúp qua  WillNFT.</p>
                      <canvas class="form-control" style="padding: 5px" id="farmseed"></canvas>&nbsp;
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
                      <img id="carosite" src="clip/IMG20201223113000.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
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
                        <img id="carosite" src="clip/IMG20201223113000.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
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

function viewnavrow(){
	var htmlVar=` `;
	$("#navrowid").empty();
	$("#navrowid").append(htmlVar);
};
viewnavrow();

function viewhelp(){
	var htmlVar=`         <div class="content-header">
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
			   <a href="https://docs.google.com/document/d/1QC8PCF0SAzAg5RlMXAqCR1qUDroCmZ0tzhjL18jeAk8/edit?usp=sharing"  target=”_blank”><b>Hướng dẫn sử dụng - WillNFT v0.9</b></a>

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
		  </div><!-- /.col -->
		  <div class="col-sm-6">
			<ol class="breadcrumb float-sm-right">
			  <li class="breadcrumb-item"><a href="#">Home</a></li>
			  <li class="breadcrumb-item active">Tạo tài sản số NFT</li>
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


				  <div class="position-relative mb-4">
					<a href="clip/Screenshot from 2021-01-02 20-10-46.png" target="_blank">
					  <img id="im1" src="clip/Screenshot from 2021-01-02 20-10-46.png" style="width: 220px" class="img-thumbnail" alt="c1"/>
					</a>
					
					<a href="clip/cam21_1609046798.jpg" target="_blank">
					  <img id="im2" src="clip/cam21_1609046798.jpg" style="width: 220px" class="img-thumbnail" alt="c1"/>
					</a>
					<a href="clip/Screenshot from 2021-01-02 20-11-04.png" target="_blank">
					  <img id="im3" src="clip/Screenshot from 2021-01-02 20-11-04.png" style="width: 220px" class="img-thumbnail" alt="c1"/>
					</a>
					<a href="clip/cam21_1609047273.jpg" target="_blank">
					  <img id="im4" src="clip/cam21_1609047273.jpg" style="width: 220px" class="img-thumbnail" alt="c1"/>
					</a>
				  </div>

				  
					<div class="position-relative mb-6 p-2">
						<h3 class="card-title">7 Cảnh báo gần đây nhất</h3><br>
						<span class="text-trend1" ><a class="text-sm">Phát hiện 1 lượt xe vào không có cập nhật server lúc 2021-01-2 7:45:12</a></span><br>
						<span class="text-trend2"><a class="text-sm">Phát hiện 1 lượt xe ra không có cập nhật server lúc 2021-01-2 7:45:12</a></span><br>
						<span class="text-trend3"><a class="text-sm">Phát hiện 1 lượt thẻ 22453 đi xe khác đăng ký lúc 2021-01-2 7:45:12</a></span><br>
						<span class="text-trend4"><a class="text-sm">Phát hiện 8 lượt xe không trùng biển ra vào tính từ 2021-01-2 7:45:12</a></span><br>
						<span class="text-trend5">1  <a class="text-sm">Lượt phục vụ tìm đồ thất lạc. Tổng: 43.</a></span><br>
						<span class="text-trend6">243  <a class="text-sm">Số nhân viên đang phục vụ. Tổng: 546.</a></span><br>
						<span class="text-trend7">23  <a class="text-sm">Dịch vụ api, webservice đang bật. Tổng: 23.</a></span><br>
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
							  <th>Có xe vào</th>
							  <th>Có xe ra</th>
							  <th>Clip10</th>
						  </tr>
					  </thead>
					  <tbody>
						  <tr>
							<td>2021-01-2 12:02:23</td>
							<td>2021-01-2 12:02:23</td>
							<td>Link: abc_21-2-32.webm</td>
						  </tr>
						  <tr>
							  <td>2021-01-2 12:02:23</td>
							  <td>2021-01-2 12:02:23</td>
							  <td>Link: abc_21-2-32.webm</td>
						  </tr>
					  </tbody>
					  <tfoot>
						  <tr>
							<th>Có xe vào</th>
							<th>Có xe ra</th>
							<th>Clip10</th>
						  </tr>
					  </tfoot>
				  </table>
				</div>
				<div class="position-relative mb-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
				<div class="position-relative mb-4"> 
				  <br> 
				  <br> 
				  <br> 
				</div>  

				<div id= "tablerend4" class="position-relative mb-4"> 
				<h3 class="card-title">Dữ liệu từ server</h3><br>
				<table id="table4" class="display" style="width:100%">
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
						<th>IDREC</th>
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
	$("#vehicleinoutview").empty();
	$("#vehicleinoutview").append(htmlVar);
};
viewVehicle();


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
                  <a href="dist/pages/caro.html">Go to site</a>
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
                  <img id="carosite" src="clip/Screenshot from 2021-01-02 20-10-46.png" style="width: 500px" class="img-thumbnail" alt="c1"/>
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
                          <a href="dist/pages/kj.html">Go to site</a>
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
                          <img id="testsite" src="clip/IMG20201223113000.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
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
                                <a href="dist/pages/kj.html">Go to site</a>
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
                                <img id="testsite" src="clip/sh.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
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
                          <a href="dist/pages/mira.html">Go to site</a>
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
                          <img id="mirasite" src="clip/ec.jpg" style="width: 500px" class="img-thumbnail" alt="c1"/>
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
viewDash();


function viewDashboard(){
	$('#dashboardview').show();
	//first, get all count people
	currentget = 1
	//gethttp(apiroot+"/allcount",{})
}

function viewLogin(){
	disAll();
	$('#linklogin').show();
	$('#loginview').show();
	appearRecaptcha();
}

var currentpost = 0;
var currentget = 0;
var currenttoken = "";
var currentrule = 0;
var currentUsername = "";

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
		
		if(response.result == "0"){
			if(currentget == 1) //call all count people
			{
				//all countpeo
				myStorage.clear();
				response.rep.camps.forEach(function(currentValue, index){
					siteid = currentValue.fromcamp;
					myStorage.setItem(currentValue.cid+"_"+currentValue.fromcamp, JSON.stringify(currentValue));
					//console.log(JSON.stringify(currentValue));
				})
				displaycount(myStorage);

			}
		}
		else
			alert(response.message);

	});

}
function posthttp(url, jsonvar){
	$("#loadingx").show();
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
		$("#loadingx").hide();
		if(response.result == "0"){
			//login
			if(currentpost == 1){
				currentpost = 0;
				disAll();
				viewDashboard();
				$('#inforlogin').show();
				$('#linklogout').show();
				$('#linklogin').hide();

				currentUsername = response.tokenKey.name;
				currentrule = response.tokenKey.currentrule;

				$("#Uname").text(currentUsername);
				
				var imgArray = ['img/a1.png', 'img/a2.png', 'img/a3.png', 'img/a4.png', 'img/a5.png'];
				var randimg = imgArray[Math.floor(Math.random() * imgArray.length)];
				//if admin
				if(currentrule == 1){
					$("#Uimg").attr("src", "img/admin.jpg");
					$('#admincontrol').show();
					$('#cusreg').show();
				}
				else{
					$("#Uimg").attr("src", randimg);
					$('#cusreg').show();
				}	
				currenttoken = response.tokenKey.tokenKey;

			}
			//logout
			else if(currentpost == 0){
				currentpost = 0;
				
				disAll();
				viewDashboard();
				$('#inforlogin').hide();
				$('#linklogout').hide();
				$('#linklogin').show();
			}
		}	
		else{
			alert(response.message);
		}
	});

}

function closeNav(){
	jQuery('body').removeClass('sidebar-open');
	jQuery('body').addClass('sidebar-collapse');
}

function createqrcode(id,val) {
	//init qrcode
	QRCode.toCanvas(document.getElementById(id), val, function (error) {
		if (error) console.error(error)
		//console.log('QR '+id+' success!');
	});
}

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

//$('#datetimepicker1').datetimepicker();
//$("#datetimepicker2").datetimepicker();
var appVerifier;
var captchaID = '';

function appearRecaptcha(){
	//check reCaptcha v2
	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(' WillNFTrecaptcha');
	recaptchaVerifier.render().then((widgetId) => {
		window.recaptchaWidgetId = widgetId;
	});
	appVerifier = window.recaptchaVerifier;
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
			alert(error);
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
				$("#hiid").empty();
				$("#hiid").append("Xin chào " + user.phoneNumber + " &nbsp; &nbsp;")
				//console.log(user);
				// ...
			}).catch((error) => {
				//$("#loadingx").hide();
				stoploading();
				// User couldn't sign in (bad verification code?)
				alert(error);
				// ...
			});
		}else{
			stoploading();
			alert('Code sai định dạng, hoặc đã quá hạn!')
		}
	}
}
var currGmailuser ='';
function loginGoogle(){
	//closeNav();
	
	firebase.auth()
	.getRedirectResult()
	.then((result) => {
	  if (result.credential) {
		//console.log(result.credential);
		/** @type {firebase.auth.OAuthCredential} */
		var credential = result.credential;
  	   //The signed-in user info.
		var currGmailuser = result.user;
		//console.log(currGmailuser);
		alert(currGmailuser.email);
		$("#hiid").empty();
		$("#hiid").append("Xin chào " + currGmailuser.email+ " &nbsp; &nbsp;")
		// This gives you a Google Access Token. You can use it to access the Google API.
		var token = credential.accessToken;
		// ...
		
	  }

	}).catch((error) => {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  alert(error.message)
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
}
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
/*
====================================================================================================================
MAIN OPERATION
====================================================================================================================
*/
$(document).ready(function () {
	firebase.auth().languageCode = 'en';
	var provider = new firebase.auth.GoogleAuthProvider();

	$("#hiid").empty
	$("#hiid").append("Xin chào bạn đến với WillNFT!" + " &nbsp;&nbsp;")
	//init qr seed
	createqrcode('farmseed','Tổ chức Dathoc.NET.\nMạng chuỗi khối WillNFT\nPhát triển bởi dathoc.net/cv\nHotline CSKH 0983308279');

	//$("#hiid").append("Hi !")
	//view Login
	viewLogin();


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
		//console.log(result.credential);
		/** @type {firebase.auth.OAuthCredential} */
		var credential = result.credential;
		// The signed-in user info.
		var currGmailuser = result.user;
		//console.log(currGmailuser);
		//alert(currGmailuser.email);
		$("#hiid").empty();
		$("#hiid").append("Xin chào " + currGmailuser.email+ " &nbsp; &nbsp;")
		// This gives you a Google Access Token. You can use it to access the Google API.
		var token = credential.accessToken;
		// ...
		
	  }

	}).catch((error) => {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  alert(error.message)
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
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
	});
	$("#dropsearch6menu a").on('click', function(e) {
		e.preventDefault(); // cancel the link behaviour
		var selText = $(this).text();
		$("#dropsearch6").text(selText);
	});

	$('#searchres').text("Kết quả tìm kiếm: cập nhật bảng dưới.");
	

	$('#table3').DataTable( {
        "scrollY":        "500px",
        "scrollCollapse": true,
        "paging":         false
	} );
	$('#table4').DataTable( {
        "scrollY":        "500px",
        "scrollCollapse": true,
        "paging":         false
	} );
	$('#table5').DataTable( {
		dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
		]
	} );

	var table3 = $('#table3').DataTable();
	var table4 = $('#table4').DataTable();

	$('#table3').on('click', 'tr', function () {
        var data = table3.row( this ).data();
        alert( 'You clicked on '+data[0]+'\'s row' );
	} );
	
	$('#table4').on('click', 'tr', function () {
        var data = table4.row( this ).data();
        alert( 'You clicked on '+data[0]+'\'s row' );
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

	//guideline
	$("#helpfunc").click(function(e){
		disAlllogged();
		$('#helpview').show();
		//var url = apiroot+"/exptok";
		//var jsonvar =  `{"tokenkey\":\"` + currenttoken + `\"}`;
		//currentpost = 0; //logout
		//posthttp(url, jsonvar);

				
		closeNav();
	});

	//login - registration
	$("#loginfunc").click(function(e){
		disAll();
		viewLogin();

		closeNav();

	});

	//card mag clik
	$("#cardmagneticboardfunc").click(function(e){
		disAlllogged();
		//$('#cardmaginoutview').show();
		
				
		closeNav();
	})

	//view social trending

	$("#trendingfunc").click(function(e){
		disAlllogged();
		//viewSocialTrend();
				
		closeNav();
	});

	//view dashboard
	$("#dashboardfunc").click(function(e){
		disAlllogged();
		viewDashboard();
				
		closeNav();
	});
	$("#dashboardfunclogo").click(function(e){
		disAlllogged();
		viewDashboard();
				
		closeNav();
	});

	//logout
	$("#logoutfunc").click(function(e){
		var url = apiroot+"/exptok";
		var jsonvar =  `{"tokenkey\":\"` + currenttoken + `\"}`;
		currentpost = 0; //logout
		posthttp(url, jsonvar);

				
		closeNav();
	});


	//monitoring
	$("#sitefunc").click(function(e){
		disAlllogged();
		//viewDashboard();
				
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
