function unlocked(){
    let title = document.getElementById('heading');
    let btn = document.getElementById('btn');
    title.innerText = 'Congratulations! now you can start learning DOM!';
    btn.style.display = 'none' ;
   console.log(typeof btn)
}


function welcome(){
    let studentName = document.getElementById('name');
    let nameSpan = document.getElementById('nameSpan');
    nameSpan.innerText = studentName.value;
    studentName.value = ""
}



function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let result = (amount.value / persons.value).toFixed(2);
    let resultDiv = document.getElementById('result')
    resultDiv.innerText = result
}


let counter = 0;
let counterResult = document.getElementById('counterResult');

function increment(){
    counter = counter+1;
    counterResult.innerText = counter
}
function decrement(){
    if(counter > 0){
        counter = counter-1;
        counterResult.innerText = counter
    }
    
}



let demo = document.getElementById('demo');
demo.innerHTML = '<h1 class="font-black text-2xl">Welcome to Javascript DOM!</h1>'