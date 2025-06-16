import React, { useState } from "react";
import "./index.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    if (editingNote !== null) {
      const updated = notes.map((note) =>
        note.id === editingNote ? { ...note, text: newNote } : note
      );
      setNotes(updated);
      setEditingNote(null);
    } else {
      const note = {
        id: Date.now(),
        text: newNote,
      };
      setNotes([note, ...notes]);
    }

    setNewNote("");
  };

  const handleEdit = (id) => {
    const note = notes.find((n) => n.id === id);
    setNewNote(note.text);
    setEditingNote(id);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="container">
      <div className="notebox">
        <h1>📝 NoteBox</h1>
        <form onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Write a note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button type="submit">{editingNote ? "Update" : "Add"}</button>
        </form>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              {note.text}
              <span>
                <button onClick={() => handleEdit(note.id)}>✏️</button>
                <button onClick={() => handleDelete(note.id)}>🗑️</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

