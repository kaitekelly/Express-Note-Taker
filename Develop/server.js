
let express = require("express");
let http = require("http");
let fs = require("fs");
let path = require("path")
let app = express();
let PORT = 8080;

let server = http.createServer();

//Routes

// api routes

// api/notes with method GET
// api/notes POST
// api/notes/:id  method DELETE

// html routes

// return index.html
//
// route return notes.html 
app.get("/", function(req, res) {
    res.send("Welcome to your Home Town!!");  // return the index.html
});

app.get("/notes", function(req, res) {
    res.sendfile(notes);   // return the notes.html
})



// function handleRequest(req, res) {
//     let path = req.url;

//     switch(path) {
//         // * GET `/notes` - Should return the `notes.html` file.

//         case "/notes":
//             return fs.readFile(__dirname + "/notes.html", function(err, data) {
//                 if (err) throw err;
//                 res.writeHead(200, { "Content-Type": "text/html"});
//                 res.end(data);
//             })

//         case "*":
//             return fs.readFile(__dirname + "/index.html", function(err, data) {
//                 if (err) throw err;
//                 res.writeHead(200, { "Content-Type": "text/html"});
//                 res.end(data);
//             })
            
//     }
// }

// // function to take a filepath and respond with html
// function renderHTML(path, res) {
//     return fs.readFile(__dirname + path, function(err, data) {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   }

server.listen(PORT, function() {
    console.log("Server is listening on: http://localhost:" + PORT);
})


module.exports = server;
