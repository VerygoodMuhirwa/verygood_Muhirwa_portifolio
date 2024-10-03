import React from 'react'
import "./testimonials.css"
import Client1 from "../../assets/isite.png"
import Client2 from "../../assets/souvenir.png"
import Client3 from "../../assets/elite.png"
import Client4 from "../../assets/stanley.png"
import Client5 from "../../assets/verygood image.jpg"
import {  Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {

  const data = [
    {
      avatar: Client1,
      name: "ISITE Yves",
      review: "Working with Verygood Muhirwa has been a transformative experience. He built a stunning e-commerce platform for my business, and what impressed me the most was his attention to detail and commitment to delivering a high-quality product. The website is not only visually appealing but also highly functional, increasing my sales significantly."
    },
    {
      avatar: Client2,
      name: "TURINUMUGISHA Souvenir",
      review: "As a close relative, I’ve seen Verygood's passion firsthand, but seeing it reflected in the incredible web application he built for me was another story entirely. His ability to understand my needs and turn them into a seamless e-commerce solution has been instrumental in boosting my online business. Verygood is truly gifted!"
    },
    {
      avatar: Client3,
      name: "MWUNGELE Elite",
      review: "Verygood's technical expertise shines through every project he touches. He developed an e-commerce site that is both fast and responsive. His clear communication and ability to integrate advanced features have made managing my online store effortless and efficient. Truly, a fantastic developer!"
    },
    {
      avatar: Client4,
      name: "MWIZERWA Stanley",
      review: "I’ve worked with many developers before, but Verygood stands out because of his innovative approach. He didn’t just build me a website; he crafted a solution that is tailored to my business needs, incorporating features that I hadn’t even thought about. His ability to think ahead makes him an exceptional full-stack developer!"
    }
  ];
  

  return (
    <section id='testimonials'>

      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container"

        //install Swipper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidePerView={1}
        pagination={{clickable:true}}
>
      {data.map(({ avatar, review, name },index) => {
        return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="First client" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className='client_review'>{review} </small>
            </SwiperSlide>
      )
    })}
          </Swiper>

    </section>
  )
}

export default Testimonials