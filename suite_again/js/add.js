//add.js

var add = function(type, ecosystem){
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
	}else if(type==="shrub"){
		brain = shrub;
		fillColour = "#39BE92"; 
		strokeColour = "#319E59";
	}else if(type==="flower"){
		brain = flower;
		fillColour = "#F76888"; 
		strokeColour = "#F76888";
	}
	var newPlant = new Plant( left, top, fillColour, strokeColour, brain);
	newPlant.brain();
	ecosystem.push( newPlant );
};