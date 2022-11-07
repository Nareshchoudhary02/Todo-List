const express = require("express");
const bodyParser = require("body-parser");
//const { urlencoded } = require("express");

let items = ["buy food", "cook food", "eat food"];


const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", function(req,res){

    let today = new Date();
    let option = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    } 

    let day = today.toLocaleDateString("en-US", option);

    res.render("list", {
        kindOfDay : day,
        newListItems : items,
    });
});

app.post("/", function(req,res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});