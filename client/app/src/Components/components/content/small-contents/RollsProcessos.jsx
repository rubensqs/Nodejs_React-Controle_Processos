import React, { useState } from "react";

function RollsProcessos(props) {
  /* puxar todos os dados, para poder passar
para os Detalhes*/
  function addZero(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    };
  }

  const [id, setId] = useState();

  function submitProc(){
    const d = props.id;
    setId(d);
    props.idp(d);
  }

  const dt = new Date(props.dataProc);
  const data = addZero(dt.getDate()) + "/" + addZero((dt.getMonth() + 1)) + "/" + dt.getFullYear();
  const dtPrazo = new Date(props.dataProc);
  dtPrazo.setDate(dt.getDate() + 15);
  const dataPrazo = addZero(dtPrazo.getDate()) + "/" + addZero((dtPrazo.getMonth() + 1)) + "/" + dtPrazo.getFullYear();

  return (
    <tr className={props.dataEntProc === null ? "linhas" : "linhas deactive"} onClick={submitProc}>
      <td>{props.numProc}</td>
      <td>{data}</td>
      <td>{props.dataEntProc}</td>
      <td>{props.tipo}</td>
      <td>{dataPrazo}</td>
    </tr>
  );
}

export default RollsProcessos;