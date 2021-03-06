// const validator = require('validator')
// console.log(validator.isEmail('rick@morty.com'))
// console.log(validator.isURL('https://mead.io'))

const notes = require("./notes.js")
// console.log(notes.getNotes())

const chalk = require('chalk')
// console.log(chalk.green.inverse.underline('Success!')+ chalk.inverse.bold.red('Hurray!'))


// const command = process.argv[2]
// console.log(process.argv)

// switch(command){
//     case 'add': break;
//     case 'remove': break;
//     default: console.log('command '+ chalk.inverse.red(command)+' is not defined.')
// }

const yargs = require('yargs')

//customize yarg version
yargs.version('1.1.0')

//commands to set up
//add, remove, read & list note
//need help and options for all of these commands

//options object
//create add command
//shows a commandsection in node <file> --help command result
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {//options formy command
        title: {
            describe: 'Note title',
            demandOption: true, //makes this option manadatory for this command
            type: 'string', //type of this option
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})


//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler () {
        notes.listNote()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()