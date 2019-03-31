// Using this array:

const people = ['Greg', 'Mary', 'Devon', 'James'];

// Using a loop, iterate through people array and after logging "Mary", exit from the loop

for(let i=0; i<people.length; i++){
    if(people[i] == "Mary"){
        break;
    }
    else{
        console.log(people[i]);
    }
}

// Write code to make a copy of the array

const copy = people.slice();
console.log(copy);

// Write the code that gives the index of where "Mary" is located

console.log(people.indexOf("Mary"));

// Write the code that gives the index of where "Foo" is located (this should return -1)

console.log(people.indexOf("Foo"));