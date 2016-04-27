//add.js

var add = function(type, colour, ecosystem){
	var newCritter; 
	var size = random(10, 20);

	var element = document.getElementById(type);
	var style = window.getComputedStyle(element);
	var top = parseFloat( style.getPropertyValue('top').split("px")[0] )+buttonSize;
	var left = parseFloat( style.getPropertyValue('left').split("px")[0] )+buttonSize;

	newCritter = new Critter( left, top, size, size, colour);
	ecosystem.push( newCritter );
};

var addHybrid = function(pos, colour, ecosystem){
	var size = random(10, 20);
	var left = pos[0];
	var top = pos[1];
	var newCritter = new Critter( left, top, size, size, colour);
	ecosystem.push( newCritter );
};
