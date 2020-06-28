import React from "react";
import { connect } from "react-redux";
import { fetchPayloads } from "../../actions";
import "../../scss/cardPages.scss";
import CardHOC from "../CardHOC";
import Loader from "../Loader";

const Payloads = (props) => {
  if (!props.items.length) {
    props.fetchPayloads();
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
      payload_id,
      payload_mass_kg,
      payload_type,
      nationality,
      manufacturer,
      orbit,
      customers,
    } = item;
    return (
      <div className="card" key={payload_id}>
        <div className="sub-head">{payload_id}</div>
        <div className="list-item">
          <span>PAYLOAD TYPE :</span>
          {payload_type}
        </div>
        <div className="list-item">
          <span>PAYLOAD MASS [KG] :</span>
          {payload_mass_kg}
        </div>
        <div className="list-item">
          <span>NATIONALITY :</span>
          {nationality}
        </div>
        <div className="list-item">
          <span>MANUFACTURER :</span>
          {manufacturer}
        </div>
        <div className="list-item">
          <span>ORBIT :</span>
          {orbit}
        </div>
        <div className="list-item">
          <span>CUSTOMERS :</span>
          {customers.join(" , ")}
        </div>
      </div>
    );
  });
  return elements;
};
const mapStateToProps = (state) => {
  return {
    items: state.payloads,
  };
};
export default CardHOC(connect(mapStateToProps, { fetchPayloads })(Payloads), {
  title: "PAYLOADS",
});
