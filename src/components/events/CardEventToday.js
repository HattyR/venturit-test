import React from "react";
import styled from "styled-components";

//Images
import imageOne from "../../resources/eventsResources/images/imageCardOne.png";

const ContCard = styled.div`
  background-color: #ffffff;
  border-radius: 11px;
  padding: 1.5em 1em;
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin && props.margin};
  box-shadow: 0 22px 34px 0 rgba(27, 20, 119, 0.02);

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: left;
    max-height: 9em;
  }
`;

const ContTexts = styled.div`
  margin-left: 1.2em;

  @media (max-width: 500px) {
    margin: 0.5em 0 0 0;
  }
`;

const HourText = styled.p`
  font-size: 14px;
  color: #9d9bb6;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
`;

const TitleText = styled.p`
  font-size: 16px;
  color: #192452;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
`;

export const CardEventToday = ({ image, time, title, margin }) => {
  return (
    <ContCard margin={margin}>
      <div>
        <img src={imageOne} />
      </div>

      <ContTexts>
        <HourText>{time}</HourText>
        <TitleText>{title}</TitleText>
      </ContTexts>
    </ContCard>
  );
};
