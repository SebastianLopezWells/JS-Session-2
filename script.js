let userName=prompt("Enter your name:");
/*
let userEmail=prompt("Enter your Email:");
let userSalaryM=prompt("Enter your Monthly Salary:");
const SERVER_NAME="example.com/workers"

console.log(userName);
document.write(`<p>Welcome to the System ${userName}</p> 
             <p> Email: ${userEmail}</p>
             <p> Monthly Salary: $${userSalaryM*12}</p>`);*/

//in class ex: get email, name and salary (monthly) from the prompt and display the info in the HTML

if(confirm("Are you "+ userName +"?")){
    console.log("Hello "+userName);
}else{
    console.log("Then what is your name?");
}


//example 2

let num=99;
if(num==99){
    console.log("They are the same number");
}
else{
    console.log("They are not the same");
}


//example 3

let num1=Number(prompt("Insert the first number"));
let num2=Number(prompt("Insert the second number"));
let num3=Number(prompt("Insert the third number"));
let notTrue=false;

if(num1<num2&&num3>num2){
    console.log(`The number ${num1} is smaller than ${num2}  AND  The number ${num3} is LARGER than ${num2}`);
}

if(num1==1||num2==1||num3==1){
    console.log(`Either variable may contain a '1' as a Value`);
}

if(!notTrue){
    console.log(`not notTrue is true!`);
}