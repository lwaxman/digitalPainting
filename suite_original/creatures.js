// creatures.js

var square_creature = function (x, y, jitter, size) {
	var comp = component(x, y, size, size);
	comp.updates.push(shake(jitter));
	comp.draw = drawSquare; 
	var r = renderer(comp);
	return [comp, r];
};

var drawSquare = function(c, ctx){
	ctx.fillStyle = "blue";
	ctx.fillRect(c.x-(c.w/2), c.y-(c.h/2), c.w, c.h);
};



var red_creature = function (x, y, increment, size) {
	var comp = component(x, y, size, size);
	comp.updates.push(walk_sideways());
	comp.updates.push(shake(increment));
	comp.draw = drawRed; 
	var r = renderer(comp);
	return [comp, r];
};

var drawRed = function(c, ctx){
	ctx.fillStyle = "red";
	ctx.fillRect(c.x-(c.w/2), c.y-(c.h/2), c.w, c.h);
};



var green_creature = function (x, y, increment, size) {
	var comp = component(x, y, size, size);
	comp.updates.push(walk_down(increment));
	comp.draw = drawGreen; 
	var r = renderer(comp);
	return [comp, r];
};

var drawGreen = function(c, ctx){
	ctx.fillStyle = "green";
	ctx.fillRect(c.x-(c.w/2), c.y-(c.h/2), c.w, c.h);
};