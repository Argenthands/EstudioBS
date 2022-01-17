import React, { useState, useEffect } from 'react'
import './SlideShow.css'
///home/alejandro/Development/Work/Familia/EstudioBS/client/src/components/SlideShow/img/triangleLeftArrow.svg
import { ReactComponent as FlechaIzquierda } from './img/leftArrow.svg'
import { ReactComponent as FlechaDerecha } from './img/rightArrow.svg'

export default function SlideShow() {

    const silueta = "silueta.png"
    const profecionales = [
        {
            nombre:'José Daniel Benolol',
            profesion:'Contador',
            imagen:silueta,
        },
        {
            nombre:'Gustavo Alberto Benolol',
            profesion:'Contador',
            imagen:silueta,
        },
        {
            nombre:'Olga Beatriz Salom',
            profesion:'Abogada',
            imagen:silueta,
        },
        {
            nombre:'Nora Mónica Núñez',
            profesion:'Abogada',
            imagen:silueta,
        },
        {
            nombre:'Fernando Falcon',
            profesion:'Contador',
            imagen:silueta,
        },
        {
            nombre:'Carlos Kevin Zamudio',
            profesion:'Contador',
            imagen:silueta,
        },
        {
            nombre:'Raul Nahuel Bravo Perdomo',
            profesion:'Contador',
            imagen:silueta,
        },
        {
            nombre:'María Natalia Trangoni',
            profesion:'Contadora',
            imagen:silueta,
        },
        {
            nombre:'Juan Manuel Gutierrez',
            profesion:'Contador',
            imagen:silueta,
        },
        {
            nombre:'Luis Hernan Vega',
            profesion:'Contador',
            imagen:silueta,
        },
        {
            nombre:'Rosa Esther Guex',
            profesion:'Asistente',
            imagen:silueta,
        },
        {
            nombre:'Nuevo',
            profesion:'Abogado',
            imagen:silueta,
        },
    ]
    
    const [index, setIndex] = useState(0)
    const [profesional, setProfesional] = useState(profecionales[0])

    const back=()=>{
        const backIndex = index > 0 ? index -1 : profecionales.length -1;
        setProfesional(profecionales[backIndex])
        setIndex(backIndex)
    }
    const next=()=>{
        const nextIndex = index < profecionales.length -1 ? index +1 : 0;
        setProfesional(profecionales[nextIndex])
        setIndex(nextIndex)
    }
/*
    useEffect(
        ()=>{
            //efecto
            console.log(`effect`)
            //cleanup
            return ()=>{
                cleanup;
            }
        }, [input]
    )
    */
   
   return (
       <div className='SlideShow'>

            <button className='LeftControllers' onClick={back}>
                <FlechaIzquierda />
            </button>
            <div className='Slider'>
                <img className='CarouselImg' src={require(`./img/${profesional.imagen}`)} alt="" />
                <div className='Name'>{profesional.nombre}</div>
                <div className='Profession'>{profesional.profesion}</div>
            </div>

            <button className='RightControllers' onClick={next}>
                <FlechaDerecha />
            </button>
        </div>
    )
}
