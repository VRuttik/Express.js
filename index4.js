// index.html
/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="css/style.css" />
</head>

<body>

    <h1>Hello Vruttik Moragha Here.!!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero aut nisi laboriosam et assumenda
        eius, mollitia quod eveniet facilis, ipsum expedita veniam excepturi obcaecati rem ex! Similique, aliquam
        beatae.</p>

    <img src="https://www.industrybuying.com/wp-content/uploads/2019/07/1545815083_DqinLK_digital_shutterstock_470.jpg" width="100%" height="70%" />

</body>
</html>
*/


// style.css
/*
h1{
    color: lime;
}
*/

// index.js

/*
API
get - read 
post - create
put - update
delete - delete 
*/

const path = require('path');
const express = require('express');
const app = express();

// Relative to absolute path
// console.log(__dirname);

const staticPath = path.join(__dirname, "../public");
    
// Builtin middleware to serve static files
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("Hello World, from the Vruttik!!");
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});
