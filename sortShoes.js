//import database
const { crocCollection } = require("./crocCollection.js")

//run function to print shoes by type
function printSortedShoes() {
    //sort the database into types of shoes
    function sortShoes(typeOfShoe) {
        const shoeType = crocCollection.filter( shoe => shoe.type === typeOfShoe)
        shoeType.forEach( shoe => {
            console.log(`\t${shoe.name}`)
        })
        console.log(`\n`)
    }
    

    //print headers and shoe data
    console.log('STYLES:')
    console.log('---------------------------------')
    
    console.log('FLIP CROCS:')
    sortShoes('Flip')
    
    console.log('PUFF BOOTS:')
    sortShoes('Puff Boot')
    
    console.log('CRUSH SANDALS:')
    sortShoes('Crush Sandal')
    
    console.log('CLASSIC CLOGS:')
    sortShoes('Classic Clog')
    
    console.log('CLASSIC BOOTS:')
    sortShoes('Classic Boot')
    
    console.log('SLIDES:')
    sortShoes('Slide')
}


//export function to run in main.js
module.exports = { printSortedShoes }