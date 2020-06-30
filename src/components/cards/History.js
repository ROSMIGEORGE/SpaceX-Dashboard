import React from "react";
import { connect } from "react-redux";
import { fetchHistory } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../general/_CardHOC";
import Loader from "../general/_Loader";

const HistoryPage = (props) => {
  if (!props.items.length) {
    props.fetchHistory();
  }

  return (
    <React.Fragment>
      {props.items.length ? renderComponents(props.items) : <Loader />}
    </React.Fragment>
  );
};

const renderComponents = (items) => {
  const elements = items.map((item) => {
    const { title, details, flight_number, links } = item;
    return (
      <div className="card" key={title}>
        <div className="sub-head">{title}</div>
        <div className="list-item">
          <span>FLIGHT NUMBER:</span>
          {flight_number}
        </div>
        <div>{details}</div>
        <div className="more">
          <a target="_blank" href={links.wikipedia}>
            More Details
          </a>
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
