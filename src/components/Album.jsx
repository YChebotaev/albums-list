import React from "react";
import { Youtube } from "./Youtube";
import "./Album.css";

export const Album = ({ title, artist, cover }) => {
  return (
    <div className="Album">
      <div className="Album__cover">
        <img className="Album__image" src={cover} />
      </div>
      <div className="Album__info">
        <div className="Album__artist">{artist}</div>
        <div className="Album__title">{title}</div>
        <Youtube searchQuery={`${artist} ${title}`} />
      </div>
    </div>
  );
};
