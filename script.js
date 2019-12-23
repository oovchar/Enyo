$(".menu-icon").click(function(){
    $("nav").slideToggle(500);
    $("ul").css({
        "display": "flex", "flex-direction": "column"
    })
})
$("#arrow_right").click(function(){
    $("#macbook_half").css("display", "none"),function(){
        $("#macbook_full").css("display", "block");
    }
})