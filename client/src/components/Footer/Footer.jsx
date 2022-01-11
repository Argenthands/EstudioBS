import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <footer className='Footer'>
            <div className='FooterItem'>
                <h3 className='FooterTitle'>Resistencia Chaco Argentina</h3>
                <p>Dirección: <b>Hipólito Yrigoyen 433</b></p>
                <ul>
                    <li>
                        <a href='tel:+5436244426885'> Telefono / Fax: (03624)<b>4426885</b></a>
                    </li>
                    <li>
                        <a href='tel:+5436244447233'>Telefono / Fax: (03624)<b>4447233</b></a>
                    </li>
                </ul>
            </div>
            <div className='FooterItem'>
                <h3 className='FooterTitle'>¿Quieres trabajar con nosotros? </h3>
                <div className='Button'>
                    <button className='Button'>Envianos tu CV</button>
                </div>
            </div>
        </footer>
    )
}
