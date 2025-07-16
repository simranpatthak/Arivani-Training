// // 1 for in loop used in object 
// // const obj ={
// //     name:"simran",
// //     age:22,
// //     city:"Surat"
// // }

// // for(let key in obj){
// //     console.log(key, obj[key])
// // }

// // 2 we can pass function in an object

// let person = {
//     firstName : "Mayank",
//     lastName : "Pandey",
//     age : 21,
//     hobbies : ["reading", "writing", "painting"],
//     message : function(){
//         console.log("Hi my name is " + this.firstName);
//     }
// };

// // object using new key word

// let person1=new Object()

// person1.name="simran";
// person1.age="22";
// person1.city="surat";

// console.log(person1)

// // passing function in object

// let object3={
//     name1:"simran",
//     age:22,
//     lastname1:"pathak",
//     fullname:function(){
//         return this.name1 +""+this.lastname1
//     }
// }

// console.log(object3.fullname())


// // Nested object

// const obj={
//     color:"white",
//     model:"Apachi",
//     weight:650,

//      obj0:{
//      name:"Simran",
//      age:22
//     }
// }

// console.log(obj["obj0"]["name"]);


// // object methods to Uppercase

// const person5={
//     firstName:"simran",
//     lastName:"pathak",
// }

// person5.name=function(){
//     return (this.firstName+""+ this.lastName).toUpperCase();
// }

// console.log(person5.name ())

// // object  property in loop

// const sim={
//     firstName2:"simran",
//     lastName2:"pathak"
// }
// let text=""
// for (let el in sim){
//  text+=[el]+ ""+ sim[el];
// }

// console.log(text)

// object.value()

const person7 = {
  name: "simran",
  age: 30,
  city: "surat"
};

const myarr=Object.values(person7);
console.log(myarr)

let mystring=JSON.stringify(person7)

console.log(mystring)

// object.entries

const fruits={
    kiwi:200,
    Apple:150,
}

let x="";
for(let [x, value] of Object.entries(fruits)){
    x+=x +":"+value;
}

console.log(x)

