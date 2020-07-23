//load file system module
// const fs = require('fs')

// fs.writeFileSync() takes 2 arguments 
// 1. name of file
// 2.data to write in file

// fs.writeFileSync("notes.txt", "My name is Taha")

//Challenge append a message to notes.txt
//Use appendFileSync to append to the file
// fs.appendFileSync("notes.txt", " I want to become a node developer")

// video # 3
// const name = require('./utils.js') /* execute utils.js*/
// const name = "taha"
// console.log(name)

// const add = require('./utils.js')
// const sum = add(4, -2);
// console.log(sum)

//load npm pakage use npm pakage name in the require argument
// const validator = require('validator')
// const getNotes = require("./notes.js")
// const message =getNotes()
// console.log(message)
// console.log(validator.isEmail("andrew@example.com"))
// console.log(validator.isURL("https://mead.io"))

// VIDEO # 05
var chalk = require("chalk")
var yargs = require("yargs")
const notes = require("./notes.js")
// console.log(chalk.bold.blue.inverse("Success")) /*  print success in blue color*/
// console.log(chalk.bold.red.inverse("Error!"))
// console.log(process.argv[2])
// const command = process.argv[2]
// console.log(process.argv)

//Customize yargs version

yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title : {
            describe : "Note title",
            demandOption: true,
            type : "string"
        },
        body: {
            describe: "Note description",
            demandOption : true,
            type : "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
        // console.log("Title: ", argv.title)
        // console.log("Body: ",argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: "Remove a note",
    builder: {
        title : {
            describe : "Note title",
            demandOption: true,
            type : "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
// list all the notes
yargs.command({
    command: 'list',
    describe: "list your notes",
    handler() {
        notes.listNotes()
    }
})
//read a note 
yargs.command({
    command: 'read',
    describe: "read a note",
    builder: {
        title : {
            describe : "Note title",
            demandOption: true,
            type : "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()
//add, remove, read, list (option)

// console.log(yargs.argv)
// if(command === "add") {
//     console.log("Adding note!")
// }
// else if(command === "remove") {
//     console.log("removing note!")
// }