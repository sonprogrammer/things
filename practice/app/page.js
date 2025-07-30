'use client'

import Image from "next/image";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Virtual } from 'swiper/modules'
import 'swiper/css'
import { delay } from "framer-motion";
export default function Home() {
  const images = [
    '/버스.png',
    '/버스2.png',
    '/해바라기.png',
    '/air.png',
    '/alogo.png',
    '/bg.png',
  ];

  // 이미지를 2번 반복 (무한 슬라이드 원활히 하려면 2번만 해도 충분)
  const extendedImages = [...images];

  const slideTrackRef = useRef(null);

  const slides = Array.from({ length: 5 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  slidesPerView={"auto"}
  spaceBetween={30}
  loop={true}
  speed={8000} // 천천히 흘러가듯
  autoplay={{
    delay: 0, // 지연 없음
    disableOnInteraction: false,
  }}
  allowTouchMove={false}
  modules={[Autoplay]}
  className="mySwiper"
  style={{ height: "300px" }}
>
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            style={{ width: "48%", display: "flex", justifyContent: "center" }}
          >
            <img
              src={src}
              alt={`slide-${idx}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
          column-gap: 30px;
        }
        .swiper-slide:hover {
          transform: translateY(30px);
          transition: transform 0.3s;
        }
      `}</style>
    </>

  );
}
