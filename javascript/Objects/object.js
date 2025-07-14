// 1 for in loop used in object 
// const obj ={
//     name:"simran",
//     age:22,
//     city:"Surat"
// }

// for(let key in obj){
//     console.log(key, obj[key])
// }

// 2 we can pass function in an object

let person = {
    firstName : "Mayank",
    lastName : "Pandey",
    age : 21,
    hobbies : ["reading", "writing", "painting"],
    message : function(){
        console.log("Hi my name is " + this.firstName);
    }
};

// object using new key word

let person1=new Object()

person1.name="simran";
person1.age="22";
person1.city="surat";

console.log(person1)

// passing function in object

let object3={
    name1:"simran",
    age:22,
    lastname1:"pathak",
    fullname:function(){
        return this.name1 +""+this.lastname1
    }
}

console.log(object3.fullname())


// nested object

const obj={
    color:"white",
    model:"Apachi",
    weight:650,

     obj0:{
     name:"Simran",
     age:22
    }
}

console.log(obj["obj0"]["name"]);
