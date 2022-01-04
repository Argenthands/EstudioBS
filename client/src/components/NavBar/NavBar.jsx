import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    const contenido = ['Inicio','Profesionales', 'Servicios', 'Ubicación', 'Contacto']
    return (
        <nav className='NavBar'>
            <img src='#' className='NavBarImg'/>
            {contenido.map((element, index)=>(
                <div className='NavBarButton' key={index}>
                    <Link to={element} key={index}>{element}</Link>
                </div>
            ))}
        </nav> 
    )
}
