var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var setup = function(){
	ctx.rect(0, 0, canvas.width, canvas.height);
	var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
	grd.addColorStop(0, '#009CA0');   
	grd.addColorStop(1, '#005181'); 
	ctx.fillStyle = grd;
	ctx.fill();
	ctx.imageSmoothingEnabled = true;

	var xPos = Math.random()*(canvas.width-canvas.width*0.6)+canvas.width*0.6;
	var yPos = (Math.random()*canvas.height/2)+canvas.height/2 ;//Math.random()*(canvas.width-canvas.height)+canvas.height*0.6;

	ctx.save();  
	ctx.translate(xPos, yPos);
	ctx.rotate((Math.random()*(-25-25)+25) * Math.PI/180);
	plant.drawStem(200);
	ctx.restore();
}; 

var plant = {
	stemColours: ["rgba(140, 100, 70, 1)", "rgba(231, 240, 228, 0.5)", "rgba(200, 240, 90, 0.5)"],
	leafColours: ["rgba(0, 255, 132, 1)", "rgba(58, 255, 20, 0.5)", "rgba(0, 189, 141, 0.5)"],
	stemCount: 0,
	drawLeaf: function(x, y){
		var leafW = Math.random()*(8-5)+5;
		var leafH = 10;
		for(var i=0; i<this.leafColours.length; i++){
			console.log(i);
			ctx.beginPath();
			var leafGrd = ctx.createRadialGradient(x, y, 15, x+leafW, y+leafH, 0);
			leafGrd.addColorStop(0, this.leafColours[i]);   
			leafGrd.addColorStop(1, "rgba("+ (Math.round(Math.random()*255)) +", "+ (Math.round(Math.random()*255)) +", 0, 0.5)"); 
			ctx.ellipse(x, y, leafW, 10, Math.random()*(-45-45)+45, 0, 2*Math.PI);
			ctx.fillStyle = leafGrd;
			ctx.fill();
			ctx.closePath();
		}
	},
	drawFruit: function(x, y){
		ctx.beginPath();
		ctx.fillStyle = "#DE497D";
		var fruitGrd = ctx.createRadialGradient(x, y, 15, x+10, y+10, 5);
		fruitGrd.addColorStop(0, '#DE497D');   
		fruitGrd.addColorStop(1, '#FFDA00'); 
		ctx.ellipse(x, y, 15, 15, 0, 0, 2*Math.PI);
		ctx.fillStyle = fruitGrd;
		ctx.fill();
		ctx.closePath();
	},
	drawFlower: function(x, y){
		ctx.beginPath();
		var flowerGrd = ctx.createRadialGradient(x, y, 15, x+10, y+10, 5);
		flowerGrd.addColorStop(0, '#FFDBF8');   
		flowerGrd.addColorStop(1, '#FF7A95'); 
		ctx.ellipse(x, y, 8, 10, Math.random()*(-45-45)+45, 0, 2*Math.PI);
		ctx.fillStyle = flowerGrd;
		ctx.fill();
		ctx.closePath();
	},
	drawStem: function(length){
		
		for(var i=0; i<this.stemColours.length; i++){	
			ctx.globalCompositeOperation = 'color';		
			ctx.strokeStyle = this.stemColours[i];
			ctx.lineCap = 'round';
			ctx.lineWidth = (length/10) * 0.8;
			ctx.beginPath();
			ctx.moveTo(Math.random()*5, Math.random()*5);
			ctx.lineTo(Math.random()*5, Math.random()*5-length);
			ctx.stroke();
			ctx.closePath();
			ctx.globalCompositeOperation = 'source-over';	
		}

		if(length<80){
			this.drawLeaf((Math.random()*(-10-10)+10), Math.random()*-length);	
			if(Math.random()<0.02){
				this.drawFruit((Math.random()*(-10-10)+10), Math.random()*-length);
			}
			if(Math.random()<0.05){
				this.drawFlower((Math.random()*(-10-10)+10), Math.random()*-length);
			}	
		}

		ctx.translate(0, -length);

		length *= Math.random()*(0.9-0.7)+0.7;

		if(length>20) {
			ctx.save();
			ctx.rotate((Math.random()*(60-15)+15) * Math.PI/180);
			this.drawStem(length);
			ctx.restore();

			ctx.save();
			ctx.rotate(-(Math.random()*(60-15)+15) * Math.PI/180);
			this.drawStem(length);
			ctx.restore();
		}
	}
}

setup();
