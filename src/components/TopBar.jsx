import React from "react";
import { Container } from "./Container";
import { TopLogo } from "./TopLogo";
import "./TopBar.css";

export const TopBar = () => {
  return (
    <div className="TopBar">
      <Container>
        <div className="TopBar__inner">
          <TopLogo year={2019} />
        </div>
      </Container>
    </div>
  );
};
