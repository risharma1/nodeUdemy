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
    
    const duplicateNodes = notes.filter((note) => note.title === title)

    if (0 == duplicateNodes.length){
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
    const notesToKeep = notes.filter((note) => note.title !== title)
    const deletedNote = notes.filter((note) => note.title === title)
    if (notesToKeep.length == notes.length){
        console.log(chalk.red.bold('Note with title:',title,'is not found!'))
    }else{
        console.log(chalk.green.bold('Successfully Deleted Note \nTitle:'+deletedNote[0].title+'\nBody:'+deletedNote[0].body))
        saveNotesObject(notesToKeep)
    }
}

const readNote = function(title){
    //function body
}

const listNote = function(){
    console.log(chalk.blue.bold('Your current set of notes are:\n'))
    const notes = loadNotesObject()
    notes.forEach((x) => {
        console.log(x)
    });    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
}