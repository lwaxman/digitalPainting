/////////////////////////////////////////////////////////////////////////// SPINDLE

var spindle = function(){ 
	console.log("spindle");
	stroke(this.stroke);

	this.turtle.penUp();
	this.turtle.moveTo(this.x, this.y);
	this.turtle.penDown();

	this.turtle.rotate(-90);
	
	this.turtle.pushState();
	this.turtle.rotate(random(-30,30));
	spindleBranch(this.turtle, 100);
	this.turtle.popState();

	this.turtle.pushState();
	this.turtle.rotate(random(-30,30));
	spindleBranch(this.turtle, 100);
	this.turtle.popState();

};

var spindleBranch = function(t, length) {
	if(length < 60){ return; }
	t.pushState();
	t.rotate(random(-10,10));
	t.moveForward(length);
	var branches = random(2,5);
	for(var b=0; b<branches; b++){
		t.pushState();
		t.rotate(random(-60,60));
		spindleBranch(t, length * 0.85);
		t.popState();
	}
	t.popState();
};

/////////////////////////////////////////////////////////////////////////// shrub

// var newPlant = new Plant( width/2, height/2, "red", "#3D7556", shrub);
// newPlant.brain();

var shrub = function(){ 
	console.log("shrub");
	stroke(this.stroke);

	this.turtle.penUp();
	this.turtle.moveTo(this.x, this.y);
	this.turtle.penDown();

	this.turtle.rotate(-145);
	
	var length = random(100,300);
	shrubBranch(this.turtle, length);

};

var shrubBranch = function(t, length) {
	console.log(length);
	// t.rotate(random(-10,10));
	var branches = random(10,20);
	t.penDown();
	stroke(this.stroke);
	var stemLength = length/branches; 
	var b = 0;
	var angle; 
	for(b=0; b<branches; b++){
	 	angle = 60/branches;
	 	stemLength+=(length/branches);
		t.pushState();
		t.rotate(b*angle);
		t.moveForward(stemLength);
		t.moveBackward(stemLength);
		t.popState();
	}
	for(b=branches; b>=0; b--){
		console.log(b);
	 	angle = 60/branches;
	 	stemLength=length-((length/branches)*b);
		t.pushState();
		t.rotate(60+b*angle);
		t.moveForward(stemLength);
		t.moveBackward(stemLength);
		t.popState();
	}
};


/////////////////////////////////////////////////////////////////////////// FLOWER
var flower = function(){ 
	console.log("flower");
	stroke(this.stroke);

	this.turtle.penUp();
	this.turtle.moveTo(this.x, this.y);
	this.turtle.penDown();

	this.turtle.rotate(-145);

	var length = random(80,200);
	flowerPetal(this.turtle, length);
};

var flowerPetal = function(t, length) {
	var branches = random(10,20);
	stroke(this.stroke);
	var stemLength = length/branches; 
	var b = 0;
	var angle;

	t.penDown();
	for(var i=0; i<5; i++){
		stemLength = length/branches; 	
		t.pushState();
		t.rotate(72*i);
		for(b=0; b<branches; b++){
		 	angle = 72/branches;
		 	stemLength+=(length/branches);
			t.pushState();
			t.rotate(b*angle);
			t.moveForward(stemLength);
			t.moveBackward(stemLength);
			t.popState();
		}
		for(b=branches; b>=0; b--){
			console.log(b);
		 	angle = 72/branches;
		 	stemLength=length-((length/branches)*b);
			t.pushState();
			t.rotate(72+b*angle);
			t.moveForward(stemLength);
			t.moveBackward(stemLength);
			t.popState();
		}
		t.popState();
	}


};


/////////////////////////////////////////////////////////////////////////// THISTLE





