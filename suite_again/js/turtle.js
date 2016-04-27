var makeTurtle = function(x, y, step){
	return {
		x: x, 
		y: y, 
		direction: -90,
		step: step, 
		forward: function(steps){
			this.x += Math.cos( degrees(this.direction) )*(this.step*steps);
			this.y += Math.sin( degrees(this.direction) )*(this.step*steps);
		},
		backward: function(steps){
			this.x -= Math.cos( degrees(this.direction) )*(this.step*steps);
			this.y -= Math.sin( degrees(this.direction) )*(this.step*steps);
		},
		turnRight: function(deg){
			this.direction += deg;
		},
		turnLeft: function(){
			this.direction -= deg;
		}
	};
};

// fill("cyan");
// var turtle = makeTurtle(width/2, height/2, 10);
// ellipse(turtle.x, turtle.y, 10, 10, 0, 360);

// for(var rep=0; rep<5; rep++){
// 	turtle.step = 10; 
// 	for(var count=0; count<5; count++){
// 		turtle.forward(10);
// 		turtle.turnRight(50);
// 		ellipse(turtle.x, turtle.y, 10, 10, 0, 360);
// 		turtle.step = turtle.step*0.8;
// 	}
// 	turtle.direction += 150; 
// }


// var newX = this.x + Math.cos(this.direction) * step;
// var newY = this.y + Math.sin(this.direction) * step;

// turtle.pos

// turtle.right(90);
// turtle.step = 10;
// turtle.forward();