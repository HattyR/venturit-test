import styled from "styled-components";

export const ArrowsAndText = styled.div`
  position: relative;
  top: 4em;
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    top: 1em;
  }
`;

export const ContCarrousel = styled.div`
  background-image: ${(props) => `url(${props.background})`};
  transition: background 0.25s ease-in-out;
  height: 15em;
  border-radius: 13px;
  padding: 1.3em 1.6em;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const ContArrows = styled.div`
  background-color: #ffffff;
  padding: 0.5em 1em;
  border-radius: 5px;
  width: max-content;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ContEvents = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  align-items: center;
  column-gap: 1.5em;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ContResponsive = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ContCardsResponsive = styled.div`
  display: flex;

  @media (min-width: 501px) {
    display: flex;
    flex-direction: column;
  }
`;

export const EventsToday = styled.div`
  @media (max-width: 500px) {
    margin-top: 2em;
  }
`;

export const Label = styled.div`
  background-color: #3d84ff;
  padding: 0.25em 1.3em;
  color: #ffffff;
  border-radius: 15.5px;
  width: max-content;
  font-size: 11px;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
`;

export const Line = styled.hr`
  width: -webkit-fill-available;
  height: 0;
  background-color: #e8e8ee;
  margin-left: 1em;
`;

export const TextCarrousel = styled.p`
  font-size: 35px;
  color: #ffffff;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 500;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const TextCarrouselResponsive = styled.p`
  font-size: 30px;
  color: #ffffff;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 500;

  @media (min-width: 501px) {
    display: none;
  }
`;

export const TitleEventsToday = styled.p`
  color: #103460;
  font-size: 15px;
  margin: 0 0 1.8em 0;
  white-space: nowrap;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
`;
