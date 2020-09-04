'use strict';

let arr = [2,6,1,7,4,5,7,8,2,10,2,1,4];

alert( max(...arr) );

function max(...args){
   let max = args[0];
   for (let arg of args)
      if (arg > max)
         max = arg;

   return max;
}