import styled from "styled-components";

//Images
import platform from "../../resources/headerResources/images/platform.png";
import notification from "../../resources/headerResources/images/notification.png";
import chat from "../../resources/headerResources/images/chat.png";
import picture from "../../resources/headerResources/images/picture.png";
import arrowDown from "../../resources/headerResources/images/arrowDown.png";

export const Arrow = styled.img`
  content: url(${arrowDown});

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ContHeader = styled.div`
  background-color: #ffffff;
  grid-column: 1 / 14;
  padding: 1em 0.75em;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 1fr 2fr;
  align-items: center;
  justify-items: center;
  box-shadow: 0 2px 34px 0 rgba(27, 20, 119, 0.1);

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContSearch = styled.div`
  background-color: #ffffff;
  padding: 1em 0.75em;
  grid-row: 2;
  grid-column: 1 / 14;
  display: flex;
  justify-content: center;

  @media (min-width: 501px) and (max-width: 1000px) {
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 1001px) {
    display: none;
  }
`;

export const ContProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const ContIcons = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ChatImg = styled.img`
  content: url(${chat});
`;

export const DivSearch = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const DivIcons = styled.div`
  @media (min-width: 500px) and (max-width: 1000px) {
    display: none;
  }
`;

export const Name = styled.p`
  font-size: 16px;
  color: #3e3a6f;
  margin-right: 0.75em;
  font-family: "Nunito", sans-serif;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const NotificationImg = styled.img`
  content: url(${notification});
  margin-right: 1.25em;
  cursor: pointer;
`;

export const PlatformImage = styled.img`
  content: url(${platform});
`;

export const PictureProfile = styled.img`
  content: url(${picture});
  margin-right: 0.75em;
`;
