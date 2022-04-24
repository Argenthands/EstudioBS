import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './WeAre.css';
import Contables from './img/Contables.png';
import Juridico from './img/Juridico.png';
import Mediadores from './img/Mediadores.png';
import Tributarios from './img/Tributarios.png';

export default function WeAre() {
    
    const reducer = useSelector(state => state.reducer.servicios)
    let professional = 'Contador'
    const navigate = useNavigate()

    return (
        <div className='WeAre'>
            <div className='Text'>
                <p>
                    <b>Un estudio</b> compuesto por contadores y abogados especializados en consultas tributarias, contables, civiles y comerciales.
                </p>
                <p>
                    La Alta Calificación de los profecionales que integran el equipot de trabajo y el compromiso con las necesidades de los clientes nos acompañan por más de 20 años de actividad ininterrumpida.
                </p>
                <p>
                    La permanente actualización de nuestro equipo de trabajo, tanto en materia normativa como en tecnológias son el minimo de nuestra calidad, para brindarles la eficiencia óptima.
                </p>
                <p>
                    Contamos con una basta experiencia en prouestas y soluciones en facilitarle a nuestros clientes la manera mas eficiente de afrontar sus desafios.
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
//<button className='CardButton' onClick={()=>navigate(`/Profesional/${professional}`)}>{`Contacta un ${professional}`}</button>