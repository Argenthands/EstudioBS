import { useNavigate } from 'react-router-dom'

import './ServiceCard.css'

export default function ServiceCard(props) {

    const { title, text, professional } = props
    const navigate = useNavigate()

    return (
        <div className='ServiceCard'>
            <h4 className='CardTitle'>{title}:</h4>
            <p>{text}</p>
            <button className='CardButton' onClick={()=>navigate(`/Profesional/${professional}`)}>{`Contacta un ${professional}`}</button>
        </div>
    )
}
