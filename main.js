'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) );

alert( arr.filter(inArray([1, 2, 10])) ); 

function inBetween(a, b){
   return x => (a <= x && x <= b);
}
function inArray(arr){
   return x => arr.includes(x);
}