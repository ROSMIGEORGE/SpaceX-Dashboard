import React from "react";
import { connect } from "react-redux";
import { fetchLaunchpads } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../CardHOC";

const LaunchPad = (props) => {
  if (!props.items.length) {
    props.fetchLaunchpads();
  }

  return (
    <React.Fragment>
      {props.items.length ? renderComponents(props.items) : null}
    </React.Fragment>
  );
};

const renderComponents = (items) => {
  const elements = items.map((item) => {
    const {
      name,
      vehicles_launched,
      site_name_long,
      status,
      details,
      wikipedia,
    } = item;
    return (
      <div className="card" key={name}>
        <div className="sub-head">{name}</div>
        <div className="list-item">
          <span>SITE NAME :</span>
          {site_name_long}
        </div>
        <div className="list-item">
          <span>VEHICLES LAUNCHED:</span>
          {vehicles_launched.join(" , ")}
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
    items: state.launchpad,
  };
};
export default CardHOC(
  connect(mapStateToProps, { fetchLaunchpads })(LaunchPad),
  {
    title: "LAUNCH PADS",
  }
);
