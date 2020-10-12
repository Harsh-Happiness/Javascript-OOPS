let name = { first: "harsh" };
let nameBase = Object.getPrototypeOf(name);
let desc = Object.getOwnPropertyDescriptor(nameBase, "toString");
console.log(desc);

// Writable (default: true) - we can override its implementation.
// Configurable (default:true) - can delete this member if we want to.
// Enumerable (default :false) - thats why we couldn't log in name object.

let name1 = { first: "harsh" };
Object.defineProperty(name1, "first", {
  writable: false,
});

name1.first = "other";

console.log(name1);

