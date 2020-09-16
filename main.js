'use strict';

let obj = {
  _name: "Ivan",
  get name(){
    return this._name;
  },
  set name(value) {
    if (value !== "Oleg")
      this._name = value;
  }
}

Object.defineProperties(obj, {
  age: {
    value: 19,
    enumerable: true,
    writable: false,
    configurable: false 
  }
});
let descr = Object.getOwnPropertyDescriptor(obj, "age");

alert( obj.age );

