import ServiceCard from '../../components/ServicesCards/ServicesCards'
import Titles from '../../components/Titles/Titles'
import './Servicios.css'

export default function Servicios() {
    return (
        <div className='Servicios'>
            <Titles text="Servicios" />
            <ServiceCard />
        </div>
    )
}
