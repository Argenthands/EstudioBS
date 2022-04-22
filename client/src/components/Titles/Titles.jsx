import React from 'react'
import './Titles.css'

export default function Titles({ text }) {

    console.log(text)
    return (
        <div className='Container_Title'>
            <h2 class="border">{text}</h2>
            <h2 class="wave">{text}</h2>
        </div>
    )
}
