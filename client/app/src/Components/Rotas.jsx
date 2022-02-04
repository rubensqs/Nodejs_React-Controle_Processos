import React from "react";
import { Routes, Route } from "react-router";
import Login from "./Login";
import Registro from "./Registro";
import Main from "./Main";
import {history} from "./history";
import PrivateRoute from "./PrivateRoute";

function Rotas (){
    return (
    <Routes history={history}>        
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Registro" element={<Registro />} />
        <Route exact path="/Main" element={<PrivateRoute />}> <Route exact path="/Main" element={<Main />} /> </Route>
    </Routes>
    );
}

export default Rotas;