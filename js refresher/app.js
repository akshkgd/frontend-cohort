// Arrow functions
// import and export
// template literals
// ternary operators
// destructuring
// array mapping and filters


// function hello(){
//     console.log('welcome to js refresher!')
// }

// hello();


// hello=()=>{
//     console.log('hello world!')
// }
// hello()



// sqr=(n)=>{
//     let result = n*n;
//     return result;
// } 

// sqr=n=>n*n


// let abc = sqr(2)
// console.log('result', abc)


// import Demo from "./Demo";
// import {Demo, Test} from './Demo'


// let user = {
//     name: 'yash', 
//     email: 'yash@gmail.com',
//     age: 24,
//     city: 'hyderabad'
// }


// console.log('The user name is '+ user.name + ' and his email is ' + user.email)
// console.log(`The user name is ${user.name} and his email is ${user.email}`)

// if(10>20){
//     console.log('this is true')
// }
// ternary operator
// (10>5)?  console.log('true') : console.log('false')


// let user = {
//     name: 'yash', 
//     email: 'yash@gmail.com',
//     age: 24,
//     city: 'hyderabad'
// }


// let {name, email} = user;
// console.log(name, email)


// let arr = [1,2,3,4,5]
// let [a,b,,,c] = arr;


// console.log(c)

// let arr = [1,2,3,4,5,6,7,8,9]
// arr.pop()




// let state = ['yash', 'navneet', 'kunal', 'maynk'];
// let stateCopy = [...state];
// stateCopy.pop();
// state = [...stateCopy]
// console.log(state, stateCopy)
// state.pop()
// console.log(arr)

// let arr = [1,2,3,4,5,6,7,8]
// let [one, two, ...last] = arr;
// console.log(one, last)


// let movie = {
//     name: 'rrr',
//     actors: ['N.T. Rama Rao Jr.', 'Ram Charan', 'Ajay Devgn'],
// }


// let {name} = movie;
// let [leadActor, ...supportingActors] = movie.actors;
// console.log(leadActor, supportingActors)


let arr = [1,2,3,4,5,6,7,8];


// let sqrs = arr.map((n)=>{
//     return n*n
// })

// let sqrs = arr.map(n=>n*n);
// let evenSqrs = arr.filter(n=>n%2==0).map(n=>n*n)
// console.log(evenSqrs)



const items = [
    { name: "Butter Chicken", rating: 4.5, type: "Non-Veg", price: 350 },
    { name: "Palak Paneer", rating: 4.2, type: "Veg", price: 250 },
    { name: "Biryani", rating: 4.8, type: "Non-Veg", price: 300 },
    { name: "Aloo Gobi", rating: 4.0, type: "Veg", price: 200 },
    { name: "Masala Dosa", rating: 4.6, type: "Veg", price: 150 },
    { name: "Chicken Tikka Masala", rating: 4.7, type: "Non-Veg", price: 320 },
    { name: "Rogan Josh", rating: 4.3, type: "Non-Veg", price: 360 },
    { name: "Chole Bhature", rating: 4.1, type: "Veg", price: 180 },
    { name: "Pav Bhaji", rating: 4.4, type: "Veg", price: 160 },
    { name: "Fish Curry", rating: 4.5, type: "Non-Veg", price: 330 }
];


// let foods = items.map(item=>item.name)
let veg = items.filter(item=>item.type==='Veg').filter(item=>item.rating>=4.5).map(item=>item.name)
console.log(veg)

