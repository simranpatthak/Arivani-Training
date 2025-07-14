// creating object through constructor
// new Object makes new object it does not require {}

// let obj=new Object()
// obj.name="simran";
// obj.age=22;
// obj.proffesion="student";

// console.log(obj.name)

// // modifiyng  object
// obj.proffesion="developer"
// console.log(obj)

// // Adding property 

// obj.color="red";
// console.log(obj)

// // check if obj exist or not

// let obj1={color:"pink",car:"tesla"}
// console.log("cat" in obj)
// console.log(obj1.hasOwnProperty("car"))

// // itreting through obj

// let obj2={model:"toyota",color:"gray",feature:"dontknow"}

// for(let key in obj2){
//     console.log(obj2[key])
// }

// // Merging object

// let obj4={name :"sourav"}
// let obj5={age:22}

// let obj6={...obj4, ...obj5}
// console.log(obj6)


let obj={
    'firstName': 'Simran',
    'lastName': 'Pathak'
}

for(let key in obj) {
    console.log(obj)
}

// console.log(obj.firstName)