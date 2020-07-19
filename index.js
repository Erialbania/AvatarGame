let readlineSync = require('readline-sync')

const characters = ["Aang", "Katara", "Sokka"]

function startGame() {
    console.log("Welcome to Avatar: The Last Airbender Game")
    console.log('***************************************************************************************************************************')
    console.log('')
    const wouldLikeToPlay = readlineSync.keyInSelect(['Yes','No'], 'Would you like to play?');

    if (wouldLikeToPlay === 0) {
    firstQuestion();
    }else {
    process.exit();
    }
    console.log('')
}
function gameOver() {
    console.log('Would you like to play again?')
    const wouldLikeToPlay = readlineSync.keyInSelect(['Yes', 'No']);
    if (wouldLikeToPlay === 0) {
        firstQuestion();
      } else {
        console.log('Thanks for playing, see you again soon');
        process.exit();
}
}
function firstQuestion() {
    console.log("Katara has stolen the water scrolls from the pirates who have now cornered them just four streets away from Appa, who is at the port.")
    console.log("Your job is to guide the gang to safety.")
    console.log('')
    console.log('')
    console.log("CHARACTERS")

    console.log("Aang: Airbender (can use his staff as a kite)")
    console.log("Katara: Waterbending (includes healing abilities)")
    console.log("Sokka: Water Tribe Warrior (skilled boomerang user)")
    console.log('***************************************************************************************************************************')

    console.log("Let's get started!")
    console.log('')


    console.log("Pirates are blocking their path and it appears like there is nowhere to go. What could they do to get out of this corner? 🤔")
    const questionOne = readlineSync.keyInSelect(characters, 'Who should take action?');

    console.log('')
        if(questionOne === 0){
        console.log('Great choice! Aang used airbending to open a clear path and get the gang out of the corner!')
            secondQuestion();
    }else if(questionOne === 1){
        console.log('Oh no! Theres no water nearby.')
        console.log('The pirates caught you. Start all over.')
        gameOver();
    }else if(questionOne === 2){
        console.log('Sokka threw a boomerang--not effective.')
        console.log('The pirates caught you. Start all over.')
        gameOver();
    }else{
        process.exit();
    return 
    }

}

function secondQuestion() {
    console.log('')
    console.log('')
    console.log("Awesome! The gang escaped the corner! As they arrived to the next street, more pirates have appeared. The pirates, on top of nearby roofs, toss a mesh net in an attempt to trap the gang.")
    const questionTwo = readlineSync.keyInSelect(characters, 'Who should take action?');
    console.log('')

    if(questionTwo === 2){
    console.log('You\'re a wizz! 🤩 Sokka\'s quick thinking saved the gang. With his boomerang he was able to slice the net.')
    console.log('Unfortunately, in the process, the old cabbage salesman\'s wagon was destroyed. "Oh no! My cabbages 😩" he yelled')
    thirdQuestion();
    }else if(questionTwo === 1){
    console.log('Waterbending has no use in this situation.')
    console.log('The pirates caught you. Start all over.')
    gameOver();
    }else if(questionTwo === 0){
    console.log('Aang\'s airbending does not affect the mesh net.')
    console.log('The pirates caught you. Start all over.')
    gameOver();
    }else{
    process.exit();
    return 
}
}

function thirdQuestion() {
    console.log('')
    console.log('')
    console.log("The gang is now just a block away from the port. As they run away towards the port, the pirates badly injure Sokka with a throwing knife.")
    console.log('Sokka needs medical attention immediately or else he won\'t make it to the dock.')
    const questionThree = readlineSync.keyInSelect(characters, 'Who should take action?');
    console.log('')

    if(questionThree === 1){
    console.log('Awesome choice! Katara was able to use nearby water to heal her brother, Sokka.')
    console.log('Hooray! 🎉 With your help, they were able to escape, flying away on Appa\'s back.')
        }else if(questionThree === 0){
    console.log('Aang can\'t use his arebending to help Sokka')
    console.log('The pirates caught you. Start all over.')
    gameOver();
    }else if(questionThree === 2){
    console.log('Come on man!😩 Give him a break he\'s hurting.')
    console.log('The pirates caught you. Start all over.')
    gameOver();
    }else{
    process.exit();
    return 
}
}

startGame()