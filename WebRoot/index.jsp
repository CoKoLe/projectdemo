<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="c">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="<%=request.getContextPath()%>/resources/js/lib/html5shiv.min.js"></script>
    <script src="<%=request.getContextPath()%>/resources/js/lib/respond.min.js"></script>
    <![endif]-->

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="<%=request.getContextPath()%>/resources/js/lib/ie10-viewport-bug-workaround.js"></script>

    <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/lib/bootstrap.min.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/lib/font-awesome.min.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/starter-template.css">

</head>

<body>
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a class="navbar-brand" href="#">网站首页</a></li>
                <li><a class="navbar-brand" href="#about">课程书籍</a></li>
                <li><a class="navbar-brand" href="#contact">开发者API</a></li>
            </ul>
        </div>
        <!--/.nav-collapse -->
    </div>
</nav>

<div class="container">

    <div class="starter-template">
        <h1>Bootstrap starter template</h1>

        <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a
            mostly barebones HTML document.</p>
    </div>

</div>
<!-- /.container -->

<!-- Placed at the end of the document so the pages load faster -->
<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/jquery.form.js"></script>

</body>
</html>
