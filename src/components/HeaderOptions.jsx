import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "../css/header.css";
import { selectUser } from "../features/userSlice";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const HeaderOptions = ({ Icon, title, avatar }) => {
  const user = useSelector(selectUser);
  return (
    <div className="header__options">
      {Icon && <Icon></Icon>}
      {avatar && (
        <Avatar
          name={avatar}
          src={user.photoURL}
          onClick = {e => firebase.auth().signOut()}
        />
      )}
      <span>{title}</span>
    </div>
  );
};

export default HeaderOptions;
