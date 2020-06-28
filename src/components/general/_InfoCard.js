import React from "react";
import { connect } from "react-redux";

//information card about company
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
          <span>Company</span>
          <span>:</span>
          {name}
        </div>
        <div className="item">
          <span>Founder</span>
          <span>:</span>
          {founder}
        </div>
        <div className="item">
          <span>Year</span>
          <span>:</span>
          {founded}
        </div>
        <div className="item">
          <span>HeadQuarters</span>
          <span>:</span>
          {`${headquarters.city} ${headquarters.state}`}
        </div>
        <div className="item">
          <span>Employees</span>
          <span>:</span>
          {employees}
        </div>
      </div>
      <div className="company-info">
        <div className="item">
          <span>Launch sites</span>
          <span>:</span>
          {launch_sites}
        </div>
        <div className="item">
          <span>Test sites</span>
          <span>:</span>
          {test_sites}
        </div>
        <div className="item">
          <span>Vechicles</span>
          <span>:</span>
          {vehicles}
        </div>
        <div className="item">
          <span>valuation</span>
          <span>:</span>
          {valuation}
        </div>
        <div className="item">
          <span>Website</span>
          <span>:</span>
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
