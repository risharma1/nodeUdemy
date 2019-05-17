const fs = require('fs')

const loadNotesObject = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        //smart move, if error then that file is corrupt 
        //or modified 
        //or not there or not a json
        return []
    }
}

const saveNotesObject = function(object){
    try{
        const dataJson= JSON.stringify(object)
        fs.writeFileSync('notes.json', dataJson)
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
    
    const duplicateNodes = notes.filter(function (note){
        return note.title === title
    })

    if (0 == duplicateNodes.length){
        notes.push({
            title: title,
            body: body,
        })

        saveNotesObject(notes)
        console.log('Note added successfully')
    }else{
        console.log('Note addition failed as a note with same title already exists')
    }

    
}

const removeNote = function(title){
    console.log('Removing note with title: %s',title)
    
    const notes = loadNotesObject()
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })
    const deletedNote = notes.filter(function (note){
        return note.title=== title
    })
    if (notesToKeep.length == notes.length){
        console.log('Note with title: %s is not found!',title)
    }else{
        console.log('Successfully Deleted Note: \n%s', JSON.stringify(deletedNote))
        saveNotesObject(notesToKeep)
    }
}

const readNote = function(title){
    
}

const listNote = function(){
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
}