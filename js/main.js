

let diceRoll= Math.floor(Math.random()*6)+1

let buttonRandom = document.querySelector('.rollBtn')

buttonRandom.addEventListener('click', event => {
  let diceRoll= Math.floor(Math.random()*6)+1
  let bodyElement = document.getElementById('diceRoll')
  
  bodyElement.style.backgroundColor = `rgb(${colourR},${colourG},${colourB})`


})

console.log(`You rolled ${diceRoll}`)