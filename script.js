'use strict';


/*
const bookings = [];

const createBooking = function (flightName, numPassengers = 1, price = 199) {
  const booking = {
    flightName,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('AMR9/11');
createBooking('COn#2', 3, 454);
*/
/*
const flight = 'LG324';
const jonas = {
  name: 'Jonas Schemedtmann',
  passport: 24516810547515,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH99';
  passenger.name = 'MR. ' + passenger.name;

  if (passenger.passport === 24516810547515) {
    alert('Checked in');
  } else {
    alert('Passport not matched');
  }
};

// checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);


// Example of callBack function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); //For select all the spaces
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // Function has method and property as well. fn.name is a property. 
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

const high5 = function () {
  console.log('hiii');
};

document.body.addEventListener('click', high5);
['Jonas', 'Ebro', 'Adam'].forEach(high5);
*/

// Function returning Function
// This is working because of closure
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Arafat');

// Example with arrow function
const greet2 = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greet2('Hi Kaman ansen?')('Na kaman nai');
