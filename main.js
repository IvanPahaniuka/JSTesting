'use strict';

function f() {
  alert("Hello!");
}

Object.getPrototypeOf(f).defer = function(ms) {
  setTimeout(f, ms);
};

f.defer(1000);

