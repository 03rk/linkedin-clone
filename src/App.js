import React, { useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import {loginuser, logoutuser, selectUser } from "./features/userSlice";
import { auth } from "./components/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
      auth.onAuthStateChanged((userAuth)=>{
        if(userAuth){
          dispatch(loginuser({
            email: userAuth.email ,
            uid : userAuth.uid ,
            photoURL :userAuth.photoURL ,
            displayName : userAuth.displayName

         }))
        }
        else{
          dispatch(logoutuser())
        }
      })
  },[]);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app_wrapper">
          <Header />
          <div className="app_body">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
