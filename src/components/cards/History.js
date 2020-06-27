import React, { useState } from "react";
import { Close } from "@material-ui/icons";
import hashHistory from "../../hashHistory";
import "../../scss/cardPages.scss";

const HistoryPage = (props) => {
  const [classList, setClassList] = useState("modal");
  const closeModal = () => {
    setClassList("modal hide");
    setTimeout(() => {
      hashHistory.push("/");
    }, 1000);
  };
  return (
    <div className={classList}>
      <div className="close-btn" onClick={closeModal}>
        <Close />
      </div>
    </div>
  );
};

export default HistoryPage;
