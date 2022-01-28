import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainInfo from "./components/MainInfo";

function Main(){
    const [isExpanded, setExpanded] = useState(true);
    const [cont, setContent] = useState("Mesa");
  
    function expand() {
      if (isExpanded) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    }

    const classeSidebar = (isExpanded ? "sidebar" : "sidebar active");
    
  
    function onContent(content) {
      setContent(content);
    }
  
    return (
      <div>
        <Sidebar large={classeSidebar} iscontent={onContent} />
        <MainInfo onExpand={expand} conteudo={cont} />
      </div>
    );
}

export default Main