// Part 1: Variables and Constants
const userAge = 34; // Declare and initialize constant for user's age
let height = 165; // Declare and initialize variable for user's height

console.log("Part 1 Answer");
console.log("The Height Variable is", height);
console.log("The User Age variable is", userAge);

// Part 2: Arrays
let petNames = ["Zeus", "Brandy", "Atlas"]; // Declare an array with three elements representing pet names

// Add a new element to the array using push() and remove the last element using pop()
petNames.push("Charlie"); 
petNames.pop(); 

console.log("Updated Pet Names Array:", petNames); 

// Reverse the array and display the elements in the console
petNames.reverse();
console.log("Reversed Pet Names Array:", petNames);

// Part 3: Objects
let car = {
  carName: "Dodge",
  carModel: "Challenger",
  carYear: 2023,
  carColor: "Purple"
};

console.log("Initial Car Object:", car);

// Update one of the object's properties (change car year)
car.carYear = 2018;
console.log("Updated Car Object:", car);

// Add a new property to the object (add car mileage)
car.carMilage = 111;
console.log("Car Object with Mileage:", car);

// Delete a property from the object (remove car model)
delete car.carModel;
console.log("Car Object after Deleting Model:", car);

// Access a deleted property (will log undefined)
console.log("Accessing Deleted Car Model:", car.carModel);

// Log the car object again to see final result
console.log("Final Car Object:", car);
     