import React from 'react'
import './Card.css'

export default function Card(props) {

    const { title, text, professional } = props

    return (
        <div className='Card'>
            <h4 className='CardTitle'>{title}</h4>
            <p>{text}</p>
            <button className='CardButton'>{`Contacta un ${professional}`}</button>
        </div>
    )
}
