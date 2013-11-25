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

function getQuote(max) {
    'use strict';
    var arrQuotes = ["cool your jets", "easy tiger", "whoa nelly", "chill out man", "not yet", "step away", "calm down dear", "slow down dude", "nope, not yet", "wait your turn", "maybe tomorrow", "not today my friend", "patience, patience", "take it easy", "wait for it", "not so fast", "play it cool trig"];
    
    arrQuotes.sort(function (a, b) {
        return (a.length - b.length);
    });// sort array by item length

    var maxPos = arrQuotes.length - 1;//default highest position in the array

    if (max > 0) {// max length specified and a positive number
        if (arrQuotes[0].length <= max) {
            for (var j = 0; j < arrQuotes.length; j++) {
                if (arrQuotes[j].length > max) {
                    maxPos = j - 1;//find the position before the length is exceded
                    break;
                }
            }
        } else return "";// max specified but no results shorter than max
    }

    var i = Math.floor((Math.random() * (maxPos)) + 0.5);//pick a winner

    return arrQuotes[i];
}
