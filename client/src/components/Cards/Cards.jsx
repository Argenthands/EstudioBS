import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
export default function Cards() {

    let cards = [
        {
            title: 'Asesoría Contable',
            text: 'Contadores experimentados a su disposición',
            professional:'Contador',
        },
        {
            title: 'Asesoría Tributaria',
            text: 'Especialistas en impuestos a su disposición',
            professional:'Contador',
        },
        {
            title: 'Asesoría Jurídica',
            text: 'Abogados con gran trayectoría a su disposición',
            professional:'Abogado',
        },
        {
            title: 'Mediadores',
            text: 'contamos con nuestros propios mediadores a su disposición',
            professional:'Mediador',
        },
        {
            title: 'Conciliación Laboral',
            text: 'no se algun texto',
            professional:'Conciliador',
        }
    ]

    return (
        <div className='Cards'>
            {cards.map((element, index) => (
                <Card key={index} title={element.title} text={element.text} professional={element.professional}/>
            ))}
        </div>
    )
}
