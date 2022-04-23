import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Titles from '../../components/Titles/Titles'
import './Profesional.css'

export default function Profesional() {


    const { id } = useParams()
    const profecionales = useSelector(state => state.reducer.profecionales)
    console.log(profecionales)
    return (
        <div className='Profesional'>
            <Titles text={id} />
        </div>
    )
}
