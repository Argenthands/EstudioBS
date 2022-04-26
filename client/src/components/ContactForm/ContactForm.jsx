import React from 'react'
import './ContactForm.css'
import Titles from '../Titles/Titles'

export default function ContactForm() {
    return (
        <div className='ContactForm'>
            <Titles text='Contactanos' />

            <form className='Form'>

                <label htmlFor='name' className='Lable'>
                    Nombre: 
                </label>
                <input
                    className='Input'
                    id='name'
                    type='text'
                    placeholder='Nombre' 
                />

                <label htmlFor='lastName' className='Lable'>
                    Apellido: 
                </label>
                <input
                    className='Input'
                    id='lastName' 
                    type='text' 
                    placeholder='Apellido'
                />

                <label htmlFor='number' className='Lable'>
                Telefono:
                </label>
                <input
                    className='Input'
                    id='number'
                    type='number'
                    placeholder='Telefono'
                />

                <label htmlFor='email' className='Lable'>
                    E-mail:
                </label>
                <input 
                    className='Input'
                    id='email'
                    type='email' 
                    placeholder='Correo Electronico'
                />

                <label htmlFor='consulta' className='Lable'>
                    <textarea
                        className='TextArea'
                        key='consulta'
                        id='consulta'
                        name='consulta'
                        rows='10'
                        cols='45'
                        placeholder='consulta'
                    />
                </label>
                
                <label htmlFor='resume' className='Lable'>
                    CV:
                </label>
                <label className="custom-file-upload">
                    <input
                        className='Attach'
                        type='file' 
                    />
                </label>
                <button className='button_submit_contact_form'>Submit</button>
            </form>
        </div>
    )
}
