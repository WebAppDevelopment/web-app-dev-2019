/*
Output the length of the array.
Write the command to remove "Darren" from the array.
Write the command to remove "David" from the array.
Write the command to add "Pat" to the front of the array.
Write the command to add "Peter" to the end of the array.
Write the command to remove "Tony" from the array.
Using a loop, iterate through this array and output each name from the loop.
Write the command to make a copy (somepeople) of the array using slice. The copy should NOT include "Pat" or "Lisa". Output the new array.
Write the command that outputs the indexOf where "Marie" is located.
Write the command that putputs the indexOf where "Tom" is located.
Write the command to create a new array (allthepeople) that includes the people array concatenated with the somepeople array concatenated with the string of "Bob".
Output the new array.
*/


const people =['Darren', 'Lisa', 'Tony', 'Bill','Marie', 'David'];

console.log(people.length);
people.shift();
people.pop();
people.unshift('Pat');
people.push('Peter');
people.splice(2,1);

for (let i in people) {
  console.log(people[i]);
}

const somepeople = people.slice(2);
console.log(somepeople);

console.log(people.indexOf("Marie"));
console.log(people.indexOf("Tom"));

const allthepeople = people.concat(somepeople, "Bob");
console.log(allthepeople.join("; "));
