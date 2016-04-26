// movements.js

var shake = function(jitter) {
	if(jitter === undefined) { jitter = 1; }
	return function (c) {
		c.x = constrainX( c.x + Math.random()*jitter );
		c.y = constrainY( c.y + Math.random()*jitter );
	}
};

var walk_sideways = function(increment) {
	if(increment === undefined) { increment = 3; }
	return function (c) {
		c.x = constrainX(c.x+increment);
	}
};

var walk_down = function(increment) {
	if(increment === undefined) { increment = 3; }
	return function (c) {
		c.y = constrainY(c.y+increment);
	}
};
