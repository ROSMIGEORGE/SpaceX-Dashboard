import React from "react";
import { ArrowDownward } from "@material-ui/icons";
import hashHistory from "../hashHistory";

const CardItem = ({ card }) => {
  return (
    <div className="card">
      <div className="head">{card.title}</div>
      <div>
        <button
          className="arrow-btn"
          onClick={() => hashHistory.push(card.path)}
        >
          <ArrowDownward />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
