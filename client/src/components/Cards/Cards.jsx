import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
export default function Cards() {

    let cards = ['Abogados','Contadores','123']

    return (
        <div className='Cards'>
            {cards.map((element, index) => (
                <Card key={index} props={element}/>
            ))}
        </div>
    )
}
