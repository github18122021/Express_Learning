let express = require("express");
let app = express();

let tasks = require("./04_exercise");

let middleWare = (req, res, next) => {
    console.log(`Congratulations for successful execution`);
    next();
}
app.use(middleWare)

app.get("/", (req, res) => {
    res.send(`${req.url}`);
})

app.use("/tasks", tasks);

app.listen(3000, () => {
    console.log("Listening on port : 3000");
})