import React from 'react'
import { useSelector } from 'react-redux'
import './Body.css'

export default function Body() {
    const data = useSelector(state => state.reducer)
    console.log(data)
    return (
        <div className='Body'>

        </div>
    )
}