<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/lib/bootstrap.min.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/lib/font-awesome.min.css">
    <!--[if IE 7]>
    <link rel="stylesheet" href="assets/css/lib/font-awesome-ie7.min.css">
    <![endif]-->
    <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/header.css">
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/bootstrap.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/jquery.form.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/user.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/shopcartcache.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/common.js"></script>
    <script type="text/javascript">
        var rootPATH = '<%=request.getContextPath()%>';
    </script>
</head>
<body>
<div class="header">
    <div class="header-body">
        <div class="left"><a href="<%=request.getContextPath()%>"/></div>
        <div class="menu"><a href="<%=request.getContextPath()%>">首页</a></div>
        <div class="menu"><a href="<%=request.getContextPath()%>/module/product.do">服务和组件</a></div>
        <div class="menu">菜单三</div>
        <div class="menu">菜单四</div>
        <div class="menu">菜单五</div>
        <div class="menu"><a href="<%=request.getContextPath()%>/manager/user.do">客户中心</a></div>
    </div>
    <div class="user">
        <div id="top_top">
            <div class="logBox" style="position:fixed;_position:ablolute">
                <div class="login">
                    <div class="siderNav">
                        <ul class="topmenu" clearfix="" id="jq_topmenu">
                            <li class="userinfo">
                                <strong><i class="icon-user icon-1-5x"></i>用户信息</strong>

                                <div class="jq_hidebox">
                                    <div id="usertitle">
                                        <span>您好，请先<a data-toggle="modal" data-target="#loginModal" style="color: orange;">&nbsp;&nbsp;登陆</a></span>
                                    </div>
                                    <dl class="aSty01">
                                        <dt></dt>
                                        <dd>
                                            <div class="text-center" style="height: 30px;margin-top: 10px;">
                                                <a href="/" style="margin-right:10px"><i class="icon-credit-card"></i>
                                                    我的订单 </a> | <a href="/" style="margin-left:10px"><i
                                                    class="icon-star"></i> 我的收藏 </a>
                                            </div>
                                            <div class="text-center" style="height: 30px">
                                                <a href="/" style="margin-right:10px"><i class="icon-reorder"></i> 已经购买
                                                </a> | <a href="/" style="margin-left:10px"><i
                                                    class="icon-volume-up"></i> 通知消息 </a>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li id="collectBox" class="shopcart">
                                <strong><i class="icon-shopping-cart icon-1-5x"></i>购物车</strong>

                                <div class="jq_hidebox">
                                    <dl class='aSty01'></dl>
                                    <dt> 最新加入的商品</dt>
                                    <dd id="shopping-cart-list"></dd>
                                    <dd>
                                        <a id="accountshopcart" class="btn btn-danger btn-default" href="javascript:void(0);">
                                            <n class="icon-shopping-cart">去购物车结算</n>
                                        </a>
                                    </dd>
                                </div>
                            </li>
                            <li class="webnav">
                                <strong><i class="icon-cogs icon-1-5x"></i>网站导航</strong>

                                <div class="jq_hidebox" style="display: none; ">
                                    <a href="javascript:;" onclick="SetHome(window.location)" class="red"
                                       target="_self"> 设为首页 </a> <a class="red" target="_self" onclick="addCookie()"
                                                                    href="javascript:void(0);"> 添加收藏 </a>
                                    <dl class="aSty01">
                                        <dt><a href="/"> 菜单 </a></dt>
                                        <dd><a href="/"> 菜单一 </a> | <a href="/"> 菜单一 </a> | <a href="/">菜单一 </a> <br>
                                            <a href="/"> 菜单一 </a> | <a href="/"> 菜单一 </a> | <a href="/"> 菜单一 </a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<form class="modal fade" id="loginModal" tabindex="-1" role="dialog" name="loginModal" method="post"
      action="<%=request.getContextPath()%>/user/login.do"
      aria-labelledby="myModalLabel" aria-hidden="true">
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
                                       id="v6usernum" name="v6usernum"
                                       placeholder="请输入v6帐号">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" style="width:300px;margin: auto;"
                                       id="v6userpass" name="v6userpass"
                                       placeholder="请输入v6帐号密码">
                            </div>
                            <div class="form-group" style="width:300px;margin: auto;">
                                <div class="row">
                                    <div class="col-xs-5 col-md-7">
                                        <input type="text" class="form-control " id="smspass" name="smspass" placeholder="请输入短信密码">
                                    </div>
                                    <div class="col-xs-7 col-md-5">
                                        <button id="v6verifynum" type="button" class="btn btn-info btn-block">获取短信密码</button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group"
                                 style="width:300px;margin-top: 25px;margin-right: auto;margin-left: auto;">
                                <div class="text-center">
                                    <button id="btnsubmit" type="submit" class="btn btn-primary btn-block">立即登录</button>
                                </div>
                            </div>
                            <div class="text-center">
                                <h4>
                                    <small>如果您忘记v6帐号密码,请与我们的管理员联系。</small>
                                </h4>
                            </div>
                            <div id="errormsg" class="text-center" style="margin-top: 20px"></div>
                            <div class="form-group" style="margin-bottom: 60px;"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

<div class="modal fade" id="confirm" role="dialog" aria-labelledby="confirmLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" id="confirmbtn">确定</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            </div>
        </div>
    </div>
</div>


</body>
</html>