import './contact.css'
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import {FaLinkedin  } from "react-icons/fa";

export const Contact = () => {
  return (
    <div id='contact'>
      <h2 className='subtitles'>Contact</h2>
      <p className='p'>You can find me here</p>
      <div className='contactContainer'>
        <div className='contactItems'>
          <i><BsFillTelephoneFill/></i>
          <p>+ 54 2645109171</p>
        </div>
        <div className='contactItems'> 
          <i><IoMdMail style={{color:'#c2c2c2'}}/></i>
          <p>mateoalvarez384@gmail.com</p>
          </div>
        <div className='contactItems'>
          <i><FaLinkedin style={{color:'#0e76a8'}}  /></i>
          <p>Mateo Alvarez</p>
        </div>
      </div>
    </div>
  )
}
