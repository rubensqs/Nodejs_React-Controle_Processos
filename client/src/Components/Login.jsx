import React, {useState} from "react";
import Axios from "axios";
import {Link, useNavigate} from "react-router-dom";


function Login(){
    const [user, setUser] = useState({login: "", password: ""});
    const [alert, setAlert] = useState();
    const navigate = useNavigate();

    function capturaValor(event){
        const {name, value} = event.target;
        setAlert();
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
    };

    function sendUser() {
        if (user.login === "" || user.password === ""){
            setAlert("Preencha todos os campos.")
        } else {
            Axios.post("http://localhost:3001/login", {
                email: user.login,
                password: user.password
            }).then((response) => {
                if (response.data === null){
                    setAlert("Usuário não encontrado!");
                    setUser({login: "", password: ""});
                } else if (response.data === "senha incorreta"){
                    setAlert("Senha incorreta!");
                    setUser((prev) => {return {login: prev.login, password: ""}});
                } else if (response.data === "erro") {
                    setAlert("Erro no servidor. Tente novamente!")
                } else {
                    localStorage.clear();
                    localStorage.setItem("AuthToken", response.data);
                    navigate("/Main");
                };
                
            });
        };
        
    };

    return (
        <div className="login">
                <p className="alert">{alert}</p>
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
};

export default Login