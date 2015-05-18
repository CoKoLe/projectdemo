$(document).ready(function() {

    $('.usercontent .nav>li').on('click', function() {

        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    // 购物车
    $('#myshoppingcart').on('click', function() {
        window.location.href = rootPATH + "/manager/shoppingcart.do";
    });
});

