import styled from "styled-components";

export const ContSidebar = styled.div`
  grid-row: 2/9;
  background-color: #3d84ff;

  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContIcon = styled.div`
  padding: 1.1em 1.5em;
  cursor: pointer;
  transition: background 0.25s 0s ease-in-out;

  :hover {
    background-color: #005dff;
  }
`;

export const Icon = styled.img`
  width: 100%;
  opacity: 0.5;
  transition: opacity 0.25s 0s ease-in-out;

  ${ContIcon}:hover & {
    opacity: 1;
  }
`;
