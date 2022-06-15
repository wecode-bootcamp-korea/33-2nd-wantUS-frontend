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

const HeaderCarousel = () => {
  return (
    <Swiper
      slidesPerView={1.5}
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
        <Description />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="/images/DetectiveComics.jpg" alt="기업사진" />
        <Description />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="/images/Disney.jpg" alt="기업사진" />
        <Description />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="/images/ducktoy.jpg" alt="기업사진" />
        <Description />
      </SwiperSlide>
    </Swiper>
  );
};

const Img = styled.img`
  height: 20rem;
  width: 100%;
  border: 1px solid black;
  object-fit: cover;
  position: relative;
`;

const Description = styled.div`
  background-color: white;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  width: 20rem;
  height: 5rem;
`;

export default HeaderCarousel;
