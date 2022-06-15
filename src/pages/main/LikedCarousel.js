import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';
import styled from 'styled-components';

const HeaderCarousel = () => {
  return (
    <Swiper
      slidesPerView={3}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      spaceBetween={30}
      centeredSlides={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Img src="/images/cartoy.jpg" alt="기업사진" />
        <LikedDescription>
          <LikedDescriptionTitle>프론트엔드 개발자</LikedDescriptionTitle>
          <LikedDescriptionCompany>오픈소스컨설팅</LikedDescriptionCompany>
          <LikedDescriptionLocation>서울/한국</LikedDescriptionLocation>
          <LikedDescriptionMoney>채용보상금 1,000,000원</LikedDescriptionMoney>
        </LikedDescription>
      </SwiperSlide>

      <SwiperSlide>
        <Img src="/images/DetectiveComics.jpg" alt="기업사진" />
        <LikedDescription>
          <LikedDescriptionTitle>프론트엔드 개발자</LikedDescriptionTitle>
          <LikedDescriptionCompany>오픈소스컨설팅</LikedDescriptionCompany>
          <LikedDescriptionLocation>서울/한국</LikedDescriptionLocation>
          <LikedDescriptionMoney>채용보상금 1,000,000원</LikedDescriptionMoney>
        </LikedDescription>
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
  height: 15rem;
  width: 100%;
  object-fit: cover;
  position: relative;
`;

const LikedDescription = styled.div``;
const LikedDescriptionTitle = styled.div``;
const LikedDescriptionCompany = styled.div``;
const LikedDescriptionLocation = styled.div``;
const LikedDescriptionMoney = styled.div``;

export default HeaderCarousel;
