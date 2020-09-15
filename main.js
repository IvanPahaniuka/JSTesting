'use strict';

let obj1 = new Obj("Ivan");
let obj2 = new Obj("Oleg");

let f1000 = throttle(obj1.logName.bind(obj1), 1000);
let f2000 = throttle(obj2.logName.bind(obj2), 1000);

f1000(1); // показывает 1
f2000(1); // (ограничение, 1000 мс ещё нет)
f1000(2);
f2000(2);
f2000(3);


function throttle(func, ms) {
  let lastArgs;
  let isNeedUpd = false;
  let isReadyForUpd = true;

  const update = () => {
    if (isReadyForUpd && isNeedUpd) {
      isReadyForUpd = false;
      isNeedUpd = false;
      func(...lastArgs);
      setTimeout(() => {
        isReadyForUpd = true;
        update();
      }, ms);
    }
  }; 

  return function(...args) {
    isNeedUpd = true;
    lastArgs = args;
    update();
  }
}

function Obj(name){
  return {
    name,
    logName(c) {
      alert( `${c}: ${this.name}`);
    }
  }
}

function f(a) {
  console.log(a)
}