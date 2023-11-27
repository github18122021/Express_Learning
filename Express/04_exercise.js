let express = require("express");
let app = express.Router();

app.get("/", (req, res) => {
    res.send(`Request done using ${req.url}`)
})

app.use((req, res) => {
    res.status(404)
    res.send("Error 404")
    // Alternatively 
    // res.status(404).send("Error 404")
})

module.exports = app;