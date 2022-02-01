console.log('Notes app is running.')

const NotesModel = require('./notesModel.js')
const NotesView = require('./notesView.js')

// let notes = new NotesModel;
// notes.addNote('Buy milk')
// console.log(notes.getNotes());

const notesModel = new NotesModel();
notesModel.addNote('Milk')
notesModel.addNote('Butter')
const notesView = new NotesView(notesModel);
notesView.displayNotes();