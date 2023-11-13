import './about.css'


export const About = () => {
  return (
    <>
    <div id='about'>
      <h2 className='subtitles'>About Me</h2>
      <div  className='aboutContainer' >
      <h3>Backend Developer</h3>
        <p>As a developer, I highlight my solid experience in <span>building infrastructures and implementing logics</span> that support the optimal functioning of systems. My focus on detail and ability to translate ideas into code allow me to create efficient <span>solutions</span>. I have demonstrated these skills in several projects, where I have worked with cutting-edge technologies such as <span>Java, SpringBoot, MySQL and Docker</span>. My experience is not only limited to the back-end, as I also have skills in full-stack development, excelling in <span>React</span>.</p>
      </div>
      <div className='button'>
        <a href='#contact'><button>Contact</button></a>
      </div>
    </div>
    </>
  )
}
