import React from 'react'
import './Header.css'
import NavBar from '../NavBar/NavBar';import image from '../../image/asociados.png'

export default function Header() {
    return (
        <div className='Header'>
            <NavBar />
            <hr />
            <div className='Logo'>
                <img src={image} alt="asociados" className='Image'/>
            </div>
        </div>
    )
}
