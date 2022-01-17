import React from 'react'
import './Location.css'
//import axios from "axios";
import image from '../../image/Entrada.jpg'


export default function Location() {
    return (
        <div className='Location'>
            <img src={image} alt="asociados" width="1800" height="500"/>
            <h3>HIPOLITO IRIGOYEN 433 | RESISTENCIA | CHACO | ARGENTINA | H35000ADI</h3>
            <iframe 
            className='GoogleMaps'
                src='https://maps.google.com.ar/maps?f=q&source=s_q&hl=es-419&geocode=&q=estudio+benolol+resistencia+chaco&aq=&sll=-38.452918,-63.598921&sspn=45.852177,107.138672&t=m&ie=UTF8&hq=estudio+benolol&hnear=Resistencia,+Chaco&ll=-27.453656,-58.981819&spn=0.004836,0.017145&z=16&iwloc=A&output=embed'>
            </iframe>
        </div>
    )
}
