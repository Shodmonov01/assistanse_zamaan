import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Swiper2 = ({carousel, carousel2, carousel3}) => {
  return (
    <div className="slayder2">
        <Swiper
         spaceBetween={30} centeredSlides={true} autoplay={{delay: 2500, disableOnInteraction: false,}}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide><img src={carousel} alt={carousel} /> </SwiperSlide>
        <SwiperSlide><img src={carousel2} alt={carousel2} /> </SwiperSlide>
        <SwiperSlide><img src={carousel3} alt={carousel3} /> </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Swiper2;
