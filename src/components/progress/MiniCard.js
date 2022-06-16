import React from "react";
import styled from "styled-components";

const ContMiniCard = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  transition: background 0.3s 0s ease-in-out;

  :hover {
    transition: background 0.3s 0s ease-in-out;
    background-color: #1884ff;
    box-shadow: 0 15px 30px 0 rgba(24, 132, 255, 0.54);
  }

  @media (max-width: 1000px) {
    width: 95px;
  }
`;

const Amount = styled.p`
  color: #103460;
  font-size: 30px;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 700;

  ${ContMiniCard}:hover & {
    color: #ffffff;
  }
`;

const Title = styled.p`
  color: #9c9ab5;
  font-size: 15px;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 700;

  ${ContMiniCard}:hover & {
    color: #ffffff;
  }
`;

export const MiniCard = ({ title, amount }) => {
  return (
    <ContMiniCard>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </ContMiniCard>
  );
};
