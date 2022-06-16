import React, { useState } from "react";

//Components
import { CardEventToday } from "./CardEventToday";

//Styles
import { Title } from "../../styles/dashboardStyles/DashboardStyles";
import {
  ArrowsAndText,
  ContArrows,
  ContCardsResponsive,
  ContCarrousel,
  ContEvents,
  ContResponsive,
  EventsToday,
  Label,
  Line,
  TextCarrousel,
  TextCarrouselResponsive,
  TitleEventsToday,
} from "../../styles/eventsStyles/EventsStyles";

//Images
import backgroundOrange from "../../resources/eventsResources/images/backgroundOrange.png";
import backgroundBlack from "../../resources/eventsResources/images/backgroundBlack.png";
import backgroundOld from "../../resources/eventsResources/images/backgroundOld.png";

export const Events = () => {
  const [counter, setCounter] = useState(0);
  const imagesArray = [
    {
      image: { backgroundOrange },
    },
    {
      image: { backgroundBlack },
    },
    {
      image: { backgroundOld },
    },
  ];

  //Functions
  const increase = () => {
    if (counter < imagesArray.length - 1) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <Title>Events</Title>

      <ContEvents>
        <ContCarrousel background={Object.values(imagesArray[counter].image)}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Label>SCIENCE</Label>
          </div>

          <TextCarrouselResponsive>
            Youth Talent & <br /> Education <br />
            <span style={{ fontSize: "20px" }}>May, 20</span>
          </TextCarrouselResponsive>
          <ArrowsAndText
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <ContResponsive>
              {counter > 0 && (
                <div>
                  <ContArrows style={{ marginRight: "2em" }} onClick={decrease}>
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path
                        d="M15 6.99997H3.82998L8.70998 2.11997C9.09998 1.72997 9.09998 1.08997 8.70998 0.699971C8.31998 0.309971 7.68998 0.309971 7.29998 0.699971L0.70998 7.28997C0.31998 7.67997 0.31998 8.30997 0.70998 8.69997L7.29998 15.29C7.68998 15.68 8.31998 15.68 8.70998 15.29C9.09998 14.9 9.09998 14.27 8.70998 13.88L3.82998 8.99997H15C15.55 8.99997 16 8.54997 16 7.99997C16 7.44997 15.55 6.99997 15 6.99997Z"
                        fill="#3E3A6F"
                      />
                    </svg>
                  </ContArrows>
                </div>
              )}

              <TextCarrousel>
                Youth Talent & <br /> Education
              </TextCarrousel>
            </ContResponsive>

            <ContResponsive>
              <TextCarrousel>May, 20</TextCarrousel>
              {counter < imagesArray.length - 1 && (
                <div>
                  <ContArrows style={{ marginLeft: "2em" }} onClick={increase}>
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path
                        d="M1 8.99997H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70997C15.68 8.31997 15.68 7.68997 15.29 7.29997L8.71 0.699971C8.32 0.309971 7.69 0.309971 7.3 0.699971C6.91 1.08997 6.91 1.71997 7.3 2.10997L12.17 6.99997H1C0.45 6.99997 0 7.44997 0 7.99997C0 8.54997 0.45 8.99997 1 8.99997Z"
                        fill="#3E3A6F"
                      />
                    </svg>
                  </ContArrows>
                </div>
              )}
            </ContResponsive>
          </ArrowsAndText>
        </ContCarrousel>

        <EventsToday>
          <div style={{ display: "flex" }}>
            <TitleEventsToday>EVENTS TODAY</TitleEventsToday>
            <Line />
          </div>

          <ContCardsResponsive>
            <CardEventToday time="10:30AM" title="Webinar: the basics of..." />
            <CardEventToday
              margin={window.innerWidth < 500 ? "0 0 0 1.6em" : "1.6em 0 0 0"}
              time="2:15PM"
              title="Team Building Activity"
            />
          </ContCardsResponsive>
        </EventsToday>
      </ContEvents>
    </>
  );
};
