import readlineSync from 'readline-sync'

const characters = ["Aang", "Katara", "Sokka"]

console.log("Welcome to Avatar: The Last Airbender Game")
console.log('***************************************************************************************************************************')

console.log("Katara has stolen the water scrolls from the pirates who have now cornered them just four streets away from Appa, who is on the port.")
console.log("Your job is to guide the gang to safety.")
console.log('')
console.log('')
console.log("CHARACTERS")

console.log("Aang: Airbender (can use his airbending kite)")
console.log("Katara: Waterbending (includes healing abilities)")
console.log("Sokka: Water Tribe Warror (skilled boomerang user)")
console.log('***************************************************************************************************************************')
console.log("Let's get started!")
console.log('')

// let characters = ["Aang", "Katara", "Sokka"]
console.log(characters.toString())
console.log("It appears like there is nowhere to go. What could they do to get out of this corner? 🤔")
// console.log("Who should take action?")
// if (readlineSync.keyInYN("Who should take action?")) {
    // Aang was picked
    console.log('')
    console.log("Great choice! Aang used airbending to open a clear path and get the gang out of the corner.")
// }if else 