const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

const handleClick = (e) => {
    // console.log('clicked')
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateComputerChoice()
    getResut()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + randomChoice
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i] // Could be deleted if you want to use e.target.HTML in handleClick
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResut = () => {
    switch(userChoice + computerChoice) {
        case 'scissorspaper': 
        case 'rockscissors': 
        case 'paperrock':
            resultDisplay.innerHTML = 'You Win!'
            break
        case 'paperscissors': 
        case 'rockscissors': 
        case 'rockpaper':
            resultDisplay.innerHTML = 'You Lose!' 
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = 'Its a Draw!'
            break
    }
}
