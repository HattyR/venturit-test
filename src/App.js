import React from "react";

//Components
import { Activities } from "./components/activities/Activities";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Events } from "./components/events/Events";
import { Header } from "./components/header/Header";
import { Progress } from "./components/progress/Progress";
import { Sidebar } from "./components/sidebar/Sidebar";

//Styles
import { ContainerGrid, Content } from "./styles/GeneralStyles";

const App = () => {
  return (
    <ContainerGrid>
      <Header />
      <Sidebar />
      <Content>
        <Dashboard />
        <Events />
        <Activities />
        <Progress />
      </Content>
    </ContainerGrid>
  );
};

export default App;
