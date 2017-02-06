"use strict";
var express = require('express');
var app = express();
// var _ = require('lodash/random');
// add to generatedNumber _.random(1,100);

// 1: Guess The Number
//
// Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.
//
// When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit".



var numbers = function() {
  return Math.floor(Math.random() * (1 ,100));

};


var guessTheNumber  = function(usersGuess){

  usersGuess = prompt("Guess a number");

if(numbers === usersGuess){
  console.log('Wow you won ' + numbers());
} else if (usersGuess >= numbers){
  console.log('Your guess is to low! ' + numbers());
} else if(usersGuess <= numbers){
  console.log("Your guess is to high! "+ numbers());
}
else {
  console.log("please enter a number")
}

}
guessTheNumber();

module.exports.guessTheNumber = guessTheNumber;

// module.exports = require('./lib/mocha');
