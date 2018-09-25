console.log("now surfing...");
var slashCount = 0;
$(function () {
    var linkList = document.getElementsByTagName("a");
    var textInputList = document.getElementsByTagName("input");
    $("html").keyup(function (e) {
        // "q"を押したらリンクに数字を表示する
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
        } else if (e.which == 191) {
            // "/"を押したらinputフォームに飛べる
            textInputList[slashCount].focus();
            slashCount++;
            if (slashCount == textInputList.length) {
                slashCount = 0;
            }
        }
    });
});

