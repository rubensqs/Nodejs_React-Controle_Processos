import React, {useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";



function Registro(){
    const [user, setUser] = useState({login: "", password: "", confirmapassword: "", nome: ""});
    const [validacao, setValidacao] = useState({login: "", password: "", confirmapassword: "", nome: ""});
    const [alerta, setAlerta] = useState("");
    

    function capturaValor(event){
        const {name, value} = event.target;
        const regexMail = new RegExp(/@pgfn\.gov\.br/);
        setAlerta("");
                
        setUser((prev) => {
            if (name === "login"){
                if (!regexMail.test(value)) {
                    setValidacao((p) => {return {login: "O email deve pertencer ao domínio @pgfn", password: p.password, confirmapassword: p.confirmapassword, nome: p.nome}});
                }else{
                    setValidacao((p) => {return {login: "", password: p.password, confirmapassword: p.confirmapassword, nome: p.nome}});
                };               
                return {
                    login: value,
                    password: prev.password,
                    confirmapassword: prev.confirmapassword,
                    nome: prev.nome                
                };                
            } else if (name === "password"){
                if (value.length < 8) {
                    setValidacao((p) => {return {login: p.login, password: "A senha deve ter pelo menos 8 caracteres", confirmapassword: p.confirmapassword, nome: p.nome}}  );
                }else{
                    setValidacao((p) => {return {login: p.login, password: "", confirmapassword: p.confirmapassword, nome: p.nome}});
                };
                return {
                    login: prev.login, 
                    password: value,
                    confirmapassword: prev.confirmapassword,
                    nome: prev.nome
                };
            } else if (name === "confirmapassword"){
                if (value !== user.password) {
                    setValidacao((p) => {return {login: p.login, password: p.password, confirmapassword: "Confirmação diferente da senha", nome: p.nome}}  );
                }else{
                    setValidacao((p) => {return {login: p.login, password: p.password, confirmapassword: "", nome: p.nome}});
                };
                return {
                    login: prev.login, 
                    password: prev.password,
                    confirmapassword: value,
                    nome: prev.nome
                };
            } else if (name === "nome"){
                if (value.length < 3) {
                    setValidacao((p) => {return {login: p.login, password: p.password, confirmapassword: p.confirmapassword, nome: "O nome deve possuir ao menos 3 caracteres"}}  );
                }else{
                    setValidacao((p) => {return {login: p.login, password: p.password, confirmapassword: p.confirmapassword, nome: ""}});
                };
                return {
                    login: prev.login, 
                    password: prev.password,
                    confirmapassword: prev.confirmapassword,
                    nome: value
                };
            }
        });
    }

    function sendUser() {
        const cont = Object.values(user);
        const vl = Object.values(validacao);
        if (cont[0]==="" || cont[1]==="" || cont[2]==="" || cont[3]==="") {
            setAlerta("É necessário preencher todos os campos.");
        } else {
            setAlerta("");            
            if (vl[0]!=="" || vl[1]!=="" || vl[2]!=="" || vl[3]!=="") {
                setAlerta("Verifique pendência.");
            }else{
                setAlerta("");
                Axios.post("http://localhost:3001/Registrar", {
                    email: user.login,
                    password: user.password,
                    nome: user.nome
                }).then((response) => {
                    if (response.data.length === 0) {
                        setUser({login: "", password: "", confirmapassword: "", nome: ""});
                        setAlerta(<Link to='/'><p className="link">Cadastro Realizado! Click para retornar ao Login.</p></Link>);
                    } else if (response.data.errno === 1062) {
                        setAlerta(<Link to='/'><p className="link">Usuário já possui cadastro! Click para retornar ao Login.</p></Link>);
                    } else {
                        setAlerta("Erro ao acessar o banco de dados. Tente novamente.");
                        console.log(response);
                    };                    
                });        

            };
        };



    }

    return (
        <div className="registro">
                <h6 className="validacao">{alerta}</h6>
                <label>Login: </label>
                <input type="email" name="login" value={user.login} placeholder="Insira um e-mail do domínio PGFN" onChange={capturaValor} />
                <p className="validacao">{validacao.login}</p>
                <label>Senha: </label>
                <input type="password" name="password" value={user.password} placeholder="Senha" onChange={capturaValor} />
                <p className="validacao">{validacao.password}</p>
                <label>Confirmar Senha: </label>
                <input type="password" name="confirmapassword" value={user.confirmapassword} placeholder="Confirmar Senha" onChange={capturaValor}  />
                <p className="validacao">{validacao.confirmapassword}</p>
                <label>Nome: </label>
                <input type="text" name="nome" value={user.nome} placeholder="Nome" onChange={capturaValor} />
                <p className="validacao">{validacao.nome}</p>
                <br />
                <button onClick={sendUser}>Registrar</button>
                <br />
                <Link to='/'><p className="link">Retornar ao Login</p></Link>            
        </div>
    )
};

export default Registro