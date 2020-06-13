// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
const fs = require("fs");
let { v4: uuidv4 } = require("uuid");
// const util = require("util");

module.exports = (app) => {
  //app.get(path, callback [, callback ...])
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (error, data) => {
      if (error) {
        return console.log(`this is a line 14 ${error}`);
      }
      res.json(JSON.parse(data));
      console.log(`this ${data} is from app.get. it was parsed`);

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
      console.log(testRead, "this is my test read");
      console.log(noteData);
      testRead.push(newNote);
      console.log(`this ${noteData} is from app.get.in the readFilemethod`);
      fs.writeFile("./db/db.json", JSON.stringify(testRead, null, 2), err => {
        if (err) throw err;
        // res.send("./db/db.json");
        console.log('Successfully wrote file')
      })
    });

    
  });

  // app.delete("/api/notes/:id", (req, res) => {
  //   // Empty out the arrays of data
  //   res.send("got a delete request from notes")
  //   console.log("got a delete request from notes")
  //   // todoData.length = 0;

  //   // res.json({
  //   //   // ok: true
  //   // });
  // });
};

// function renderHtml() {
//   fs.writeFileSync("./public/assets/notes.html", render(req.body), "utf-8")
// }
// function readFile();
////*********************************************** */