import React from "react";
import { connect } from "react-redux";
import { fetchNextLaunches } from "../../actions";

//information card about company
const NextLaunch = (props) => {
  if (!props.next) {
    props.fetchNextLaunches();
    return null;
  }
  const {
    mission_name,
    flight_number,
    rocket,
    launch_year,
    launch_date_utc,
    launch_site,
  } = props.next;
  return (
    <div className="next-launch">
      <div className="title">UPCOMING LAUNCH</div>
      <div className="inner">
        <div className="sub-title">{mission_name}</div>
        <div className="item">
          <span>FLIGHT NUMBER: </span>
          {flight_number}
        </div>
        <div className="item">
          <span>ROCKET NAME: </span>
          {rocket.rocket_name}
        </div>
        <div className="item">
          <span>ROCKET TYPE: </span>
          {rocket.rocket_type}
        </div>
        <div className="item">
          <span>LAUNCH YEAR: </span>
          {launch_year}
        </div>
        <div className="item">
          <span>LAUNCH DATE:</span>
          {launch_date_utc}
        </div>
        <div className="item">
          <span>LAUNCH SITE:</span>
          {launch_site.site_name}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    next: state.nextLaunch,
  };
};
export default connect(mapStateToProps, { fetchNextLaunches })(NextLaunch);
