import React from 'react'
import './Header.styles.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions/HeaderOptions.component';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Chat, Notifications } from '@mui/icons-material';
const Header = () => {
    return (

        <div className="header">


            <div className="header__left">
                <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1654566155~hmac=c2b52d740be341eb4c64398eedf39c20" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenter} title="Jobs" />
                <HeaderOptions Icon={Chat} title="Messaging" />
                <HeaderOptions Icon={Notifications} title="Notifications" />
                <HeaderOptions avatar="https://pbs.twimg.com/profile_images/1350089705497440256/DW-6yNjR_400x400.jpg " title="me" />
            </div>
        </div>
    )
}

export default Header
