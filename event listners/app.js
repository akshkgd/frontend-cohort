// event listner

// addEventListner

let btn = document.getElementById('btn');
test=(event)=>{
    console.log(event)
}
btn.addEventListener('click', test)
btn.addEventListener('click', (event)=>{
    console.log(event)
})  


// let btns = document.querySelectorAll('button');
// btns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         let btn = e.target;
//         console.log( btn.innerText+ ' clicked');
//         btn.innerText = 'Clicked';
//         btn.setAttribute('disabled', true)
//     })
// })

// on mouse in
// onmouse out
// onchange
// onkeyup
// onkeyDown
// scroll
// load

// let alert = document.querySelector('.alert')
// let demo = document.querySelector('.demo');
// demo.addEventListener('mouseover', ()=>{
//     alert.innerText = 'cursor is inside demo box';
// })
// demo.addEventListener('mouseout', ()=>{
//     alert.innerText = 'cursor is outside demo box';
// })



// onchange
// let inputs = document.querySelectorAll('input');
// inputs.forEach((input)=>{
//     input.addEventListener('change', ()=>{
//         console.log(input.value)
//     })
// })


// onkeyup and onkeydown

// let input = document.querySelector('input');
// input.addEventListener('keyup', ()=>{
//     console.log(input.value)
// })



// load => loading
// scroll




// let loader = document.querySelector('#loader');
// loader.classList.remove('hidden')
// loader.classList.add('page-loader')
// window.addEventListener('load', ()=>{
//     loader.classList.remove('page-loader')
//     loader.classList.add('hidden')
// })


// scroll
// let btn = document.querySelector('.help')
// window.addEventListener('scroll', ()=>{
//     if(window.scrollY > 500){
//         btn.classList.add('show')
//         console.log('dsmkdmks')
//     }
//     else{
//         btn.classList.remove('show')
//     }
// })


// let btn = document.querySelector('.help')
// window.addEventListener('scroll', ()=>{
//     console.log(window.scrollY)
// })


