import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "../css/header.css"
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt=""/>
        </div>

        <div className="header__search">
            <SearchIcon/>
            <input type="text"placeholder="search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon ={HomeIcon} title ="Home"/>
        <HeaderOptions Icon ={PeopleIcon} title ="My Network"/>
        <HeaderOptions Icon ={BusinessCenterIcon} title ="Jobs"/>
        <HeaderOptions Icon ={MessageIcon} title ="Message"/>
        <HeaderOptions Icon ={NotificationsIcon} title ="Notifications"/>
        <HeaderOptions Icon ={Avatar} title ="Rahul Kumar"/>

      </div>
    </div>
  );
};

export default Header;
