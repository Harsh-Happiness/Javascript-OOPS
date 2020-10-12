function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw consts");
  };
}
const circle = new Circle(1);

for (let key in circle) {
  console.log(key, circle[key]);
}

console.log(Object.keys(circle));