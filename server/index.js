const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

process.env.NODE_ENV = 'production';

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

app.post("/login", (req, res) => {
    const userLogin = req.body.email;
    const userPassword = req.body.password;
    
    const sqlSelectLogin = "SELECT * FROM login WHERE email = ?";

    db.query(sqlSelectLogin, [userLogin], (err, resul) => {
        if (err) {
            res.send("erro");
        } else if (resul.length === 0) {
            res.send("null");
        } else if (resul[0].password !== userPassword){
            res.send("senha incorreta");
        } else {
            res.send(resul[0]);
        };
        
    });
    
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