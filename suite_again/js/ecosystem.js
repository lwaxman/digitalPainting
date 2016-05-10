var ecosystem = [];
var buttonSize = 22; 

var pCanvas = document.createElement("canvas");
var pc = pCanvas.getContext("2d");
pCanvas.setAttribute("id", "minicanvas");
pCanvas.width = canvas.width/3; 
pCanvas.height = canvas.height/3;
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
    }else if(e.keyCode==80||e.keyCode==112){
    	document.getElementById("pattern").click();
    }else if(e.keyCode==68||e.keyCode==100){
		document.getElementById("download").click();
    }
};

document.getElementById("pattern").onclick = function(){
	showBG =! showBG; 
	if(showBG){
		var dataURL = pCanvas.toDataURL();
		document.body.style.backgroundImage = "url("+dataURL+")";
    	document.getElementById("main").style.opacity = 0;
    	document.getElementById("tools").style.opacity = 0;
	}else{
		document.getElementById("main").style.opacity = 1;
		document.getElementById("tools").style.opacity = 1;
	}
};

document.getElementById("download").onclick = function(){
	download.href = canvas.toDataURL();
	download.download = "pattern.png";
};

document.getElementById("clear").onclick = function(){
	ecosystem = [];
};




var draw = function(){
	ecosystem.sort(function(obj1, obj2){
		return obj1.y - obj2.y;
	});
	clear();
	pc.clearRect(0, 0, canvas.width/3, canvas.height/3);
	ecosystem.forEach(function(plant) { 
		plant.draw();
	});
	pc.drawImage(canvas, 0, 0, canvas.width/3, canvas.height/3);
	window.requestAnimationFrame(draw); 
};
window.requestAnimationFrame(draw);
