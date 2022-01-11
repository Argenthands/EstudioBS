import React from 'react'
import './Card.css'

export default function Card(props) {

    const titulo = props.props
    console.log(typeof(props.props))

    return (
        <div className='Card'>
            <h4 className='Title'>{titulo}</h4>
            <p>soy un texto random bastante largo para que pueda visualizar como van quedando las cosas</p>
            <button>Soy un button</button>
        </div>
    )
}
