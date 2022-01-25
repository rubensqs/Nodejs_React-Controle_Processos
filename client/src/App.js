import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import Registro from "./Components/Registro";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Registro" element={<Registro />} />
        <Route exact path="/Main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
