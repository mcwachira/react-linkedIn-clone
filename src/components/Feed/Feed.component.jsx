import React, { useEffect, useState } from 'react'
import { CalendarViewDay, Subscriptions, Create, EventNote, Image } from '@mui/icons-material'
import { db } from '../../utils/firebase'
import { getDocs, serverTimestamp, collection, addDoc, onSnapshot } from 'firebase/firestore'
import './Feed.styles.css'
import InputOption from '../InputOption/InputOption.component'
import Post from '../Post/Post.component'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/userSlice';
import FlipMove from 'react-flip-move'

const Feed = () => {

    const [posts, setPosts] = useState([])
    const [input, setInput] = useState("")

    const user = useSelector(selectUser)

    const collectionRef = collection(db, 'posts')

    useEffect(() => {

        const getData = async () => {
            const data = await getDocs(collectionRef)

            setPosts(data.docs.map((doc) => ({

                ...doc.data(),
                id: doc.id
            })))
        }
        getData()
        //getDocs is used to get data once but onSnapshot is used tpo detect change and update the app with data



    }, [])

    const sendPost = async (e) => {
        e.preventDefault();

        await addDoc(collectionRef, {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timeStamp: serverTimestamp()

        })
        setInput("")
    }
    return (
        <div className='feed'>

            <div className="feed__inputContainer">

                <div className="feed__input">
                    <Create />

                    <form action="">
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={Image} title="photo" color='#70b5f9' />
                    <InputOption Icon={Subscriptions} title="Video" color='#E7A33E' />
                    <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarViewDay} title="Write article" color='#7fc15e' />

                </div>
            </div>
            <FlipMove>

                {posts.map((post) => (<Post key={post.id} name={post.name} description={post.description} message={post.message} photoUrl={post.photoUrl} />))}


                {/* <Post name="Charles Wachira" description=" this is a a post" message=" post " photoUrl="https://pbs.twimg.com/profile_images/1350089705497440256/DW-6yNjR_400x400.jpg" /> */}
            </FlipMove>
        </div>
    )
}

export default Feed