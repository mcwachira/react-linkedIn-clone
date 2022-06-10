import React from 'react'
import './HeaderOptions.styles.css'
import Avatar from '@mui/material/Avatar'
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user/userSlice';


const HeaderOptions = ({ avatar, title, Icon, LogOff }) => {

    const user = useSelector(selectUser)
    return (
        <div className="headerOption">
            {
                Icon && <Icon className="headerOption__icon" />
            }

            {
                avatar && <Avatar className="headerOption__icon" src={user?.photoUrl} onClick={LogOff} > {user?.email} </Avatar>
            }
            <h3 className='headerOption__title'>
                {user.displayName}
            </h3>
        </div>
    )
}

export default HeaderOptions