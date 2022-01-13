import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'
import image from '../../image/Logo.png'

export default function NavBar() {
    return (
        <nav className='NavBar'>
            <img src={image} className='NavBarImg'/>
            <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'/'}>Inicio</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'AboutUs'}>Sobre Nosotros</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'Profesionales'}>Profesionales</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'Servicios'}>Servicios</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'Ubicacion'}>Ubicación</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' : 'NavBarButton'} to={'Contacto'}>Contacto</NavLink>
        </nav> 
    )
}
