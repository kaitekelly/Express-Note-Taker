// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
const fs = require("fs");

module.exports = (app) => {

  app.get("/api/notes", (req, res) => {
   fs.readFile("db/db.json", "utf-8", (error, data) => {

      if (error) {
        return console.log(error);
      }
      console.log(data);
      res.json(JSON.parse(data))
    });
  });

  app.post("/api/notes", (req, res) => {
    // todoData.push(req.body);
    console.log(req.body);
    // res.json(JSON.stringify(data)).push(req.body);

    res.send(JSON.stringify(req.body));
  });



  app.delete("/api/notes/:id", (req, res) => {
    // Empty out the arrays of data
    todoData.length = 0;
    //   waitListData.length = 0;

    res.json({
      ok: true
    });
  });
};

// function readFile();