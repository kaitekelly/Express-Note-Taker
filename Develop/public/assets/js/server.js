const Index = require("./index.js")

let express = require("express");

let http = require("http");
let fs = require("fs");

let app = express();
let PORT = 8080;

let server = http.createServer(handleRequest);

//Routes
app.get("/", function(req, res) {
    res.send("Welcome to your Home Town!!");
});

app.get("/notes", function(req, res) {
    res.json(notes);
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