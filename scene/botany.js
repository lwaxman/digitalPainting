var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stemStartLength = canvas.height/6;


var getRandomColour = function(){
	red = Math.round(Math.random()*255);
	green = Math.round(Math.random()*255);
	blue = Math.round(Math.random()*255);
	return 'rgb('+red+','+green+','+blue+')';
}

var setup = function(){
	ctx.fillStyle = "#fff";
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fill();
	ctx.imageSmoothingEnabled = true;

	piece = canvas.height/4;
	offset = canvas.width/4;
	for(var i=1; i<4; i++){	
		xPos = Math.random()*(canvas.width-offset - offset)+offset;
		yPos = i*piece;
		drawPlant(xPos, yPos+piece);
	}

}; 

var drawPlant = function(x, y){

	leafColours = [getRandomColour(), getRandomColour()];
	stemColour = leafColours[0];
	petalColours = getRandomColour();
	
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate((Math.random()*(-25-25)+25) * Math.PI/180);
	plant.drawStem(stemStartLength);
	ctx.restore();
}

var plant = {
	getStrokeWidth: function(){
		return Math.random()*(3-2)+2;
	},
	//////////////////////////////////////////////////////////////////////////////////////////////// DRAW FLOWER
	petalFGGradient: function(h){
		var gradient = ctx.createRadialGradient(0, 0, 120, 0, 0, 5);
		gradient.addColorStop(0, petalColours);   
		gradient.addColorStop(1, 'yellow'); 
		return gradient; 
	},
	drawFlower: function(x, y){
		openAngle = Math.random()*(45-30)+30;
		petalCount = Math.round(Math.random()*(6-3)+3);
		petalHeight = Math.random()*(140-100)+100;
		petalWidth = Math.random()*(60-50)+50;
		// petalWidth = Math.random()*((petalHeight*0.8)-(petalHeight*0.5))+(petalHeight*0.5);
		ctx.save();
		ctx.rotate( -(openAngle*petalCount/2) *Math.PI/180);
		ctx.fillStyle = this.petalFGGradient();
		ctx.strokeStyle = this.getStrokeWidth();
		for(i=0;i<petalCount;i++){
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.rotate( (openAngle*i) *Math.PI/180);
			ctx.quadraticCurveTo(-petalWidth, -petalHeight*1.3, x, y-petalHeight);
			ctx.quadraticCurveTo(petalWidth, -petalHeight*1.3, x, y);
			ctx.fill();
			ctx.closePath();
			ctx.restore();
			
			offset = Math.random()*(-5-5)-5;
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.rotate( (openAngle*i) *Math.PI/180);
			ctx.quadraticCurveTo(-petalWidth+offset, -petalHeight*1.3, x, y-petalHeight);
			ctx.quadraticCurveTo(petalWidth+offset, -petalHeight*1.3, x, y);
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
		}
		ctx.restore();
		if(openAngle>20){	
			petalWidth = Math.random()*(40-25)+25;
			ctx.save();
			ctx.rotate( -(openAngle*(petalCount-1)/2) *Math.PI/180);
			ctx.fillStyle = petalColours;
			petalHeight *= 0.6;
			for(i=0;i<petalCount-1;i++){
				ctx.save();
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.rotate( (openAngle*i) *Math.PI/180);
				ctx.quadraticCurveTo(-petalWidth*1.2, -petalHeight*1.4, x, y-petalHeight);
				ctx.quadraticCurveTo(petalWidth*1.2, -petalHeight*1.4, x, y);
				ctx.fill();
				ctx.closePath();
				ctx.restore();

				offset = Math.random()*(-5-5)-5;
				ctx.save();
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.rotate( (openAngle*i) *Math.PI/180);
				ctx.quadraticCurveTo(-petalWidth*1.2+offset, -petalHeight*1.4, x, y-petalHeight);
				ctx.quadraticCurveTo(petalWidth*1.2+offset, -petalHeight*1.4, x, y);
				ctx.stroke();
				ctx.closePath();
				ctx.restore();

			}
			ctx.restore();
		}
	},
	//////////////////////////////////////////////////////////////////////////////////////////////// DRAW LEAF
	leafGradient: function(x, y, h){
		gradient = ctx.createRadialGradient(x+100, y, 10, x+100, y, h);
		gradient.addColorStop(0, leafColours[0]); 
		gradient.addColorStop(0.8, leafColours[1]); 
		return gradient; 
	},
	drawLeaf: function(x, y){
		var leafCanvas = document.createElement("canvas");
		var leafCtx = leafCanvas.getContext("2d");

		var veinCanvas = document.createElement("canvas");
		var veinCtx = veinCanvas.getContext("2d");

		leafCanvas.width = 200; 
		leafCanvas.height = 300; 

		veinCanvas.width = 200; 
		veinCanvas.height = 300; 

		var currentCount = 1;
		var x = [210];
		var y = [210];
		x[0] = 0;
		y[0] = 0;
		newR = 10;

		var leafHeight = Math.random()*(100)+200;
		var leafWidth = Math.random()*(180-100)+100;

		leafCtx.save();
		leafCtx.fillStyle = this.leafGradient(x, y, leafHeight); //"blue";
		leafCtx.translate(x, y);
		leafCtx.beginPath();
		leafCtx.moveTo(100,0);
		leafCtx.quadraticCurveTo(100-leafWidth, 30, 100, leafHeight);
		leafCtx.quadraticCurveTo(100+leafWidth, 30, 100, 0);
		leafCtx.closePath();
		leafCtx.fill();
		leafCtx.restore();

		veinCtx.strokeStyle = stemColour;
		veinCtx.lineWidth = 4;
		veinCtx.globalAlpha = 0.98;
		veinCtx.lineCap = 'round';
		veinCtx.save();
		veinCtx.translate(x+100, y);
		veinCtx.rotate(45 * Math.PI/180)
		while(currentCount<100){
			var newX = Math.random()*(0+newR - 200-newR) +  200-newR;
			var newY = Math.random()*(0+newR - 200-newR) +  200-newR;
			var closestDist = 100000000;
			var closestIndex = 0;

			for(i=0; i<currentCount; i++) {
				var a2 = Math.abs( x[i]-newX ) * Math.abs( x[i]-newX );
				var b2 = Math.abs( y[i]-newY ) * Math.abs( y[i]-newY );
				var newDist = Math.sqrt( a2+b2 );
				if (newDist < closestDist) {
					closestDist = newDist;
					closestIndex = i; 
				} 
			}
			var angle = Math.atan2(newY-y[closestIndex]+newR, newX-x[closestIndex]+newR);

			x[currentCount] = x[closestIndex] + Math.cos(angle) * (newR+newR);
			y[currentCount] = y[closestIndex] + Math.sin(angle) * (newR+newR);

			veinCtx.beginPath();
			veinCtx.moveTo(x[currentCount],y[currentCount]);
			veinCtx.lineTo(x[closestIndex],y[closestIndex]);
			veinCtx.closePath();
			veinCtx.stroke();

			currentCount++;
		}
		veinCtx.restore();
		veinCtx.globalCompositeOperation = 'destination-atop';
		veinCtx.drawImage(leafCanvas, 0, 0);
		veinCtx.filter = 'blur(100px)';

		ctx.strokeStyle = "#000";
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate( (Math.random()*(-180)-90) * Math.PI/180);
  		ctx.drawImage(veinCanvas, -100, 0);
		ctx.beginPath();
		ctx.translate(-100, 0);
		ctx.moveTo(100,0);
		ctx.quadraticCurveTo(100-leafWidth+10, 30, 100, leafHeight);
		ctx.lineWidth = this.getStrokeWidth();
		ctx.stroke();
		ctx.quadraticCurveTo(100+leafWidth+10, 30, 100, 0);
		ctx.lineWidth = Math.random()*(3-2)+2;
		ctx.stroke();
		ctx.restore();
	},
	//////////////////////////////////////////////////////////////////////////////////////////////// DRAW STEM
	drawStem: function(length){	
		var flower = Math.random();

		var xOffset = Math.random()*(-30-30)+30;
		var yOffset = Math.random()*-length;
		var lineWidth = (length/10) * 0.8;

		var fillOffset = Math.random()*(-5-5)+5;

		//fill
		ctx.fillStyle = stemColour;
		ctx.lineWidth = this.getStrokeWidth();
		ctx.beginPath();
		ctx.moveTo(fillOffset, 0);
		ctx.quadraticCurveTo(xOffset, yOffset, fillOffset, -length);
		ctx.lineTo(10, -length);
		ctx.quadraticCurveTo(xOffset+fillOffset, yOffset, 10+fillOffset, 5+fillOffset);
		ctx.fill();
		ctx.closePath();

		//stroke
		ctx.strokeStyle = "#000";
		ctx.lineWidth = this.getStrokeWidth();
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.quadraticCurveTo(xOffset, yOffset, 0, -length);
		ctx.lineTo(10, -length);
		ctx.quadraticCurveTo(xOffset, yOffset, 10, 0);
		ctx.stroke();
		ctx.closePath();

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
				this.drawFlower(0, 0);
			}else{
				this.drawLeaf(0, 0);
			}
		}


		if(Math.random()<0.4){
			this.drawLeaf(0, -length);
		}

	}
}

setup();
