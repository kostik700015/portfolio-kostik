import React from 'react'

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import './About.css'
import PageHeader from './../PageHeader/PageHeader'
import me from '../../me2.jpg'

const About = () => {
  return (
    <div className='about-wrapper' id='about'>
      <PageHeader title={'About me'}/>
      <div className='about-container'>
        <div className='text'>
          <h2>
            Hi, I'm Konstantin Shevtsov!
          </h2>
          <p>
            I love to create awesome websites and transform ideas into reality using 
          JavaScript and Ruby on Rails.
          </p>
        </div>
        <div className='photo'>
          <img className='me' src={me} alt="Konstantin Shevtsov"></img>
        </div>
      </div>
    </div>
    
  )
}

export default About

