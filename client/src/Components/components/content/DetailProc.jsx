import React from "react";
import InputMask from "react-input-mask";

function DetailProc() {
  return (
    <div className="detail-proc-recentes">
      <div className="titulo">Detalhamento</div>
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
            />
          </div>
          <div className="input">
            <label>Data da Distribuição: </label>
            <input type="date" id="dataProc" name="dataProc" />
          </div>
          <div className="input">
            <label>Data da Devolução: </label>
            <input type="date" id="dataEntProc" name="dataEntProc" />
          </div>
          <div className="input">
            <label>Sistema de Origem: </label>
            <select id="sistOrigem" name="sistOrigem">
              <option value=""></option>
              <option value="SEI">SEI</option>
              <option value="e-Processo">e-Processo</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div className="input">
            <label>Órgão Interessado: </label>
            <input type="text" id="orgOrigem" name="orgOrigem" />
          </div>
          <div className="input">
            <label>Tipo: </label>
            <select id="tipo" name="tipo">
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
            <label>Manifestação: </label>
            <input type="text" id="manifest" name="manifest" />
          </div>
          <div className="input">
            <label>Numero SEI: </label>
            <input type="text" id="numSei" name="numSei" />
          </div>
          <div className="input">
            <label>Data da Manifestação: </label>
            <input type="date" id="dataManifest" name="dataManifest" />
          </div>
          <div className="input">
            <label>Observação: </label>
            <input type="text" id="obs" name="obs" style={{ width: 300 }} />
          </div>
        </form>
      </div>
      <br />
      <div className="tabela">
        <table>
          <thead>
            <tr>
              <th>Manifestação</th>
              <th>Num. SEI</th>
              <th>Data</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Parecer 325/2021</td>
              <td>5546654</td>
              <td>17/01/2022</td>
              <td>
                <i className="bx bxs-message-square-x"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <input className="button" type="button" value="Atualizar"></input>
        <input className="button" type="button" value="Deletar"></input>
      </div>
    </div>
  );
}

export default DetailProc;
