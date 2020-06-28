import React from "react";
import { connect } from "react-redux";
import { fetchCapsules } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../general/_CardHOC";
import Loader from "../Loader";

const Capsules = (props) => {
  if (!props.items.length) {
    props.fetchCapsules();
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
      capsule_id,
      capsule_serial,
      status,
      type,
      details,
      landings,
      missions,
    } = item;
    return (
      <div className="card" key={capsule_serial}>
        <div className="sub-head">{capsule_id}</div>
        <div className="list-item">
          <span>CAPSULE SERIAL :</span>
          {capsule_serial}
        </div>
        <div className="list-item">
          <span>STATUS :</span>
          {status}
        </div>
        <div className="list-item">
          <span>TYPE :</span>
          {type}
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
        <div className="list-item">
          <span>LANDINGS :</span>
          {landings}
        </div>
        <div>{details}</div>
      </div>
    );
  });
  return elements;
};
const mapStateToProps = (state) => {
  return {
    items: state.capsules,
  };
};
export default CardHOC(connect(mapStateToProps, { fetchCapsules })(Capsules), {
  title: "CAPSULES",
});
