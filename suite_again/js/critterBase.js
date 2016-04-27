// component.js
function Critter(x, y, w, h, colour){
	console.log("new!", x, y, w, h, colour);
	this.x = x;
	this.y = y;
	this.w = w; 
	this.h = h; 
	this.steps = 0; 
	this.step = random(2,20);
	this.hover = false;
	this.fill = colour;
	this.stroke = getStroke(colour);
	// this.brain = circle_brain();
}

// var circle_brain = function () {
// 	var t = make_turtle();
// 	t.pos = [x, y];

// 	return {
// 		update: function () {
// 			t.forward(1);
// 			t.right(1);
// 		}
// 	};
// };


Critter.prototype.update = function(){
	this.brain.update();

	// this.steps++;
	// // if(this.steps<=100){

	// 	var choice = random(0,5);
	// 	if(choice===0) {
	// 		this.x+=this.step;
	// 	}else if(choice===1) {
	// 		this.x-=this.step;
	// 	}else if(choice===2) {
	// 		this.y-=this.step;
	// 	}else{
	// 		this.y+=this.step;
	// 	}

	// 	this.x = constrainX(this.x);
	// 	this.y = constrainY(this.y);
	// }
};

Critter.prototype.draw = function(){
	// console.log("drawing");
	fill(this.fill);
	stroke(this.stroke);
	ellipse(this.x, this.y, this.w, this.h, 0, 360);
};

Critter.prototype.checkCollision = function(){
	var thisCritter = this;
	if(ecosystem.length>1){	
		ecosystem.forEach(function(other){
			if( thisCritter!==other ){
				if( thisCritter.x>=other.x-(other.w/2) && thisCritter.x<=other.x+(other.w/2) && thisCritter.y>=other.y-(other.h/2) && thisCritter.y<=other.y+(other.h/2) ){
					collide(thisCritter, other);
				}
			}
		});
	}
	if(this.w>100){
		var index = ecosystem.indexOf(this);
		console.log("too big!", index);
		ecosystem.splice(index, 1);
	}
};

var collide = function(critter1, critter2){
	console.log("COLLIDE", critter1.x, critter1.y);
	var index1 = ecosystem.indexOf(critter1);
	var index2 = ecosystem.indexOf(critter2);

	var colour = mixColours(critter1.fill, critter2.fill);
	// console.log( critter1.x, critter1.y, size, size, colour );

	addHybrid([critter1.x, critter1.y], colour, ecosystem);

	ecosystem.splice(index1, 1);
	ecosystem.splice(index2, 1);
	// if(critter1.type===critter2.type){
	// 	if(critter1.type==="red"){
	// 		addHybrid("red", ecosystem, random(0,width), random(0,height), critter1.w+random(10,30));
	// 		addHybrid("red", ecosystem, random(0,width), random(0,height), critter1.w+random(10,30));
	// 	}else if(critter1.type==="blue"){
	// 		addHybrid("blue", ecosystem, critter1.x, critter1.y, critter1.w+10);
	// 		addHybrid("blue", ecosystem, critter1.x, critter1.y, critter1.w+10);
	// 	}if(critter1.type==="green"){
	// 		addHybrid("green", ecosystem, critter1.x, critter1.y, critter1.w+10);
	// 		addHybrid("green", ecosystem, critter1.x, critter1.y, critter1.w+10);
	// 	}
	// }
	// if(critter1.type==="red" && critter2.type==="blue" || critter2.type==="red" && critter1.type==="blue"){
	// 	addHybrid("magenta", ecosystem, critter1.x, critter1.y, critter1.w+10);
	// 	document.getElementById("magenta").className = "button";
	// 	// ecosystem.splice(index1, 1);
	// 	// ecosystem.splice(index2, 1);
	// }
	// if(critter1.type==="red" && critter2.type==="green" || critter2.type==="red" && critter1.type==="green"){
	// 	addHybrid("yellow", ecosystem, critter1.x, critter1.y, critter1.w+10);
	// 	document.getElementById("yellow").className = "button";
	// 	// ecosystem.splice(index1, 1);
	// 	// ecosystem.splice(index2, 1);
	// }
	// if(critter1.type==="blue" && critter2.type==="green" || critter2.type==="blue" && critter1.type==="green"){
	// 	addHybrid("cyan", ecosystem, critter1.x, critter1.y, critter1.w+10);
	// 	document.getElementById("cyan").className = "button";
	// 	console.log("cyan");

	// 	// ecosystem.splice(index1, 1);
	// 	// ecosystem.splice(index2, 1);
	// }
};



