$(document).ready(function() {

    loadshopcartCache();

    accountShopcart();
});

// 加载缓冲中的最新加入购物车的数据
function loadshopcartCache() {

    var allshopcartgoods = $.cookie("allshopcartgoods");
    if (allshopcartgoods) {

        var allshopcartgoodsArr = allshopcartgoods.split(",");
        for (var i in allshopcartgoodsArr) {

            var goodsId = allshopcartgoodsArr[i];
            if (goodsId && goodsId != "" && goodsId != "null") {

                var goodsCount = $.cookie(goodsId + "_cartcount");
                var goodsName = $.cookie(goodsId + "_cartname");
                var goodsprice = $.cookie(goodsId + "_cartprice");

                var cartObject = $("#" + goodsId + "_cartid");
                if (cartObject) {
                    cartObject.remove();
                }

                var gooddt = $("<div id='" + goodsId + "_cartid' class='shopping'></div>")
                $("<a style='float:left;' href=''><img src='' class='shoppingimage'>" + goodsName + "</a><span id='goodsCount' style='margin-top: 6px;float: right;padding-right: 55px;'>" + goodsCount + "</span>"
                +"<span id='goodsprice' style='display: none;'>" + goodsprice + "</span><n style='float: right;margin-top: 8px;cursor:pointer;margin-right: -64px;' class='icon-trash' onclick='removeShopCart(" + goodsId + ");'></n>").appendTo(gooddt);
                gooddt.appendTo($("#shopping-cart-list"));
            }
        }
    }
}

// 去购物并结算
function accountShopcart() {

    var sysAccessId = "";
    $("#accountshopcart").on('click', function(e) {

        sysAccessId = $.cookie("sysAccessId");
        if (!sysAccessId || sysAccessId == "") {
            $('#loginModal').modal('show');
            return;
        }

        saveShopcart();

    });

}

// 将购物车数据保持至数据库
function saveShopcart() {

    var goodsArray = [], userId = $.cookie("userId");
    $("#shopping-cart-list").find("div").each(function() {

        var goodsObject = {};
        var goodsId = $(this).attr("id").substring(0, $(this).attr("id").length - 7);
        var goodsName = $(this).find("a").text();
        var goodsCount = $(this).find("span[id='goodsCount']").text();
        var goodsPrice = $(this).find("span[id='goodsprice']").text();

        goodsObject.userid = userId.trim();
        goodsObject.goodsid = goodsId.trim();
        goodsObject.goodsname = goodsName.trim();
        goodsObject.goodsprice = goodsPrice.trim();
        goodsObject.goodscount = goodsCount.trim();

        goodsArray.push(goodsObject);
    });

    var shopcarts = JSON.stringify(goodsArray);
    $.ajax({
        cache: true,
        type: "POST",
        url: rootPATH + "/manager/saveshopcart.do",
        data: {shopcarts : shopcarts},
        async: true,
        error: function () {
            showwarning('连接服务器发生错误,请联系管理员。');
        },
        success: function (data) {

            var allshopcartgoods = $.cookie("allshopcartgoods");
            if (allshopcartgoods) {

                var allshopcartgoodsArr = allshopcartgoods.split(",");
                for (var i in allshopcartgoodsArr) {

                    var goodsId = allshopcartgoodsArr[i];
                    if (goodsId && goodsId != "" && goodsId != "null") {

                        $.cookie(goodsId + "_cartid", null);
                        $.cookie(goodsId + "_cartcount", null);
                        $.cookie(goodsId + "_cartname", null);
                        $.cookie(goodsId + "_cartprice", null);
                    }
                }

                $.cookie("allshopcartgoods", null);
            }

            window.location.href = rootPATH + "/manager/shoppingcart.do";
        }
    });
}