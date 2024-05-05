    // console.log('fetch img from instagram');
    // console.log('show the image')



    // let a = [1,2,3,4,5,6,7,8,9]

    // let b = a.map(()=>{

    // })


    // setTimeout(()=>{

    // }, 4000)

    // promises and aync await

    // downloadImage(){
    //     //n minutes
    //     // callback(re)
    // }


// promises
// const demoPromise = new Promise((res,rej)=>{
//    setTimeout(()=>{
//     res('the task is completed!')
//    }, 5000)
// })
// demoPromise.then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data)
// })


// fetch is used to fetch the data from the API

// fetch is an async code

// fetch('https://type.fit/api/quotes').then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data)
// })

async function fetchQuotes(){
    let data =await  fetch('https://type.fit/api/quotes');
    let quotes = await data.json();
    let random = Math.floor(Math.random()*quotes.length);
    let quote = quotes[random];
    document.getElementById('quote').innerText = quote.text;
    document.getElementById('author').innerText = quote.author;
}
fetchQuotes()