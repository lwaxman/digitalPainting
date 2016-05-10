// component.js
function Plant(x, y, fillColour, strokeColour, brain){
	// console.log("new!", x, y, colour);
	this.x = x;
	this.y = y;
	this.w = 0;
	this.h = 0; 
	this.angle = random(100,3);
	this.step = random(250,400)*scale;
	this.fill = fillColour;
	this.stroke = strokeColour;
	this.bgStroke = darken(strokeColour);
	// this.waveAngle = random(0, 2*Math.PI);
	this.brain = brain; 
	this.turtle = new Turtle(this.x, this.y, this.angle);
}

Plant.prototype.draw = function(){
	// this.waveAngle += 0.01;
	var xSmall = this.x-10; 
	var ySmall = this.y; 
	var xBig = this.x+10; 	
	// push();
	// rotate(Math.cos(this.waveAngle));
	for(var h in this.turtle.history){
		var l = this.turtle.history[h];
		// push();
		// translate(l.x1, l.y1);
		// rotate(180);
		//if this.type = stem
		// line(0, 0, l.x1-l.x2, l.y1-l.y2);
		if(l.x1<xSmall) xSmall = l.x1; 
		if(l.x2<xSmall) xSmall = l.x2; 

		if(l.x1>xBig) xBig = l.x1; 
		if(l.x2>xBig) xBig = l.x2; 

		if(l.y1<ySmall) ySmall = l.y1;
		if(l.y2<ySmall) ySmall = l.y2;

		this.w = (xBig - xSmall);
		this.h = this.y-ySmall;

		stroke(this.bgStroke);
		line(l.x1, l.y1, l.x2, l.y2);
		stroke(this.stroke);
		line(l.x1, l.y1, l.x2, l.y2);



		
		// if(l.x2-width>0){
		// 	console.log("off screen width");
		// 	// var x1 = l.x1 - width	
		// }
		// line(l.x1, l.y1+Math.cos(this.waveAngle), l.x2, l.y2+Math.cos(this.waveAngle));
		//else if this.type = flower
		//else if this.type = leaf
		// pop();
	}
	if(xBig>width){
		var rX = xBig-width; 
		this.repeat(rX, this.y);
	}
	stroke("blue");
	rect(this.x-(this.x-xSmall), this.y-this.h, this.w, this.h);
	// console.log(this.w);
	// pop();
};

Plant.prototype.repeat = function(x,y){
	console.log("repeat", x, y);
	// stroke(this.bgStroke);
	// line(x-l.x1, l.y1, l.x2, l.y2);
	// stroke(this.stroke);
	// line(x-l.x1, l.y1, l.x2, l.y2);

};