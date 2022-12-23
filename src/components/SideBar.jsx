import { Avatar } from '@mui/material';
import React from 'react';
import '../css/sidebar.css'
const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__profile'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-P44K_19K0xlWaOcd3_-DFaJIh8drGP_nvN_sMCI&s" alt="" />
                <div className='profile__details'>
                    <Avatar/>
                    <h4>Rahul Kumar</h4>
                    <p>Web Developers</p>
                </div>

                <div className='profile__stats'>
                    <span>Who Views your Profile</span>
                    <span className='stats__number'>20 </span>
                </div>

                <div className='profile__stats'>
                    <span>Connections <br /> <b>Grow Your Network</b></span>
                    <span className='stats__number'>150 </span>
                </div>
            </div>

            <div className='sidebar__recent'>
                <p>Recent</p>
                <p className='hash'><span>#</span>web developer</p>
                <p className='hash'><span>#</span>redux</p>
                <p className='hash'><span>#</span>react</p>
                <p className='hash'><span>#</span> digital marketing</p>
                <p className='hash'><span>#</span>social media</p>
            </div>
        </div>
    );
};

export default SideBar;