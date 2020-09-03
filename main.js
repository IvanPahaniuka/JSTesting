'use strict';

let user = {
  name: 'ivan',
  age: 12,
  toString(){
    return this.name;
  },
  valueOf(){
    return this.age; 
  },
  [Symbol.toPrimitive](hint){
    alert(hint);
    return hint == "string" ? this.toString() : this.valueOf();
  }
};

alert(12 + user);