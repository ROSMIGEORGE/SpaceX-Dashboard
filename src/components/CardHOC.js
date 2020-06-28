import React, { useState, useEffect } from "react";
import { Close } from "@material-ui/icons";
import hashHistory from "../hashHistory";
import "../scss/cardPages.scss";

const CardHOC = (CardsSection, compProps) => {
  const Section = (props) => {
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
