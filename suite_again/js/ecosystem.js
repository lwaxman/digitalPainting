var ecosystem = [];
var buttonSize = 22; 

var mMove = false; 
var mDown = false;
var mtime = 0; 
var type = null;
var colour = "#000";
var scale = 2; 

window.onmousedown = function(event){
	event.target.classList.forEach(function(cl){
		if(cl.indexOf("button")>=0){
			type = event.target.id;
		}else{
			type = null;
		}
	});
	mtime = random(0, 50); 
	mDown = true;
};
window.onmousemove = function(){
	mMove = true; 
	if(mDown){
		var element = document.getElementById(type);
		element.style.top = (mouseY-buttonSize)+"px";
		element.style.left = (mouseX-buttonSize)+"px";
	}
};
window.onmouseup = function(){
	if(type!==null && mMove===false){ 
		add(type, ecosystem); 
	}
	mMove = false;
	mDown = false;
	mtime = 0; 
	type = null;
};


document.onkeypress = function(e) {
	console.log(e.keyCode);
    if(e.keyCode==67||e.keyCode==99){
    	ecosystem = [];
    }
};


var draw = function(){
	ecosystem.sort(function(obj1, obj2){
		return obj1.y - obj2.y;
	});
	clear();
	// background("black");
	ecosystem.forEach(function(plant) { 
		plant.draw();
	});
	window.requestAnimationFrame(draw); 
};
window.requestAnimationFrame(draw);
