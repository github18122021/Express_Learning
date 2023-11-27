let express = require('express');
let app = express();
let port = 3000;

app.get("/", (req, res) => {
    res.send("/")
})

app.get("/path", (req, res) => {
    res.send("/path")
})

app.get("/data", (req, res) => {
    res.json({
        name : "John",
        age : "null",
    })
})

app.use((req,res) => {
    res.status(404).send("Error 404 : Resources Not Found")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
    console.log(`http://localhost:${port}`);
})