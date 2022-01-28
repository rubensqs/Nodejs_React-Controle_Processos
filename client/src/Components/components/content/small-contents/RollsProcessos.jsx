import React from "react";

function RollsProcessos(props) {
  /* puxar todos os dados, para poder passar
para os Detalhes*/

  return (
    <tr className="linhas">
      <td>{props.numProc}</td>
      <td>{props.dataProc}</td>
      <td>{props.dataEntProc}</td>
      <td>{props.tipo}</td>
      <td></td>
    </tr>
  );
}

export default RollsProcessos;