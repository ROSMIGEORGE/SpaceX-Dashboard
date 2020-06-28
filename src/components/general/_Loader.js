import React from "react";
import "../../scss/loader.scss";
import { LinearProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <div className="loader">
      <div className="center">
        <div className="text">LOADING</div>
        <div className="ring"></div>
      </div>
    </div>
  );
};

export default Loader;
