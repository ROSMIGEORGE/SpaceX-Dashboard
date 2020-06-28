import React, { useState } from "react";
import { Close } from "@material-ui/icons";
import hashHistory from "../../_helpers/hashHistory";
import "../../scss/cardPages.scss";

//Higher Order Component that wraps card pages
const CardHOC = (CardsSection, compProps) => {
  const Section = () => {
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
        <div className="main-head">{compProps.title}</div>
        <div className="cards-wrapper">
          <CardsSection />
        </div>
      </div>
    );
  };
  return Section;
};

export default CardHOC;
