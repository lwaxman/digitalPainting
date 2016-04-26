// + Break this into separate files.
// Write renderer for canvas.
// + Add a creature that moves sideways or up and down.
// + Add a creature that moves sideways and shakes.

var ecosystem = {components: [], renderers: []};

var can = document.createElement('canvas');
can.width = window.innerWidth;
can.height = window.innerHeight;
document.body.appendChild(can);
var ctx = can.getContext('2d');

var red = document.getElementById("red"); 
var mdown = false; 
var mtime = 0; 
red.onmousedown = function(){
	mdown = true; 
	mtime = random(0, 50); 
};
red.onmouseup = function(){
	add("red", mtime);
	mdown = false;
	mtime = 0; 
};

var green = document.getElementById("green"); 
green.onclick = function(){
	mdown = true; 
	mtime = random(0, 50);
};
green.onmouseup = function(){
	add("green", mtime);
	mdown = false;
	mtime = 0; 
};


var blue = document.getElementById("blue"); 
blue.onclick = function(){
	mdown = true; 
	mtime = random(0, 50);
};
blue.onmouseup = function(){
	add("blue", mtime);
	mdown = false;
	mtime = 0; 
};


var background = function() { ctx.fillStyle = "rgba(255, 255, 255, 0.05)"; ctx.fillRect(0, 0, can.width, can.height); };
var simulate = function() { 
	ecosystem.components.forEach(function(v) { 
		v.update(); 
	}); 
};
var draw = function () { ecosystem.renderers.forEach(function(v) { v.draw(ctx); }); };

setInterval(function(){
	background();
	simulate();
	draw();
}, 50);