// shift removes the value from starting of the array
// unshift adds the value at the starting of the array
// slice, concat
// array & object destructuring
// spread operators
// reference data types
// shallow copy and deep copy
// how to create deep copies
// find()
// includes()
// some()
// toSpliced()


// let arr = [1,2,3,4,5]
// console.log(arr);
// let newArr = arr.slice(1,4)
// console.log(newArr);


// let a = [1,2,3]
// let b = [4,5,6]
// let c = a.concat(b)
// console.log(c)

// destructure
// let arr = [1,2,3,4];
// let [a,b, , d] = arr;
// console.log(a,b, d)


// let obj = {name: 'yash', email: 'yash@gmail.com', age: 24}
// let {age, email} = obj;
// console.log(age, email)


// let arr = [1,2,3,4,5,6,7,8]
// let [a,b,c, ...d] = arr;


// console.log(a,b,c, d)


// let a = [1,2,3,4,5,6];
// let b = [7,8,9]
// let c = [...a, ...b]

// console.log(c), 


// let a = {name: 'yash', age: 24}
// let b = {email: 'yash@gmail.com', gender: 'Male', age: 30}
// let user = {...a, ...b}
// console.log(user)



// reference data types => [] {} ()
// let a = [1,2,3,4,5]
// let b = [...a];
// b.shift()

// console.log(a,b)

// shallow copy => it looks like the value is copied but actually its not

// let user = {
//     name: 'yash',
//     email: 'yash@gmail.com',
//     address: {
//         city: 'allahabad',
//         pin: 211001
//     }
// }

// let newUser = JSON.parse(JSON.stringify(user))
// console.log(newUser)

// let newUser = {...user}
// newUser.address.city = 'delhi'
// console.log(user.address.city, newUser.address.city)


// let arr = [1,2,3,4,5]
// let sqrs = arr.map(a=>a*a)
// console.log(sqrs)
// arr.splice(2,1, 11)
// console.log(arr)


// let newArr = arr.toSpliced(1,1, 50)
// console.log(newArr)



let arr = [1,2,3,4,6,7,9,1,5,6];

let one = arr.find(n=>n==1)
console.log(one)


// includes
console.log(arr.includes(12))


const users = [
    { name: 'Yash', age: 24, gender: 'Male', hobbies: ['cooking', 'teaching', 'reading books'] },
    { name: 'Ananya', age: 22, gender: 'Female', hobbies: ['dancing', 'singing', 'painting'] },
    { name: 'Rohan', age: 27, gender: 'Male', hobbies: ['gaming', 'traveling', 'photography'] },
    { name: 'Priya', age: 25, gender: 'Female', hobbies: ['writing', 'yoga', 'gardening'] },
    { name: 'Karan', age: 23, gender: 'Male', hobbies: ['coding', 'music', 'sports'] }
  ];

//   let usersHobby = users.map(user=>{
//     let [hobby, ...sideHobbies]=  user.hobbies;
//     return {name: user.name, hobby}
//   })

//   console.log(usersHobby)


let karan = users.find(user=>user.name == 'Karan')
console.log(karan)