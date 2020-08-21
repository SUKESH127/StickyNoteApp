import React, { useState } from "react";
import './App.css';
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);

function addNote(note) {
  setNotes((prevNotes) => {
    return [...prevNotes, note];
  });
}
//note value is being passed from the props.onAdd(note) in submit note function

function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
    <Header />
    <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
