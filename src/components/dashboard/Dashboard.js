import React from "react";

//Styles
import {
  ContLanguage,
  ContSentences,
  ContTitle,
  ContWelcome,
  EnglishWord,
  Flag,
  ImageBoy,
  SentenceOne,
  SentenceTwo,
  Title,
} from "../../styles/dashboardStyles/DashboardStyles";

export const Dashboard = () => {
  return (
    <>
      <ContTitle>
        <Title>Dashboard</Title>

        <ContLanguage>
          Currently Learning
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Flag />
            </div>

            <EnglishWord>English</EnglishWord>
          </div>
        </ContLanguage>
      </ContTitle>

      <ContWelcome>
        <ImageBoy />

        <ContSentences>
          <SentenceOne>Welcome back, Clarence</SentenceOne>
          <SentenceTwo>Ta-da! You're up to date. </SentenceTwo>
        </ContSentences>
      </ContWelcome>
    </>
  );
};
