// scopes
// var, let and const => dec, hoisting and scopes

// console.log(a);
// var a = 10;
// var a= 22;



// console.log(b)



// hoisting is calling the element before initialization

// scopes
// global scope > a var on top, not inside a funciton or a block
// funciton scope => function abc(){var}
// block scope {}

// global scopes
var a = 10;
let b = 20;


// function abc(){
//     console.log(a,b)
// }
// abc();


// function scope => var is funciton scoped

// function abc(){
//     var x  = 1;
//     if(true){
//         // var x = 2;
//         console.log(x)
//     }
// }
// console.log(x)

// function abc(){
//     let a = 20;
//     if(true){
//         let a = 10;
//         console.log('iside block', a)
//     }
//     console.log(a)
// }
// abc()




// functions hoisting
// function statement => function declaration
// function expression

// demo()
// name();
// function name(){
//     console.log('i am a function!')
// }


// let demo = function(){
//     console.log('i am a function expression!')
// }




// event bubbling and propogation
// document.querySelector('.parent').addEventListener('click', ()=>{
//     console.log('parent is clicked')
// })
// document.querySelector('.child').addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log('child is clicked');
// })







// async js
fetch("https://type.fit/api/quotes").then(data=>data.json()).then(data=>{
    // console.log(data[6].text)
});

//  fetchQuotes = async ()=>{

// }


 async function fetchQuotes(){
    let data =await fetch('https://type.fit/api/quotes');
    setTimeout(()=>{

    }, 3000)
    let quotes = await data.json();
    console.log(quotes[6].text);
    console.log('1')
    console.log('2')
    console.log('3')
}
fetchQuotes();
console.log('4')






fetch().then(function (){

})