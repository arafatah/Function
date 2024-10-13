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

/*
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
*/

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // old way of write function in a object
  //book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(234, 'Arafat Howlader');
// console.log(lufthansa);
// console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// storing the book function in a variable
// if you call the book function directly here, it will result undefined or an error, because of the this keywords.  - this keywords depends on how the function actually called.
const book = lufthansa.book; //copy of the main function - this is not a method anymore

// using call method
book.call(eurowings, 343, 'Hossain');

// apply method - this is not using in JS anymore, but it's working fine
book.apply(eurowings, [224, 'niceName']);

// Best practice for es6
const flightData = [353, 'George Paul'];
book.call(eurowings, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas');
bookEW23('Martha Cooper');

// with event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application - Means we can pre-set the parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(20));

// Example with one function returning another function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23); 
console.log(addVAT2(1441));
console.log(addVAT2(5454));
*/

/*//////////////////////////////////////////
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
GOOD LUCK �
  /////////////////////////////////
 */
/*

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(this.answers);

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll result are ${this.answers.join(',')}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const Data1 = [5, 2, 3];
const Data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: Data1 }, 'string');
poll.displayResults.call({ answers: Data2 });
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
    console.log(this.answers);
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
  
const Data1 = [5, 2, 3];
const Data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: Data2 });
poll.displayResults.call({ answers: Data1 }, 'string');

// poll.registerNewAnswer();
