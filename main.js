'use strict';

let counter1 = makeCounter();
counter1();
let counter2 = makeCounter();
counter2();
counter2();
alert( "counter1: " + counter1() );
alert( "counter2: " + counter2() );

function makeCounter(){
   let count = 0;

   return () => {
      return ++count;
   }
}