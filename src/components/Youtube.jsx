import React from "react";
import "./Youtube.css";

export const Youtube = ({ searchQuery }) => {
  const redirectToYoutube = () => {
    window.open(`//youtube.com/results?search_query=${searchQuery}`, "_blank");
  };

  return (
    <button className="Youtube" onClick={redirectToYoutube}>
      Youtube
    </button>
  );
};
