/*
* www.flandill.net
* library.js: the drawing library. comparable to p5js, but a little more "hand drawn."
*/

var canvas = document.getElementById("main");
var c = canvas.getContext("2d");
width = window.innerWidth;
height = window.innerHeight;
canvas.width = width;
canvas.height = height;

var fillShape = true; 
var strokeShape = true; 

c.strokeStyle = "black";
c.fillStyle = "cyan";
c.lineCap = "round";
c.lineJoin = "round";
c.lineWidth = 2;

/******************************************************************* THIS PROJECT */

var darken = function(colour){
	var col = hexToRGB(colour);
	return "rgb("+(col.r-50)+","+(col.g-50)+","+(col.b-50)+")";
};

// hexToRGB from: 
// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
var hexToRGB = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};


// var mixColours = function(colour1, colour2){

// 	var col1 = colour1.split(",");
// 	var r1 = parseFloat( col1[0].split("(")[1].trim() );
// 	var g1 = parseFloat( col1[1].trim() );
// 	var b1 = parseFloat( col1[2].split(")")[0].trim() );


// 	var col2 = colour2.split(",");
// 	var r2 = parseFloat( col2[0].split("(")[1].trim() );
// 	var g2 = parseFloat( col2[1].trim() );
// 	var b2 = parseFloat( col2[2].split(")")[0].trim() );

// 	var r = (r1+r2)/2; 
// 	var g = (g1+g2)/2; 
// 	var b = (b1+b2)/2; 

// 	return "rgb("+r+","+g+","+b+")";
// };

var push = function(){
	c.save();
};

var pop = function(){
	c.restore();
};

var rotate = function(d){
	c.rotate( radians(d) );
};

var translate = function(x,y){
	c.translate(x, y);
};
/*************************************************************************** MOUSE */

var mouseX = -200; //w+200;
var mouseY = -200; //h+200;
document.onmousemove = function(e){
	mouseX = e.clientX;
	mouseY = e.clientY;
};
document.onmouseleave = function(e){
	mouseX = -200;
	mouseY = -200;
};

/*************************************************************************** MATHS */

var getLength = function(a, b){
	var a2 = (a[1]-a[0])*(a[1]-a[0]) ;
	var b2 = (b[1]-b[0])*(b[1]-b[0]) ;
	return Math.sqrt( a2 + b2 );
};

var random = function(min, max, r){
	if(r === undefined) r = true;
	var rand; 
	if(r){
		rand = Math.round( Math.random()*(max-min)+min );
	}else{
		rand = Math.random()*(max-min)+min;
	}
	return rand;
};

var constrainX = function(x){
	if(x>width) x = 5; 
	else if(x<0) x = width-5; 
	return x;
};

var constrainY = function(y){
	if(y>window.innerHeight) y = 5; 
	else if(y<0) y = window.innerHeight-5; 
	return y;
};

var map = function(num, minIN, maxIN, minOUT, maxOUT) {
  return (num - minIN) * (maxOUT - minOUT) / (maxIN - minIN) + minOUT;
};

var radians = function(d){
	return d * Math.PI/180;
};

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[1]-1, mdy[0]);
}

function daysEllapsed(first, second) {
    return Math.abs( Math.round((second-first)/(1000*60*60*24)) );
}

/*************************************************************************** DRAWING */

var fill = function(cl){
	fillShape = true;
	c.fillStyle = cl;
};

var noFill = function(){
	fillShape = false;
};

var stroke = function(cl){
	strokeShape = true;
	c.strokeStyle = cl;
};

var noStroke = function(){
	strokeShape = false;
};

var randomColour = function(){
	return "rgba("+random(0,255)+", "+random(0,255)+", "+random(0,255)+", 1)";
};

var background = function(colour){ 
	c.fillStyle = colour;
	c.fillRect(0, 0, canvas.width, canvas.height); 
};


var clear = function(){ 
	c.clearRect(0, 0, canvas.width, canvas.height); 
};


var pLine = function(x1, y1, x2, y2){
	var offset = 2; 
	c.lineTo(x1, y1);
	if( getLength([x1, x2],[y1,y2]) < 30){
		offset = 1;
		c.lineTo(x1+((x2-x1)*0.5)+random(-offset, offset), y1+((y2-y1)*0.5)+random(-offset, offset));
	}else{
		c.lineTo(x1+((x2-x1)*0.33)+random(-offset, offset), y1+((y2-y1)*0.33)+random(-offset, offset));
		c.lineTo(x1+(2*(x2-x1)*0.33)+random(-offset, offset), y1+(2*(y2-y1)*0.33)+random(-offset, offset));
	}
	c.lineTo(x2, y2);
};

var line = function(x1, y1, x2, y2){
	noFill();
	c.beginPath();
	pLine(x1, y1, x2, y2);
	c.closePath();
	if(strokeShape){ c.stroke(); }
};

// var rect = function(x, y, w, h){
// 	c.beginPath();
// 	pLine(x-(w/2), y-(h/2), x+(w/2), y-(h/2));
// 	pLine(x+(w/2), y-(h/2), x+(w/2), y+(h/2));
// 	pLine(x+(w/2), y+(h/2), x-(w/2), y+(h/2));
// 	pLine(x-(w/2), y+(h/2), x-(w/2), y-(h/2));
// 	c.closePath();
// 	if(fillShape){ c.fill(); }
// 	if(strokeShape){ c.stroke(); }
// };

var rect = function(x, y, w, h){
	c.beginPath();
	pLine(x, y, x+w, y);
	pLine(x+w, y, x+w, y+h);
	pLine(x+w, y+h, x, y+h);
	pLine(x, y+h, x, y);
	
	c.closePath();
	if(fillShape){ c.fill(); }
	if(strokeShape){ c.stroke(); }
};

var pEllipse = function(x, y, w, h, s, e){
	if(s===undefined) s = 0;
	if(e===undefined) e = 360; 
	var r; 
	if(w > h) r = h/2; 
	else{ r = w/2; }
	var lastx = x; 
	var lasty = y;
	var inc = 10; 
	var offset = 1; 
	if(r>25 && r<=100){
		inc = 15;
		offset = 1;
	}else if(r<=25){
		inc = 20;
		offset = 0.6;
	}else{
		inc = 10; 
		offset = 2; 
	}
	for(i=s; i<e; i+=inc){
		if(w>h){
		//stretch width
			px = x + (r * Math.cos( radians(i) )) + random(-offset, offset);
			py = y + (r * Math.sin( radians(i) )) + random(-offset, offset);
			px = map(px, x+(r/2), x-(r/2), x+(w/4), x-(w/4)); //from circle to ellipse
			c.lineTo(px, py);	
		}else{
		//stretch height
			px = x + (r * Math.cos( radians(i) )) + random(-offset, offset);
			py = y + (r * Math.sin( radians(i) )) + random(-offset, offset);
			py = map(py, y+(r/2), y-(r/2), y+(h/4), y-(h/4)); //from circle to ellipse
			c.lineTo(px, py);	
		}
		x = lastx; 
		y = lasty;
	}
	if(e==360) c.lineTo(x+(w/2), y);
};

var ellipse = function(x, y, w, h, s, e){
	if(s===undefined) s = Math.PI;
	if(e===undefined) e = 2*Math.PI;
	c.beginPath();
	pEllipse(x, y, w, h, s, e);
	c.closePath();
	if(fillShape){ c.fill(); }
	if(strokeShape){ c.stroke(); }
};

var simpleEllipse = function(x, y, w, h, s, e){
	if(s===undefined) s = Math.PI;
	if(e===undefined) e = 2*Math.PI;
	c.beginPath();
	c.arc(x, y, w, h, s, e);
	c.closePath();
	if(fillShape){ c.fill(); }
	if(strokeShape){ c.stroke(); }
};

var arc =  function(x, y, w, h, s, e){
	c.beginPath();
	if(s===undefined) s = 0;
	if(e===undefined) e = 360; 
	var r; 
	if(w > h) r = h/2; 
	else r = w/2; 
	var lastx = x; 
	var lasty = y;
	var inc = 10; 
	var offset = 1; 
	if(r>25 && r<=100){
		inc = 15;
		offset = 1;
	}else if(r<=25){
		inc = 20;
		offset = 0.6;
	}else{
		inc = 10; 
		offset = 2; 
	}
	for(i=s; i<e; i+=inc){
		if(w>h){
		//stretch width
			px = x + (r * Math.cos( radians(i) )) + random(-offset, offset);
			py = y + (r * Math.sin( radians(i) )) + random(-offset, offset);
			px = map(px, x+(r/2), x-(r/2), x+(w/4), x-(w/4)); //from circle to ellipse
			c.lineTo(px, py);	
		}else{
		//stretch height
			px = x + (r * Math.cos( radians(i) )) + random(-offset, offset);
			py = y + (r * Math.sin( radians(i) )) + random(-offset, offset);
			py = map(py, y+(r/2), y-(r/2), y+(h/4), y-(h/4)); //from circle to ellipse
			c.lineTo(px, py);	
		}
		x = lastx; 
		y = lasty;
	}
	if(e==360) c.lineTo(x+(w/2), y);
	if(fillShape){ c.fill(); }
	if(strokeShape){ c.stroke(); }
	c.closePath();
};

var lump = function(x, y, w, h){
	var rx = x; 
	var ry = y;
	var ex = x; 
	var ey = y-h+(w/2); 
	c.beginPath();
	pEllipse(ex, ey, w, w, 180, 360);
	pLine(x+w/2, y, x-w/2, y);
	c.closePath();
	if(fillShape){ c.fill(); }
	if(strokeShape){ c.stroke(); }	
};





