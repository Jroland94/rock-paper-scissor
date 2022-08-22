function getComputerChoice(){
    let choices =["rock", "paper", "scissors"]
    let decision = choices[Math.floor(Math.random() * 3)]
    return decision
}

document.getElementById("rock").onclick = () => {
    
    let decision = getComputerChoice()
    
    
    
    
    if(decision === 'scissors') {
        document.getElementById('computerDecision').innerText = 'You win! computer choose ' + decision
    }
    if(decision === 'rock'){
        document.getElementById('computerDecision').innerText = 'You played draw! computer choose ' + decision
    }
    if(decision === 'paper') {
        document.getElementById('computerDecision').innerText = 'you lose! computer choose ' + decision
    }
}

document.getElementById('paper').onclick = () => {

    let decision = getComputerChoice()
    
    if(decision === 'rock') {
        document.getElementById('computerDecision').innerText = 'you win! computer choose ' + decision
    }
    if(decision === 'paper') {
        document.getElementById('computerDecision').innerText = 'you played draw! computer choose ' + decision
    }
    if(decision === 'scissors') {
        document.getElementById('computerDecision').innerText = 'you lose! computer choose ' + decision
    }
}

document.getElementById("scissors").onclick = () => {

    let decision = getComputerChoice()

    if(decision ==='paper') {
        document.getElementById('computerDecision').innerText = 'you win! computer choose ' + decision
    }
    if(decision === 'scissors') {
        document.getElementById('computerDecision').innerText = 'you played draw! computer choose ' + decision
    }
    if(decision === 'rock') {
        document.getElementById('computerDecision').innerText = 'you lose! computer choose ' + decision
    }
}









// document.querySelector('#rock').addEventListener('click', () => {

// })