// Introduce this array:

const people = ['Greg', 'Mary', 'Devon', 'James'];

// Using a loop, iterate through this array and console.log all of the people

for(let i=0; i<people.length; i++){
    console.log(people[i]);
}

// Again using a loop, iterate in the reverse direction, logging the people starting at 'James' and finishing with 'Greg'

for(let i=people.length; i>=0; i--){
    console.log(people[i]);
}

// Using the same array as in exercise 1: Write the code to remove "Greg" from the array

people.shift();
console.log(people);

// Write the code to remove "James" from the array

people.pop();
console.log(people);

// Write the code to add "Matt" to the front of the array

people.unshift("Matt");
console.log(people);

// Write the code to add your name to the end of the array

people.push("Rosanne");
console.log(people);