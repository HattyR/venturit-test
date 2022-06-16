import React, { useState } from "react";

//Components
import { ActivityCard } from "./ActivityCard";

//Styles
import { TextCard } from "../../styles/activitiesStyles/ActivitiesStyles";
import { Title } from "../../styles/dashboardStyles/DashboardStyles";
import { ContArrows, Line } from "../../styles/eventsStyles/EventsStyles";

//Images
import imageOne from "../../resources/activityResources/images/imageOne.png";
import imageTwo from "../../resources/activityResources/images/imageTwo.png";
import imageThree from "../../resources/activityResources/images/imageThree.png";

export const Activities = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title>Activity</Title>
        <Line style={{ marginRight: "1em" }} />
        <div>
          <ContArrows style={{ backgroundColor: "rgba(157,155,182,0.17)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                d="M1 8.99997H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70997C15.68 8.31997 15.68 7.68997 15.29 7.29997L8.71 0.699971C8.32 0.309971 7.69 0.309971 7.3 0.699971C6.91 1.08997 6.91 1.71997 7.3 2.10997L12.17 6.99997H1C0.45 6.99997 0 7.44997 0 7.99997C0 8.54997 0.45 8.99997 1 8.99997Z"
                fill="#3E3A6F"
              />
            </svg>
          </ContArrows>
        </div>
      </div>

      <ActivityCard
        image={imageOne}
        onClick={() => setSeeMore(!seeMore)}
        collapse={seeMore}
        text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
      >
        <TextCard>
          You have new 5 followers including
          <span style={{ color: "#3d84ff" }}> Kathryn Crawford</span> and
          <span style={{ color: "#3d84ff" }}> Piper Shaw</span>
        </TextCard>
      </ActivityCard>

      <ActivityCard image={imageTwo}>
        <TextCard>3 new events were added to your calendar</TextCard>
      </ActivityCard>

      <ActivityCard image={imageThree}>
        <TextCard>You have 3 pending readinga to complete</TextCard>
      </ActivityCard>
    </>
  );
};
