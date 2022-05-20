import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export const TestCarousel = () => {
  return (
    <Swiper navigation speed={500} slidesPerView={3} spaceBetween={20}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
  );
}
