var ecosystem = [];
var buttonSize = 22; 

var mdown = false; 
var mtime = 0; 
var type = null;
var colour = "#000";

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


