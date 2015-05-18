jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options);
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

$(document).ready(function() {

    $('#confirm').on('show.bs.modal', function (e) {
        $message = $(e.relatedTarget).attr('data-message');
        $(this).find('.modal-body p').text($message);
        $title = $(e.relatedTarget).attr('data-title');
        $(this).find('.modal-title').text($title);
        var form = $(e.relatedTarget).closest('form');
        $(this).find('.modal-footer #confirmbtn').data('form', form);
    });
});

function isNumber(str) {

    return /^\+?[0-9][0-9]*$/.test(str);
}

function accountMulti(arg1, arg2) {

    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();

    try {
        m += s1.split(".")[1].length
    } catch (e) {}

    try {
        m += s2.split(".")[1].length
    } catch (e) {}

    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

// 去掉左右空格
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

// 去掉左空格
String.prototype.ltrim = function () {
    return this.replace(/(^\s*)/g, "");
}

// 去掉右空格
String.prototype.rtrim = function () {
    return this.replace(/(\s*$)/g, "");
}
