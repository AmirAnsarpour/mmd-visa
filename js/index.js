$(document).ready(function () {
    $($(".quest")[0]).click(function () {
        if ($($(".answer")[0]).hasClass("zero-height")) {
            $($(".quest i")[0]).addClass("bi-record2");
            $($(".answer")[0]).removeClass("zero-height");
        }
        else {
            $($(".quest i")[0]).removeClass("bi-record2");
            $($(".answer")[0]).addClass("zero-height");
        }
    })
    $($(".quest")[1]).click(function () {
        if ($($(".answer")[1]).hasClass("zero-height")) {
            $($(".quest i")[1]).addClass("bi-record2");
            $($(".answer")[1]).removeClass("zero-height");
        }
        else {
            $($(".quest i")[1]).removeClass("bi-record2");
            $($(".answer")[1]).addClass("zero-height");
        }
    })
    $($(".quest")[2]).click(function () {
        if ($($(".answer")[2]).hasClass("zero-height")) {
            $($(".quest i")[2]).addClass("bi-record2");
            $($(".answer")[2]).removeClass("zero-height");
        }
        else {
            $($(".quest i")[2]).removeClass("bi-record2");
            $($(".answer")[2]).addClass("zero-height");
        }
    })
    $($(".quest")[3]).click(function () {
        if ($($(".answer")[3]).hasClass("zero-height")) {
            $($(".quest i")[3]).addClass("bi-record2");
            $($(".answer")[3]).removeClass("zero-height");
        }
        else {
            $($(".quest i")[3]).removeClass("bi-record2");
            $($(".answer")[3]).addClass("zero-height");
        }
    })
    $($(".quest")[4]).click(function () {
        if ($($(".answer")[4]).hasClass("zero-height")) {
            $($(".quest i")[4]).addClass("bi-record2");
            $($(".answer")[4]).removeClass("zero-height");
        }
        else {
            $($(".quest i")[4]).removeClass("bi-record2");
            $($(".answer")[4]).addClass("zero-height");
        }
    })
})