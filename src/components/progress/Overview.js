import React from "react";

//Components
import Donut from "./Donut";

//Styles
import {
  Circle,
  ContOverview,
  ContValues,
  Names,
  Numbers,
  TitleOverview,
} from "../../styles/progressStyles.js/ProgressStyles";

export const Overview = () => {
  return (
    <ContOverview>
      <TitleOverview>Progress overview</TitleOverview>

      <Donut />

      <ContValues>
        <div
          style={{
            padding: window.innerWidth < 500 ? "0 1em 0 1em" : "0 2em 0 0",
            borderRight: "1px solid #C6C6CD",
          }}
        >
          <div style={{ display: "flex" }}>
            <Circle style={{ backgroundColor: "#FED200" }} />
            <Names>Completed</Names>
          </div>
          <div style={{ display: "flex" }}>
            <Numbers>
              20 <span style={{ fontSize: "24px" }}>hours</span>
            </Numbers>
          </div>
        </div>

        <div
          style={{
            padding: window.innerWidth < 500 ? "0 0 0 1em" : "0 0 0 2em",
          }}
        >
          <div style={{ display: "flex" }}>
            <Circle style={{ backgroundColor: "#FF794F" }} />
            <Names>Left to go</Names>
          </div>
          <div style={{ display: "flex" }}>
            <Numbers>
              30 <span style={{ fontSize: "24px" }}>hours</span>
            </Numbers>
          </div>
        </div>
      </ContValues>
    </ContOverview>
  );
};
