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
	this.brain = brain; 
	this.turtle = new Turtle(this.x, this.y, this.angle);
}

Plant.prototype.draw = function(){
	var xSmall = this.x-10; 
	var ySmall = this.y; 
	var xBig = this.x+10; 

	for(var h in this.turtle.history){
		var l = this.turtle.history[h];

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
	}
	var rX = this.x;
	var rY = this.y;

	var repCase = 0; 
	if(xBig>width && ySmall>0){
		repCase = 1; 
	}else if(xSmall<0 && ySmall>0){
		repCase = 2; 
	}else if(ySmall<0 && xSmall<0){
		repCase = 3; 
	}else if(ySmall<0 && xBig>width){
		repCase = 4; 
	}else if(ySmall<0){
		repCase = 5; 
	}else{
		repCase = 0; 
	}
	this.repeat(repCase);
};

Plant.prototype.repeat = function(c){
	for(var h in this.turtle.history){
		var l = this.turtle.history[h];
		var xx1 = l.x1;
		var yy1 = l.y1;
		var xx2 = l.x2;
		var yy2 = l.y2;
		switch (c) {
			case 0:
				xx1 = l.x1;
				yy1 = l.y1;
				xx2 = l.x2;
				yy2 = l.y2;
				break;
			case 1:
				xx1 = -(width-l.x1);
				xx2 = -(width-l.x2);
				stroke(this.bgStroke);
				line(xx1, yy1, xx2, yy2);
				stroke(this.stroke);
				line(xx1, yy1, xx2, yy2);
				break;
			case 2:
				xx1 = (width+l.x1);
				xx2 = (width+l.x2);
				stroke(this.bgStroke);
				line(xx1, yy1, xx2, yy2);
				stroke(this.stroke);
				line(xx1, yy1, xx2, yy2);
				break;
			case 3:
				//bottom left
				yy1 = height+l.y1;
				yy2 = height+l.y2;
				stroke(this.bgStroke);
				line(xx1, yy1, xx2, yy2);
				stroke(this.stroke);
				line(xx1, yy1, xx2, yy2);
				//bottom right
				xx1 = (width+l.x1);
				xx2 = (width+l.x2);
				stroke(this.bgStroke);
				line(xx1, yy1, xx2, yy2);
				stroke(this.stroke);
				line(xx1, yy1, xx2, yy2);
				//top right
				xx1 = (width+l.x1);
				xx2 = (width+l.x2);
				yy1 = l.y1;
				yy2 = l.y2;
				stroke(this.bgStroke);
				line(xx1, yy1, xx2, yy2);
				stroke(this.stroke);
				line(xx1, yy1, xx2, yy2);
				break;
			case 4:
				//bottom left
				xx1 = -(width-l.x1);
				xx2 = -(width-l.x2);
				yy1 = height+l.y1;
				yy2 = height+l.y2;
				stroke(this.bgStroke);
				line(xx1, yy1, xx2, yy2);
				stroke(this.stroke);
				line(xx1, yy1, xx2, yy2);
				//bottom right
				xx1 = l.x1;
				xx2 = l.x2;
				stroke(this.bgStroke);
				line(xx1, yy1, xx2, yy2);
				stroke(this.stroke);
				line(xx1, yy1, xx2, yy2);
				//top left
				xx1 = -(width-l.x1);
				xx2 = -(width-l.x2);
				yy1 = l.y1;
				yy2 = l.y2;
				stroke(this.bgStroke);
				line(xx1, yy1, xx2, yy2);
				stroke(this.stroke);
				line(xx1, yy1, xx2, yy2);
				break;
			case 5:
				yy1 = height+l.y1;
				yy2 = height+l.y2;
				stroke(this.bgStroke);
				line(xx1, yy1, xx2, yy2);
				stroke(this.stroke);
				line(xx1, yy1, xx2, yy2);
				break;
			default:
				xx1 = l.x1;
				yy1 = l.y1;
				xx2 = l.x2;
				yy2 = l.y2;
				break;
		}
	}
};




