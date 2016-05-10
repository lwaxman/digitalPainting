// component.js
function Plant(x, y, fillColour, strokeColour, brain){
	// console.log("new!", x, y, colour);
	this.x = x;
	this.y = y;
	this.angle = random(100,3);
	this.direction = -90; 
	this.step = random(250,400)*scale;
	this.hover = false;
	this.fill = fillColour;
	this.stroke = strokeColour;
	this.brain = brain; 
	this.brainStep = 0; 
	this.turtle = new Turtle(this.x, this.y, this.angle);
}

var drawFlower = function(){

};

Plant.prototype.update = function(){

};

Plant.


Plant.prototype.checkCollision = function(){
	var thisCritter = this;
	if(ecosystem.length>1){	
		ecosystem.forEach(function(other){
			if( thisCritter!==other ){
				if( thisCritter.x>=other.x-(other.w/2) && thisCritter.x<=other.x+(other.w/2) && thisCritter.y>=other.y-(other.h/2) && thisCritter.y<=other.y+(other.h/2) ){
					// collide(thisCritter, other);
				}
			}
		});
	}
};




