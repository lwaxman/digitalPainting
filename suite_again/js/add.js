//add.js

var add = function(type, ecosystem){
	var newCritter; 
	var size = random(10, 20);

	console.log("type", type);

	var element = document.getElementById(type);
	var style = window.getComputedStyle(element);
	var top = parseFloat( style.getPropertyValue('top').split("px")[0] )+buttonSize;
	var left = parseFloat( style.getPropertyValue('left').split("px")[0] )+buttonSize;

	var fillColour, strokeColour; 
	var brain; 
	if(type==="lime"){
		brain = wreath;
		fillColour = "#C0FF00";
		strokeColour = "#9ADA02";
	}else if(type==="forest"){
		brain = drawPlant;
		fillColour = "#39BE92"; 
		strokeColour = "#319E59";
	}else if(type==="green"){
		brain = drawPlant;
		fillColour = "#00BF4D"; 
		strokeColour = "#00A23F";
	}
	newCritter = new Critter( left, top, size, size, fillColour, strokeColour, brain);
	ecosystem.push( newCritter );
};

// var addHybrid = function(pos, colour, ecosystem){
// 	var size = random(10, 20);
// 	var left = pos[0];
// 	var top = pos[1];
// 	var newCritter = new Critter( left, top, size, size, colour);
// 	ecosystem.push( newCritter );
// };
