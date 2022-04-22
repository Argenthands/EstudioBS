import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import './SlideShow.css'
import { ReactComponent as FlechaIzquierda } from './img/leftArrow.svg'
import { ReactComponent as FlechaDerecha } from './img/rightArrow.svg'


export default function SlideShow() {

    const profecionales = useSelector(state => state.reducer.profecionales)
    
    const [index, setIndex] = useState(0)
    const [profesional, setProfesional] = useState(profecionales[0])
    const [moove, setMoove] = useState(true)

    const stopMoove = ()=>{
        setMoove(!moove)
    }

    const back = ()=>{
        const backIndex = index > 0 ? index -1 : profecionales.length -1;
        setProfesional(profecionales[backIndex])
        setIndex(backIndex)
    }
    const next = useCallback(()=>{
        const nextIndex = index < profecionales.length -1 ? index +1 : 0;
        setProfesional(profecionales[nextIndex])
        setIndex(nextIndex)
    }, [index, profecionales])

    useEffect(()=>{
        const time = setTimeout(()=>{
            if(moove){
                next()
            }
        }, 1555)
        return ()=>{
            clearTimeout(time)
        }
    },[index, moove, next])
   
   return (
       <div className='SlideShow'>

            <button className='Button__Controllers' onClick={back}>
                <FlechaIzquierda />
            </button>
            <button className='Slider' onClick={stopMoove}>
                <img className='CarouselImg' src={require(`./img/${profesional.imagen}`)} alt="" />
                <div className='Name'>{profesional.nombre}</div>
                <div className='Profession'>{profesional.profesion}</div>
            </button>

            <button className='Button__Controllers' onClick={next}>
                <FlechaDerecha />
            </button>
        </div>
    )
}
