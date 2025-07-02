// Addition through function

function add(n1, n2){
    return n1+n2;
}

let sum = add(12, 20);
console.log(sum);

// Multiplication through a function

const mul = (a, b) => {
    console.log(a*b);
}

let multiply = mul(4, 5);
console.log(multiply);

// what is functional statements
function a(){
    console.log("hey simran")
}

// what are functional Expression

var b =function (){
    console.log("hey from b")
}
// Annonymous function [we can use annonymous function as a value in a variable]
// First class function :[the abilty to used as values and can be passed as an arugments to an another function , and even return from the function this ability is no as first class function ]
// for example

var c= function(param){
 console.log(param)
}
// There are two type of function are there : 1) User define 2) Default function 

function fun1(parameter1 ="simran", parameter2="pathak"){
 console.log(parameter1, parameter2)
}
fun1("Hello", "Javascript")


// this key word in normal function and in arrow function

function