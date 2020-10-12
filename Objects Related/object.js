const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

// object has properties like radius and location and "methods" like draw of the object.

circle.draw();

// Suppose we duplicate the object and it has methods.
// It's bad practice to create the literal object which has even a single method.
// If a object has method, we consider it has behavior.

// how to overcome this issue?
// Can use "Factory" or "Contructor" function

// Factory function
function CircleFactory(radius) {
  return {
    radius: radius,
    location: {
      x: 1,
      y: 1,
    },
    draw: function () {
      console.log("draw factory");
    },
  };
}

const circle = CircleFactory(1);
circle.draw();

// Constructor function
// In javascript there is no concept of classes
function CircleFactory(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw constructor!");
  };
}

const circle = new CircleFactory();
circle.draw();
// 1. new creates the empty object like {}.
// 2. Now, new will point the this keyword to point to {} object just created.
// 3. internally return the object.

// w/o new -> this points to global object in CircleFactory function
// w new -> this points to the object which new has just created.
