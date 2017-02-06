var _= require('lodash');

// 1: Guess The Number
//
// Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.
//
// When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit".




var guessTheNumber (function(generatedNumber){
  generatedNumber = _.random(1,100);
  var usersGuess = prompt("");


 if(generatedNumber === usersGuess){
   alert('Wow you won!');
 }
 if(generatedNumber > usersGuess){
   alert('Your guess is to low!');
 }
 if(gneratedNumber < usersGuess){
   aler("Your guess is to high!");
 }

});



module.exports = require('./lib/mocha');
