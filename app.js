console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//Modules
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
// console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (typeof(note) === 'object'){
    console.log("The note ",note.title, note.body, "was correctly added")
  } else{
    console.log("The note was not added because already exists")
  }
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  notes.readNote(argv.title);
} else if (command === 'remove'){
  notes.removeNote(argv.title);
} else{
  console.log('Command not recognized');
}