var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stemStartLength = canvas.height/6;


var setup = function(){
	ctx.rect(0, 0, canvas.width, canvas.height);
	var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
	grd.addColorStop(0, '#FFF');//'#FBFFE3');   
	grd.addColorStop(1, '#DDD');//'#C7BD8F'); 
	ctx.fillStyle = grd;
	ctx.fill();
	ctx.imageSmoothingEnabled = true;

	var xPos = canvas.width/2;
	var yPos = canvas.height-50;

	// for(x=0; x<3; x++){		
		ctx.save();
		ctx.translate(xPos, yPos);
		ctx.rotate((Math.random()*(-25-25)+25) * Math.PI/180);
		plant.drawStem(stemStartLength);
		ctx.restore();
	// }
}; 

var plant = {
	petalGradient: function(){
		var gradient = ctx.createRadialGradient(0, 0, 100, 50, 50, 5);
		gradient.addColorStop(0, '#A42BB9'); 
		gradient.addColorStop(0.3, '#DE497D');   
		gradient.addColorStop(1, '#E6BAFF'); 
		return gradient; 
	},
	drawPetal: function(x, y){
		var angle = Math.random()*50;
		var yOffset = Math.random()*(100-70)+70;
		ctx.save(); 
		ctx.rotate( (-angle*2) * Math.PI/180);
		for(var c=0; c<5; c++){
			var xOffset = Math.random()*(50-30)+30;
			ctx.save(); 
			ctx.rotate((angle*c) * Math.PI/180);
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.quadraticCurveTo(x+xOffset, y-50, x, y-yOffset);
			ctx.quadraticCurveTo(x-xOffset, y-50, x, y);
			ctx.fillStyle = this.petalGradient();
			ctx.globalAlpha = 0.9;
			ctx.fill();
			ctx.restore();
			ctx.closePath();	
		}
		ctx.restore();
	},
	leafGradient: function(x, y, h){
		var gradient = ctx.createRadialGradient(x, y, h, x, y, 5);
		gradient.addColorStop(0, '#A9C704'); 
		gradient.addColorStop(1, '#477705'); 
		return gradient; 
	},
	drawLeaf: function(x, y){
		var leafW = Math.random()*(8-5)+5;
		var leafH = 10;
		var angle = Math.random()*(-20-20)+20;
		var stemLength = Math.random()*(100-50)+50;

		ctx.save();
		ctx.strokeStyle = "#477705";
		ctx.lineCap = 'round';
		ctx.lineWidth =  5;	
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.rotate(angle * Math.PI/180);
		ctx.quadraticCurveTo(x-(Math.random()*(-40)+20), y-(Math.random()*(-40)+20), x, y-stemLength);
		ctx.stroke();
		ctx.closePath();

		for(var j=4; j>1; j--){
			var xOffset = Math.random()*(j*30-j*20)+j*20;
			var leafHeight = Math.random()*(j*60-j*40)+j*40;
			ctx.save(); 
			ctx.beginPath();
			ctx.moveTo(x, y-stemLength);
			ctx.quadraticCurveTo(x-xOffset, y-100, x, y-leafHeight-stemLength);
			ctx.quadraticCurveTo(x+xOffset, y-100, x, y-stemLength);
			ctx.fillStyle = this.leafGradient(x, y-stemLength, leafHeight);
			ctx.globalAlpha = 1;
			ctx.fill();
			ctx.restore();
			ctx.closePath();
		}
		ctx.restore();
	},
	drawStem: function(length){	
		var flower = Math.random();
		ctx.strokeStyle = "#529206";
		ctx.lineCap = 'round';
		ctx.lineWidth = (length/10) * 0.8;
		ctx.beginPath();
		ctx.moveTo(Math.random()*5, Math.random()*5);
		ctx.quadraticCurveTo(Math.random()*(-30-30)+30, Math.random()*-length, Math.random()*5, Math.random()*5-length);
		ctx.stroke();
		ctx.closePath();

		if(Math.random()<0.8  && flower>0.5){
			this.drawLeaf(0, -length);
			if(Math.random()<0.8 && flower>0.5){
				this.drawLeaf(0, -length);
			}
		}

		ctx.translate(0, -length);

		length *= Math.random()*(0.9-0.8)+0.8;

		if(length>(stemStartLength*0.55)) {
			ctx.save();
			ctx.rotate((Math.random()*(40-15)+15) * Math.PI/180);
			this.drawStem(length);
			ctx.restore();

			ctx.save();
			ctx.rotate(-(Math.random()*(40-15)+15) * Math.PI/180);
			this.drawStem(length);
			ctx.restore();
		}else{
			if(flower<0.6){
				this.drawPetal(0, 0);
			}
			// ctx.beginPath();
			// ctx.fillStyle = "#C7008C";
			// ctx.ellipse(0, 0, 10, 10, 0, 0, 2*Math.PI);
			// ctx.fill();
			// ctx.closePath();
		}
	}
}

setup();
