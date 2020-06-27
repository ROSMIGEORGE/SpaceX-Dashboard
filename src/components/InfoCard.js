import React from "react";
import { connect } from "react-redux";

const InfoCard = (props) => {
  const {
    name,
    founder,
    founded,
    headquarters,
    employees,
    launch_sites,
    test_sites,
    links,
    vehicles,
    valuation,
  } = props.info;
  return (
    <div className="info-card card">
      <div className="title">ABOUT US</div>
      <div className="general-info">
        <div className="item">
          <span>Company: </span>
          {name}
        </div>
        <div className="item">
          <span>Founder: </span>
          {founder}
        </div>
        <div className="item">
          <span>Year: </span>
          {founded}
        </div>
        <div className="item">
          <span>HeadQuarters: </span>
          {`${headquarters.city} ${headquarters.state}`}
        </div>
        <div className="item">
          <span>Employees: </span>
          {employees}
        </div>
      </div>
      <div className="company-info">
        <div className="item">
          <span>Launch sites: </span>
          {launch_sites}
        </div>
        <div className="item">
          <span>Test sites: </span>
          {test_sites}
        </div>
        <div className="item">
          <span>Vechicles: </span>
          {vehicles}
        </div>
        <div className="item">
          <span>valuation: </span>
          {valuation}
        </div>
        <div className="item">
          <span>Website: </span>
          {links.website}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    info: state.info,
  };
};
export default connect(mapStateToProps)(InfoCard);
