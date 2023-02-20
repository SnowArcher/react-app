import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className="btnNext" onClick={() => swiper.slideNext()}><img src="../img/arrow_h.svg" alt="arrow" /></button>
  );
}