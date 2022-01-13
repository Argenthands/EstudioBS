import React, { useState } from 'react'
import './SlideShow.css'
import { ReactComponent as FlechaIzquierda } from './img/circleLeftArrow.svg'
import { ReactComponent as FlechaDerecha } from './img/circleRightArrow.svg'

export default function SlideShow() {

    const images = ['BlueCascade1.jpg', 'GreenRiver1.jpg', 'PinkSkyTree1.jpg', 'YingYangKoi1.jpg']
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(images[0])

    const back=()=>{
        const backIndex = index > 0 ? index -1 : images.length -1;
        setImage(images[backIndex])
        setIndex(backIndex)
    }
    const next=()=>{
        const nextIndex = index < images.length -1 ? index +1 : 0;
        setImage(images[nextIndex])
        setIndex(nextIndex)
    }

    return (
        <div className='SlideShow'>

            <button className='LeftControllers' onClick={back}>
                <FlechaIzquierda />
            </button>
            
            <img className='CarouselImg' src={require(`./img/${image}`)} alt="" />

            <button className='RightControllers' onClick={next}>
                <FlechaDerecha />
            </button>
        </div>
    )
}
