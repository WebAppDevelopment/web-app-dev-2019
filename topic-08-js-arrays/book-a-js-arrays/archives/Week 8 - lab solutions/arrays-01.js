// Create an array of your favorite foods (call it favoriteFoods).
//Make sure it has at least three elements.

const favouriteFoods = ["Pizza", "Curry", "Chips"];
console.log(favouriteFoods);

// Access the second element in favoriteFoods

console.log(favouriteFoods[1]);

// Change the last element in favoriteFoods to some other food

favouriteFoods[2] = "Bread";
console.log(favouriteFoods);

// Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood

formerFavouriteFood = favouriteFoods.shift();
console.log(favouriteFoods);
console.log(formerFavouriteFood);

// Add a favorite food to the back of the favoriteFoods array

favouriteFoods.push("Cheese");
console.log(favouriteFoods);

// Add a favorite food to the front of the favoriteFoods array

favouriteFoods.unshift("Chocolate");
console.log(favouriteFoods);

