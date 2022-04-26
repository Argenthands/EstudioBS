import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './WeAre.css';
import Contables from './img/Contables.png';
import Juridico from './img/Juridico.png';
import Mediadores from './img/Mediadores.png';
import Tributarios from './img/Tributarios.png';

export default function WeAre() {
    
    const reducer = useSelector(state => state.reducer.servicios)
    const navigate = useNavigate()

    return (
        <div className='WeAre'>
            <div className='Text'>
                <p>
                    <b>Un estudio</b> compuesto por contadores y abogados especializados en consultoría tributaria, contable, civil y comercial.
                </p>
                <p>
                    La alta calificación de los profesionales que integran el nuestro equipo de trabajo y el compromiso con las necesidades de los clientes son nuestros principales valores que nos han acompañado por más de 20 años de actividad ininterrumpida.
                </p>
                <p>
                    La permanente actualización en materia normativa y tecnológica nos posibilita cubrir con un alto nivel de eficiencia las necesidades de las empresas en la economía actual.
                </p>
                <p>
                    Una vasta experiencia en propuestas y soluciones facilita a nuestros clientes la manera más productiva de desarrollar sus negocios y enfrentar sus desafíos.
                </p>
            </div>
            <div className='Navegate'>
                <button className='CardButton' onClick={()=>navigate('/Profesional/Abogado')}>
                    <img src={Juridico} alt="Juridico"/>
                </button>
                <button className='CardButton' onClick={()=>navigate('/Profesional/Mediador')}>
                    <img src={Mediadores} alt="Mediadores"/>
                </button>
                <button className='CardButton' onClick={()=>navigate('/Profesional/Contador')}>
                    <img src={Contables} alt="Contables"/>
                </button>
                <button className='CardButton' onClick={()=>navigate('/Profesional/Contador')}>
                    <img src={Tributarios} alt="Tributarios"/>
                </button>
            </div>
        </div>
    )
}
