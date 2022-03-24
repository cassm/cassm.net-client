import { ReactComponent as Hi} from "./hi.svg";
import './About.css';
import {useState} from "react";

const About = () => {
  const [currentPic, setCurrentPic] = useState('ass_scream.png');

  const updatePic = to => () => {
    setCurrentPic(to);
  }

  const createLink = (text, href, picRef) => {
    return (
      <a onMouseEnter={updatePic(picRef)} onMouseLeave={updatePic('ass_scream.png')} href={href}>{text}</a>
    )
  }

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
              src={currentPic}
            />
          </div>
          <Hi className='hi'/>
        </div>
        <div className='profile'>
          <p>I'm a design-literate full stack web developer, with a focus on React and Node. I used to write firmware and simulators for {createLink('DSL transceivers', 'https://www.broadcom.com/products/broadband/xdsl/bcm65450', 'bcm65450.png')} and before that I did R&D at a 3D printing startup.
           I enjoy making generative art and hacking about with old synthesizers. I also have a {createLink('CV', 'cass_may_cv_2022.pdf', 'cv.png')}.</p>
          <p>I decided to move from embedded systems into web development because I wanted more of an opportunity for creative expression in my work, and to be perfectly honest I wanted a job with better portability.
             Thanks to the years I've spent way down the stack at OSI layer 2, I have a very well developed understanding of networked systems and a lot of experience with scripting and test automation, and that's definitely given me a boost as far as back-end work is concerned.</p>
          <p>I live in Brighton in the UK, and {createLink('my cat', 'vincent.jpg', 'vincent_square.png')} likes to sit on my headrest while I work.</p>
        </div>
      </div>
    </>
  )
}

export default About;