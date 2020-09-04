'use strict';

let salaries = {
   "John": 100,
   "Pete": 300,
   "Mary": 250
 };
 
alert( sumSalaries(salaries) );

function sumSalaries(obj) {
   return Object.values(obj)
      .reduce((prev, item) => {
         return prev + item;
      }, 0);
}