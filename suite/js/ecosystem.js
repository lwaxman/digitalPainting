// + Break this into separate files.
// Write renderer for canvas.
// + Add a creature that moves sideways or up and down.
// + Add a creature that moves sideways and shakes.

var ecosystem = [];
var buttonSize = 22; 

var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

var mdown = false; 
var mtime = 0; 
var type = null;

var displayRed = true;
var displayGreen = true;
var displayBlue = true;
var displayCyan = false;
var displayMagenta = false;
var displayYellow = false;

window.onmousedown = function(event){
	event.target.classList.forEach(function(cl){
		if(cl.indexOf("button")>=0){
			type = event.target.id;
		}else{
			type = null;
		}
	});
	mdown = true; 
	mtime = random(0, 50); 
};
window.onmousemove = function(){
	if(mdown){
		var element = document.getElementById(type);
		element.style.top = (mouseY-buttonSize)+"px";
		element.style.left = (mouseX-buttonSize)+"px";
	}
};
window.onmouseup = function(){
	if(type!==null){ add(type, ecosystem); }
	mdown = false;
	mtime = 0; 
	type = null;
};

setInterval(function(){
	// background("rgba(255,255,255,0.05)");
	ecosystem.forEach(function(critter) { 
		critter.update(); 
		critter.checkCollision();
		critter.draw();
	}); 
}, 50);


