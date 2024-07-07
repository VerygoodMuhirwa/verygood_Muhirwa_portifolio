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
                  <p>I have 8+ years of experience working as a software developer and have recently have been working with more than 5 companies. <br /> I am currently seeking employement with a fast-growing company or a rapid paced startup. I mostly do Javascript and it's frameworks. TypeScript, PHP, and it's Frameworks and other modern web technologies </p>
                  <a href="#contact" className='btn btn-primary first-btn'> Let's talk</a>
              </div>
          </div>
    </section>
  )
}

export default About