const fs = require("fs");
let { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (error, data) => {
      if (error) {
      }
      res.json(JSON.parse(data));
    });
  });

  app.post("/api/notes", (req, res) => {
    let noteId = uuidv4();
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: noteId
    }
    fs.readFile("./db/db.json", "utf-8", (error, noteData) => {
      console.log("Test");
      if (error) {
        return console.log(`this is a line 14 ${error}`);
      }
      
      let testRead = JSON.parse(noteData);
      testRead.push(newNote);
      fs.writeFile("./db/db.json", JSON.stringify(testRead, null, 2), err => {
        if (err) throw err;
        res.send(testRead);
        console.log('Successfully wrote file')
      })
    });

    
  });

  app.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    fs.readFile("./db/db.json", "utf-8", (error, noteData) => {
      let testRead = JSON.parse(noteData);
      let updatedNoteData = testRead.filter(note => note.id != noteId);
      fs.writeFile("./db/db.json", JSON.stringify(updatedNoteData, null, 2), err => {
        if (err) throw err;
        res.send(updatedNoteData);
      })

    })


  });
};
