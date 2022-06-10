import React, { forwardRef } from 'react'
import InputOption from '../InputOption/InputOption.component'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import './Post.styles.css'

import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/userSlice';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {

    const user = useSelector(selectUser)
    return (
        <div className='post'>

            <div className="post__header">
                <Avatar src={user.photoUrl}> {name[0]}</Avatar>

                <div className="post__info">
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
            </div>

            <div className="post__body">
                <p>
                    {message}
                </p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="like" color='gray' />
                <InputOption Icon={ChatOutlined} title="Comment" color='gray' />
                <InputOption Icon={ShareOutlined} title='Share' color='gray' />
                <InputOption Icon={SendOutlined} title="Send" color='gray' />
            </div>
        </div>
    )
})

export default Post