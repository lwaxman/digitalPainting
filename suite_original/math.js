// math.js

var random = function(min, max, r){
	if(r === undefined) r = true; 
	if(r){
		return rand = Math.round( Math.random()*(max-min)+min );
	}else{
		return rand = Math.random()*(max-min)+min;
	}
}

var constrainX = function(x){
	if(x>window.innerWidth) x = 5; 
	else if(x<0) x = window.innerWidth-5; 
	return x;
}

var constrainY = function(y){
	if(y>window.innerHeight) y = 5; 
	else if(y<0) y = window.innerHeight-5; 
	return y;
}

var map = function(num, minIN, maxIN, minOUT, maxOUT) {
  return (num - minIN) * (maxOUT - minOUT) / (maxIN - minIN) + minOUT;
}
