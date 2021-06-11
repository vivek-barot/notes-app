const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.2");

//Add
yargs.command({
  command: "add",
  describe: "Adding a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.addNote(argv.title, argv.body),
});

//Remove
yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
});

//List
yargs.command({
  command: "list",
  describe: "List of notes",
  handler: () => notes.listNotes(),
});

//Read
yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.readNote(argv.title),
});

yargs.parse();
