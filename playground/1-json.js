//task is to take an object ,convert it to string/bytes,
//then write it to a file, read it back and then convert again to the object

const book = {
    title: "Ego isthe enemy",
    author: "Ryan Holiday",
}

//method 1
const bookJson = JSON.stringify(book)
console.log(book)
console.log(bookJson)
/**{ title: 'Ego isthe enemy', author: 'Ryan Holiday' }
{"title":"Ego isthe enemy","author":"Ryan Holiday"} */

const restoredObject = JSON.parse(bookJson)
console.log(restoredObject.author)