require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();


const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "controleprocessosdb"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {   
    res.send("conectado");
    
});

/* -- Validação de Usuário -- */
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
                    res.send(jwt.sign({id: resul[0].id, email: resul[0].email, nome: resul[0].nome}, process.env.JWT_TOKEN));
                } else {
                    res.send("senha incorreta");
                };
            });
        };
            
    });
    
});

/* -- Registro de Novo Usuário -- */
app.post("/Registrar", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const userEmail = req.body.email;
        const userPassword = hash;
        const userNome = req.body.nome;

        const sqlInsertRegistro = "INSERT INTO login (email, nome, password) VALUES (?, ?, ?)";

        db.query(sqlInsertRegistro, [userEmail, userNome, userPassword], (err, result) => {
            res.send(err);
        });

    });
    
});

/* -- Retorno de Processos de um Usuário -- */
app.get("/processos/:id", (req, res) => {   
    const sqlProcessos = "SELECT * FROM processos WHERE responsavel = ?";
    db.query(sqlProcessos, [req.params.id], (err, result) => {
        if (err){
            res.send(err);
        } else {
            res.send(result);
        };
    });
});

/* -- Retorno de Processos de um Usuário -- */
app.get("/processos/dados/:id", (req, res) => {   
    const sqlProcessosDados = "SELECT * FROM processos WHERE idprocessos = ?";
    db.query(sqlProcessosDados, [req.params.id], (errData, dataProc) => {
        if (errData){
            res.send(errData);
            
        } else {
            res.send(dataProc);
        };
    });
});

/* -- Cadastro de Processos -- */
app.post("/cadProc", (req, res) => {
    const numProcesso = req.body.numProcesso;
    const dataEntrada = req.body.dataEntrada;
    const dataSaida = req.body.dataSaida;
    const sistema = req.body.sistema;
    const orgao = req.body.orgao;
    const tipo = req.body.tipo;
    const obs = req.body.obs;
    const responsavel = req.body.responsavel;

    const sqlInsertRegistro = "INSERT INTO processos (numProcesso, dataEntrada, dataSaida, sistema, orgao, tipo, obs, responsavel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sqlInsertRegistro, [numProcesso, dataEntrada, dataSaida, sistema, orgao, tipo, obs, responsavel], (err, result) => {
        res.send(err);
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});