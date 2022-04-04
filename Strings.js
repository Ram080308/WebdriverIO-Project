let str = "Welcome to Java Script"
let amount = '525.66'
let shipping = '22.25'

console.log(str.length); // Length of a string
console.log(str.toUpperCase()); // To upper case

let total_amount = parseInt(amount) + parseInt(shipping) // Convert a string to an Integer
console.log(total_amount);

updated_str = str.split(" ") // Split will split or removes the string and returns an array of the same string
console.log(updated_str);

if (str.includes("ma"))
{
    console.log("Item present");
}

