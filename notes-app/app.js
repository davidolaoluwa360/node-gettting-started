//* core packages
const chalk = require('chalk');
const yargs = require('yargs');

//* file module
const { getNotes } = require('./notes');

//* customize yargs version
yargs.version('1.1.0');

//* create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
  },
});

//* create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
    console.log('removing a note...');
  },
});

//* create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => {
    console.log('listing all note....');
  },
});

//* create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    console.log('Reading a note.....');
  },
});

yargs.parse();
