import React from "react";
import { connect } from "react-redux";
import { fetchLaunches } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../general/_CardHOC";
import Loader from "../general/_Loader";

const Launches = (props) => {
  if (!props.items.length) {
    props.fetchLaunches();
  }

  return (
    <React.Fragment>
      {props.items.length ? renderComponents(props.items) : <Loader />}
    </React.Fragment>
  );
};

const renderComponents = (items) => {
  const elements = items.map((item) => {
    const {
      mission_name,
      flight_number,
      launch_year,
      launch_site,
      details,
      links,
    } = item;
    return (
      <div className="card" key={mission_name}>
        <div className="sub-head">{mission_name}</div>
        <div className="list-item">
          <span>FLIGHT NUMBER :</span>
          {flight_number}
        </div>
        <div className="list-item">
          <span>LAUNCH YEAR:</span>
          {launch_year}
        </div>
        <div className="list-item">
          <span>LAUNCH SITE:</span>
          {launch_site.site_name}
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
    items: state.launches,
  };
};
export default CardHOC(connect(mapStateToProps, { fetchLaunches })(Launches), {
  title: "LAUNCHES",
});
