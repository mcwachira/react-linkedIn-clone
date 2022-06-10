import React from 'react'
import './Header.styles.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions/HeaderOptions.component';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Chat, Notifications } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/user/userSlice'
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase'
const Header = () => {

    const LogOutFunc = () => {
        dispatch(logOut())
        signOut(auth).then(() => {
            alert('signed out succesfully')
        }).catch((error) => (alert(error)))
    }
    return (

        <div className="header">


            <div className="header__left">
                <img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenter} title="Jobs" />
                <HeaderOptions Icon={Chat} title="Messaging" />
                <HeaderOptions Icon={Notifications} title="Notifications" />
                <HeaderOptions avatar={true} title='me' LogOff={LogOutFunc} />
            </div>
        </div>
    )
}

export default Header
