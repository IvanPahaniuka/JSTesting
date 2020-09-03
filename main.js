'use strict';

function Calculator(){
  this.value1 = 0;
  this.value2 = 0;

  this.read = function(){
    this.value1 = +prompt('Введите значение 1');
    this.value2 = +prompt('Введите значение 2');
  }

  this.sum = function(){
    return this.value1 + this.value2;
  }

  this.mul = function(){
    return this.value1 * this.value2;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );