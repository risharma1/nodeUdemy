const fs = require('fs')
const chalk = require('chalk')

const loadNotesObject = () => {
    try{
        // const dataBuffer = fs.readFileSync('notes.json')
        // const dataJson = dataBuffer.toString()
        // return JSON.parse(dataJson)
        return JSON.parse(fs.readFileSync('notes.json').toString())
    }catch(e){
        //smart move, if error then that file is corrupt 
        //or modified 
        //or not there or not a json
        return []
    }
}

const saveNotesObject = (object) => {
    try{
        // const dataJson= JSON.stringify(object)
        // fs.writeFileSync('notes.json', dataJson)
        fs.writeFileSync('notes.json', JSON.stringify(object))
    }catch(e){
        console.error('File write error');
    }
}

const getNotes= function() {
    return 'Your notes...'
}

const addNote = function(title, body){
    console.log('Adding a new note')
    const notes = loadNotesObject()
    
    //const duplicateNodes = notes.filter((note) => note.title === title)
    //using new findmethod to stp as soon as you find the object
    const duplicateNode = notes.find((note) => note.title === title)

    // if (0 == duplicateNodes.length){
    if (!duplicateNode) {
        notes.push({
            title: title,
            body: body,
        })

        saveNotesObject(notes)
        console.log(chalk.green.bold('Note added successfully'))
    }else{
        console.log(chalk.red.bold('Note addition failed as a note with same title already exists'))
    }

    
}

const removeNote = function(title){
    console.log('Removing note with title: %s',title)
    
    const notes = loadNotesObject()
    const noteToDelete = notes.find((note) => note.title !== title)
    if (noteToDelete){
        console.log(chalk.red.bold('Note with title:',title,'is not found!'))
    }else{
        const notesToKeep = notes.filter((note) => note.title !== title)
        console.log(chalk.green.bold('Successfully Deleted Note \nTitle:'+noteToDelete.title+'\nBody:'+noteToDelete.body))
        saveNotesObject(notesToKeep)
    }
}

const readNote = function(title){
    console.log('Reading note')
    const notes = loadNotesObject()
    const noteToRead = notes.find((note) => note.title === title)
    if(noteToRead){
        const noteTitle = chalk.yellow.italic(noteToRead.title);
        const noteBody = chalk.yellow.italic(noteToRead.body)
        console.log("The note says:\n"+noteTitle+"\n\n"+noteBody)
    }else{
        console.log(chalk.red.inverse("Note with TItle: "+title+" NOT FOUND!"))
    }
}

const listNote = function(){
    console.log(chalk.blue.bold('Your current set of notes are:\n'))
    const notes = loadNotesObject()
    notes.forEach((x) => {
        console.log(x.title)
    });    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote,
}