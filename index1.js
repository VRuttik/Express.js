/*
API
get - read 
post - create
put - update
delete - delete
*/

const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World, from the Vruttik!!");
})

app.listen(8000, () =>{
    console.log("listening from port at 8000");
});
