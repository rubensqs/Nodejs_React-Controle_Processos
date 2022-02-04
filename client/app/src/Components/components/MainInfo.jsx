import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import Mesa from "./content/Mesa";
import Relatorios from "./content/Relatorios";
import jwt_decode from "jwt-decode";

function MainInfo(props) {
  const [isL, setL] = useState(true);
  const token = localStorage.getItem("AuthToken"); 
  const tokenDecoded = jwt_decode(token);
  const navigate = useNavigate();
  

  function setExpand() {
    props.onExpand();
    if (isL) {
      setL(false);
    } else {
      setL(true);
    }
  }

  function logOff() {
    localStorage.clear();
    navigate("/");
  }

  const classe = (isL ? "home-section" : "home-section active");
  

  return (
    <section className={classe}>
      <nav>
        <div onClick={setExpand} className="sidebar-button">
          <i className="bx bx-menu-alt-left"></i>
        </div>
        <div className="Search"></div>
        <div className="profile-details">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqO7tvNGSpb5Safi_xoUcIuJJDtZZPN1QA&usqp=CAU"
            alt=""
          />
          <span className="name">{tokenDecoded.nome}</span>
          <div className="log-off" onClick={logOff}>Log Off</div>
        </div>
        
      </nav>
      <div className="main-content">
        {props.conteudo === "Mesa" ? <Mesa /> : null}
        {props.conteudo === "Relatorios" ? <Relatorios /> : null}
      </div>
    </section>
  );
}

export default MainInfo;