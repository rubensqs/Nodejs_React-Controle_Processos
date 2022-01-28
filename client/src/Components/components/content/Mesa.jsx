import React, { useState } from "react";
import BoxCadProc from "./BoxCadProc";
import TabelaProc from "./TabelaProc";
import DetailProc from "./DetailProc";

function Mesa(props) {
  const [procs, setProc] = useState([]);

  function addProc(proc) {
    setProc((previos) => {
      return [...previos, proc];
    });
  }

  return (
    <div className="overview-boxes">
      <div className="box">
        {/* Caixa de Registro de Processos */}
        <BoxCadProc onAdd={addProc} />
      </div>
      <div className="box-tabela">
        {/* Tabela de Processos */}
        <TabelaProc processos={procs} />
      </div>
      <div className="box-detalhes">
        {/* Detalhe Processos */}
        <DetailProc />
      </div>
    </div>
  );
}

export default Mesa;