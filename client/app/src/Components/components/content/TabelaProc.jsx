import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Axios from "axios";
import RollsProcessos from "./small-contents/RollsProcessos";

function TabelaProc(props) {
  const [procs, setProcs] = useState([]);
  const token = localStorage.getItem("AuthToken"); 
  const tokenDecoded = jwt_decode(token);

  const [id, setId] = useState();
  function submitProc(i){
    setId(i);
    props.idprocesso(i);
    
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/processos/" + tokenDecoded.id).then((response => {    
      setProcs(response.data);
    }));
  });
  


  return (
    <div className="proc-recentes">
      <div className="titulo">Mesa de Processos</div>
      <div className="tabela">
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Tipo</th>
              <th>Prazo</th>
            </tr>
          </thead>
          <tbody>
          {procs.reverse().map((proc) => {              
            return ( 
            <RollsProcessos
              key={proc.idprocessos}
              id={proc.idprocessos}
              numProc={proc.numProcesso}
              dataProc={proc.dataEntrada}
              dataEntProc={proc.dataSaida}
              tipo={proc.tipo}
              idp={submitProc}
            />)
            })}                              
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelaProc;