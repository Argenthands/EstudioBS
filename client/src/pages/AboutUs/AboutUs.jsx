import Titles from '../../components/Titles/Titles'
import Somos from '../../components/Somos/Somos'
import './AboutUs.css'

export default function AboutUs() {
    return (
        <div className='AboutUs'>
            <Titles text='Somos' />
            <Somos />
        </div>
    )
}
