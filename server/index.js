const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3040;

app.use(cors());
app.use(express.json());

let notes = [];

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const newNote = {
    id: Date.now(),
    text: req.body.text,
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== noteId);
  res.status(200).json({ message: 'Note deleted successfully' });
});

app.put('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const updatedText = req.body.text;
  notes = notes.map(note =>
    note.id === noteId ? { ...note, text: updatedText } : note
  );
  res.status(200).json({ message: 'Note updated successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('NoteBox backend is running.');
});
