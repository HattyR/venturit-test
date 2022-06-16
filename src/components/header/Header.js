import React, { useState } from "react";
import { styled } from "@mui/material/styles";

//Components
import { Secondary } from "../../controls/buttons/Secondary";
import InputBase from "@mui/material/InputBase";
import { Notifications } from "./Notifications";

//Styles
import {
  Arrow,
  ChatImg,
  ContHeader,
  ContIcons,
  ContProfile,
  ContSearch,
  DivIcons,
  DivSearch,
  Name,
  NotificationImg,
  PictureProfile,
  PlatformImage,
} from "../../styles/headerStyles/HeaderStyles";

//Iconos
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(() => ({
  backgroundColor: " #F5F5FB",
  width: "20em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.8em 0.9em",
}));

export const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <ContHeader>
        <PlatformImage />

        <DivSearch>
          <Search>
            <InputBase placeholder="Search and Find" />
            <SearchIcon sx={{ color: "#9D9BB6" }} />
          </Search>
        </DivSearch>

        <Secondary name="+ ADD" />

        <DivIcons>
          <ContIcons>
            <NotificationImg
              onClick={() => setShowNotifications(!showNotifications)}
            />
            <ChatImg />
            {showNotifications && <Notifications />}
          </ContIcons>
        </DivIcons>

        <ContProfile>
          <Name>Clarence Rusell</Name>
          <PictureProfile />
          <div>
            <Arrow />
          </div>
        </ContProfile>
      </ContHeader>

      <ContSearch>
        <Search>
          <InputBase placeholder="Search and Find" />
          <SearchIcon sx={{ color: "#9D9BB6" }} />
        </Search>

        <div>
          <ContIcons>
            <NotificationImg
              onClick={() => setShowNotifications(!showNotifications)}
            />
            <ChatImg />
            {showNotifications && <Notifications />}
          </ContIcons>
        </div>
      </ContSearch>
    </>
  );
};
