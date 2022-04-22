import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <>
            <hr />
            <footer className='Footer'>

                <div className='FooterItem'>
                    <h3 className='FooterTitle'>Resistencia Chaco Argentina</h3>
                    <h4>Dirección: <b>Hipólito Yrigoyen 433</b></h4>

                </div>
                <div className='FooterItem'>
                    <h3 className='FooterTitle'>Contactanos:</h3>
                    <a href='tel:+5436244426885'> Telefono / Fax: (03624)<b>4426885</b></a>
                    <a href='tel:+5436244447233'>Telefono / Fax: (03624)<b>4447233</b></a>
                    <a
                        className='Button_Contact'
                        href='mailto:alejandro.david.benolol@esutdiobs.com.ar?Subject=From%20Web'
                    >
                        http://EstudioBs.com.ar
                    </a>
                </div>

            </footer>
        </>
    )
}
