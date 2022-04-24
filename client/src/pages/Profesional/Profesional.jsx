import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Titles from '../../components/Titles/Titles'
import ProfesionalCard from '../../components/ProfesionalCard/ProfesionalCard'
import './Profesional.css'

export default function Profesional() {


    const { id } = useParams()
    const profesionales = useSelector(state => state.reducer.profecionales)
    
    return (
        <div className='Profesional'>
            <Titles text={id} />
            <button className='ProfesionalCards'>
                {profesionales.map((profesional, index )=> (
                    <div className='Profesional__item' key={index}>
                        <ProfesionalCard props={profesional}/>
                    </div>
                ))}
            </button>
        </div>
    )
}
