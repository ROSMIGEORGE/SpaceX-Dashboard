import React from "react";
import { connect } from "react-redux";
import { fetchShips } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../CardHOC";

const Ships = (props) => {
  if (!props.items.length) {
    props.fetchShips();
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
      ship_id,
      ship_name,
      ship_type,
      home_port,
      missions,
      roles,
      url,
    } = item;
    return (
      <div className="card" key={ship_id}>
        <div className="sub-head">{ship_name}</div>
        <div className="list-item">
          <span>TYPE :</span>
          {ship_type}
        </div>
        <div className="list-item">
          <span>HOME PART :</span>
          {home_port}
        </div>
        <div className="list-item">
          <span>ROLES :</span>
          {roles.join(" , ")}
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
        <div className="more">
          <a href={url}>More Details</a>
        </div>
      </div>
    );
  });
  return elements;
};
const mapStateToProps = (state) => {
  return {
    items: state.ships,
  };
};
export default CardHOC(connect(mapStateToProps, { fetchShips })(Ships), {
  title: "SHIPS",
});
