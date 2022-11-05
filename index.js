const express = require("express");

const {json} = require("express");

const flight = require("./router/flightRoute");

const app = express();

app.use(json());

app.use("/flight", flight);

const PORT = process.env.PORT || 3000; //port to connect

app.get("/", (req,res) => {
    res.send("Zuri Training")
});
// app.get("/books", function(req, res){
//     res.send("there are 5 books in store")
// })

// app.post("/", function(req, res){
//     res.send("GO AWAAAAAAYYYY")
// })

app.listen(PORT, () => {
    console.log("Server is up and running")
});