import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Header.css'
//import image from '../../image/LogoText.png'
//<img src={image} alt="asociados" className='Image'/>

export default function Header() {
    return (
        <div className='Header'>
            <span className='TypewriterLong'>
                <Typewriter
                    words={[
                        'Estudio Jurídico Contable Benolol Salom & Asociados'
                    ]}
                    loop={1}
                    cursor
                    cursorStyle='|'
                    typeSpeed={95}
                    deleteSpeed={30}
                    delaySpeed={2500}
                />
            </span>
            <span className='TypewriterShort'>
                <Typewriter
                    words={[
                        'Estudio BS&A'
                    ]}
                    loop={1}
                    cursor
                    cursorStyle='|'
                    typeSpeed={95}
                    deleteSpeed={30}
                    delaySpeed={2500}
                />
            </span>
            <hr />
        </div>
    )
}
