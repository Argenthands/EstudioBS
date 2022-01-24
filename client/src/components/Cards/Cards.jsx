import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import './Cards.css'
export default function Cards() {

    const servicios = useSelector(state => state.reducer.servicios)

    return (
        <div className='Cards'>
            {servicios.map((element, index) => (
                <Card key={index} title={element.title} text={element.text} professional={element.professional}/>
            ))}
        </div>
    )
}
