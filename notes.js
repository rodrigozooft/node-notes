//console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString);
  } catch (e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var readNote = (title) => {
  notes = fetchNotes();
  filteredNote = notes.filter(note => note.title === title);
  if (filteredNote.length !== 0){
    return filteredNote[0];
  } else {
    return false
  }
};

var removeNote = (title) => {
  var notes = fetchNotes();
  note = {
    title
  };
  var singleNotes = notes.filter(note => note.title !== title)
  saveNotes(singleNotes);

  return notes.length !== singleNotes.length;
};

var logNote = (note) => {
  debugger;
  console.log('-----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
  logNote
};