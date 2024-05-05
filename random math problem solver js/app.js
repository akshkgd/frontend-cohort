let systemResult = 0;
let totalAttempts = 0;
let correctAns = 0;
let wrongAns = 0;
let score = 0;
let scoresDiv = document.getElementById('score');
let attemptsDiv = document.getElementById('attempts');
let correctDiv = document.getElementById('correct');
let wrongDiv = document.getElementById('wrong');
let popup = document.getElementById('popup')

function calculateSystemResult(num1, num2, operator, randomOperator){
    if(operator[randomOperator] == '+'){
        systemResult = num1 + num2;
    }
    else if(operator[randomOperator] == '-'){
        systemResult = num1 - num2;
    }
    else if(operator[randomOperator] == '*'){
        systemResult = num1 * num2;
    }
    else if(operator[randomOperator] == '/'){
        systemResult = num1 / num2;
    }
    else{
        alert('something went wrong!')
    }
    console.log(num1 + operator[randomOperator] + num2)
    console.log(systemResult)
    
}

function generateNewProblem(){
    let random1 = Math.floor(Math.random()*10);
    let random2 = Math.floor(Math.random()*10);
    let operator = ['+', '-', '*',]
    let randomOperator = Math.floor(Math.random()*operator.length)
    let problem = (random1 + operator[randomOperator] + random2)
    let problemDiv = document.getElementById('problem');
    problemDiv.innerText = problem;
    calculateSystemResult(random1, random2, operator, randomOperator);

}





function submit(){
    totalAttempts = totalAttempts +1;
    attemptsDiv.innerText = totalAttempts;
    let userAnswer = document.getElementById('userAnswer');
    if(userAnswer.value == systemResult){
        console.log('correct')
        correctAns = correctAns + 1;
        correctDiv.innerText = correctAns;
        popup.classList.remove('hidden');
        popup.classList.add('border-green-100')
        popup.classList.add('text-green-600')
        popup.innerText = 'Correct Answer'
    }
    else{
        console.log('wrong');
        wrongAns = wrongAns +1;
        wrongDiv.innerText = wrongAns;
        popup.classList.remove('hidden');
        popup.classList.add('border-red-100')
        popup.classList.add('text-red-600')
        popup.innerText = 'Wrong Answer'
    }
    setTimeout(()=>{
        popup.classList.add('hidden');
        popup.classList.remove('border-red-100', 'text-green-600' ,'text-red-600', 'border-green-100' )
        popup.classList.remove()
        popup.classList.remove()
        popup.classList.remove()
    }, 3000)
    score = correctAns - wrongAns;
    scoresDiv.innerText = score;
    userAnswer.value = ''
    generateNewProblem();
}

generateNewProblem()