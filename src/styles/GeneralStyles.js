import styled from "styled-components";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: auto repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  background-color: #f5f5fb;
  height: 100vh;

  @media (min-width: 500px) and (max-width: 1000px) {
    grid-template-rows: repeat(13, 1fr);
  }
`;

export const Content = styled.div`
  grid-column: 2/14;
  grid-row: 2/9;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1.5em 8.75em 3.1em 6em;

  @media (min-width: 2000px) {
    grid-column: 4/12;
  }

  @media (min-width: 501px) and (max-width: 1000px) {
    grid-row: 3/14;
    grid-column: 1/14;
    padding: 1em;
  }

  @media (max-width: 500px) {
    grid-column: 1/14;
    grid-row: 3/9;
    padding: 1em;
  }
`;
