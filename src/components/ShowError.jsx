import React from "react";

export const ShowError = ({ error, componentStack }) => {
  return (
    <div className="ShowError">
      <div className="ShowError__error">{error.toString()}</div>
      <hr />
      <div className="ShowError__stack">{error.stack}</div>
      <hr />
      <div className="ShowError__stack">{componentStack}</div>
    </div>
  );
};
