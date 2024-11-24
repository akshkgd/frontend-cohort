// array and objects
// conditionals
// loops

let items = ['milk', 'bread', 'butter'];
// console.log(items);
// items.push('apples');
// items.pop()
// items.pop()
// splice
// items.splice(0, 4, 'apple');
// console.log(items);


// console.log(typeof items)


// let user = {
//     name: 'yash',
//     age: 24,
//     email: 'yash@gmail.com',
//     hobbies: ['teaching', 'reading books', 'cooking']
// }
// user.name = 'yash goel'
// user.phone = '1234567890'
// delete user.age
// console.log(user)

// console.log(typeof user)


// let arr = ['yash', 'mayank', 'kunal']
//     arr['test'] = 'nayan';
// console.log(arr)

// array of objects
let users = [
    {name: 'yash', email: 'yash@gmail.com'},
    {name: 'ashish', email: 'ashish@gmail.com'},
    {name: 'himanshu', email: 'himanshu@gmail.com'},
    {name: 'arpit', email: 'arpit@gmail.com'},
    {name: 'kunal', email: 'kunal@gmail.com'},
    {name: 'preetha', email: 'preetha@gmail.com'},
    {name: 'kapil', email: 'suman@gmail.com'},
    {name: 'varun', mail: 'suman@gmail.com'},
    {name: 'neha', email: 'suman@gmail.com'},
    {name: 'ramya', email: 'suman@gmail.com'},
    {name: 'keerthi', email: 'suman@gmail.com'},

]
let random = Math.floor(Math.random()*users.length)
// console.log(users[random].name)
// console.log()



// conditionals
// any value that is either true / false or it gets converted to true or false can be given inside if!
// let age = 4;
// let a = null;
// console.log(a)
// if(a){
//     console.log('You can vote');
// }
// else{
//     console.log('you can not vote');
// }

// truthy and falsy
// falsy => 0, -0, "", '', undefined, null, nan => false
// anything apart from falsy is treated as truthy values => true


// let n = 11;
// if(n % 2 == 0){
//     console.log('the number is even')
// }
// else{
//     console.log('the number is odd')
// }


// there is a swimming comp.
// 14-16 => junior level
// 17-24 => senior level
// after 24 years then he is not eligible to play
// if the user is less than 14 years than also he is not eligigle to play
// let age = 24;
// if(age >= 14 && age <=16){
//     console.log('you can play in junior level')
// }
// else if(age>=17 && age <=24){
//     console.log('you can play in senior level')
// }
// else{
//     console.log('you are not eligible to play')
// }

let age = 4;
// ternary operator
// age >= 18 ? console.log('can vote') : console.log('can not vote!')


let user = 'yash'
let salary = '35000'

// if(user == 'yashi' || salary == 35000){
//     console.log('user found!!')
// }

// === (strictly equal to ) => compares the value and data types
// == (equal to ) => comapares the value
if(salary === 35000){
    console.log('true')
}
else{
    console.log('false')
}

