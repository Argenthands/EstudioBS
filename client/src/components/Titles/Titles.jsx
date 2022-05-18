
import './Titles.css'

export default function Titles({ text }) {
    const title = text.split(' ')

    return (
        <div >
            {title.map((title, index) => (
                <div className='Container_Title' key={index}>
                    <h2 className="border">{title}</h2>
                    <h2 className="wave">{title}</h2>
                </div>
            ))}
        </div>
    )
}
