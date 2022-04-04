// Define a function basic syntax
function add (a,b)
{
    console.log(a+b);
}

add(10,20)

// Anonymouns function
let mul = function (c,d)
{
    return c*d
}
console.log(mul(2,2));

// Anonymouns function using fat pipe.

let result = (a,b,c) => (a+b)*c
console.log(result(2,2,3));

let emails = (mails) => mails
console.log(emails('r@g.com'));
