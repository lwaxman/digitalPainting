var can = document.getElementsByTagName('canvas')[0];
var ctx = can.getContext('2d');

ctx.fillStyle = "#5500FF";
ctx.strokeStyle = "#00FF53";
ctx.lineWidth = 10;

ctx.fillRect(100, 100, 200, 200);
ctx.strokeRect(100, 100, 200, 200);

ctx.fillStyle = "rgba(0, 247, 255, 0.5)";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.quadraticCurveTo(200, 400, 400, 100);
ctx.quadraticCurveTo(300, 600, 100, 700);
ctx.quadraticCurveTo(800, 300, 0, 0);
ctx.fill();
ctx.stroke();

ctx.translate(300, 300);
ctx.rotate(180 * Math.PI/180);
ctx.fillStyle = "rgba(255, 200, 0, 0.5)";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.quadraticCurveTo(200, 400, 400, 100);
ctx.quadraticCurveTo(300, 600, 100, 700);
ctx.quadraticCurveTo(800, 300, 0, 0);
ctx.fill();
ctx.stroke();



