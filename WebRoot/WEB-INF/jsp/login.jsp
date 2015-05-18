<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>v6商城-帐号登录</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/bootstrap.min.css">
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/bootstrap.min.js"></script>
    <style type="text/css">
        .body {
            width: 800px;
            height: 500px;
            margin: auto;
            padding-top: 100px;
            background: #f9f9f9;
        }
    </style>
</head>
<body class="body">
<form method="post" action="">
    <div class="modal-dialog" style="width: 700px">
        <div class="modal-content">
            <div class="modal-body">
                <div class="page-header">
                    <div class="row">
                        <div class="col-xs-11 col-md-1"><img class="img-responsive"
                                                             src="<%=request.getContextPath()%>/resources/images/trayImageX36.png"
                                                             alt="">
                        </div>
                        <div class="col-xs-1 col-md-11"><h4>一千个企业 一千个v6</h4></div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body">

                        <div class="page-header">
                            <div class="text-center">
                                <h4>
                                    v6商城用户登录
                                </h4>
                            </div>
                        </div>
                        <form class="form-horizontal" role="form">
                            <div class="form-group">
                                <input type="text" class="form-control" style="width:300px;margin: auto;"
                                       id="v6usernum"
                                       placeholder="请输入v6帐号">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" style="width:300px;margin: auto;"
                                       id="v6userpass"
                                       placeholder="请输入v6帐号密码">
                            </div>
                            <div class="form-group" style="width:300px;margin: auto;">
                                <div class="row">
                                    <div class="col-xs-5 col-md-7">
                                        <input type="text" class="form-control " id="valid" placeholder="请输入短信密码">
                                    </div>
                                    <div class="col-xs-7 col-md-5">
                                        <button type="button" class="btn btn-info btn-block">获取短信密码</button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group"
                                 style="width:300px;margin-top: 25px;margin-right: auto;margin-left: auto;">
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary btn-block">立即登录</button>
                                </div>
                            </div>
                            <div class="text-center">
                                <h4>
                                    <small>如果您忘记v6帐号密码,请与我们的管理员联系。</small>
                                </h4>
                            </div>
                            <div class="form-group" style="margin-bottom: 60px;"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal -->
</form>
</body>
</html>