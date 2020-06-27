import React from "react";
import _ from "lodash";
import { Router, Route, Link, Switch } from "react-router-dom";
import { ArrowDownward } from "@material-ui/icons";
import hashHistory from "../hashHistory";
import HistoryPage from "./cards/History";
import "../scss/cards.scss";

const CardContainer = (props) => {
  const cards = _.map(props.cards);
  return (
    <div className="card-container">
      {cards.map((card) => (
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
      ))}
      <Router history={hashHistory} base>
        <Switch>
          <Route path="/history" exact component={HistoryPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default CardContainer;
