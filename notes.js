const fs = require("fs")
const chalk = require("chalk")


const addNote = (title,body) => {
const notes = loadNotes()
//check duplicate notes
const duplicateNote = notes.find((note) => note.title === title )


// console.log(duplicateNote)
// console.log(title)

if(!duplicateNote) {
    notes.push({
        title:title,
        body:body
    
    })
    savedNotes(notes)
    console.log(chalk.green.inverse("New note added"))
}
else {
    console.log(chalk.red.inverse("Note title taken!"))
}

}
//saving notes
const savedNotes = (notes) => {
const dataJSON = JSON.stringify(notes)
fs.writeFileSync("notes.json", dataJSON)
}
//loading the existing notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        // console.log(dataJSON)
        return JSON.parse(dataJSON)
    } catch (error) {
        //if we don't have a file
        // return empty array
        return []
    }
   
}
const removeNote = (title) => {
    // console.log("remove the note" , title)
    const notes = loadNotes()
    const modifiedNoteArray = notes.filter((note) => note.title !== title)
   if(notes.length > modifiedNoteArray.length) {
    console.log(chalk.green.inverse("Note Removed!"))
    savedNotes(modifiedNoteArray)
   } else {
       console.log(chalk.red.inverse('No note found!'))
   }
    
}
const listNotes = () => {
const notes = loadNotes()

console.log(chalk.inverse("Your notes"));

notes.forEach((note) => console.log(note.title))

}

const readNote = (title) => {
const notes = loadNotes();
const readNote = notes.find((note) => note.title === title)
if (readNote) {
    console.log(chalk.inverse(readNote.title))
    console.log(readNote.body)
}
else {
    console.log(chalk.inverse.red("no note found"))
}
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes: listNotes,
    readNote: readNote
}