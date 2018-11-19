//console.log('Starting app.js');

const _ = require('lodash');
const yargs = require('yargs');

//Modules
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
//console.log('Command: ', command);
//console.log('Process', process.argv);
//console.log('Yargs', argv);

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (typeof(note) === 'object'){
    console.log('Note created');
    notes.logNote(note);
  } else{
    console.log("The note was not added because already exists")
  }
} else if (command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach(note => notes.logNote(note));

} else if (command === 'read'){
  var noteReaded = notes.readNote(argv.title);
  if (typeof(noteReaded) === 'object'){
    console.log("Note was found");
    notes.logNote(noteReaded);

  } else{
    console.log("The note was not found");
  }
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else{
  console.log('Command not recognized');
}