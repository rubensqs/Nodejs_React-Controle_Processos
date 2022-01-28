import React from "react";

function Sidebar(props) {

  function isContent(event) {
    console.log(event.target.parentElement.name)
    const contente = event.target.parentElement.name;
    props.iscontent(contente);
  }

  return (
    <div className={props.large}>
      <div className="logo">
        <i className="bx bxs-collection"></i>
        <span className="logo-name">Processos</span>
      </div>
      <ul className="nav-links">
        <li>
          <button name="Mesa">
            <i onClick={isContent} className="bx bxs-layer" />
            <span onClick={isContent} className="link-name">
              Mesa
            </span>
          </button>
        </li>
        <li>
          <button onClick={isContent} name="Relatorios">
            <i onClick={isContent} className="bx bxs-bar-chart-alt-2"></i>
            <span onClick={isContent} className="link-name">
              Relatórios
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;