import { ReactComponent as Hi} from "./hi.svg";
import './About.css';

const About = () => {
  return (
    <>
      <svg width='0' height='0'>
        <clipPath id='avatar-clip' clipPathUnits='objectBoundingBox'>
          <circle cx='0.5' cy='0.5' r='0.5'/>
        </clipPath>
      </svg>

      <div className='flex-container'>
        <div className='splash'>
          <div className='avatar-container'>
            <img
              className='avatar'
              alt='Portrait Photo of Cassandra May'
              src='ass_scream.png'
            />
          </div>
          <Hi className='hi'/>
        </div>
        <div className='profile'>
          <p>I'm a design-literate full stack web developer, with a focus on React and Node.
             I used to write firmware and simulators for <a href='https://www.broadcom.com/products/broadband/xdsl/bcm65450'>DSL transceivers</a>, and before that I did R&D at a 3D printing startup.
             I enjoy making generative art and hacking about with old synthesizers. I also have a <a href='cass_may_cv_2022.pdf'>CV</a>.</p>
          <p>I decided to move from embedded systems into web development because I wanted more of an opportunity for creative expression in my work, and to be perfectly honest I wanted a job with better portability.
             Thanks to the years I've spent way down the stack at OSI layer 2, I have a very well developed understanding of networked systems and a lot of experience with scripting and test automation, and that's definitely given me a boost as far as back-end work is concerned.</p>
          <p>I live in Brighton in the UK, and <a href='vincent.jpg'>my cat</a> likes to sit on my headrest while I work.</p>
        </div>
      </div>
    </>
  )
}

export default About;