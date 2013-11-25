$(document).ready(function(){

var date = new Date(),
    d = date.getDate(),
    m = date.getMonth() + 1;

$(".door").hover(function(){
    var thisDate = $(this).data("date");
    if(d<thisDate && m >=11){
        $(".message").remove();
        $(this).append( "<p class='message'>Error message here</p>" );
    }
    else {
        $(".message").remove();
        $(this).append( "<p class='message'>Click to open</p>" );
    }
})

$(".door").click(function(){
    var thisDate = $(this).data("date");
    if(d>=thisDate && m >=11){
        $(this).addClass('hover');
        $(".door-content").removeClass("largeContent");
        $(".contentMag").removeClass("contentMagOut");
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