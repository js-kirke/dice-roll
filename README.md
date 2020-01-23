# Dice Roll Interface

## Objective
When a user presses the "Roll again" button, a graphic will display with a dice displaying a random number (1-6) and a message describing the result in words ("You rolled: 3"). Each time the button is clicked, a new random dice roll is displayed (both, a graphic and message).

## To start
- Fork and clone this repository
- Lightly prototyping with HTML/CSS only to create a dice and a message that shows the roll number
- Write an explaination (in non-technical words) of how you would solve this (explain it to a 6 year old)
- Explore the browser's Elements tab to determine how you might solve the problem technically
- Discuss your proposal with a partner to ensure you are both thinking in the same direction
- Create a git commit of your files with the HTML/CSS prototype and simplified text-based solution


step1:select a random number between 1-6

You would need only one random number between 1-6.  the result of the random number would correspond to one side of the dice 

Then it modifies the body by adding and img tag(?) or whole section by modifiying ID(?)


document.GetelementbyID('diceArea')

Math.floor(Math.random()*6)+1

let Dice1
let Dice2
let Dice3
let Dice4
let Dice5
let Dice6

step2:modify image in a body

step 3:modify text in a body

step 4: capture button click 

## Next
- Take the explaination you wrote above and start adding more technical terminology to describe the solution
- Break the solution you described into a few separate steps that are isolated to one specific task each
- Begin experimenting with each individual task to develop multiple mini-prototypes
- Commit your code again to store this part of the process

## Solution
- Begin to combine each step together
- Start by moving logic from outside of an event listener, into the event listener function (the callback, or "handler") to see if the logic can be relicated using an event (button click in this case)
- Continue combining and **test as you go!**