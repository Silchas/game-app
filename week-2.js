const userChoice_1 = document.querySelector('#user-1')
const userChoice_2 = document.querySelector('#user-2')
const resultDisplay = document.querySelector('#result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
// let userChoice2

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoice_1.innerHTML = userChoice
    userChoice_2.innerHTML = userChoice
}))
