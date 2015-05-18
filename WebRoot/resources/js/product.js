$(document).ready(function () {

    loadTree();
    bindproducttabEvent();
    bindSafetabEvent();
    addToShopCartEvent();
});

function loadTree(selectedcode) {

    selectedcode = selectedcode == "" || !selectedcode ? "AA" : selectedcode;
    $.ajax({
        cache: true,
        type: "POST",
        url: rootPATH + "/module/getmodule.do",
        data: {code: selectedcode},
        async: false,
        error: function () {
            alert("Connection error");
        },
        success: function (data) {

            var ul = $("<ul></ul>");
            var productArray = eval("(" + data + ")");
            for (var i in productArray) {

                var productObject = productArray[i];
                var id = productObject.code;
                var name = productObject.name;
                var leaf = productObject.leaf;
                var moduleid = productObject.moduleid;

                var li = $("<li></li>").attr({"id": id});
                if (leaf == "false") {
                    $("<span></span>").attr({"onclick":"slideTree('_" + id + "')","id":"_"+id}).append("<i class='icon-plus-sign'></i> " + name).appendTo(li);
                } else {
                    $("<span></span>").attr({"onclick":"loadmodule('" + id + "')","id":moduleid}).append("<i class='icon-leaf'></i> " + name).appendTo(li);
                }
                li.appendTo(ul);
            }

            $("#" + selectedcode).append(ul);
            bindAttrEvent();
        }
    });
}

function loadmodule(moduleid) {

    $.ajax({
        cache: true,
        type: "POST",
        url: rootPATH + "/module/getmoduleinfo.do",
        data: {moduleid: moduleid},
        async: false,
        error: function () {
            alert("Connection error");
        },
        success: function (data) {

            var moduleObject = eval("(" + data + ")");
            var moduleid = moduleObject.moduleid;
            moduleid = !moduleid || moduleid == "" ? "" : moduleid;
            var modulename = moduleObject.name;
            modulename = !modulename || modulename == "" ? "" : modulename;
            var moduleprice = moduleObject.moduleprice;
            moduleprice = !moduleprice || moduleprice == "" ? "1" : moduleprice;

            $("#module_id")[0].innerText = moduleid;
            $("#module_name")[0].innerText = modulename;
            $("#module_price")[0].innerHTML = "<h4><strong>￥" + moduleprice + "</strong></h4>";
        }
    });
}

function slideTree(id) {

    var selected = $('#' + id);
    var children = selected.parent().children('ul');
    if (children.is(":visible")) {
        children.hide('fast');
        selected.parent().find(' > span > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
    } else {
        children.show('fast');
        selected.parent().find(' > span > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
    }
}

function bindAttrEvent() {

    $('.tree li').not(':has(ul)').on('click', function(e) {

        var selectedcode = $(this).attr("id");
        if ($(this).children('ul').length == 0) {
            loadTree(selectedcode);
        }
        $(this).off('click');
    });

    $('.tree li').addClass('parent_li');

}

// 商品详情页
function bindproducttabEvent() {

    $('.xq li').on('click', function(e){

        $(this).addClass("active").children("a").css("color", "rgb(248, 149, 22)");
        $(this).siblings().removeClass("active").children("a").css("color", "black");

        var selectedId = $(this).children("a").attr("id");
        var tabContent = $("#" + selectedId + "-content");
        if (tabContent) {

            tabContent.css("display", "block");
            tabContent.siblings().css("display", "none");
            return;
        }

        if (selectedId == "tab_0") {

        } else if (selectedId == "tab_1") {


        } else if (selectedId == "tab_2") {


        } else if (selectedId == "tab_3") {


        } else if (selectedId == "tab_4") {


        }
    });
}

// 延保费用
function bindSafetabEvent() {

    $('#safegoods li').on('click', function (e) {

        var selected = $(this).children("a");
        if (selected.css("border-color") == "rgb(255, 165, 0)") {
            selected.css({"border": "#DDD solid 1px", "color": "black"});
            return;
        }

        selected.css({"border": "orange solid 2px", "color": "orange"});
        $(this).siblings().children("a").css({"border": "#DDD solid 1px", "color": "black"});
    });
}

function addToShopCartEvent() {

    $('#addtoshopcart').on('click', function() {

        var goodsid = $("#module_id").text();
        var goodsName = $("#module_name").text();
        var goodsprice = $("#module_price").text().substring(1);

        var goodsCount = $.cookie(goodsid + "_cartcount");
        goodsCount = !goodsCount ? 1 : parseInt(goodsCount) + 1;

        $.cookie(goodsid + "_cartid", goodsid, { expires: 0.25 });
        $.cookie(goodsid + "_cartcount", goodsCount, { expires: 0.25 });
        $.cookie(goodsid + "_cartname", goodsName, { expires: 0.25 });
        $.cookie(goodsid + "_cartprice", goodsprice, { expires: 0.25 });

        var cartObject = $("#" + goodsid + "_cartid");
        if (cartObject) {
            cartObject.remove();
        }

        var gooddt = $("<div id='" + goodsid + "_cartid' class='shopping'></div>")
        $("<a style='float:left;' href=''><img src='' class='shoppingimage'>" + goodsName + "</a><span id='goodsCount' style='margin-top: 6px;float: right;padding-right: 55px;'>" + goodsCount + "</span>"
        +"<span id='goodsprice' style='display: none;'> " + goodsprice + " </span><n style='float: right;margin-top: 8px;cursor:pointer;margin-right: -64px;' class='icon-trash' onclick='removeShopCart(" + goodsid + ");'></n>").appendTo(gooddt);
        gooddt.appendTo($("#shopping-cart-list"));

        var allshopcartgoods = $.cookie("allshopcartgoods");
        if (!allshopcartgoods || allshopcartgoods.indexOf(goodsid) <= 0) {
            allshopcartgoods += "," + goodsid;
            $.cookie("allshopcartgoods", allshopcartgoods, { expires: 0.25 });
        }

    });
}

function removeShopCart(goodsid) {

    $("#" + goodsid + "_cartid").remove();

    $.cookie(goodsid + "_cartid", null);
    $.cookie(goodsid + "_cartcount", null);
    $.cookie(goodsid + "_cartname", null);
    $.cookie(goodsid + "_cartprice", null);

    var allshopcartgoods = $.cookie("allshopcartgoods");
    if (allshopcartgoods) {
        allshopcartgoods = allshopcartgoods.replace(goodsid, "");
        $.cookie("allshopcartgoods", allshopcartgoods, { expires: 0.25 });
    }

    /*var userId = $.cookie("userId");
    $.ajax({
        cache: true,
        type: "POST",
        url: rootPATH + "/manager/deleteshopcart.do",
        data: {shopcartids: shopcarts},
        async: true,
        error: function () {
            showwarning('连接服务器发生错误,请联系管理员。');
        },
        success: function (data) {



        }
    });*/

}