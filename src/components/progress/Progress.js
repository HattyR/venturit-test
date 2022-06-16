import React from "react";

//Components
import { MiniCard } from "./MiniCard";
import { Overview } from "./Overview";

//Styles
import { Title } from "../../styles/dashboardStyles/DashboardStyles";
import { Line } from "../../styles/eventsStyles/EventsStyles";
import {
  ContNotification,
  ContProgress,
  ContResponsive,
  ContWrap,
} from "../../styles/progressStyles.js/ProgressStyles";

export const Progress = () => {
  return (
    <ContResponsive>
      <Overview />

      <ContProgress>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Title style={{ margin: "1em 0" }}>Progress</Title>
          <Line />
        </div>

        <ContWrap>
          <MiniCard title="Total Webinars" amount="9" />
          <MiniCard title="Pending Assignments" amount="0" />
          <MiniCard title="Total Units" amount="5" />
          <MiniCard title="Total Readings" amount="14" />
          <MiniCard title="Total Videos" amount="5" />

          <MiniCard title="Total Videos" amount="5" />
          <MiniCard title="Total Videos" amount="5" />
          <MiniCard title="Total Videos" amount="5" />
        </ContWrap>

        <ContNotification>
          Confirm your account details. Please confirm your email and phone
          number.
        </ContNotification>
      </ContProgress>
    </ContResponsive>
  );
};
