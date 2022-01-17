import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
    return (
        <div className='ContctForm'>
            <h1 className='FormtTitle'>Contactanos:</h1>
            <form className='ElementForm'>

                <label htmlFor='name'>
                    Nombre: 
                </label>
                <input 
                    id='name'
                    type='text'
                    placeholder='Nombre' 
                />

                <label htmlFor='lastName'>
                    Apellido: 
                </label>
                <input
                    id='lastName' 
                    type='text' 
                    placeholder='Apellido'
                />

                <label htmlFor='number'>
                Telefono:
                </label>
                <input
                    id='number'
                    type='number'
                    placeholder='Telefono'
                />

                <label htmlFor='email'>
                    E-mail:
                </label>
                <input 
                    id='email'
                    type='email' 
                    placeholder='Correo Electronico'
                />

                <label htmlFor='consulta'>
                    <textarea
                        key='consulta'
                        id='consulta'
                        name='consulta'
                        rows='10'
                        cols='45'
                        placeholder='consulta'
                    />
                </label>
                
                <label htmlFor='resume'>
                    CV:
                </label>
                <input 
                    type='file' 
                />
            </form>
        </div>
    )
}
