// const fs = require("fs");
// fs.writeFileSync("notes.txt", "First content");
// fs.appendFileSync("notes.txt", " Appended text");
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
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
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
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

//Read
yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: () => {
    console.log("in Read");
  },
});

//List
yargs.command({
  command: "list",
  describe: "List of notes",
  handler: () => {
    console.log("in List");
  },
});

yargs.parse();
