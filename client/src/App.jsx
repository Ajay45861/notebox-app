import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/notes").then(res => setNotes(res.data));
  }, []);

  const addNote = () => {
    const newNote = { id: uuidv4(), text: input };
    axios.post("http://localhost:5000/notes", newNote).then(res => {
      setNotes([...notes, res.data]);
      setInput("");
    });
  };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:5000/notes/${id}`).then(() => {
      setNotes(notes.filter(note => note.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>📝 NoteBox</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => deleteNote(note.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

