import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <>
            <hr className='hr'/>
            <footer className='Footer'>

                <div className='FooterItem'>
                    <h3 className='FooterTitle'>Resistencia Chaco Argentina</h3>
                    <br />
                    <p>
                        Dirección: <b>Hipólito Yrigoyen 433</b>
                    </p>
                    <br />
                    <p>
                        <a href='tel:+5436244426885'> Telefono / Fax: (03624)<b>4426885</b></a>
                    </p>
                    <p>
                        <a href='tel:+5436244447233'>Telefono / Fax: (03624)<b>4447233</b></a>
                    </p>
                </div>

                <div className='FooterItem'>
                    <h3 className='FooterTitle'>Contactanos:</h3>
                    <a
                        className='Button'
                        href='mailto:alejandro.david.benolol@hotmail.com?Subject=From%20Web'
                    >
                        http://EstudioBs.com.ar
                    </a>
                </div>

            </footer>
        </>
    )
}
