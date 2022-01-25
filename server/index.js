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
    res.send("conectado");
    
});


app.post("/Registrar", (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const userNome = req.body.nome;

    const sqlInsertRegistro = "INSERT INTO login (email, password, nome) VALUES (?, ?, ?)";

    db.query(sqlInsertRegistro, [userEmail, userPassword, userNome], (err, result) => {
        res.send(err);
    })
});



app.listen(3001, () => {
    console.log("Server running on port 3001");
});