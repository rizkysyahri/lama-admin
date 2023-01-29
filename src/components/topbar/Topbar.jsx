import React from "react";
import "./topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Language from "@mui/icons-material/Language";
import Settings from "@mui/icons-material/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">LamaAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://img.sportstars.id//2022/06/61Oj2J/master_Uc7Yp38S79_316_nba_2021_2022.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
