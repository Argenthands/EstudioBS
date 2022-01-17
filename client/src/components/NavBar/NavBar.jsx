import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.css'
import image from '../../image/Logo.png'

export default function NavBar() {
    return (
        <div>
            <nav className='NavBar'>
                <img src={image} className='NavBarImg' alt='imagen'/>
                <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'/'}>Inicio</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'AboutUs'}>Sobre Nosotros</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'Profesionales'}>Profesionales</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'Servicios'}>Servicios</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'Location'}>Ubicación</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'Contact'}>Contacto</NavLink>
            </nav>
            <hr /> 
        </div>
    )
}
