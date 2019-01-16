import React from "react";
import Spinkit from "react-spinkit";

import "./FullscreenSpinner.css";

export const FullscreenSpinner = () => {
  return (
    <div className="FullscreenSpinner">
      <Spinkit name="cube-grid" />
    </div>
  );
};
