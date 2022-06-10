import React from 'react'
import './Widgets.styles.css'
import { Info, FiberManualRecord } from '@mui/icons-material'
const Widgets = () => {

    //a function to return jsx 

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>
                    {heading}
                </h4>
                <p>
                    {subtitle}
                </p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>
                    LinkedIn News
                </h2>

                <Info />
            </div>

            {newsArticle("linked in react", "top news ")}
            {newsArticle('linked in  react', "top news ")}
            {newsArticle('linked in  react', "top news ")}
            {newsArticle('linked in  react', "top news ")}

        </div>
    )
}

export default Widgets