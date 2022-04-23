import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Titles from '../../components/Titles/Titles'
import './Profesional.css'

export default function Profesional() {


    const { id } = useParams()
    const profesionales = useSelector(state => state.reducer.profecionales)
    console.log(profesionales)
    return (
        <div className='Profesional'>
            <Titles text={id} />
        </div>
    )
}
