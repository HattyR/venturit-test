import React from "react";
import styled from "styled-components";

const ContButton = styled.div`
  background-color: #3d84ff;
  border-radius: 17px;
  padding: 1.2em;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  height: max-content;
  font-family: "Nunito", sans-serif;
  font-weight: 500;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Secondary = ({ name }) => {
  return <ContButton>{name}</ContButton>;
};
