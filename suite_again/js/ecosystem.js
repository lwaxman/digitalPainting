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
		// if( document.body.classList.contains('button') ){
			var element = document.getElementById(type);
			element.style.top = (mouseY-buttonSize)+"px";
			element.style.left = (mouseX-buttonSize)+"px";
		// }
		// else{
		// 	c.style.top = (mouseY-buttonSize)+"px";

		// }
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






// var draw = function(){
// 	ecosystem.forEach(function(critter) { 
// 		// critter.update(); 
// 		// critter.checkCollision();
// 		// critter.draw();
// 	});
// 	window.requestAnimationFrame(draw); 
// };
// window.requestAnimationFrame(draw);
