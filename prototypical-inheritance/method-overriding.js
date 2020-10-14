function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicateds");
};
function Circle() {}

extend(Circle, Shape);
const c = new Circle();

// Here after extending the Shape Class,
//  if Circle class needs to over-ride the duplicate method.
//  Circle class should create a prototype of its own duplicate method

Circle.prototype.duplicate = function () {
  console.log("duplicated Circle!");
};
