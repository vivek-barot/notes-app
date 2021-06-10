const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added!"));
  } else {
    console.log(chalk.red.inverse("Duplicate not allowed!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const noteToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  if (noteToKeep.length === notes.length) {
    console.log(chalk.red.inverse("No Note found!"));
  } else {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(noteToKeep);
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

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
};
