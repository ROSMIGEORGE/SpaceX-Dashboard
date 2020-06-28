import React from "react";
import { connect } from "react-redux";
import { fetchMissions } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../general/_CardHOC";
import Loader from "../Loader";

const Missions = (props) => {
  if (!props.items.length) {
    props.fetchMissions();
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
      mission_id,
      payload_ids,
      description,
      wikipedia,
    } = item;
    return (
      <div className="card" key={mission_id}>
        <div className="sub-head">{mission_name}</div>
        <div className="list-item">
          <span>MISSION ID:</span>
          {mission_id}
        </div>
        <div className="list-item">
          <span>PAYLOAD IDS:</span>
          {payload_ids.join(" , ")}
        </div>
        <div>{description}</div>
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
    items: state.missions,
  };
};
export default CardHOC(connect(mapStateToProps, { fetchMissions })(Missions), {
  title: "MISSION",
});
