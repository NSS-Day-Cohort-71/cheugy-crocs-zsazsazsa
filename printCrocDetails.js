//import database
const { crocCollection } = require("./crocCollection")

//run function to print all shoe details
function printCrocDetails() {
    //print header
    console.log('ALL CROCS:')
    console.log('---------------------------------')

    //sort database to print all shoe details
    crocCollection.forEach(shoe => {
        console.log(`\t${shoe.color} ${shoe.name} ${shoe.type}`)
    })
    console.log('')
}

//export function to run on main.js
module.exports = { printCrocDetails }