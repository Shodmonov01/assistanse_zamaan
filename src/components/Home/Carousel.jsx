import React from 'react'
import '../../Styles/Carousel.css'
import car_img__1 from "../../Images/Carousel/02.jpg";
import car_img__2 from "../../Images/Carousel/03.jpg";
import car_img__3 from "../../Images/Carousel/01.jpg";
import Swiper from '../../Pages/Swiper/Swiper';
export default function Carousel() {
  return (
    <section className='Carousel' data-aos="fade-up" data-aos-duration="1000">
      <Swiper carousel={car_img__1} carousel2={car_img__2} carousel3={car_img__3}/>
    </section>
  )
}
