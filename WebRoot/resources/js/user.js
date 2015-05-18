$(document).ready(function () {

    loadUserInfo();

    $("#jq_topmenu li").hover(function () {
        $(this).addClass("hover").find("div.jq_hidebox").show();
    }, function () {
        $(this).removeClass("hover").find("div.jq_hidebox").hide();
    });

    // 登陆窗口居中
    $('#loginModal').on('shown.bs.modal', function () {
        $("#loginModal").modal().css({
            "margin-top": function () {
                return ($(this).height() / 7);
            }
        });
    })

    $("#v6verifynum").bind("click", function () {
        getVerifyNum();
    });

    var options = {
        success:showResponse
    };
    $('#loginModal').ajaxForm(options);

});

function showResponse(responseText)  {

    var userObject = eval("(" + responseText + ")");
    var errorinfo = userObject.error;
    var userCNName = userObject.userCNName;
    var sysAccessId = userObject.sysAccessID;
    var userId = userObject.userId;

    if (errorinfo && errorinfo != "") {
        setError(errorinfo);
        return;
    }

    $.cookie("userCNName", userCNName, { expires: 0.25 });
    $.cookie("sysAccessId", sysAccessId, { expires: 0.25 });
    $.cookie("userId", userId, { expires: 0.25 });

    loadUserInfo();

    $('#loginModal').modal('hide');
}

function loadUserInfo() {

    var userCNName = $.cookie("userCNName");
    var sysAccessId = $.cookie("sysAccessId");
    if (sysAccessId && sysAccessId != "") {

        $("#usertitle").children().remove();
        $("#usertitle").append("<span>" + userCNName + "<a style='color: orange;float: right;' href='javascript:void(0);' onclick='userLogout();'>注销</a></span>");
    } else {

        $("#usertitle").children().remove();
        $("#usertitle").append("<span>您好，请先<a data-toggle='modal' data-target='#loginModal' style='color: orange;'>&nbsp;&nbsp;登陆</a></span>");
    }
}

function userLogout() {

    var sysAccessId = $.cookie("sysAccessId");
    $.ajax({
        cache: true,
        type: "POST",
        url:rootPATH + "/user/logout.do",
        data:{sysAccessId:sysAccessId},
        async: false,
        error: function() {
            alert("Connection error");
        },
        success: function(data) {

            $.cookie("userCNName", null);
            $.cookie("sysAccessId", null);
            loadUserInfo();
        }
    });
}

function getVerifyNum() {

    var v6usernum = $("#v6usernum")[0].value;
    var v6userpass = $("#v6userpass")[0].value;

    if (!v6usernum || v6usernum == "") {
        setError("v6帐号不能为空.");
        return;
    }

    if (!v6userpass || v6userpass == "") {
        setError("v6帐号密码不能为空.");
        return;
    }

    $.ajax({
        url: rootPATH + "/user/verify.do",// 跳转到 action
        data: {
            username: v6usernum,
            userpass: v6userpass
        },
        type: 'post',
        success: function (data) {
            if (data && isNumber(data)) {
                $("#smspass")[0].value = "";
                $("#smspass")[0].placeholder = "密码序号 : " + data;
                $("#errormsg").hide();
            } else {
                setError(data);
            }
        },
        error: function (data) {
            setError(data);
        }
    });
}

function setError(errorinfo) {

    errorinfo = errorinfo.replace(/!/gm, '').replace(/！/gm, '').replace("\n", "");
    var errorObj = $("#errormsg");
    errorObj.removeClass("alert alert-danger").addClass("alert alert-danger").html('<H5>' + errorinfo + '</H5>');
    errorObj.show();
}

function SetHome(url) {
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(url);
    } else {
        alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
    }
}

