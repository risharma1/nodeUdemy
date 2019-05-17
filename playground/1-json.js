// //task is to take an object ,convert it to string/bytes,
// //then write it to a file, read it back and then convert again to the object

const fs = require('fs')

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
// }

// //method 1
// const bookJson = JSON.stringify(book)
// // console.log(book)
// // console.log(bookJson)
// /**{ title: 'Ego isthe enemy', author: 'Ryan Holiday' }
// {"title":"Ego isthe enemy","author":"Ryan Holiday"} */

// // const restoredObject = JSON.parse(bookJson)
// // console.log(restoredObject.author)

// fs.writeFileSync('1-json.json',bookJson)

// //file contents are read as bytes
// const dataBuffer = fs.readFileSync('1-json.json')
// const readObject = JSON.parse(dataBuffer)
// console.log(dataBuffer)
// console.log(dataBuffer.toString())
// console.log(readObject.author)

const readObject = JSON.parse(fs.readFileSync('1-json.json'))

readObject.name = 'Rishabh'
readObject.age = 28
readObject.planet = 'Mars'

fs.writeFileSync('1-json.json', JSON.stringify(readObject))