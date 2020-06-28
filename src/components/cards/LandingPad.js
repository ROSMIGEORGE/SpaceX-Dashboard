import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchLandingPads } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../CardHOC";

const LandingPad = (props) => {
  useEffect(() => {
    if (!props.items.length) {
      props.fetchLandingPads();
    }
  }, []);

  return (
    <React.Fragment>
      {props.items.length ? renderComponents(props.items) : null}
    </React.Fragment>
  );
};

const renderComponents = (items) => {
  console.log(items);
  const elements = items.map((item) => {
    const {
      full_name,
      landing_type,
      location,
      status,
      details,
      wikipedia,
    } = item;
    return (
      <div className="card" key={full_name}>
        <div className="sub-head">{full_name}</div>
        <div className="list-item">
          <span>LOCATION :</span>
          {location.name}
        </div>
        <div className="list-item">
          <span>LANDING TYPE:</span>
          {landing_type}
        </div>
        <div className="list-item">
          <span>STATUS:</span>
          {status}
        </div>
        <div>{details}</div>
        <div className="more">
          <a href={wikipedia}>More Details</a>
        </div>
      </div>
    );
  });
  return elements;
};
const mapStateToProps = (state) => {
  return {
    items: state.landingpad,
  };
};
export default CardHOC(
  connect(mapStateToProps, { fetchLandingPads })(LandingPad),
  {
    title: "LANDING PADS",
  }
);
