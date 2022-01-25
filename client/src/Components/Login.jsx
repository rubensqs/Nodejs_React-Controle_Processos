import React, {useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

function Login(){
    const [user, setUser] = useState({login: "", password: ""});

    function capturaValor(event){
        const {name, value} = event.target;
        setUser((prev) => {
            if (name === "login"){
                return {
                    login: value,
                    password: prev.password
                };
            } else if (name === "password"){
                return {
                    login: prev.login, 
                    password: value
                };
            }
        });
    }

    function sendUser() {
        Axios.post("http://localhost:3001/login", {
            email: user.login,
            password: user.password
        });
        setUser({login: "", password: ""});
    }

    return (
        <div className="login">
                <label>Login: </label>
                <input type="email" name="login" value={user.login} placeholder="E-mail" onChange={capturaValor} />
                <label>Senha: </label>
                <input type="password" name="password" value={user.password} placeholder="Senha" onChange={capturaValor} />
                <br />
                <button onClick={sendUser}>Login</button>
                <Link to="/Registro"><button >Registrar</button></Link>
                <button>Login com <i><b>Google</b></i></button>
                <br />
                <Link to='/'><p className="link">Esqueci a senha</p></Link>            
        </div>
    )
}

export default Login