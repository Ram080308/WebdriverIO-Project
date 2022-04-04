// var marks = [20,25,15,20,30,35,50,10]
// console.log(marks[2]) // Index of 2 position
// console.log(marks.length) // Length of an array
// marks.push(70) // Add the new element in an array
// marks.push(99, 'Last', 88)
// console.log(marks);
// marks.pop() // Removes the last element from an array
// console.log(marks);
// marks.unshift()
// console.log(marks);

let exp_order = "ORD5"
let orders = ["ORD1","ORD2","ORD3","ORD6","ORD7","ORD9","ORD11","ORD13"]
if (orders.includes(exp_order)) // Search operation
{
    console.log("Item Pressnt!");
}
else{
    console.log("Item not present!");
}

let sub_ordets  = orders.slice(2,5) // Slice the existing array and store the sub array into a new one
console.log(sub_ordets);