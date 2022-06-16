import styled from "styled-components";

//Images
import flag from "../../resources/dashboardResources/images/flag.png";
import background from "../../resources/dashboardResources/images/background.png";
import boy from "../../resources/dashboardResources/images/boy.png";

export const ContTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContLanguage = styled.div`
  background-color: #ffffff;
  box-shadow: 0 22px 34px 0 rgba(27, 20, 119, 0.11);

  font-size: 12px;
  color: #9d9bb6;
  padding: 1.25em 1.7em 1em 1.7em;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContWelcome = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  height: 9em;
  border-radius: 13px;
  margin-top: 2em;

  @media (max-width: 500px) {
    height: 18em;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const ContSentences = styled.div`
  margin-left: 15em;

  @media (max-width: 500px) {
    max-width: 20em;
    margin: 0 0 1em 0;
  }
`;

export const EnglishWord = styled.p`
  font-size: 24px;
  color: #192452;
  margin: 0 0 0 0.4em;
`;

export const Flag = styled.div`
  content: url(${flag});
`;

export const ImageBoy = styled.div`
  content: url(${boy});
  position: absolute;
  bottom: 0em;

  @media (max-width: 500px) {
    bottom: 9em;
  }
`;

export const SentenceOne = styled.p`
  font-size: 30px;
  color: #f5f5fb;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const SentenceTwo = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin: 0.5em 0 0;
  font-family: "Nunito", sans-serif;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const Title = styled.p`
  color: #103460;
  font-size: 30px;
  margin: 1em 0;
  white-space: nowrap;
  font-family: "Nunito", sans-serif;
  font-weight: 500;

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;
