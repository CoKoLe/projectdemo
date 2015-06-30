<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String fileName = request.getParameter("fileName");
    String title = request.getParameter("title");
    title = java.net.URLDecoder.decode(title, "UTF-8");
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>文档预览</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width"/>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/lib/bootstrap.min.css">
    <style type="text/css">
        html, body {
            height: 100%;
        }
        body {
            margin: 0;
            padding: 0;
            overflow: auto;
        }
    </style>
</head>
<body>

<!--<jsp:include page="header.jsp" flush="true"/>-->
<div class="c"

                <div id="documentViewer" class="flexpaper_viewer" style="width:980px;height:800px;margin:auto;"></div>
<!--<jsp:include page="buttom.jsp" flush="true"/>-->

<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/respond.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/resources/js/lib/bootstrap.min.js"></script>
<script type="text/javascript">

    function getDocumentUrl(document) {
        return "php/services/view.php?doc={doc}&format={format}&page={page}".replace("{doc}", document);
    }

    var startDocument = "Paper";
    var fileName = '<%=fileName%>' + '.swf';

    $('#documentViewer').FlexPaperViewer(
            {
                config: {

                    SWFFile: 'doc/' + fileName,
                    Scale: 0.7,
                    ZoomTransition: 'easeOut',
                    ZoomTime: 0.5,
                    ZoomInterval: 0.2,
                    FitPageOnLoad: false,
                    FitWidthOnLoad: false,
                    FullScreenAsMaxWindow: false,
                    ProgressiveLoading: false,
                    MinZoomSize: 0.2,
                    MaxZoomSize: 5,
                    SearchMatchAll: false,
                    InitViewMode: 'Portrait',
                    RenderingOrder: 'flash',
                    StartAtPage: '',

                    ViewModeToolsVisible: true,
                    ZoomToolsVisible: true,
                    NavToolsVisible: true,
                    CursorToolsVisible: true,
                    SearchToolsVisible: false,
                    WMode: 'window',
                    localeChain: 'zh_CN'
                }
            }
    );
</script>

</body>
</html>