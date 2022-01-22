const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ControleProcessosDB"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {   
    res.send("conectado")
    console.log("get para root enviado");
});


app.post("/login", (req, res) => {
    console.log("Post request recebido");
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    console.log(userEmail);
    console.log(userPassword);
});



app.listen(3001, () => {
    console.log("Server running on port 3001");
});