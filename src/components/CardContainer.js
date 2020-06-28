import React from "react";
import _ from "lodash";
import "../scss/cards.scss";
import CardItem from "./CardItem";

const CardContainer = (props) => {
  const cards = _.map(props.cards);
  return (
    <div className="card-container">
      {cards.map((card) => (
        <CardItem card={card} />
      ))}
    </div>
  );
};

export default CardContainer;
