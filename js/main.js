console.log("now surfing...");
var linkList = document.getElementsByTagName("a");
$(function () {
    // "q"を押したらリンクに数字を表示する
    $("html").keyup(function (e) {
        if (e.which == 81) {
            $.each(linkList, function (index, value) {
                // aタグの前にspanタグを追加
                $(linkList[index]).before('<span class="beforeLink">' + index + '</span>');
            });
            // spanタグをdisplay
            $(".beforeLink").css("display", "inline");
            // 数字を入力したらリンクに飛べる
            setTimeout(function () {
                var linkNumber = window.prompt("リンク番号を入力してください");
                $(".beforeLink").css("display", "none");
                linkList[linkNumber].click();
            }, 100);
        }
    });
});

// "/"を押したらinputフォームに飛べる
