let emp = {
    "Name":"Ram",
    "Email":"ram@gmail.com",
    "Salary":5500    
}

let dept = {
    "Location":"Bangalore",
    "Country":"India",
    "Dept":"Accounts",
    "Myfunction":function(){
        console.log("This is from Function!");

    }
}

let grade = ['A','B+','C','A+','D']

emp.deptDetails = dept
emp.gradeDetails = grade

//Print the object properties
console.log(emp);

// Access the elements
console.log(emp.deptDetails.Location);
console.log(emp.gradeDetails[0]);
dept.Myfunction()