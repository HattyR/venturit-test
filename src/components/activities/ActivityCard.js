import React from "react";
import styled from "styled-components";

//Images
import arrow from "../../resources/activityResources/images/arrow.png";

const Arrow = styled.img`
  transform: ${(props) => props.collapse && "rotate(180deg)"};
  transition: transform 0.25s 0s ease;
  @media (max-width: 500px) {
    display: none;
  }
`;

const ContCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 22px 34px 0 rgba(27, 20, 119, 0.02);
  display: flex;
  flex-direction: column;
  padding: 0.9em 1.25em;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.9em;

  :hover {
    box-shadow: 0 10px 34px 0 rgba(0, 0, 0, 0.1);
  }
`;

const ContText = styled.div`
  transition: all 0.25s 0s ease;
  color: #103460;
  font-size: 14px;
  padding: 1em 4em;
  display: ${(props) => (props.collapse ? "inline" : "none")};
  font-family: "Nunito", sans-serif;

  @media (max-width: 500px) {
    padding: 1em;
  }
`;

export const ActivityCard = ({ children, image, text, collapse, onClick }) => {
  return (
    <ContCard onClick={onClick}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={image} style={{ marginRight: "1em" }} />
          {children}
        </div>

        <div>
          <Arrow collapse={collapse} src={arrow} />
        </div>
      </div>

      {text && <ContText collapse={collapse}>{text}</ContText>}
    </ContCard>
  );
};
