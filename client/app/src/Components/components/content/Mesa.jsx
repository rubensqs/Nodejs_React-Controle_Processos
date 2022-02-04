import React, { useState } from "react";
import BoxCadProc from "./BoxCadProc";
import TabelaProc from "./TabelaProc";
import DetailProc from "./DetailProc";

function Mesa(props) {

  /* -- Avaliar o uso do código abaixo -- */
  const [procs, setProc] = useState([]);

  function addProc(proc) {
    setProc((previos) => {
      return [...previos, proc];
    });
  }
  /* -- Avaliar o uso do código acima -- */


  const [id, setId] = useState(0);

  function setIdProcesso(idP){
    setId(idP);
  };

  return (
    <div className="overview-boxes">
      <div className="box">
        {/* Caixa de Registro de Processos */}
        <BoxCadProc onAdd={addProc} />
      </div>
      <div className="box-tabela">
        {/* Tabela de Processos */}
        <TabelaProc processos={procs} idprocesso={setIdProcesso}/>
      </div>
      <div className="box-detalhes">
        {/* Detalhe Processos */}
        <DetailProc idpro={id} />
      </div>
    </div>
  );
}

export default Mesa;