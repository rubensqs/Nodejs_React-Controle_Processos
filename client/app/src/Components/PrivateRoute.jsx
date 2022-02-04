import React from "react";
import { Outlet, Navigate } from "react-router-dom";


function PrivateRoute (){
    const isLogged = !!localStorage.getItem("AuthToken");
    return isLogged ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute