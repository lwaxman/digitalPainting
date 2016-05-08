// component.js
function Critter(x, y, w, h, fillColour, strokeColour, brain){
	console.log("new!", x, y, w, h, colour);
	this.x = x;
	this.y = y;
	this.w = w; 
	this.h = h; 
	this.direction = -90; 
	this.steps = 0; 
	this.step = random(2,20);
	this.hover = false;
	this.fill = fillColour;
	this.stroke = strokeColour;
	this.brain = brain;
}

var wreath = function () {
	var t = makeTurtle(this.x, this.y, this.step);
	t.direction = this.direction;

	var count;
	for(count=0; count<10; count++){
		t.forward(10);
		t.turnRight(72);
		stroke(this.stroke);
		line(this.x, this.y, t.x, t.y);
		t.step = t.step*0.8;
		this.x = t.x; 
		this.y = t.y; 
	}
	t.turnRight(72);
	this.direction = t.direction; 
};

var drawPlant = function () {
	
};

Critter.prototype.update = function(){
	this.steps++;
	if(this.steps<=5){
		this.brain();
	}
};

Critter.prototype.draw = function(){
	fill("#F54D31");
	stroke(this.stroke);
	ellipse(this.x, this.y, 30, 30, 0, 360);
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



