function Circle(radius){
    this.radius = radius;
    this.draw = ()=>{
        return "draw constructor";
    }
}

let c = new Circle(12);

console.log(c.__proto__);
console.log(Object.prototype);