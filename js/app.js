'use strict'
function introQuestion(){
  let user = prompt('What is your name?');
  alert ('Welcome '  + user + ':) We\'ll play a guessing game! I\'ll ask you seven yes or no questions about me. You may answer "Yes/No" or "Y/N". Shall we begin :)');
  return user;

}

  let user = introQuestion();
  let correctAnswers = 0




function questionOne(){
  let answerOne = prompt('Is my nickname Rae?').toLowerCase();
  
  if (answerOne === 'yes' || answerOne === 'y'){
    alert ('Yes! My nickname is Rae');
    correctAnswers++;
  } else {
      (answerOne === 'no' || answerOne === 'n')
      alert ('Wrong Answer!')
  }

}
questionOne();



function questionTwo(){
  
  let answerTwo = prompt('Am I 23 years old?').toLowerCase();
  
  if (answerTwo === 'yes' || answerTwo === 'y'){
    alert ('Yes! I am 23 years old');
    correctAnswers++;
  } else {
      (answerTwo === 'no' || answerTwo === 'n')
      alert ('Wrong Answer! I am 23 years old')
  }

}
questionTwo();


function questionThree(){

  let answerThree = prompt('Did I enter the Army after high school?').toLowerCase();
  
  if (answerThree === 'no' || answerThree === 'n'){
    alert ('Correct! I entered the Air Force :)');
    correctAnswers++;
  } else {
      (answerThree === 'yes' || answerThree === 'y')
      alert ('Wrong Answer! I entered the Air Force :)')
  }
}
questionThree();


function questionFour(){

  let answerFour= prompt('Do I live North Carolina?').toLowerCase();
  
  if (answerFour === 'no' || answerFour === 'n'){
    alert ('Correct! I live in New Jersey :)')
    correctAnswers++;
  } else {
      (answerFour === 'yes' || answerFour === 'y')
      alert ('Wrong Answer! I live in New Jersey')
  }
}
questionFour();


function questionFive(){

  let answerFive = prompt('Do I have a daughter?').toLowerCase();
  
  if (answerFive === 'yes' || answerFive === 'y'){
    alert ('Yes! I have a daughter :)')
    correctAnswers++;
  } else {
      (answerFive === 'no' || answerFive === 'n')
      alert ('Wrong Answer! I have a daughter')
  }
}
questionFive();


function questionSix(){

  let userNumber = prompt('Guess my favorite number? I\'ll give you 4 trys. Hint: 1-10 ');
  let correctNumber = 8;
  let attempts = 4; 
  
  for(let i = 1; i < attempts; i++){
    console.log('i: ' + i)
    while(userNumber < 1 || userNumber > 10){
      userNumber = prompt('Try Again! Please enter a number 1-10');
    }
    console.log('userNumber: ' + userNumber)
    if(userNumber == correctNumber){
      console.log('answer was correct')
      alert('Great guess! You are correct!');
      correctAnswers++;
      i = 5;
    } else if (userNumber > correctNumber){
      userNumber = prompt('Oops, too high! Try again!');
    } else if (userNumber < correctNumber){
      userNumber = prompt('Oops, too low! Try again!');
    }
    if(i === attempts - 1){
      alert('Sorry too many attempts! The correct answer was ' + correctNumber);
    }
  }
}
questionSix();


function questionSeven(){

  let stateArray = ['texas', 'virginia', 'new jersey', 'tennessee'];
  let userAnswer = prompt('Last question: Guess 1 of the 4 states I\'ve lived in?').toLowerCase();
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
}
questionSeven();
alert('Thanks ' + user + ' for taking the time out to take my "About Me Quiz"! You scored a ' + correctAnswers + '/7.')

