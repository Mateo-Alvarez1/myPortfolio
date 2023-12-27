import './Projects.css'
import dental from '../../assets/dentalClinic.png'
import rental from '../../assets/rental.png'


const projects = [
    {
        id: Math.random()*3 ,
        name: "Dental Clinic" ,
        description:"Patient shift management system " , 
        github: "https://github.com/Mateo-Alvarez1/DentalClinic",
        img: dental,
    },
    {
        id: Math.random()*3 ,
        name: "Rental Instruments" ,
        description:"Instrument reservation system, customer and product management" , 
        github: "https://github.com/Mateo-Alvarez1/ProyectoIntegrador-Grupo6",
        img: rental,
    }

]

export const Projects = () => {
  return (
    <div id='project' >
        <h2 className='subtitles'>Projects</h2>
       {
        projects.map( item => (
            <div className='cardsContainer' key={item.id}>
                <div className='card'>
                    <div className='cardText'>
                        <h3 className='subtitles'>{item.name}</h3>
                        <p>{item.description}</p>
                        <div className='buttons'>
                        <a href={item.github} target='blank'> <button>Github</button></a>
                        </div> 
                    </div>
                <div>
                    <img src={item.img} alt='imgProject' />
                </div>
                </div>

            </div>
        ))
       }
    </div>
  )
}
