import React from 'react'
import "./about.css"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import ME from "../../assets/verygood image.jpg"
const About = () => {
  return (
      <section id='about'>
          <h5>Get To Know </h5>
          <h2>About Me</h2>
          <div className="container about_container">
              <div className="about_me">
                  <div className="about_me-image">
                      <img src={ME} alt="About Image" />
                  </div>
              </div>
              <div className="about_content">
                  <div className="about_cards">
                      <article className='about_card'>
                         <FaAward className='about_icon'/>
                          <h5>Experience</h5>
                          <small>3+ Years Working </small>
                      </article>

                      <article className='about_card'>
                          <FiUsers className='about_icon' />
                          <h5>Clients</h5>
                          <small>200+ Worldwide  </small>
                      </article>

                      <article className='about_card'>
                          <VscFolderLibrary className='about_icon' />
                          <h5>Projects</h5>
                          <small>80+ Completed</small>
                      </article>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe doloribus dignissimos repellat quo ab, voluptatem numquam consequatur, ipsum voluptate officia vitae. Amet harum non quis obcaecati nulla error minima?</p>
                  <a href="#contact" className='btn btn-primary first-btn'> Let's talk</a>
              </div>
          </div>
    </section>
  )
}

export default About