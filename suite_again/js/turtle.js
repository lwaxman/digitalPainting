/*
* my turtle failed, so (marginally adapted) Turtle brainwork from :
* http://psam3060-d-s16.github.io/class_notes/week_4/
*/

function Turtle(x, y){
    this.x = x;
    this.y = y;
    this.direction = 0;
    this.penState = true;
    this.bank = [];
    this.history = [];
}

Turtle.prototype.moveTo = function(newX, newY) {
    this.history.push({
        x1: this.x, 
        y1: this.y, 
        x2: newX, 
        y2: newY
        //type: something
    });
    if(this.penState){
        line(this.x, this.y, newX, newY);
    }
    this.x = newX;
    this.y = newY;
};

Turtle.prototype.moveForward = function(distance) {
    var newX = this.x + Math.cos(this.direction) * distance;
    var newY = this.y + Math.sin(this.direction) * distance;
    this.moveTo(newX, newY);
};

Turtle.prototype.moveBackward = function(distance) {
    this.moveForward(-distance);
};

Turtle.prototype.rotateTo = function(positionDegrees) {
    this.direction = radians(positionDegrees);
};

Turtle.prototype.rotate = function(amountDegrees) {
    this.direction += radians(amountDegrees);
};

Turtle.prototype.penUp = function() {
    this.penState = false;
};

Turtle.prototype.penDown = function() {
    this.penState = true;
};

Turtle.prototype.pushState = function() {
    this.bank.push({
        x: this.x,
        y: this.y,
        direction: this.direction,
        penState: this.penState
    });
};

Turtle.prototype.popState = function() {
    if(this.bank.length>0){
        var state = this.bank.pop();
        this.x = state.x;
        this.y = state.y;
        this.direction = state.direction;
        this.penState = state.penState;
        // this.bank.push( state );
    }else{ return; }
};




