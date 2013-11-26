$(document).ready(function(){

var date = new Date(),
    d = date.getDate(),
    m = date.getMonth() + 1;

$(".door").hover(function(){
    var thisDate = $(this).data("date");
    if(d<thisDate && m >=11){
        $(".message").remove();
        $(this).append( "<p class='message'>" + getQuote() + "</p>" );
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


function getQuote(max) {
    'use strict';
    var arrQuotes = ["Cool your jets", "Easy tiger", "Whoa nelly", "Chill out man", "Not yet", "Step away", "Calm down dear", "Slow down dude", "Nope, not yet", "Wait your turn", "Maybe tomorrow", "Not today my friend", "Patience, patience", "Take it easy", "Wait for it", "Not so fast", "Play it cool trig"];
    
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

			
	//CREATE THE CANVAS
	
	
	//var canvas = document.createElement('canvas');
	//document.body.appendChild(canvas);
	
	var a_canvas = document.getElementById("snowSpace"),
		c = a_canvas.getContext('2d'),
		particles = [],
		j = 0,
		canvasWidth = 1000,
		canvasHeight = 2000,
		snowColour = "white";

	//LET'S INPUT SOME CODE HERE:
	
	setInterval(draw, 1000/60);
	var t,t1
    t=new Date();
    t1=new Date();
	function draw(){
	
		c.clearRect(0,0,canvasWidth,canvasHeight);
	
		var p = new Particle();
		
        if (j%10==0 &&t1.getTime()- t.getTime()<1){
				particles.push(p);
                
        }
	t=new Date();		
		//RUN THROUGH AN ARRAY OF PARTICLES
		for(var i = 0; i<particles.length; i++) {
			p = particles[i];
			
			
			c.save();
			c.translate(p.xPos,p.yPos);
			
			c.rotate(p.ang);
			
			c.scale(p.size,p.size);
				drawFlake(p.thickness);
			c.restore();
		
			p.xPos += p.xVel;
			p.yPos += p.yVel;
			p.ang += p.spin;
		
			if(p.yPos>canvasHeight*2){
				particles.shift();
			}

		}				
		
		particles.xVel += random(-0.4, 0.4);
		j+=1;
		t1=new Date();
	}
	
	function Particle(){
		this.size = random(0.05,0.15);
		this.xPos = random(-30, canvasWidth + 30);
		this.yPos = -80;
		this.xVel = random(-0.7, 0.7);
		this.yVel = random(1, 2);
		this.ang = random (-0.5,0.5);
		this.spin = random (-0.05,0.05);
        this.thickness = random(2,20);
	}
	
	function drawCross(thickness){

        c.beginPath();
		c.moveTo(-40, -40);
        c.lineTo(40,40);
        c.moveTo(-40, 40)
        c.lineTo(40, -40)
        c.lineWidth=thickness ;
		c.strokeStyle = snowColour;
		c.stroke();
	}
	
	function drawFlake(thickness) {
		c.save();
			drawCross(thickness);
		c.rotate(Math.PI / 4);
			drawCross(thickness);
		c.restore();
	}
	
	//CREATE RANDOM FUNCTION
	function random(min, max) {
		return Math.random() * (max - min) + min;
	}			



});