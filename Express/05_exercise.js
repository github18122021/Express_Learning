let express = require("express");
let app = express();

let port = 3000;

// ejs 
app.set("view engine", "ejs");

// app.set("views", "views1");

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Started Listening on port : ${port}`);
})