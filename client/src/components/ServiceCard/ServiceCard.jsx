import React from 'react'
import './ServiceCard.css'

export default function ServiceCard(props) {

    const { title, text, professional } = props

    return (
        <div className='ServiceCard'>
            <h4 className='CardTitle'>{title}:</h4>
            <p>{text}</p>
            <button className='CardButton'>{`Contacta un ${professional}`}</button>
        </div>
    )
}
