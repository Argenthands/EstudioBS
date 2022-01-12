import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'
import image from '../../image/Logo.png'

export default function NavBar() {
    const contenido = ['Inicio', 'Sobre nosotros', 'Profesionales', 'Servicios', 'Ubicación', 'Contacto']
    return (
        <nav className='NavBar'>
            <img src={image} className='NavBarImg'/>
            {contenido.map((element, index)=>(
                <div className='NavBarButton' key={index}>
                    <Link to={element} key={index}>{element}</Link>
                </div>
            ))}
        </nav> 
    )
}
