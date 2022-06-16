import React from "react";
import styled from "styled-components";

//Images
import iconNoti from "../../resources/headerResources/images/icon_notification.png";

const ContNotifications = styled.div`
  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateY(-250px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: myAnim 0.5s ease 0s 1 normal forwards;
  background-color: #ffffff;
  border: 1px solid rgba(186, 185, 216, 0.22);
  box-shadow: 0 22px 34px 0 rgba(27, 20, 119, 0.11);
  position: absolute;
  top: 4em;
  right: 0;
  width: max-content;
  z-index: 1;
`;

const ContMessages = styled.div`
  display: flex;
  padding: 1em 1.5em;
  align-items: center;
`;

const Date = styled.p`
  margin: 0;
  color: #9d9bb6;
  font-size: 13px;
`;

const Title = styled.p`
  margin: 0;
  color: #192452;
  font-size: 15px;
`;

export const Notifications = () => {
  return (
    <ContNotifications>
      <ContMessages>
        <div>
          <img src={iconNoti} />
        </div>
        <div style={{ marginLeft: "1.5em" }}>
          <Title>you have a new session to re...</Title>
          <Date>Today, 10:30AM</Date>
        </div>
      </ContMessages>

      <ContMessages>
        <div>
          <img src={iconNoti} />
        </div>
        <div style={{ marginLeft: "1.5em" }}>
          <Title>you have a virtual session...</Title>
          <Date>Yesterday, 9:45PM</Date>
        </div>
      </ContMessages>

      <ContMessages>
        <div>
          <img src={iconNoti} />
        </div>
        <div style={{ marginLeft: "1.5em" }}>
          <Title>you have a face to face sta...</Title>
          <Date>Yesterday, 10:00PM</Date>
        </div>
      </ContMessages>
    </ContNotifications>
  );
};
