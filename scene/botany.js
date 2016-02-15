var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stemStartLength = canvas.height/6;


var setup = function(){
	ctx.rect(0, 0, canvas.width, canvas.height);
	var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
	grd.addColorStop(0, '#E6FFBA');//'#FBFFE3');   
	grd.addColorStop(1, '#9CFFF8');//'#C7BD8F'); 
	ctx.fillStyle = grd;
	ctx.fill();
	ctx.imageSmoothingEnabled = true;

	var xPos = canvas.width/2;
	var yPos = canvas.height-50;
	
	ctx.save();
	ctx.translate(xPos, yPos);
	ctx.rotate((Math.random()*(-25-25)+25) * Math.PI/180);
	plant.drawStem(stemStartLength);
	ctx.restore();
}; 

var plant = {
	petalGradient: function(h){
		var gradient = ctx.createRadialGradient(0, 0, 100, 0, 0, 5);
		gradient.addColorStop(0.5, '#FF9B00');   
		gradient.addColorStop(1, '#DB00FF'); 
		return gradient; 
	},
	drawPetal: function(x, y){
		var angle = Math.random()*50;
		ctx.save(); 
		ctx.rotate( (-angle*2) * Math.PI/180);

		for(s=3; s>0; s--){

			var xOffset = (s*(Math.random()*(80-50)+50))/2;
			var petalHeight = (s*s*s*s) + 20;
			var yOffset = s*40;//Math.random()*(petalHeight-(petalHeight))+(petalHeight);
			console.log(petalHeight);
			if(s==1){
				ctx.fillStyle = 'yellow';
			}else{
				ctx.fillStyle = this.petalGradient(petalHeight);
			}

			ctx.beginPath();
			for(var c=0; c<5; c++){
				ctx.save(); 
				ctx.rotate((angle*c) * Math.PI/180);
				ctx.moveTo(x, y);
				ctx.quadraticCurveTo(x+xOffset, y-yOffset, x, y-petalHeight);
				ctx.quadraticCurveTo(x-xOffset, y-yOffset, x, y);
				ctx.restore();
				ctx.strokeStyle = "#000";
				ctx.lineWidth = Math.random()*(6-4)+4;
				ctx.lineJoin = 'round';
				ctx.stroke();
				ctx.fill();
			}
			ctx.closePath();	
		}

		ctx.restore();

	},
	leafGradient: function(x, y, h){
		var gradient = ctx.createRadialGradient(x, y, h, x, y, 5);
		gradient.addColorStop(0, '#00B7FF'); 
		gradient.addColorStop(1, '#006FFF'); 
		return gradient; 
	},
	drawLeaf: function(x, y){
		var leafW = Math.random()*(8-5)+5;
		var leafH = 10;
		var angle = Math.random()*(-20-20)+20;
		var stemLength = Math.random()*(100-50)+50;

		ctx.save();
		ctx.strokeStyle = "#006FFF";
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
			ctx.fill();

			ctx.beginPath();
			ctx.moveTo(x, y-stemLength);
			ctx.quadraticCurveTo(x-xOffset+Math.random()*10, y-100+Math.random()*10, x, y-leafHeight-stemLength);
			ctx.quadraticCurveTo(x+xOffset+Math.random()*10, y-100+Math.random()*10, x, y-stemLength);
			ctx.strokeStyle = "#000";
			ctx.lineWidth = Math.random()*(3-2)+2;
			ctx.lineJoin = 'round';
			ctx.globalAlpha = 0.95;
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
		}
		ctx.restore();
	},
	drawStem: function(length){	
		var flower = Math.random();

		ctx.strokeStyle = "#0D3EFF";
		ctx.lineCap = 'round';
		ctx.lineWidth = (length/10) * 0.8;
		ctx.beginPath();
		ctx.moveTo(Math.random()*5, Math.random()*5);
		ctx.quadraticCurveTo(Math.random()*(-30-30)+30, Math.random()*-length, Math.random()*5, Math.random()*5-length);
		ctx.stroke();
		ctx.strokeStyle = "#000";
		ctx.lineCap = 'square';
		ctx.lineWidth = Math.random()*(3-2)+2;
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
		}
	}
}

setup();
