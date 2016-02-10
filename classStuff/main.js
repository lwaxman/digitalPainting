var can = document.createElement("canvas");
var ctx = can.getContext("2d");

// SHIT TO PLAY WITH:
// quadraticCurveTo
// atan2

var randomColours = true;
var colour = {"r":255, "g":107, "b":133, "a":150};

can.width = window.innerWidth;
can.height = window.innerHeight;

document.body.appendChild(can);

function drawCircle(r, x, y){
  var circleCan = document.createElement("canvas");
  var circleCtx = circleCan.getContext("2d");
  circleCan.width = r; 
  circleCan.height = r; 

  var imgData = circleCtx.getImageData(0, 0, r, r);

  var xPos = 0; 
  var yPos = 0; 
  for(var i=0; i<imgData.data.length; i++){
    if(i%4 == 0){
      xPos++;
      if(xPos>=r){
        xPos = 0; 
        yPos++;
      }
      var d = getDistance(r/2, r/2, xPos, yPos, r);

      if(d < (r/2) ){
        if(randomColours){
          imgData.data[i] = Math.round(Math.random()*255); 
          imgData.data[i+1] = Math.round(Math.random()*255); 
          imgData.data[i+2] = Math.round(Math.random()*255); 
          imgData.data[i+3] = 150; 
        }else{
          imgData.data[i] = colour["r"]; 
          imgData.data[i+1] = colour["g"]; 
          imgData.data[i+2] = colour["b"]; 
          imgData.data[i+3] = colour["a"]; 
        }
      }
    }
  }
  circleCtx.putImageData(imgData, 0, 0);
  ctx.drawImage(circleCan, x-(r/2), y-(r/2));
 
}

// for(var j=0; j<10; j++){
//   drawCircle(Math.random()*(300-50)+50, Math.random()*can.width, Math.random()*can.height);
// }

function getDistance(x1, y1, x2, y2, r){
  var a = Math.abs(x1-x2);
  var b = Math.abs(y1-y2);
  var distance = Math.sqrt( (a*a)+(b*b) );
  return distance + Math.round(Math.random()*(5+5)-5 );
}

function drawRect(w, h, x, y){
  var rectCan = document.createElement("canvas");
  var rectCtx = rectCan.getContext("2d");

  rectCan.width = w; 
  rectCan.height = h; 

  var imgData = rectCtx.getImageData(0, 0, w, h);
  for(var i=0; i<imgData.data.length; i++){
    if(i%4 == 0){
      if(randomColours){
        imgData.data[i] = Math.round(Math.random()*255); 
        imgData.data[i+1] = Math.round(Math.random()*255); 
        imgData.data[i+2] = Math.round(Math.random()*255); 
        imgData.data[i+3] = 255; 
      }else{
        imgData.data[i] = colour["r"]; 
        imgData.data[i+1] = colour["g"]; 
        imgData.data[i+2] = colour["b"]; 
        imgData.data[i+3] = colour["a"]; 
      }
    }
  }
  rectCtx.putImageData(imgData, 0, 0);
  ctx.drawImage(rectCan, x-(w/2), y-(h/2));
}

drawRect(100, 100, 200, 200);



function sort(){
  var sortCan = document.getElementsByTagName("canvas");
  var sortCtx = sortCan.getContext("2d");

  console.log("sort");

  var imgData = sortCtx.getImageData(0, 0, w, h);
  for(var i=0; i<imgData.data.length; i++){

  }
  rectCtx.putImageData(imgData, 0, 0);
}

// setInterval(sort, 1000);