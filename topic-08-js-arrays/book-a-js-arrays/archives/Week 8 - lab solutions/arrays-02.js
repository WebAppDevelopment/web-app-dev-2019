// Declare an empty array called me 

const me = [];

// After writing code for each of the steps below, print out the me array

console.log(me);

// Add your first name to the me variable

me[0] = "Ann";
console.log(me);

// Add your last name to the end of the me variable

me.push("Other");
console.log(me);

// Add your favorite color to the beginning of the me variable

me.unshift("Purple");
console.log(me);

// Remove the favorite color from the me variable

me.shift();
console.log(me);

// Create another array called other

const other = [];
console.log(other);

// Add your favorite number to other

other.push(31);
console.log(other);

// Add the string "JavaScript" to the end of the other variable

other.push("JavaScript");
console.log(other);

// Declare the following array

const programming = ['JavaScript', 'Python', 'Ruby', 'Java'];
console.log(programming);

// Create a new array modernProgramming, which combines programming with the array ['Haskell', 'Clojure']

const modernProgramming = programming.concat("Haskell", "Clojure");
console.log(modernProgramming);

// Return the string 'JavaScript, Python, Ruby, Java' by using join on the programming array

const programmingString = programming.join(", ");
console.log(programmingString);