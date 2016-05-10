//add.js

var add = function(type, ecosystem){
	// var newCritter; 
	var size = random(10, 20);

	console.log("type", type);

	var element = document.getElementById(type);
	var style = window.getComputedStyle(element);
	var top = parseFloat( style.getPropertyValue('top').split("px")[0] )+buttonSize;
	var left = parseFloat( style.getPropertyValue('left').split("px")[0] )+buttonSize;

	var fillColour, strokeColour; 
	var brain; 
	if(type==="sprindle"){
		brain = spindle;
		fillColour = "#FF4D74";
		strokeColour = "#8CAA4B";
	}else if(type==="thistle"){
		brain = thistle;
		fillColour = "#39BE92"; 
		strokeColour = "#319E59";
	}else if(type==="fern"){
		brain = fern;
		fillColour = "#00BF4D"; 
		strokeColour = "#00A23F";
	}
	// newCritter = new Critter( left, top, fillColour, strokeColour, brain);
	var newPlant = new Plant( left, top, fillColour, strokeColour, brain);
	newPlant.brain();
	ecosystem.push( newPlant );
};

// var addHybrid = function(pos, colour, ecosystem){
// 	var size = random(10, 20);
// 	var left = pos[0];
// 	var top = pos[1];
// 	var newCritter = new Critter( left, top, size, size, colour);
	// ecosystem.push( newCritter );
// };
