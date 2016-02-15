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
		var openAngle = Math.random()*45;
		var petalCount = Math.round(Math.random()*(6-3)+3);
		var petalHeight = Math.random()*(140-100)+100;
		petalWidth = Math.random()*((petalHeight*0.8)-(petalHeight*0.5))+(petalHeight*0.5);
		ctx.save();
		ctx.rotate( -(openAngle*petalCount/2) *Math.PI/180);
		ctx.fillStyle = 'red';
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
		}
		ctx.restore();
		if(openAngle>20){	
			openAngle=60;
			ctx.save();
			ctx.rotate( -openAngle *Math.PI/180);
			ctx.fillStyle = 'orange';
			petalHeight *= 0.6;
			for(i=0;i<2;i++){
				ctx.save();
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.rotate( (openAngle*i) *Math.PI/180);
				ctx.quadraticCurveTo(-petalWidth*1.2, -petalHeight*1.4, x, y-petalHeight);
				ctx.quadraticCurveTo(petalWidth*1.2, -petalHeight*1.4, x, y);
				ctx.fill();
				ctx.closePath();
				ctx.restore();
			}
			ctx.restore();
		}
	},
	leafGradient: function(x, y, h){
		var gradient = ctx.createRadialGradient(x, y, h, x, y, 5);
		gradient.addColorStop(0, '#00B7FF'); 
		gradient.addColorStop(1, '#006FFF'); 
		return gradient; 
	},
	drawLeaf: function(x, y){
		var leafCanvas = document.createElement("canvas");
		var leafCtx = leafCanvas.getContext("2d");

		var veinCanvas = document.createElement("canvas");
		var veinCtx = veinCanvas.getContext("2d");

		leafCanvas.width = 200; 
		leafCanvas.height = 200; 

		veinCanvas.width = 200; 
		veinCanvas.height = 200; 

		var currentCount = 1;
		var x = [210];
		var y = [210];
		var r = [210];
		x[0] = 0;
		y[0] = 0;
		r[0] = 10;
		var newR = 10;
		leafCtx.save();
		leafCtx.fillStyle = "blue";
		leafCtx.translate(x, y);
		leafCtx.beginPath();
		leafCtx.moveTo(100,0);
		leafCtx.quadraticCurveTo(0, 30, 100, 200);
		leafCtx.quadraticCurveTo(200, 30, 100, 0);
		leafCtx.closePath();
		leafCtx.fill();
		leafCtx.restore();

		veinCtx.strokeStyle = "orange";
		veinCtx.lineWidth = 2;
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

			x[currentCount] = x[closestIndex] + Math.cos(angle) * (r[closestIndex]+newR);
			y[currentCount] = y[closestIndex] + Math.sin(angle) * (r[closestIndex]+newR);
			r[currentCount] = newR;

			veinCtx.beginPath();
			veinCtx.moveTo(x[currentCount],y[currentCount]);
			veinCtx.lineTo(x[closestIndex],y[closestIndex]);
			veinCtx.closePath();
			veinCtx.stroke();

			currentCount++;
		}
		// veinCtx.translate(0, 100);
		// veinCtx.beginPath();
		veinCtx.restore();
		veinCtx.globalCompositeOperation = 'destination-atop';
		veinCtx.drawImage(leafCanvas, 0, 0);

		ctx.save();
		ctx.translate(x, y);
		ctx.rotate( (Math.random()*(-180)-90) * Math.PI/180);
  		ctx.drawImage(veinCanvas, -100, 0);
		// ctx.strokeRect(0,0, canvas.width, canvas.height);
		// ctx.stroke();
  		// ctx.scale(-1,1);
  		// ctx.drawImage(veinCanvas, 0, 0);
		ctx.restore();
		// ctx.globalCompositeOperation = 'source-over';
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
		ctx.strokeStyle = "orange";
		ctx.lineCap = 'square';
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.closePath();


		if(Math.random()<0.4){
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
