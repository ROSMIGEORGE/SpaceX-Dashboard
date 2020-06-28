import React from "react";
import { connect } from "react-redux";
import { fetchRockets } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../general/_CardHOC";
import Loader from "../Loader";

const Rockets = (props) => {
  if (!props.items.length) {
    props.fetchRockets();
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
      rocket_id,
      rocket_name,
      rocket_type,
      company,
      country,
      description,
      wikipedia,
      cost_per_launch,
      first_flight,
      stages,
    } = item;
    return (
      <div className="card" key={rocket_id}>
        <div className="sub-head">{rocket_name}</div>
        <div className="list-item">
          <span>COMPANY :</span>
          {company}
        </div>
        <div className="list-item">
          <span>COUNTRY :</span>
          {country}
        </div>
        <div className="list-item">
          <span>TYPE :</span>
          {rocket_type}
        </div>
        <div className="list-item">
          <span>COST :</span>
          {cost_per_launch}
        </div>
        <div className="list-item">
          <span>FIRST FLIGHT :</span>
          {first_flight}
        </div>
        <div className="list-item">
          <span>STAGES :</span>
          {stages}
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
    items: state.rockets,
  };
};
export default CardHOC(connect(mapStateToProps, { fetchRockets })(Rockets), {
  title: "ROCKETS",
});
