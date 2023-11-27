let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.sendFile('./02_exercise.html', {
        root: __dirname,
    })
    console.log(__dirname);
})

app.listen(5000, () => {
    console.log("listening on port 5000: ...");
})