// functions
// arrow functions type of arrow functions
// loops


function grinder(items){
    console.log('grinding...', items)
    // 10
}
// let grindingItems = 'onion and garlic';
// grinder('tomatoes');
// grinder(grindingItems);
// grinder('coffee')



// function add(a, b){
//     console.log(a+b)
// }

// add(2,3)
// add(4,5)

// return


// function sqr(n){
//     let result  = n*n;
//     return result;
// }
// let result = sqr(2);
// console.log(sqr(3))




    function calculateSalary(name, salary){
        let tds = salary * 0.1;
        let inhand = salary - tds;
        return inhand;
    }
// always use return at the end anything after end becomes unreachable

let inhand = calculateSalary('yash', 54000);
let inhand1 = calculateSalary('mayank', 40000);

// console.log(inhand1)


// es6 => arrow functions
function functionName(){
    // code
}

sum = () =>{
    // code
}

// arrow functions are widely accepted
demo=()=>{
    console.log('this is a dummy arrow function!')
}
// demo()
// sigle parameter
// cube=n=>{console.log(n*n*n)}

// implicit returns in arrow functions
// cube=n=>n*n*n
// sum=(a,b)=>a+b


// block arrow function
// sum = (a,b)=>{
//     let result = a+b;
//     return result;
// }
// console.log(sum(4, 5))


// loops => for, foreach, dowhile, while, forin and forof

// for(let i = 1; i<=5; i++){
//     console.log(i)
// }

let users = [
    {name: 'yash', email: 'yash@gmail.com',age: 14},
    {name: 'ashish', email: 'ashish@gmail.com',age: 16},
    {name: 'himanshu', email: 'himanshu@gmail.com', age: 24},
    {name: 'arpit', email: 'arpit@gmail.com',age: 2},
    {name: 'kunal', email: 'kunal@gmail.com',age: 18},
    {name: 'preetha', email: 'preetha@gmail.com',age: 19},
    {name: 'kapil', email: 'kapil@gmail.com',age: 14},
    {name: 'varun', mail: 'varun@gmail.com',age: 24},
    {name: 'neha', email: 'neha@gmail.com',age: 80},
    {name: 'ramya', email: 'ramya@gmail.com',age: 30},
    {name: 'keerthi', email: 'keerthi@gmail.com',age: 28},

]

// for(let i=0; i<users.length; i++){
//     if(users[i].age >= 18){
//         console.log(users[i].name)
//     }
// }

// foreach loop 
// foreach only works with arrays

let arr = [1,2,3,4,5,6,7,8,9];
console.table(users)
for(let i=0; i<arr.length; i++){
    console.log(arr[i]*arr[i])
}

console.log('for each loop in action')

// arr.forEach(function (n){
//     console.log(n*n)
// })

// arr.forEach(n=>{
//     console.log(n*n)
// })

users.forEach(user=> {
    console.log(user.name)
})



