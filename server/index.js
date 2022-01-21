const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ControleProcessosDB"
});

app.get("/", (req, res) => {   
    res.send("Ativo");
});



app.listen(3001, () => {
    console.log("Server running on port 3001");
});