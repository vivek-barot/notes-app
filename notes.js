const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added!"));
  } else console.log(chalk.red.inverse("Duplicate not allowed!"));
};

const removeNote = (title) => {
  const notes = loadNotes();
  const noteToKeep = notes.filter((note) => note.title !== title);
  if (noteToKeep.length === notes.length)
    console.log(chalk.red.inverse("No Note found!"));
  else {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(noteToKeep);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length) {
    console.log(chalk.inverse("Your Notes"));
    notes.forEach((note) => {
      console.log(note.title);
    });
  } else console.log(chalk.red.inverse("No Notes found!"));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else console.log(chalk.red.inverse("Note not found!"));
};

const saveNotes = (notes) =>
  fs.writeFileSync("notes.json", JSON.stringify(notes));

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const data = JSON.parse(dataBuffer.toString());
    return data;
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
