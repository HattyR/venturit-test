import React from "react";

//Styles
import {
  ContIcon,
  ContSidebar,
  Icon,
} from "../../styles/sidebarStyles/SidebarStyles";

//Images
import homeHover from "../../resources/sidebarResources/images/home_hover.png";
import squaresHover from "../../resources/sidebarResources/images/squares_hover.png";
import documentHover from "../../resources/sidebarResources/images/document_hover.png";
import graphicsHover from "../../resources/sidebarResources/images/graphics_hover.png";
import chatHover from "../../resources/sidebarResources/images/chat_hover.png";

export const Sidebar = () => {
  return (
    <ContSidebar>
      <ContIcon>
        <Icon src={homeHover} />
      </ContIcon>

      <ContIcon>
        <Icon src={squaresHover} />
      </ContIcon>

      <ContIcon>
        <Icon src={documentHover} />
      </ContIcon>

      <ContIcon>
        <Icon src={graphicsHover} />
      </ContIcon>

      <ContIcon>
        <Icon src={chatHover} />
      </ContIcon>
    </ContSidebar>
  );
};
