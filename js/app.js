'use strict'

  let user = prompt('What is your name?');
  // console.log('The user\'s name is ' + user);
  alert ('Welcome '  + user + ':) We\'ll play a guessing game! I\'ll ask you seven yes or no questions about me. You may answer "Yes/No" or "Y/N". Shall we begin :)');

  let correctAnswers = 0


// Question One

let answerOne = prompt('Is my nickname Rae?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y'){
  // console.log('Yes, my nickname is Rae :)')
  alert ('Yes! My nickname is Rae');
  correctAnswers++;
} else {
    (answerOne === 'no' || answerOne === 'n')
    // console.log('Wrong Answer')
    alert ('Wrong Answer!')
}

// Question 2

let answerTwo = prompt('Am I 23 years old?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y'){
  // console.log('Yes, I am 23 years old :)')
  alert ('Yes! I am 23 years old');
  correctAnswers++;
} else {
    (answerTwo === 'no' || answerTwo === 'n')
    // console.log('Wrong Answer, I am 23 years old')
    alert ('Wrong Answer! I am 23 years old')
}

// Question 3

let answerThree = prompt('Did I enter the Army after high school?').toLowerCase();

if (answerThree === 'no' || answerThree === 'n'){
  // console.log('Correct! I entered the Air Force :)')
  alert ('Correct! I entered the Air Force :)');
  correctAnswers++;
} else {
    (answerThree === 'yes' || answerThree === 'y')
    // console.log('Wrong Answer, I entered the Air Force :)')
    alert ('Wrong Answer! I entered the Air Force :)')
}

//Question 4 

let answerFour= prompt('Do I live North Carolina?').toLowerCase();

if (answerFour === 'no' || answerFour === 'n'){
  // console.log('Correct! I live in New Jersey :)')
  alert ('Correct! I live in New Jersey :)')
  correctAnswers++;
} else {
    (answerFour === 'yes' || answerFour === 'y')
    // console.log('Wrong Answer! I live in New Jersey')
    alert ('Wrong Answer! I live in New Jersey')
}

// Question 5 

let answerFive = prompt('Do I have a daughter?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y'){
  // console.log('Yes, I have a daughter :)')
  alert ('Yes! I have a daughter :)')
  correctAnswers++;
} else {
    (answerFive === 'no' || answerFive === 'n')
    // console.log('Wrong Answer! I have a daughter')
    alert ('Wrong Answer! I have a daughter')
}

// Question 6

let userNumber = prompt('Let\'s play another game: Guess my favorite number? I\'ll give you 4 trys. Hint: 1-50 ');
let correctNumber = 8;
let attempts = 4; 

for(let i = 1; i < attempts; i++){
  console.log('i: ' + i)
  while(userNumber < 1 || userNumber > 50){
    userNumber = prompt('Try Again! Please enter a number 1-50');
  }
  console.log('userNumber: ' + userNumber)
  if(userNumber == correctNumber){
    console.log('answer was correct')
    alert('CONGRATULATIONS!!! You are correct!');
    correctAnswers++;
    i = 5;
  } else if (userNumber > correctNumber){
    userNumber = prompt('Too High! Sorry, please try again!');
  } else if (userNumber < correctNumber){
    userNumber = prompt('Too low! Sorry, please try again!');
  }
  if(i === attempts - 1){
    alert('Sorry too many attempts! The correct answer was ' + correctNumber);
  }
}

// Question 7

let stateArray = ['texas', 'virgina', 'new jersey', 'tennessee'];
let userAnswer = prompt('One more game: Guess 1 of the 4 states I\'ve lived in?').toLowerCase();
let guess = 6;

for(let i = 1; i < guess; i++){
  if(userAnswer === stateArray[0]){
    alert('Correct! I lived in texas for several months');
    correctAnswers++;
    break;
  } else if (userAnswer === stateArray[1]){
    alert('Correct! I grew up in Virginia');
    correctAnswers++;
    break;
  } else if (userAnswer === stateArray[2]){
    alert('Correct! I currentl live in New Jersey'); 
    correctAnswers++;
    break;
  } else if (userAnswer === stateArray[3]){
    alert('Correct! I lived in Tennessee for awhile');
    correctAnswers++;
    break;
  } else if (userAnswer !== stateArray);{
    userAnswer = prompt ('Oops, not quite! Try again!').toLowerCase();
  } if(i == guess - 1){
    alert('Oops, you\'re out of attempts. The correct answer were any of these: ' + stateArray);
  }
}
alert('Thanks ' + user + 'for taking the time out to take my "About Me Quiz"! You scored a ' + correctAnswers + '/7.')

