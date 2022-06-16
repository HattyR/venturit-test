import styled from "styled-components";

//Images
import background from "../../resources/progressResources/images/bubles.png";

export const ContOverview = styled.div`
  background-color: #1a2d7d;
  border-radius: 7px;
  padding: 1.4em 2.25em 5em 2.25em;
  width: max-content;
  height: max-content;

  @media (max-width: 500px) {
    padding: 0.5em;
    width: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2em;
`;

export const ContNotification = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: inherit;
  border-radius: 5px;
  padding: 1.25em 3em;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  margin-top: 3.75em;
  font-family: "Nunito", sans-serif;
  font-weight: 700;

  @media (max-width: 1100px) {
    padding: 1.5em 1em;
  }
`;

export const Circle = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 1em;
`;

export const ContValues = styled.div`
  background-color: rgba(198, 198, 205, 0.13);
  border-radius: 19px;
  padding: 1.5em;
  display: flex;
  width: max-content;
`;

export const ContResponsive = styled.div`
  display: flex;
  margin-top: 2.3em;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ContProgress = styled.div`
  margin-left: 4.5em;

  @media (min-width: 501px) and (max-width: 1000px) {
    margin-left: 1.5em;
  }

  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const Numbers = styled.p`
  color: #ffffff;
  font-size: 45px;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const Names = styled.p`
  color: #ffffff;
  font-size: 14px;
  margin: 0 0 0 7px;
  font-family: "Nunito", sans-serif;
  font-weight: 500;
`;

export const TitleOverview = styled.p`
  color: #ffffff;
  font-size: 30px;
  margin: 0;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-weight: 500;
`;
