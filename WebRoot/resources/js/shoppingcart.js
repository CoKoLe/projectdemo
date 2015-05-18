$(document).ready(function () {
    loadshoppings();
});

function loadshoppings() {

    if (!isLogined())
        return;

    var sysAccessId = $.cookie("sysAccessId");
    $.ajax({
        cache: true,
        type: "POST",
        url: rootPATH + "/manager/loadshoppingcart.do",
        data: {sysAccessId: sysAccessId},
        async: true,
        error: function () {
            showwarning('连接服务器发生错误,请联系管理员。');
        },
        success: function (data) {

            var goodsArray = eval("(" + data + ")");
            if (goodsArray.length == 1 && goodsArray[0].error != "") {
                $('#goodstable').css('display', 'none');
                $('#foot').css('display', 'none');
                showwarning(goodsArray[0].error);
                return;
            }

            for (var i in goodsArray) {

                var goodsObject = goodsArray[i];

                var tr = $('<tr></tr>');
                $('<td name="goodsid" class="hidden">' + goodsObject.goodsid + '</td>').appendTo(tr);
                $('<td><input name="checkitem" type="checkbox"/></td>').appendTo(tr);
                $('<td class="text-left">' + goodsObject.goodsname + '</td>').appendTo(tr);
                $('<td>' + goodsObject.goodsprice + '</td>').appendTo(tr);
                $('<td>' + goodsObject.goodscount + '</td>').appendTo(tr);
                $('<td name="amount">' + goodsObject.goodsamount + '</td>').appendTo(tr);
                $('<td><a name="deleteitem" data-toggle="modal" data-target="#confirm" data-title="删除购物车数据" data-message="您确定删除这条购物车数据吗 ?">删除</a></td>').appendTo(tr);

                $('#goodslist').append(tr);
            }

            setgoodstableEvent();
        }
    });
}

function isLogined() {

    var sysAccessId = $.cookie("sysAccessId");
    if (!sysAccessId || sysAccessId == "") {

        var warnning = '<div id="reloginwarn" class="alert alert-danger alert-dismissible" role="alert">'
            + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
            + '<span>您的当前登陆信息已经失效,请<a data-toggle="modal" data-target="#loginModal" style="color: red;cursor: pointer;">&nbsp;&nbsp;重新登陆</a></span></div>';

        $('#goodstable').css('display', 'none');
        $('#foot').css('display', 'none');
        $('#goodscart').append(warnning);
        return false;
    }

    $('#reloginwarn').css('display', 'none');

    return true;
}

function showwarning(message) {

    var warnning = '<div id="reloginwarn" class="alert alert-warning alert-dismissible" role="alert">'
        + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
        + '<span>' + message + '</span></div>';

    $('#goodstable').css('display', 'none');
    $('#foot').css('display', 'none');
    $('#goodscart').append(warnning);

}

function setgoodstableEvent() {

    $("#check-all").bind("click", function () {
        if (this.checked) {
            this.checked = true;
            $("#check-all-bottom")[0].checked = true;
            $("[name = checkitem]:checkbox").each(function () {
                this.checked = true;
            });
        } else {
            this.checked = false;
            $("#check-all-bottom")[0].checked = false;
            $("[name = checkitem]:checkbox").each(function () {
                this.checked = false;
            });
        }

        getTotal();
    });

    $("#check-all-bottom").bind("click", function () {
        if (this.checked) {
            this.checked = true;
            $("#check-all")[0].checked = true;
            $("[name = checkitem]:checkbox").each(function () {
                this.checked = true;
            });
        } else {
            this.checked = false;
            $("#check-all")[0].checked = false;
            $("[name = checkitem]:checkbox").each(function () {
                this.checked = false;
            });
        }

        getTotal();
    });

    $("[name = checkitem]:checkbox").bind("click", function () {
        var $check = $("[name = checkitem]:checkbox");
        $("#check-all")[0].checked = $check.length == $check.filter(":checked").length;
        $("#check-all-bottom")[0].checked = $check.length == $check.filter(":checked").length;

        getTotal();
    });

    $("#goodstable tbody tr").each(function() {

        var $deleteed = $(this);
        var deleteitem = $(this).find("a[name='deleteitem']");
        deleteitem.bind("click", function () {

            $('#confirm').find('.modal-footer #confirmbtn').on('click', function() {

                var goodsId = $deleteed.find("td[name='goodsid']").html(), userId = $.cookie("userId");
                $.ajax({
                    cache: true,
                    type: "POST",
                    url: rootPATH + "/manager/deleteshopcart.do",
                    data: {goodsId: goodsId, userId: userId},
                    async: true,
                    error: function () {
                        showwarning('连接服务器发生错误,请联系管理员。');
                    },
                    success: function (data) {

                        $deleteed.remove();
                        getTotal();
                    }
                });
            });
        });
    });
}

function getTotal() {

    var selectedTotal = 0, amountTotal = 0;
    $("#goodstable tbody tr").each(function() {

        var checkitem = $(this).find("input[type='checkbox']");
        if (checkitem.attr("id") != "check-all") {

            if (checkitem[0].checked) {

                var amountvalue = $(this).find("td[name^='amount']").html();
                if (isNaN(amountvalue)) {

                    alert("小计金额错误.");
                    return;
                }
                amountvalue = amountvalue * 100;
                amountTotal += parseInt(amountvalue);
                selectedTotal++;
            }
        }
    });

    amountTotal = (amountTotal/100).toString();
    amountTotal = amountTotal.indexOf(".") <= 0 ? amountTotal + ".00" :
        amountTotal.substring(amountTotal.indexOf(".") + 1).length < 2 ? amountTotal + "0" : amountTotal;

    $("#selectedTotal")[0].innerHTML = selectedTotal;
    $("#priceTotal")[0].innerHTML = amountTotal;
}
