$(document).ready(function(){

var date = new Date(),
    d = date.getDate(),
    m = date.getMonth() + 1;

$(".door").hover(function(){
    var thisDate = $(this).data("date");
    if(d<thisDate && m >=11){
        $(this).toggleClass("errorDoor");
    }
})

$(".door").click(function(){
    var thisDate = $(this).data("date");
    if(d>=thisDate && m >=11){
        $(this).addClass('hover');
        $(".door-content").removeClass("largeContent");
        $(".contentMag").removeClass("contentMagOut");
    } else {
        //$(this).append( "<p class='warning'>Sorry - you can't open this door just yet.</p>" );
    }
})

//$("p").click(function(){$(".tile").removeClass('hover')})

$(".door-content .contentMag").click(
    function(){
            //$(".door-content").removeClass("largeContent");
            $(this).toggleClass("contentMagOut");
            $(this).closest('.door-content').toggleClass("largeContent");
            console.log(m);
    }
);


});