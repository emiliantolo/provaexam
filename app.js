const express=require ("express");
const app=express();
const PORT = process.env.PORT || 3000;
const bodyparser = require ("body-parser");
const sendArea=require("./sendArea");

app.use(bodyparser.json());

app.get('/', (req, res) => res.send("Hello World"));

app.get('/getArea', sendArea);


app.listen(PORT);
