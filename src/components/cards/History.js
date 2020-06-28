import React, { useState, useEffect } from "react";
import { Close } from "@material-ui/icons";
import { connect } from "react-redux";
import { fetchHistory } from "../../actions";
import hashHistory from "../../hashHistory";
import "../../scss/cardPages.scss";
import CardHOC from "../CardHOC";

const HistoryPage = (props) => {
  const [classList, setClassList] = useState("modal");

  useEffect(() => {
    if (!props.items.length) {
      props.fetchHistory();
    }
  }, []);
  const closeModal = () => {
    setClassList("modal hide");
    setTimeout(() => {
      hashHistory.push("/");
    }, 1000);
  };
  return (
    <React.Fragment>
      {props.items.length ? renderComponents(props.items) : null}
    </React.Fragment>
  );
};

const renderComponents = (items) => {
  const elements = items.map((item) => {
    const { title, details, flight_number, links } = item;
    return (
      <div className="card">
        <div className="sub-head">{title}</div>
        <div className="list-item">
          <span>FLIGHT NUMBER:</span>
          {flight_number}
        </div>
        <div>{details}</div>
        <div className="more">
          <a href={links.wikipedia}>More Details</a>
        </div>
      </div>
    );
  });
  return elements;
};
const mapStateToProps = (state) => {
  return {
    items: state.history,
  };
};
export default CardHOC(
  connect(mapStateToProps, { fetchHistory })(HistoryPage),
  { title: "HISTORY" }
);
