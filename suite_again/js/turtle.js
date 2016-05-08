var makeTurtle = function(x, y, step){
	return {
		x: x, 
		y: y, 
		direction: -90,
		step: step, 
		bank: [],
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
		turnLeft: function(deg){
			this.direction -= deg;
		}

		document.getElementById("blah")
	};
};

/*
- commands in array
- panable
- "the drawing is the steps, not the picture"
- >> save the base info, not every x/y co-ord.
- turtle continues by making up negative x/y from with remains
*/


//var commands = [
//];


//commands.push(function() {
//	forward(1);
//});

//



//forward(10);
// right(90);
// forward(1);