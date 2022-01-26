require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

process.env.NODE_ENV = 'production';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "ControleProcessosDB"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {   
    res.send("conectado");
    
});

app.post("/login", (req, res) => {
    const userLogin = req.body.email;
    const userPassword = req.body.password;
    
    const sqlSelectLogin = "SELECT * FROM login WHERE email = ?";

    db.query(sqlSelectLogin, [userLogin], (err, resul) => {
        if (err) {
            res.send("erro");
        } else if (resul.length === 0) {
            res.send("null");
        } else {
            bcrypt.compare(userPassword, resul[0].password, function(erro, resCompare){
                if (resCompare){
                    res.send(jwt.sign({email: resul[0].email, nome: resul[0].nome}, process.env.JWT_TOKEN));
                } else {
                    res.send("senha incorreta");
                };
            });
        };
            
    });
    
});

app.post("/Registrar", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const userEmail = req.body.email;
        const userPassword = hash;
        const userNome = req.body.nome;

        const sqlInsertRegistro = "INSERT INTO login (email, password, nome) VALUES (?, ?, ?)";

        db.query(sqlInsertRegistro, [userEmail, userPassword, userNome], (err, result) => {
            res.send(err);
        });

    });
    
});



app.listen(3001, () => {
    console.log("Server running on port 3001");
});