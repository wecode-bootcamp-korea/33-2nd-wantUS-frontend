import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper';
import styled from 'styled-components';

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={3}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Img src="/images/cartoy.jpg" alt="기업사진" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="/images/DetectiveComics.jpg" alt="기업사진" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="/images/Disney.jpg" alt="기업사진" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="/images/ducktoy.jpg" alt="기업사진" />
      </SwiperSlide>
    </Swiper>
  );
};

const Img = styled.img`
  height: 30rem;
  width: 100%;
  object-fit: cover;
`;

export default Carousel;
