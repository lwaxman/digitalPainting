var ecosystem = [];
var buttonSize = 22; 

var pCanvas = document.createElement("canvas");
var pc = pCanvas.getContext("2d");
pCanvas.setAttribute("id", "minicanvas");
pCanvas.width = canvas.width/5; 
pCanvas.height = canvas.height/5;
document.body.appendChild(pCanvas);

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

var showBG = false;

document.onkeypress = function(e) {
	console.log(e.keyCode);
    if(e.keyCode==67||e.keyCode==99){
    	ecosystem = [];
    }else if(e.keyCode==49){
    	showBG =! showBG; 
    	if(showBG){
    		var dataURL = pCanvas.toDataURL();
    		document.body.style.backgroundImage = "url("+dataURL+")";
	    	document.getElementById("main").style.opacity = 0;
    	}else{
    		document.getElementById("main").style.opacity = 1;
    	}
    }
};


var draw = function(){
	ecosystem.sort(function(obj1, obj2){
		return obj1.y - obj2.y;
	});
	clear();
	pc.clearRect(0, 0, canvas.width/5, canvas.height/5);
	ecosystem.forEach(function(plant) { 
		plant.draw();
	});
	pc.drawImage(canvas, 0, 0, canvas.width/5, canvas.height/5);
	window.requestAnimationFrame(draw); 
};
window.requestAnimationFrame(draw);
