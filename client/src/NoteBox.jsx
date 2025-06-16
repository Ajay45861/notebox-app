import React, { useState } from 'react';
import './index.css';

function NoteBox() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const note = {
      id: Date.now(),
      text: newNote
    };

    setNotes([note, ...notes]);
    setNewNote("");
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="app">
      <form onSubmit={handleAddNote}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a note"
          style={{ width: "100%", marginBottom: "5px" }}
        />
        <button type="submit" style={{ width: "100%" }}>Add</button>
      </form>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map(note => (
          <li key={note.id} style={{ marginTop: "5px" }}>
            {note.text}
            <button onClick={() => handleDelete(note.id)} style={{ float: "right" }}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteBox;
