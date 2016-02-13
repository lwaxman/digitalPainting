var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var setup = function(){
	ctx.rect(0, 0, canvas.width, canvas.height);
	var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
	grd.addColorStop(0, '#FBFFE3');   
	grd.addColorStop(1, '#C7BD8F'); 
	ctx.fillStyle = grd;
	ctx.fill();
	ctx.imageSmoothingEnabled = true;

	var xPos = canvas.width/2;
	var yPos = canvas.height-50;

	ctx.save();
	ctx.translate(xPos, yPos);
	ctx.rotate((Math.random()*(-25-25)+25) * Math.PI/180);
	plant.drawStem(200);
	ctx.restore();
}; 

var plant = {
	drawLeaf: function(x, y){
		var leafW = Math.random()*(8-5)+5;
		var leafH = 10;
		var angle = Math.random()*(-45-45)+45;
		var stemLength = Math.random()*(100-50)+50;

		ctx.save();
		ctx.strokeStyle = "#477705";
		ctx.lineCap = 'round';
		ctx.lineWidth =  5;	
		ctx.beginPath();
		ctx.moveTo(x, y+stemLength);
		ctx.rotate(angle * Math.PI/180);
		ctx.quadraticCurveTo(x-20, y+30, x, y);
		ctx.stroke();
		ctx.closePath();

		for(var j=0; j<3; j++){
			var xOffset = 50; //Math.random()*(80-30)+30;
			var yOffset = 100; //Math.random()*(j*100-160)+160;
			ctx.save(); 
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.quadraticCurveTo(x+xOffset, y-50, x, y-yOffset);
			ctx.quadraticCurveTo(x-xOffset, y-50, x, y);
			ctx.fillStyle = "#A9C704";
			ctx.globalAlpha = 0.5;
			ctx.fill();
			ctx.globalAlpha = 1;
			ctx.restore();
			ctx.closePath();
		}
		ctx.restore();
	},
	drawStem: function(length){	
		ctx.strokeStyle = "#529206";
		ctx.lineCap = 'round';
		ctx.lineWidth = (length/10) * 0.8;
		ctx.beginPath();
		ctx.moveTo(Math.random()*5, Math.random()*5);
		ctx.lineTo(Math.random()*5, Math.random()*5-length);
		ctx.stroke();
		ctx.closePath();

		if(Math.random()<0.5){
			this.drawLeaf(0, -length);
		}

		ctx.translate(0, -length);

		length *= Math.random()*(0.9-0.8)+0.8;

		if(length>110) {
			ctx.save();
			ctx.rotate((Math.random()*(40-15)+15) * Math.PI/180);
			this.drawStem(length);
			ctx.restore();

			ctx.save();
			ctx.rotate(-(Math.random()*(40-15)+15) * Math.PI/180);
			this.drawStem(length);
			ctx.restore();
		}else{
			ctx.beginPath();
			ctx.fillStyle = "#C7008C";
			ctx.ellipse(0, 0, 10, 10, 0, 0, 2*Math.PI);
			ctx.fill();
			ctx.closePath();
		}
	}
}

setup();
