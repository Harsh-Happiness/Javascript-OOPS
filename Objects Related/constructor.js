function CircleFactory(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw constructor!");
  };
}

const circle = new CircleFactory();
circle.draw();

// new String();
// new Boolean();
// new Number();

console.log(CircleFactory.constructor);

const Circle1 = new Function('radius',`this.radius = radius;
this.draw = function () {
  console.log("draw Function constructor!");
};`);

const circleOther = new Circle1(1);
console.log(circleOther.radius);

