//app.js
var creature_add_to_ecosystem = function(creature, ecosystem) {
	ecosystem.components.push(creature[0]);
	ecosystem.renderers.push(creature[1]);
};

var add = function(type, length){
	var randomX = random(0, can.width);
	var randomY = random(0, can.width);	
	var neg;
	if(random(0, 1)==0) neg = -1; 
	else neg = 1; 
	if(type == "blue"){
		var speed = map(length, 0, 50, 1, 4);
		creature_add_to_ecosystem( square_creature( randomX, randomY, speed*neg, random(10, 20) ), ecosystem );
	}else if(type == "green"){
		var speed = map(length, 0, 50, 1, 10);
		creature_add_to_ecosystem( green_creature( randomX, randomY, speed*neg, random(15, 30) ), ecosystem );
	}else if(type == "red"){
		var speed = map(length, 0, 50, 1, 4);
		creature_add_to_ecosystem( red_creature( randomX, randomY, speed*neg, random(5, 15) ), ecosystem );
	}
}
