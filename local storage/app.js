// local storage
// we can use it even if the page is refreshed or the browser is closed
// localStorage.setItem('name', 'yash')
// localStorage.setItem('name', 'naveen')


// localStorage.clear() is used to remove all the values from local storage
// localStorag  e.clear()

// let nameInput = document.querySelector('input');
// let btn = document.querySelector('button');
// let form = document.querySelector('#welcomeForm');
// let nameSpan = document.querySelector('#name')
// btn.addEventListener('click', ()=>{
//     let name = nameInput.value;
//     localStorage.setItem('name', name);
//     checkForm()
// })

// function checkForm(){
//     let userExists = 'name' in localStorage;
// if(userExists){
//     form.classList.add('hidden');
//     nameSpan.innerText = localStorage.getItem('name')
// }
// }

// checkForm()


// let user = {name: 'yash', email: 'yash@gmail.com'}
// localStorage.setItem('user', JSON.stringify(user));
// let userFromStorage = JSON.parse(localStorage.getItem('user'))


// console.log(userFromStorage)


// session storage
// sessionStorage.clear()
// sessionStorage.setItem('name', 'codekaro');
// let a = sessionStorage.getItem('name')
// console.log(a)


// counter app

let incrementBtn = document.querySelector('#increment');
let decrementBtn = document.querySelector('#decrement');
let counterDiv = document.querySelector('#counter');


incrementBtn.addEventListener('click', ()=>{
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    counter = counter + 1;
    sessionStorage.setItem('counter', counter);
    updateCounter()
})
decrementBtn.addEventListener('click', ()=>{
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    counter = counter - 1;
    sessionStorage.setItem('counter', counter);
    updateCounter()
})


function updateCounter(){
    let counter = parseInt(sessionStorage.getItem('counter')) || 0
    counterDiv.innerText = counter;
}
updateCounter()


// get all the local storage / session storage keys and there values

// console.log(localStorage)

// for(let i=0; i<localStorage.length; i++){
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key)
//     console.log(key, value)
// }

// teplate literals
let name = 'mayank';
let email = 'mayank@gmail.com'
// console.log('The name of the user is ' + name + ". The email is " + email)
console.log(`the name of the user is ${name}. the email is ${email}`)