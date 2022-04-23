import AboutUs from '../AboutUs/AboutUs'
import './Home.css'
import image from '../../image/Entrada.jpg'

export default function Home() {
    return (
        <div className='Home'>
            <img src={image} alt="asociados" width="1800" height="500"/>
            <AboutUs />
        </div>
    )
}