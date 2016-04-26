// creatures.js

/////////////////////////////////////////////////////////////////////////////////////////// RED

function RedCritter(x, y, w, h){
	Critter.call(this, x, y, w, h);
	this.type = "red";
	console.log(this.type);
	var neg = 1; 
	if(Math.random()<0.5) neg = -1; 
	this.speed = random(10, 20)*neg;
}

RedCritter.prototype = Object.create(Critter.prototype);

RedCritter.prototype.update = function(){
	this.steps++;
	if(this.steps<=100){
		var step = walker(this.x, this.y, this.speed);
		this.x = step.x;
		this.y = step.y;
	}
};

RedCritter.prototype.draw = function(){
	fill("#FF005E");
	stroke("#FF6670");
	ellipse(this.x-(this.w/2), this.y-(this.w/2), this.w, this.h, 0, 360);
	ellipse(this.x+(this.w/2), this.y-(this.w/2), this.w, this.h, 0, 360);
	ellipse(this.x-(this.w/2), this.y+(this.w/2), this.w, this.h, 0, 360);
	ellipse(this.x+(this.w/2), this.y+(this.w/2), this.w, this.h, 0, 360);
};

/////////////////////////////////////////////////////////////////////////////////////////// BLUE

function BlueCritter(x, y, w, h){
	Critter.call(this, x, y, w, h);
	this.type = "blue";
	console.log(this.type);
	var neg = 1; 
	if(Math.random()<0.5) neg = -1; 
	this.speed = random(2, 5)*neg;
}

BlueCritter.prototype = Object.create(Critter.prototype);

BlueCritter.prototype.update = function(){
	this.steps++;
	if(this.steps<=100){
		var choice = random(0,10);
		if(choice===0) {
			this.x+=this.speed;
		}else if(choice===1) {
			this.x-=this.speed;
		}else if(choice===2) {
			this.y-=this.speed;
		}else{
			this.y+=this.speed;
		}
	}
};

BlueCritter.prototype.draw = function(){
	fill("#006FFF");
	stroke("#009FFF");
	ellipse(this.x, this.y, this.w, this.h, 0, 360);
};


/////////////////////////////////////////////////////////////////////////////////////////// GREEN

function GreenCritter(x, y, w, h){
	Critter.call(this, x, y, w, h);
	this.type = "green";
	console.log(this.type);
	var neg = 1; 
	if(Math.random()<0.5) neg = -1; 
	this.speed = random(2, 5)*neg;
}

GreenCritter.prototype = Object.create(Critter.prototype);

GreenCritter.prototype.update = function(){
	this.steps++;
	if(this.steps<=100){
		this.y = constrainY(this.y+this.speed);
	}
};

GreenCritter.prototype.draw = function(){
	fill("#00DD98");
	stroke("#00FFA8");
	ellipse(this.x, this.y, this.w, this.h, 0, 360);
};

/////////////////////////////////////////////////////////////////////////////////////////// CYAN

function CyanCritter(x, y, w, h){
	Critter.call(this, x, y, w, h);
	this.type = "cyan";
	console.log(this.type);
	var neg = 1; 
	if(Math.random()<0.5) neg = -1; 
	this.speed = random(2, 5)*neg;
}

CyanCritter.prototype = Object.create(Critter.prototype);

CyanCritter.prototype.update = function(){
	this.steps++;
	if(this.steps<=100){
		this.y = constrainY(this.y+this.speed);
	}
};

CyanCritter.prototype.draw = function(){
	fill("#00BCD6");
	stroke("#00ECFF");
	ellipse(this.x, this.y, this.w, this.h, 0, 360);
};

/////////////////////////////////////////////////////////////////////////////////////////// MAGENTA

function MagentaCritter(x, y, w, h){
	Critter.call(this, x, y, w, h);
	this.type = "magenta";
	console.log(this.type);
	var neg = 1; 
	if(Math.random()<0.5) neg = -1; 
	this.speed = random(2, 5)*neg;
}

MagentaCritter.prototype = Object.create(Critter.prototype);

MagentaCritter.prototype.update = function(){
	this.steps++;
	if(this.steps<=100){
		this.x = constrainX(this.x+this.speed);
	}
};

MagentaCritter.prototype.draw = function(){
	fill("#E417D1");
	stroke("#FF00E5");
	ellipse(this.x, this.y, this.w, this.h, 0, 360);
};

/////////////////////////////////////////////////////////////////////////////////////////// YELLOW

function YellowCritter(x, y, w, h){
	Critter.call(this, x, y, w, h);
	this.type = "yellow";
	console.log(this.type);
	var neg = 1; 
	if(Math.random()<0.5) neg = -1; 
	this.speed = random(2, 5)*neg;
}

YellowCritter.prototype = Object.create(Critter.prototype);

YellowCritter.prototype.update = function(){
	this.steps++;
	if(this.steps<=100){
		this.x = constrainX(this.x+this.speed);
	}
};

YellowCritter.prototype.draw = function(){
	fill("#FFF300");
	stroke("#FFE100");
	ellipse(this.x, this.y, this.w, this.h, 0, 360);
};