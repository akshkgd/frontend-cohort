let arr = [1,2,3,4,5,6,7,8,9]
const users = [
    {
      firstName: "Aarav",
      lastName: "Patel",    
      email: "aarav.patel@example.com",
      gender: "Male",
      salary: 50000,
      age: 28
    },
    {
      firstName: "Neha",
      lastName: "Sharma",
      email: "neha.sharma@example.com",
      gender: "Female",
      salary: 55000,
      age: 32
    },
    {
      firstName: "Vikram",
      lastName: "Singh",
      email: "vikram.singh@example.com",
      gender: "Male",
      salary: 60000,
      age: 35
    },
    {
      firstName: "Priya",
      lastName: "Gupta",
      email: "priya.gupta@example.com",
      gender: "Female",
      salary: 48000,
      age: 25
    },
    {
      firstName: "Rahul",
      lastName: "Sharma",
      email: "rahul.sharma@example.com",
      gender: "Male",
      salary: 52000,
      age: 30
    },
    {
      firstName: "Ananya",
      lastName: "Das",
      email: "ananya.das@example.com",
      gender: "Female",
      salary: 51000,
      age: 29
    },
    {
      firstName: "Aditya",
      lastName: "Mishra",
      email: "aditya.mishra@example.com",
      gender: "Male",
      salary: 58000,
      age: 33
    },
    {
      firstName: "Shreya",
      lastName: "Patel",
      email: "shreya.patel@example.com",
      gender: "Female",
      salary: 49000,
      age: 27
    },
    {
      firstName: "Arjun",
      lastName: "Kumar",
      email: "arjun.kumar@example.com",
      gender: "Male",
      salary: 54000,
      age: 31
    },
    {
      firstName: "Isha",
      lastName: "Singh",
      email: "isha.singh@example.com",
      gender: "Female",
      salary: 57000,
      age: 34
    }
  ];
  

// let sqrs = [];
// for(let i=0; i<arr.length; i++){
//     let sqr = arr[i] * arr[i]
//     sqrs.push(sqr)
// }
// console.log(sqrs)

// es6 => array mapping and filters
// array mapping is used to transform the array
// let results = arr.map(function (n){
//     return n*n
// })

// let results = arr.map(n=> n*n)
// console.log(users)
// let names = users.map(user=>user.firstName )
// let names = users.map(user=>user.firstName + " " + user.lastName)
// let nums = arr.filter(function (n){
//         return n>=5
// })

// let evens = arr.filter(n=>n%2==1)

// console.log(evens)



// let men = users.filter(user=>user.gender == 'Male');
// let menNames = men.map(user=>user.firstName);

// let men = users.filter(user=>user.gender == 'Male').map(user=> user.firstName)


// console.log(men)

let females = users.filter(user=>user.gender == 'Female')
.filter(user=>user.salary > 50000).map(user=>user.firstName)

console.log(females)