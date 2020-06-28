import React from "react";
import { connect } from "react-redux";
import { fetchDragons } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../general/_CardHOC";
import Loader from "../general/_Loader";

const Dragons = (props) => {
  if (!props.items.length) {
    props.fetchDragons();
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
      name,
      id,
      crew_capacity,
      type,
      description,
      dry_mass_kg,
      wikipedia,
      orbit_duration_yr,
    } = item;
    return (
      <div className="card" key={id}>
        <div className="sub-head">{name}</div>
        <div className="list-item">
          <span>CREW CAPACITY :</span>
          {crew_capacity}
        </div>
        <div className="list-item">
          <span>DRY MASS [KG] :</span>
          {dry_mass_kg}
        </div>
        <div className="list-item">
          <span>TYPE :</span>
          {type}
        </div>
        <div className="list-item">
          <span>ORBIT DURATION [YEAR] :</span>
          {orbit_duration_yr}
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
    items: state.dragons,
  };
};
export default CardHOC(connect(mapStateToProps, { fetchDragons })(Dragons), {
  title: "DRAGONS",
});
