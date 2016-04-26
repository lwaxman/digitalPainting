//add.js

var add = function(type, ecosystem){
	var newCritter; 
	var size;

	var element = document.getElementById(type);
	var style = window.getComputedStyle(element);
	var top = parseFloat( style.getPropertyValue('top').split("px")[0] )+buttonSize;
	var left = parseFloat( style.getPropertyValue('left').split("px")[0] )+buttonSize;

	if(type=="red"){
		size = random(15, 30);
		newCritter = new RedCritter( left, top, size, size );
	}else if(type=="blue"){
		size = random(30, 50);
		newCritter = new BlueCritter( left, top, size, size );
	}else if(type=="green"){
		size = random(30, 50);
		newCritter = new GreenCritter( left, top, size, size );
	}else if(type=="cyan"){
		size = random(30, 50);
		newCritter = new CyanCritter( left, top, size, size );
	}else if(type=="magenta"){
		size = random(30, 50);
		newCritter = new MagentaCritter( left, top, size, size );
	}else if(type=="yellow"){
		size = random(30, 50);
		newCritter = new YellowCritter( left, top, size, size );
	}
	ecosystem.push( newCritter );
};

var addHybrid = function(type, ecosystem, x, y, size){
	console.log("NEW HYBRID", x, y, size);
	var newCritter; 
	if(type=="red"){
		newCritter = new RedCritter( x, y, size, size );
	}else if(type=="blue"){
		newCritter = new BlueCritter( x, y, size, size );
	}else if(type=="green"){
		newCritter = new GreenCritter( x, y, size, size );
	}else if(type=="magenta"){
		newCritter = new MagentaCritter( x, y, size, size );
	}else if(type=="cyan"){
		newCritter = new CyanCritter( x, y, size, size );
	}else if(type=="yellow"){
		newCritter = new YellowCritter( x, y, size, size );
	}
	// newCritter.speed = 0; 
	ecosystem.push( newCritter );
};	