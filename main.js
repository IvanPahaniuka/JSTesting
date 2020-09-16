'use strict';

function f() {
  alert("Hello!");
}

f.__proto__.defer = function(ms) {
  setTimeout(f, ms);
};

f.defer(1000);

