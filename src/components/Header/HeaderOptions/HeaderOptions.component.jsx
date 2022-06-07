import React from 'react'
import './HeaderOptions.styles.css'
import Avatar from '@mui/material/Avatar'
const HeaderOptions = ({ avatar, title, Icon }) => {
    return (
        <div className="headerOption">
            {
                Icon && <Icon className="headerOption__icon" />
            }

            {
                avatar && <Avatar className="headerOption__icon" src={avatar} />
            }
            <h3 className='headerOption__title'>
                {title}
            </h3>
        </div>
    )
}

export default HeaderOptions