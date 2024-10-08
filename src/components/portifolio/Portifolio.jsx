import React from 'react'
import './portifolio.css'
import IMG1 from "../../assets/product_list.png"
import IMG2 from "../../assets/news-homepage.png"
import IMG3 from "../../assets/nova.png"
import IMG4 from "../../assets/simple-youtube-clone.png"
import IMG5 from "../../assets/travelling-project.png"
import IMG6 from "../../assets/bank-landing.png"



//do not use the images in the production

const data = [
  {
  id:1,
  image: IMG1,
  title: "Product list ",
  github: "https://github.com/MuhirwaVerygood/front_product_list",
  demo:"https://front-product-list.vercel.app/"
},
  
  {
    id: 2,
    image: IMG2,
    title: "News Home page",
    github: "https://github.com/MuhirwaVerygood/news_homepage",
    demo: "https://news-homepage-amber.vercel.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Nova",
    github: "https://github.com/Mwungere/Frontend-Nova",
    demo: "http://194.163.167.131:3030/"
  },
  {
    id: 4,
    image: IMG4,
title:"Simplest youtube clone",
    github: "https://github.com/MuhirwaVerygood/youtube_clone/tree/main",
    demo: "https://youtube-clone-pearl-xi.vercel.app/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Travelling project homepage",
    github: "https://github.com/MuhirwaVerygood/travelling_project",
    demo:"https://travelling-project-nine.vercel.app/"
  },
  {
    id: 6,
    image: IMG6,
    title: "Bank Landing UI",
    github: "https://github.com/MuhirwaVerygood/travelling_project",
    demo:"https://bank-landing-ui.vercel.app/"
  },

]
const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>My portifolio</h5>
      <h2>What i have done</h2>
      <div className="portifolio_container">
        {
          data.map(({ id, title, image, github, demo }) => {
            return (
              <article className="portifolio_item" key={id}>
                <div className="portifolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portifolio_item-cta">
                  <a href={github} className='btn' target='_blank' >Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
     </div>
      
    </section>
  )
}

export default Portifolio