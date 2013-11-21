$(document).ready(function(){

var date = new Date(),
    d = date.getDate(),
    m = date.getMonth() + 1;

$(".door").click(function(){
    var thisDate = $(this).data("date");
    if(d>=thisDate && m >=11){
        $(this).addClass('hover');
        $(".door-content").removeClass("largeContent");
    } else {
        $(this).addClass("stopDoor");
    }
})

$("p").click(function(){$(".tile").removeClass('hover')})

$(".door-content .contentMag").click(
    function(){
            //$(this).attr('id', 'largeContent');
            $(this).closest('.door-content').toggleClass("largeContent");
            console.log(m);
    }
);


});