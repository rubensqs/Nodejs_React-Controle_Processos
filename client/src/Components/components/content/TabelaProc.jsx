import React from "react";
import RollsProcessos from "./small-contents/RollsProcessos";

function TabelaProc(props) {
  const procs = props.processos;

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
          {procs.map((proc) => (
            <RollsProcessos
              numProc={proc.numProc}
              dataProc={proc.dataProc}
              dataEntProc={proc.dataEntProc}
              tipo={proc.tipo}
            />
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelaProc;