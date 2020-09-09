'use strict';

let factFunc = function fact(a){
  if (a <= 1)
  {
    fact.lastRes = 1;
    return 1;
  }

  let res = fact(a-1)*a;
  fact.lastRes = res;
  return res;
}

factFunc(5);
console.log( `${factFunc.name}: ${factFunc.lastRes}` );
console.log( fact(5) );