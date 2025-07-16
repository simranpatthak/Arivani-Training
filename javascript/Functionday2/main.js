// function multiply (a,b){
//     return a*b
// }
// let multi=multiply(2,3)
// console.log(multi)

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


