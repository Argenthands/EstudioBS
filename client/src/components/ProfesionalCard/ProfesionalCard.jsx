import './ProfesionalCard.css'


export default function ProfesionalCard({props}) {
    const { nombre, profesion, imagen } = props
    console.log(props)

    return (
        <div ProfesionalCard>    
            <h3>{nombre}</h3>
            <img className='CarouselImg' src={require(`../SlideShow/img/${imagen}`)} alt={nombre} />
            <p>{profesion}</p>
        </div>
    )
}
