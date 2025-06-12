const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());

let notes = [];

app.get("/notes", (req, res) => res.json(notes));

app.post("/notes", (req, res) => {
  const note = req.body;
  notes.push(note);
  res.status(201).json(note);
});

app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  notes = notes.filter(note => note.id !== id);
  res.status(200).send("Deleted");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
