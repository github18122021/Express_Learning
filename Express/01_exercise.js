let express = require("express");
// console.log(express);
// console.log("------");

let app = express();

// console.log(app);

app.get("/", (req, res)=> {
    console.log("request done");
    // res.setHeader('Content-Type', 'text/Plain');
    // below written line could be used even without setting header as mention above
    // res.write('Hello');
    res.send("Hello From The Root")
    res.end();
})

app.get("/about", (req, res) => {
    res.redirect("/")
    res.end()
    console.log("Redirected");
})

app.use((req,res)=> {
    console.log("Error: Page not found");
    res.send("Error: Page Not Found");
    res.end()
})

app.listen(5000, () => {
    console.log("Started Listening 5000: ...");
})