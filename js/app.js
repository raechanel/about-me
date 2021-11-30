'use strict'

  let user = prompt('What is your name?');
  // console.log('The user\'s name is ' + user);
  alert ('Welcome '  + user);


// Question One

let answerOne = prompt('Is my nickname Rae?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y'){
  // console.log('Yes, my nickname is Rae :)')
  alert ('Yes! My nickname is Rae')
} else {
    (answerOne === 'no' || answerOne === 'n')
    // console.log('Wrong Answer')
    alert ('Wrong Answer!')
}

// Question 2

let answerTwo = prompt('Am I 23 years old?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y'){
  // console.log('Yes, I am 23 years old :)')
  alert ('Yes! I am 23 years old')
} else {
    (answerTwo === 'no' || answerTwo === 'n')
    // console.log('Wrong Answer, I am 23 years old')
    alert ('Wrong Answer! I am 23 years old')
}

// Question 3

let answerThree = prompt('Did I enter the Army after high school?').toLowerCase();

if (answerThree === 'no' || answerThree === 'n'){
  // console.log('Correct! I entered the Air Force :)')
  alert ('Correct! I entered the Air Force :)')
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
} else {
    (answerFive === 'no' || answerFive === 'n')
    // console.log('Wrong Answer! I have a daughter')
    alert ('Wrong Answer! I have a daughter')
}
