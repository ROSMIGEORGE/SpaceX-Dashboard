import React from "react";
import _ from "lodash";
import "../../scss/cards.scss";
import CardItem from "./_CardItem";

//container component to hold cards
const CardContainer = (props) => {
  const cards = _.map(props.cards);
  return (
    <div className="card-container">
      {cards.map((card) => (
        <CardItem card={card} key={card.title} />
      ))}
    </div>
  );
};

export default CardContainer;
