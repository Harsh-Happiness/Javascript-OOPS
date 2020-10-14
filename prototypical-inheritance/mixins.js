// this is composition / mixins
const canEat = {
  eat: function () {
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
    swim: function(){
        console.log("swimming");
    }
};
function Person() {}

Object.assign(Person.prototype, canEat, canWalk);
const p = new Person();

function mixin(target, ...sources){
    Object.assign(target, sources);
}

function Duck(){
}
const d = new Duck();

mixin(Duck.prototype,canWalk,canSwim,canEat);