import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EventIcon from "@mui/icons-material/Event";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "../css/feed.css";
import firebase from "firebase/compat/app"
import Post from "./Post";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { db } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from 'react-flip-move';

const Feed = () => {
  const [post , setPost] = useState([]);
  const [input , setInput] = useState() ;

  const user = useSelector(selectUser)

  const submitPost =(e)=>{
    e.preventDefault()
    db.collection("posts").add({
      name :user.displayName ,
      description :"This is test description",
      message : input ,
      photoURL : user.photoURL,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),

    })
    setInput("")
  }

  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot => {
      setPost(snapshot.docs.map(doc =>({
        id : doc.id ,
        data : doc.data()
      })))
    })
  },[])

  console.log(post);


  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          <Avatar src={user.photoURL}/>
          <form onSubmit={submitPost}>
            <input type="text" placeholder="Start a post" value={input}  onChange={e =>setInput(e.target.value)} />
            <input type="submit" />
          </form>
        </div>

        <div className="feed__options">
          <div className="option">
            <InsertPhotoIcon style={{ color: "skyblue" }} />
            <span>Image</span>
          </div>
          <div className="option">
            <YouTubeIcon style={{ color: "greenyellow" }} />
            <span>Video</span>
          </div>
          <div className="option">
            <EventIcon style={{ color: "orange" }} />
            <span>Event</span>
          </div>
          <div className="option">
            <AssignmentIcon style={{ color: "orchid" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>

   <FlipMove>
    {
      post.map(({id ,data :{name ,description , message , photoURL}}) =>{
        return    <Post key={id} name={name} description={description} message={message} photoURL ={photoURL} />
      })
    }
    </FlipMove>

    </div>
  );
};

export default Feed;

