import React from 'react'
import './Profesionales.css'
import SlideShow from '../../components/SlideShow/SlideShow'
import Titles from '../../components/Titles/Titles'

export default function Profesionales() {
    return (
        <div className='Profesionales'>
            <Titles text="Profesionales" />
            <SlideShow />
        </div>
    )
}
