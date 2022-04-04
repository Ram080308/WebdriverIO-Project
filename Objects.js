
let obj = {} // Create a new object which is empty

// Create an object with properties
let obj1 = { 
    "Name":"Ram",
    "Address":"Hubbali",
     Age : 35

}

// Print specific property using . notation
console.log(obj1.Address);

// Print specific property using Key name
console.log(obj1["Age"]);

// Add properties to an object
obj1.State = "KA"
obj1.Phone = 9538429476
obj1.Status = true

// Delete properties
delete obj1.Status

// Print all the object properties
console.log(obj1);