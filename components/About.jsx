import React from 'react'
import { AiFillCloseCircle, AiOutlineFileDone, AiOutlineFileSearch, AiOutlineProject } from 'react-icons/ai'
import { FaReact, FaServer } from 'react-icons/fa'
import { BsStackOverflow } from 'react-icons/bs'

const About = ({ handleAboutModal }) => {
  return (
    <div className='popup'>
        <p onClick={handleAboutModal} className='close-popup'><AiFillCloseCircle fontSize='large'/></p>
        <div style={{textAlign: 'center'}}>
            <h1 className='info-title'><AiOutlineFileDone/>&nbsp;About me</h1>
            <p className='info-text'>
            Currently a 4th year student at California State University, Fullerton completing my Bachelors of Science in Computer Science degree. I&apos;m interested in a back-end engineering, front-end engineering, full-stack, web application development. My favorite programming language right now is Javascript. I really enjoy writing REST API using Node.js. Im always open to discuss/talk about these technologies anytime. Side note I love watching soccer on my free time and play the guitar
            </p><br/>
            <h1 className='info-title'><AiOutlineFileSearch/>&nbsp;Experience</h1>
            <p className='info-text'>I have experience working on full-stack using various different technology in this universe. Visit my github profile for more information on my projects</p><br/>
            <h1 className='info-title'><AiOutlineProject/>&nbsp;Skill</h1><br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{marginLeft: '15px'}}>
                    <FaReact className='about-icons' style={{color: 'pink'}}/>
                    <h3 className='skills-text'>React</h3>
                    <h3 className='skills-text'>Bootstrap</h3>
                    <h3 className='skills-text'>Next.js</h3>
                    <h3 className='skills-text'>tailwind</h3>
                </div>
                <div>
                    <FaServer className='about-icons' style={{color: 'white'}}/>
                    <h3 className='skills-text'>Flask</h3>
                    <h3 className='skills-text'>Node.js</h3>
                    <h3 className='skills-text'>Express.js</h3>
                    <h3 className='skills-text'>Springboot</h3>
                    <h3 className='skills-text'>MySQL</h3>
                    <h3 className='skills-text'>MongoDb</h3>
                    <h3 className='skills-text'>Django</h3>                    
                </div>
                <div style={{marginRight: '15px'}}>
                    <BsStackOverflow className='about-icons' style={{color: 'orange'}}/>
                    <h3 className='skills-text'>C++</h3>
                    <h3 className='skills-text'>Javascript</h3>
                    <h3 className='skills-text'>Python</h3>
                    <h3 className='skills-text'>AWS</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About