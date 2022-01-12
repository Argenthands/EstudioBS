import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <>
            <hr />
            <footer className='Footer'>
                <div className='FooterItem'>
                    <h3 className='FooterTitle'>Resistencia Chaco Argentina</h3>
                    <p>
                        Dirección: <b>Hipólito Yrigoyen 433</b>
                    </p>    
                    <p>
                        <a href='tel:+5436244426885'> Telefono / Fax: (03624)<b>4426885</b></a>
                    </p>
                    <p>
                        <a href='tel:+5436244447233'>Telefono / Fax: (03624)<b>4447233</b></a>
                    </p>
                </div>
                <div className='FooterItem'>
                    <h3 className='FooterTitle'>¿Quieres trabajar con nosotros? </h3>
                </div>
                <div className='SendResume'>
                    <button className='Button'>Envianos tu CV</button>
                </div>
            </footer>
        </>
    )
}
