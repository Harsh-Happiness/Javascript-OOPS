function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = {
    x: 0,
    y: 0,
  };

  this.computeLocation = function () {
    return "computed";
  };
  this.draw = function () {
    this.computeLocation();
    console.log("draw consts");
  };
}
const circle = new Circle(10);

// here using circle.computeLocation() would create the error.
// or setting the circle.defaultLocation = false would make things wrong

// So we use Abstraction
// HIDE THE DETAILS. SHOW THE ESSENTIALS

// Implementing abstraction below
// instead of making the object properties we can make it the local variable

function Circle(radius) {
  this.radius = radius;

  //private property
  let computeLocation = function () {
    return "computed location";
  };
  this.draw = function () {
    console.log(computeLocation());
    console.log("draw consts");
  };
}
const c = new Circle(10);
console.log(c.draw());

// ------------------------------------------------------------------------------
// 2. using setter and getter

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw constructor!");
  };
  let defaultLocationVar = 12;
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocationVar;
    },
    set: function (value) {
      defaultLocationVar = value;
    },
  });
}
const c = new Circle(19);
console.log(c.defaultLocation);
c.defaultLocation = 34;
console.log(c.defaultLocation);
