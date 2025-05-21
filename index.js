//https://www.youtube.com/watch?v=lfmg-EJ8gm4


// This is what you see in your website interface

//console.log("What happen Vella?");
//console.log("Vamfyre rayt?");

//window.alert(`Vamfayr will feyt to me!`);
//window.alert(`Edi wow`);

//document.getElementById("myH1").textContent = `Di wow`;
//document.getElementById("myP").textContent = `Okay`;

// This is a comment


// ---------------------------------------------

// This is what you see in your website console
//let age = 25;
//let price = 100;
//let gpa = 1.5;



//console.log(typeof gpa);
//console.log(`The price is P${price} pesos`);
//console.log(`Your age is ${age} years old`);
//console.log(`Your GPA is: ${gpa}`);

//let firstName = "Joel";
//let favoriteFood = "Pizza";
//let email = "Vamfayr123@gmail.com"

//console.log(typeof firstName);
//console.log(`Your name is ${firstName}`);
//console.log(`Your favorite food is ${favoriteFood}`);
//console.log(`Your email is ${email}`);

//
// booleans

//let online = true;
//let forSale = false;
//let isStudent = true;

//console.log(typeof online);
//console.log(`Ajie is online: ${online}`);
//console.log(`Is this car for sale?: ${forSale}`);
//console.log(`Is this student enrolled?: ${isStudent}`);

// -----------------------------------------------
// Variable - a container that stores a value

//let fullName = "Joel Vamfayr";
//let age = 24;
//let isStudent = False;
 
//document.getElementById("p1").textContent = fullName;
//document.getElementById("p2").textContent = age;
//document.getElementById("p3").textContent = isStudent;

//document.getElementById("p1").textContent = `Your name is: ${fullName}`;
//document.getElementById("p2").textContent = `You are ${age} years old`;
//document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// -----------------------------------------------

// Arithmetic Operators = operands (values, variables, etc.)
//                        operators (+ - * /)

//let students = 30;
//students = students + 1;
//students = students - 1; 
//students = students * 2;
//students = students / 2;
//students = students ** 3;
//let extraStudents = students % 3;

//students += 2;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;


//console.log(students);
//console.log(extraStudents);
/*
    Operator precedence
    1. Parenthesis ()
    2. Exponents
    3. Multiplication & division & modulo
    4. Addition & Subtraction
 */
      
//let result = 6 / 2 ** (2 + 5);

//console.log(result);

// ----------------------------------------

/* How to accept user input
    1. Easy way = window prompt
    2. Professional way = HTML Textbox
*/

// easy way

//let username = window.prompt("What's your user name?");
//console.log(username);

// prof way

//let username;

//document.getElementById("mySubmit").onclick = function(){
    //username = document.getElementById("myText").value;
    //document.getElementById("myH1").textContent = `Hello ${username}`;
//}

//--------------------------------------------------------

/* type conversion = change the datatype of a value to another
    (strings, numbers, booleans)
*/

//let age = window.prompt("How old are you?");


//age = Number(age);
//age += 1;

//console.log(age, typeof age);

//let x;
//let y;
//let z;

//x = Number(x);
//y = String(y);
//z = Boolean(z);

//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);

// ----------------------------------------------------------------
// const = a variable that can't be changed

//const PI = 3.14159;
//let radius;
//let circumference;


//radius = window.prompt(`Enter a radius of a circle`);
//radius = Number(radius);

//document.getElementById("mySubmit").onclick = function(){
//    radius = document.getElementById("myText").value
//    radius = Number(radius);
//    circumference = 2 * PI * radius;
//    document.getElementById("myH3").textContent = circumference + " cm";
//}

// --------------------------------------------------------------------

// COUNTER PROGRAM

//const decreaseBtn = document.getElementById("decreaseBtn");
//const resetBtn = document.getElementById("resetBtn");
//const increaseBtn = document.getElementById("increaseBtn");
//const countLabel = document.getElementById("countLabel");
//let count = 0;

//increaseBtn.onclick = function(){
//    count++;
//    countLabel.textContent = count;
//}

//decreaseBtn.onclick = function(){
 //   count--;
 //   countLabel.textContent = count;
//}

//resetBtn.onclick = function(){
  //  count = 0;
    //countLabel.textContent = count;
//}

// ------------------------------------------

//Math

//console.log(Math.PI);
//console.log(Math.E);

//let x = 3;
//let y = 2;
//let z = 1;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(y, x);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);

//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z);


//console.log(min);

// -----------------------------------------
// Random number Generator

//const min = 50;
//const max = 100;

//let randomNum = Math.floor(Math.random() * max - min) + min;

//console.log(randomNum);

//const myButton = document.getElementById("myButton");
//const myLabel1 = document.getElementById("myLabel1");
//const myLabel2 = document.getElementById("myLabel2");
//const myLabel3 = document.getElementById("myLabel3");
//const min = 1;
//const max = 6;

//let randomNum1;
//let randomNum2;
//let randomNum3;

//myButton.onclick = function(){
//    randomNum1 = Math.floor(Math.random() * max) + min;
//    randomNum2 = Math.floor(Math.random() * max) + min;
//    randomNum3 = Math.floor(Math.random() * max) + min;
//    myLabel1.textContent = randomNum1;
//    myLabel2.textContent = randomNum2;
//    myLabel3.textContent = randomNum3;
//}

// ---------------------------------------------
/*


*/
/* If statements 


//let age = 13;

//if(age >= 18){
//    console.log("You are old enough to enter this site!");
//}

//else{
 //   console.log("You must be 18+ to enter this site");
//}

//let time = 7;

//if(time < 12){
//    console.log("Good morning!");
//}

//else{
//    console.log("Good afternoon!");
//}

//let isStudent = false;

//if(isStudent){
//    console.log("You are a studnet");
//}

//else{
//   console.log("You are not a student");
//}

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `You are too old to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site!`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}
//let hasLicense = true;

/*if(age >= 16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license");
    }
    else{
        console.log("You do not have your license yet");
    }
}
else{
    console.log("You must be 16+ to have a license;")
}

*/

/* .checked
*/

