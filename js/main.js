console.log("now surfing...");
var linkList = document.getElementsByTagName("a");

// "q"を押したらリンクに数字が表示される
// 数字を入力したらリンクに飛べる
$(function () {
    $("html").keyup(function (e) {
        if (e.which == 81) {
        }
    });
});

// "/"を押したらinputフォームに飛べる