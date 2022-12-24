import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "../css/post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({name ,description , message , photoURL} , ref) => {
    return (
        <div className='post' ref ={ref}>
            <div className='post__header'>
                <div className='post__headerLeft'>
                  <Avatar src ={photoURL}/>
                  <div className='post_profile_details'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </div>
                </div>
               <MoreVertIcon/>
            </div>
            <div className='post__body'>
                <p>{message}</p>
            </div>

            <div className='post__footer'>
                <div className='post__footer__options'>
                    <ThumbUpIcon/>
                    <span>Like</span>
                </div>

                <div className='post__footer__options'>
                    <CommentIcon/>
                    <span>Comment</span>
                </div>

                <div className='post__footer__options'>
                    <ShareIcon/>
                    <span>Share</span>
                </div>

                <div className='post__footer__options'>
                    <SendIcon/>
                    <span>Send</span>
                </div>
            </div>
        </div>
      )})


export default Post;