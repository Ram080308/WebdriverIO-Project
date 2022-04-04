let flag = false

if (!flag)
{
    console.log("Conditions Satisfied!");

}

else
{
    console.log("Conditions Not Satisfied!");
}

console.log(typeof(flag));
console.log(flag);

let number = 350
if (number%2 == 0)
{
    console.log("Even");
}

else{
    console.log("Odd");
}

let amount = 300
let tax = (amount*10)/100
let total_amount = amount - tax

if (total_amount >= 400)
{
    console.log("5% Salestax");
}
else if (total_amount <= 400 && total_amount >=200)
{
    console.log("4% Salestax");
}
else{
    console.log("No Salestax");
}