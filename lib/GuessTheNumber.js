"use strict";
var express = require('express');
var app = express();
var prompt = require('prompt');





// 1: Guess The Number
//
// Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.
//
// When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit".

var number = Math.floor(Math.random() * 100) + 1;
var turns = 5;
var hint = 'Guess the number, 1-100!';

while (turns > 0) {
var guess =prompt.start(hint +
      ' You have ' + turns + ' guesses left.');
  if (!guess) break;
  console.log(guess = Number(guess));
  if (guess == number) {
    prompt.start('<p>YOU WIN!</p>');
  } else {
    hint = 'Nope!Wrong Answer';
    if (guess < number) hint += ' Too small!';
    if (guess > number) hint += ' Too big!';
    turns = turns - 1;
  }
}

prompt.start('The number was ' + number + '.');

module.exports.guess = guess;

// module.exports = require('./lib/mocha');
