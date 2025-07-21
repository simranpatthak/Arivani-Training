function multiply (a,b){
    return a*b
}
let multi=multiply(2,3)
console.log(multi)

//  find even number using function
function even(n){
    return n%2 ==0;
}
console.log(even(5))

// find factorial of given number

function factorial(n){
    let result=1;
    for (let i=1; i<=n;i++){
        result*=i;
    }
    return result;
}
console.log(factorial(7));

// Reverse string using function
function reverse(sim){
    return sim.split("").reverse().join("");
}
console.log(reverse("simran"))

// find max using function 

function max(arr){
    return Math.max(...arr)
}
console.log(max([2,3,4,5,6,]))


// Double the number
const num=[2,4,5,6,7]
const double= num.map(num=>num*2);
console.log(double)

// Normal function
function myfunction(name){
    console.log("hello" + name);
}
myfunction("javascript")

//  prefind argument agar koi agrument nahi pass ki gyi hai toh bhi yeh by default ek toh print hoga hi
function function1(name="javascript"){
    console.log("hello"+ name);
}
function1()


//  Rest operator
function myfunction(...num){
    return num.map((a,b)=>a+b);
}
console.log(myfunction(1,2,3,4,5))

// setTimeout

setTimeout(function(){
    console.log("hey i run in every 2 second");
    
    setTimeout(function(){
    console.log("hey i run in every 3 second");
},3000);
setTimeout(function(){
    console.log("hey i run in every 4 second");
},4000);
},2000);

// this key word arrow function me kam nahi karta until and unless woh global nahi hai 
// 	Inherits this from parent scope.

// Pure function / immpure function 

function add2(a,b){
     return a+b;
}

const addition=add2(2,3)
console.log(addition)

// callback ek function k under pass kia jata hai 
// ek task khtm hone k bad kam karta hai 
// use to handle asynchronus  task (like api call ,timer)

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

function opreation (num1, num2, callback){
    const result=callback(num1, num2);
    console.log(result)
}

opreation(10,3, add)
opreation (7,2,sub)










