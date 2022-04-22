import React from 'react'
import { useSelector } from 'react-redux'
import ServiceCard from '../ServiceCard/ServiceCard'
import './ServicesCards.css'
export default function ServicesCards() {

    const servicios = useSelector(state => state.reducer.servicios)

    return (
        <div>
            <div className='container'>
                {servicios.map((element, index) => (
                    <ServiceCard key={index} title={element.title} text={element.text} professional={element.professional} />
                ))}
            </div>
        </div>
    )
}
