import React from "react";
import { connect } from "react-redux";
import { fetchRoadster } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../general/_CardHOC";
import Loader from "../general/_Loader";

const Roadster = (props) => {
  if (!props.items) {
    props.fetchRoadster();
  }

  return (
    <React.Fragment>
      {props.items ? renderComponents(props.items) : <Loader />}
    </React.Fragment>
  );
};

const renderComponents = (item) => {
  const {
    name,
    details,
    launch_mass_kg,
    orbit_type,
    speed_kph,
    launch_date_utc,
    wikipedia,
    earth_distance_km,
  } = item;
  return (
    <div className="card">
      <div className="sub-head">{name}</div>
      <div className="list-item">
        <span>ORBIT TYPE :</span>
        {orbit_type}
      </div>
      <div className="list-item">
        <span>SPEED[KPH] :</span>
        {speed_kph}
      </div>
      <div className="list-item">
        <span>LAUNCH DATE :</span>
        {launch_date_utc}
      </div>
      <div className="list-item">
        <span>LAUNCH MASS :</span>
        {launch_mass_kg}
      </div>
      <div className="list-item">
        <span>EARTH DISTANCE[KM] :</span>
        {earth_distance_km}
      </div>
      <div>{details}</div>
      <div className="more">
        <a href={wikipedia}>More Details</a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.roadsters,
  };
};
export default CardHOC(connect(mapStateToProps, { fetchRoadster })(Roadster), {
  title: "ROADSTERS",
});
