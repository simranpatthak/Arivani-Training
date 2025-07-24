// 1. two variable firstname and lastname and combine them with fullname
let user={
    firstName:"Simran",
    lastName:"Pathak",
    fullName:function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

user.fullName()

// 2. Write a function called greetuser that takes a name and retrun a greeting like hello

const greetuser=(name)=>"Hello" +" "+ name;
console.log(greetuser("simran"))

// Another method

function greetUser(name){
    return "Hello" + " " + name;
}
console.log(greetUser("simran"))

// Create an object named student with properties name, age, course add method with return string


let student={
    name:"John",
    age:21,
    course:"Javascript",

    getInfo :function (){
        console.log(`${this.name} ${this.age} ${this.course}`);
    }
}

student.getInfo()


// Convert the string "javascript is fun" to uppercase

let a="javascript is fun";
console.log(a.toUpperCase());