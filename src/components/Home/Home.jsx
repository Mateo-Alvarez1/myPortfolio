import './home.css'
import {FaLinkedin , FaGithub  } from "react-icons/fa";
import me from '../../assets/YO - 2.jpg'

export const Home = () => {
  return (
    <div id='home' className='homeContainer'>
      <div className='homeContainerMe'>
        <div className='homeContainerText'>
            <h1><span>Backend Java</span><br/> Developer .</h1>
            <p>Hi , i`m <span style={{color:'#9465da' , fontWeight:"bold"}}>Mateo Alvarez.</span><br/>Backend Developer from San Juan , Argentina</p>
            <div className='homeContainerIcons'>
                <a href='https://www.linkedin.com/in/mateoaalvarez/' target='blank'><FaLinkedin style={{color:'#0e76a8'}} /></a>
                <a href='https://github.com/Mateo-Alvarez1'target='blank' ><FaGithub style={{color:'#17151c'}}  /></a>
            </div>
  
      </div>
      <a href="https://github.com/Mateo-Alvarez1"><img src={me} alt="" /></a>
        
      </div> 
    </div>
  )
}
