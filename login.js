//stored information
let userName="wells@gmail.com";
let userPassword="Ashenone"

// We assigned some values
let uname=prompt("Insert an Email: ");
let upass=prompt("Insert the Password")

//if to compare the variables
if(uname==userName && upass==userPassword){
    document.write(`Welcome ${uname}`);
}else{
    document.write("Invalid credentials");
}