import { Avatar } from '@mui/material';
import React from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EventIcon from '@mui/icons-material/Event';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "../css/feed.css"


const Feed = () => {
    return (
        <div className='feed'>
            <div className='feed__input'>
                <div className='feed__form'>
                <Avatar src='https://media.licdn.com/dms/image/C5103AQEmKlU8Y-Dqxg/profile-displayphoto-shrink_100_100/0/1577807370463?e=1677110400&v=beta&t=VBLi-sKQhw8hK0KxDAjGH3yVspvYmHfHrQxD5mrbByQ'/>
                <form action="">
                    <input type="text" placeholder='Start a post' />
                    <input type="submit" />
                </form>
            </div>
              

            <div className='feed__options'>
            <div className='option'>
                    <InsertPhotoIcon style={{color:"skyblue"}}/>
                    <span>Image</span>
                </div>
                <div className='option'>
                    <YouTubeIcon style={{color:"greenyellow"}}/>
                    <span>Video</span>
                </div>
                <div className='option'>
                    <EventIcon style={{color:"orange"}}/>
                    <span>Event</span>
                </div>
                <div className='option'>
                    <AssignmentIcon style={{color:"orchid"}}/>
                    <span>Write Article</span>
                </div>
            </div>

         </div>
            
        </div>
    );
};

export default Feed;

// photo video write artcsl