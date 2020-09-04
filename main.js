'use strict';

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclear(arr) );

function aclear(arr) {
   let map = new Map();

   for (let word of arr){
      let sorted = word
         .toLowerCase()
         .split("")
         .sort()
         .join("");

      map.set(sorted, word);
   }

   return Array.from(map.values());
}