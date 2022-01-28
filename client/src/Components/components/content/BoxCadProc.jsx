import React, { useState } from "react";
import InputMask from "react-input-mask";

function BoxCadProc(props) {
  const [proc, setProc] = useState({
    numProc: "",
    dataProc: "",
    dataEntProc: "",
    sistOrigem: "",
    orgOrigem: "",
    tipo: "",
    obs: ""
  });

  function capChange(event) {
    const { name, value } = event.target;
    setProc((prev) => {
      if (name === "numProc") {
        return {
          numProc: value,
          dataProc: prev.dataProc,
          dataEntProc: prev.dataEntProc,
          sistOrigem: prev.sistOrigem,
          orgOrigem: prev.orgOrigem,
          tipo: prev.tipo,
          obs: prev.obs
        };
      } else if (name === "dataProc") {
        return {
          numProc: prev.numProc,
          dataProc: value,
          dataEntProc: prev.dataEntProc,
          sistOrigem: prev.sistOrigem,
          orgOrigem: prev.orgOrigem,
          tipo: prev.tipo,
          obs: prev.obs
        };
      } else if (name === "sistOrigem") {
        return {
          numProc: prev.numProc,
          dataProc: prev.dataProc,
          dataEntProc: prev.dataEntProc,
          sistOrigem: value,
          orgOrigem: prev.orgOrigem,
          tipo: prev.tipo,
          obs: prev.obs
        };
      } else if (name === "orgOrigem") {
        return {
          numProc: prev.numProc,
          dataProc: prev.dataProc,
          dataEntProc: prev.dataEntProc,
          sistOrigem: prev.sistOrigem,
          orgOrigem: value,
          tipo: prev.tipo,
          obs: prev.obs
        };
      } else if (name === "tipo") {
        return {
          numProc: prev.numProc,
          dataProc: prev.dataProc,
          dataEntProc: prev.dataEntProc,
          sistOrigem: prev.sistOrigem,
          orgOrigem: prev.orgOrigem,
          tipo: value,
          obs: prev.obs
        };
      } else if (name === "obs") {
        return {
          numProc: prev.numProc,
          dataProc: prev.dataProc,
          dataEntProc: prev.dataEntProc,
          sistOrigem: prev.sistOrigem,
          orgOrigem: prev.orgOrigem,
          tipo: prev.tipo,
          obs: value
        };
      }
    });
  }

  function submitProc(event) {
    props.onAdd(proc);
    setProc({
      numProc: "",
      dataProc: "",
      dataEntProc: "",
      sistOrigem: "",
      orgOrigem: "",
      tipo: "",
      obs: ""
    });
    event.preventDefault();
  }

  return (
    <div className="left-side">
      <div className="box-topic">Registrar Processo</div>
      <div className="processos-input">
        <form>
          <div className="input">
            <label>Número do Processo: </label>
            <InputMask
              mask="99999.999999/9999-99"
              type="text"
              id="numProc"
              name="numProc"
              required={true}
              value={proc.numProc}
              onChange={capChange}
            />
          </div>
          <div className="input">
            <label>Data da Distribuição: </label>
            <input
              type="date"
              id="dataProc"
              name="dataProc"
              value={proc.dataProc}
              onChange={capChange}
            />
          </div>
          <div className="input">
            <label>Sistema de Origem: </label>
            <select
              id="sistOrigem"
              name="sistOrigem"
              value={proc.sistOrigem}
              onChange={capChange}
            >
              <option value=""></option>
              <option value="SEI">SEI</option>
              <option value="e-Processo">e-Processo</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div className="input">
            <label>Órgão Interessado: </label>
            <input
              type="text"
              id="orgOrigem"
              name="orgOrigem"
              value={proc.orgOrigem}
              onChange={capChange}
            />
          </div>
          <div className="input">
            <label>Tipo: </label>
            <select
              id="tipo"
              name="tipo"
              value={proc.tipo}
              onChange={capChange}
            >
              <option value=""></option>
              <option value="Nova Contratacao">Nova Contratação</option>
              <option value="Termo Aditivo">Termo Aditivo</option>
              <option value="Consulta">Consulta</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Outros">Outros</option>
              <option value="Assessoramento">Assessoramento</option>
            </select>
          </div>
          <div className="input">
            <label>Observação: </label>
            <input
              type="text"
              id="obs"
              name="obs"
              value={proc.obs}
              onChange={capChange}
              style={{ width: 300 }}
            />
          </div>
          <div className="button">
            <i onClick={submitProc} className="bx bxs-folder-plus icone"></i>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoxCadProc;