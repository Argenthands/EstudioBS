import Titles from '../../components/Titles/Titles'
import WeAre from '../../components/WeAre/WeAre'
import './AboutUs.css'

export default function AboutUs() {
    return (
        <div className='AboutUs'>
            <Titles text='Somos' />
            <WeAre/>
        </div>
    )
}
