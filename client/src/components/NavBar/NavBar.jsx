import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.css'
import image from '../../image/Logo.png'

export default function NavBar() {
    return (
        <div>
            <nav className='NavBar'>
                <img src={image} className='Logo__Menu' alt='imagen'/>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'/'}>Inicio</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'Profesionales'}>Profesionales</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'Servicios'}>Servicios</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'Location'}>Ubicación</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'AboutUs'}>Sobre Nosotros</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : 'Button__Menu'} to={'Contact'}>Contacto</NavLink>
            </nav>
            <hr /> 
        </div>
    )
}
