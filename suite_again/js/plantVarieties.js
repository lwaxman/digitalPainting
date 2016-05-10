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

/////////////////////////////////////////////////////////////////////////// FERN

// var newPlant = new Plant( width/2, height/2, "red", "#3D7556", fern);
// newPlant.brain();

var fern = function(){ 
	console.log("fern");
	stroke(this.stroke);

	this.turtle.penUp();
	this.turtle.moveTo(this.x, this.y);
	this.turtle.penDown();

	this.turtle.rotate(-90);
	
	this.turtle.pushState();
	this.turtle.rotate(random(-30,30));
	fernBranch(this.turtle, 300);
	// this.turtle.popState();
// 
};

var fernBranch = function(t, length) {
	if(length < 20){ return; }
	t.rotate(random(-10,10));
	t.moveForward(length);
	t.penUp();
	t.moveBackward(length*0.6);
	t.penDown();
	// var branches = random(2,5);
	// for(var b=0; b<2; b++){
		// console.log("b", b);
		t.pushState();
		t.rotate(random(-60,60));
		fernBranch(t, length * 0.5);
		t.popState();
	// }
};


/////////////////////////////////////////////////////////////////////////// DILL


/////////////////////////////////////////////////////////////////////////// THISTLE





