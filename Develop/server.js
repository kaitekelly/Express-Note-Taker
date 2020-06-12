
const express = require("express");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware that functions with Express and Node 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
//Routes below passing in express to routes files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Server is listening on: http://localhost: ${PORT}`));
