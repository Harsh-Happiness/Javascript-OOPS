// instance members 
// prototype members

function Circle(rad){
    this.radius = rad;
    this.draw = ()=> "draw constructor";
}

let c1 = new Circle(2);
let c2 = new Circle(3);


// ----------------------------------------------------------------------------

function Circle(rad){
    //instance member
    this.radius = rad;
    // this.draw = ()=> "draw constructor";
}

//prototype(parent) member
Circle.prototype.draw = ()=> "draw constructor";
Circle.prototype.toString = function(){
    return "radius is : "+ this.radius;
} 
let c1 = new Circle(2);
let c2 = new Circle(3);
console.log(c2.draw());
console.log(c2.toString());
