import React from 'react'
import ServiceCard from '../../components/ServicesCards/ServicesCards'
import Titles from '../../components/Titles/Titles'
import './Home.css'
import image from '../../image/Entrada.jpg'

export default function Home() {
    return (
        <div className='Home'>
            <img src={image} alt="asociados" width="1800" height="500"/>
            <Titles text="Servicios" />
            <ServiceCard />
        </div>
    )
}