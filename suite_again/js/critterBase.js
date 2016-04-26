// component.js
function Critter(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w; 
  this.h = h; 
  this.steps = 0; 
  this.hover = false;
}

Critter.prototype.update = function(){};

Critter.prototype.draw = function(){};

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

var walker = function(x, y, s){
	var choice = random(0,5);
	if(choice===0) {
		x+=s;
	}else if(choice===1) {
		x-=s;
	}else if(choice===2) {
		y-=s;
	}else{
		y+=s;
	}
	return { x:constrainX(x), y:constrainY(y) };
};

var collide = function(critter1, critter2){
	console.log("COLLIDE", critter1.x, critter1.y);
	var index1 = ecosystem.indexOf(critter1);
	var index2 = ecosystem.indexOf(critter2);
	if(critter1.type===critter2.type){
		if(critter1.type==="red"){
			addHybrid("red", ecosystem, random(0,width), random(0,height), critter1.w+random(10,30));
			addHybrid("red", ecosystem, random(0,width), random(0,height), critter1.w+random(10,30));
		}else if(critter1.type==="blue"){
			addHybrid("blue", ecosystem, critter1.x, critter1.y, critter1.w+10);
			addHybrid("blue", ecosystem, critter1.x, critter1.y, critter1.w+10);
		}if(critter1.type==="green"){
			addHybrid("green", ecosystem, critter1.x, critter1.y, critter1.w+10);
			addHybrid("green", ecosystem, critter1.x, critter1.y, critter1.w+10);
		}
		ecosystem.splice(index1, 1);
		ecosystem.splice(index2, 1);
	}
	if(critter1.type==="red" && critter2.type==="blue" || critter2.type==="red" && critter1.type==="blue"){
		addHybrid("magenta", ecosystem, critter1.x, critter1.y, critter1.w+10);
		document.getElementById("magenta").className = "button";
		// ecosystem.splice(index1, 1);
		// ecosystem.splice(index2, 1);
	}
	if(critter1.type==="red" && critter2.type==="green" || critter2.type==="red" && critter1.type==="green"){
		addHybrid("yellow", ecosystem, critter1.x, critter1.y, critter1.w+10);
		document.getElementById("yellow").className = "button";
		// ecosystem.splice(index1, 1);
		// ecosystem.splice(index2, 1);
	}
	if(critter1.type==="blue" && critter2.type==="green" || critter2.type==="blue" && critter1.type==="green"){
		addHybrid("cyan", ecosystem, critter1.x, critter1.y, critter1.w+10);
		document.getElementById("cyan").className = "button";
		console.log("cyan");

		// ecosystem.splice(index1, 1);
		// ecosystem.splice(index2, 1);
	}
};



