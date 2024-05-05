// var, loops functions, loops, mapping and filters onclick, (DOM)

// dropdowns
// modal
// onclick events


// modals

let modal = document.getElementById('modal');
let modalStatus = false;
modal.style.display = 'none';


function modalToggle(){
    if(modalStatus){
        modal.style.display = 'none';
        modalStatus = false;
    }
    else{
        modal.style.display = 'block';
        modalStatus = true;
    }
}

function welcome(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let form = document.getElementById('form');
    form.style.display = 'none';
    let result = "Thanks " + name.value + " for joining the cohort. You have enrolled via "+ email.value;
    let resultHeading = document.getElementById('result');
    resultHeading.innerText = result;
}
function liked(){
    let heart = document.getElementById('heart');
    let heartIcon = document.getElementById('heart-icon');
    heartIcon.classList.remove('bi-heart');
    heartIcon.classList.add('bi-heart-fill');
    heartIcon.style.color = 'red'

    document.getElementById('heart-icon').style.fill = 'red';

    heart.classList.add('liked');
    setTimeout(()=>{
        heart.classList.remove('liked');
    }, 2000)
}