// keywords
// browser features
// variables
// data types


// javascript gives us the power to use some tools of the browser
// console.log("hello!!")
// console.warn("hello!!")
// console.error("hello!!")

// alert('are you sure??');
// prompt('who are you?    ')

// variables ??
// es5 and older versions
// es6 and beyond
// (let and const are introduced in es6) and (var depreciated)

// semicolan in js is optional

// let boy = 'yash';
// let boy = 'arpit';
// const girl = 'ramya';


// console.log(boy + ' weds ' + girl)



// data types in js
// string, numbers, booleans, arrays and objects => undefined, not declared and null

let address = "allahabd";
let age = -23.56;
let isUserActive = true;
let paymentDone = false;



// let user = null;
// console.log(user)



// array and objects
// let items = ['milk', 'bread', 'butter', 'apple'];
// let user = ['yash', 'yash@gmail.com', 'allahabad', 24, true, 123456787899, 900000 ]

let user = {
    name: 'yash',
    email: 'yash@gmail.com',
    address: 'allahabad',
    isActive: true,
    phone: 9876543210,
}
// console.log(user)


// primitive and reference data types in javascript =>
// reference data type => [arrays] {objects} (functions)
// apart from this all are primitive data types

// let arpit = 5000;
// let yash = arpit;
// yash = yash - 1000;

// console.log(arpit, yash)


let a = ['milk', 'bread', 'butter'];
let b = a;
b.pop();

console.log(a,b)