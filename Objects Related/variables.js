// Value vs reference types

// Value/Primitives                Reference Types

// Number                          Object
// String                          Function
// Boolean                         Array
// Symbol
// undefined
// null
// -----------------------------------------------------------------------------
let num = 10;

function increaseNum(num) {
  num++;
  //here num is increased to 11 but not outside the function
}

increaseNum(num);
console.log(num);

// If we pass object instead of num variable.
// we can persist the value, as its passed by reference 

// -----------------------------------------------------------------------------

// 2. adding property in object at anytime.

function Circle(radius){
    this.radius = radius;
    this.draw  = function(){
        console.log("draw consts");
    }
}
const circle = new Circle(1);
circle.circum = 2*3.14*circle.radius;
console.log(circle.circum);

// above mentioned properties is less verbose and less dynamic at runtime 
// instead we can use .

const area = "area";
circle[area] = 3.14*(Math.pow(circle.radius,2));
console.log(circle.area);