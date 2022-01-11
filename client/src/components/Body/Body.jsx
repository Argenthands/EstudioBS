import React from 'react'
import Cards from '../Cards/Cards'
import './Body.css'
import image from '../../image/asociados.png'
<img src={image} alt="asociados" className='Image'/>

export default function Body() {
    
    return (
        <div className='Body'>
            <Cards />
        </div>
    )
}