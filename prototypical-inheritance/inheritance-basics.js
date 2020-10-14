function Shape() {
  //method to inherit
  Shape.prototype.area = function () {
    return "2*pi*r";
  };
}

function Circle(rad) {
  this.radius = rad;
}
const c = new Circle(4);
const s = new Shape();

// How to make one class inherit other through prototypical inheritance
// just like extends in java
// this is creating Circle a subClass of Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
// Above code has following implications
// 1. Circle.prototype.constructor = Circle;
// and Circle.prototype.constructor() == new Circle();

// once we do this -> Circle.prototype
// here we are resetting the prototype of Circle
// and resetting the constructor of Circle as well
// so, we need to set the constructor too
// ie., Circle.prototype.constructor = Circle;

// Now, if we want to create another Class which extends Shape.
function Square(size) {
  this.size = size;
}

// extends
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

// instead we can introduce a intermediate function for inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

extend(Square, Shape);

const sq = new Square();
