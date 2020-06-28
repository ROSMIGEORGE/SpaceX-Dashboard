import React from "react";
import { connect } from "react-redux";
import { fetchCores } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../CardHOC";
import Loader from "../Loader";

const Cores = (props) => {
  if (!props.items.length) {
    props.fetchCores();
  }

  return (
    <React.Fragment>
      {props.items.length ? renderComponents(props.items) : <Loader />}
    </React.Fragment>
  );
};

const renderComponents = (items) => {
  const elements = items.map((item) => {
    const { core_serial, status, details, asds_landings, missions } = item;
    return (
      <div className="card" key={core_serial}>
        <div className="sub-head">{core_serial}</div>
        <div className="list-item">
          <span>STATUS :</span>
          {status}
        </div>
        <div className="list-item">
          <span>ASDS LANDINGS :</span>
          {asds_landings}
        </div>
        <div className="list-item">
          <div className="mission-title">MISSIONS :</div>
          <div className="mission-wrapper">
            {missions.map((mission) => (
              <div className="mission" key={mission.name}>
                <div>
                  <span>NAME:</span>
                  {mission.name}
                </div>
                <div>
                  <span>FLIGHT:</span>
                  {mission.flight}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>{details}</div>
      </div>
    );
  });
  return elements;
};
const mapStateToProps = (state) => {
  return {
    items: state.cores,
  };
};
export default CardHOC(connect(mapStateToProps, { fetchCores })(Cores), {
  title: "CORES",
});
