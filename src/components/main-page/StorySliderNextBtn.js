import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function StorySliderNextBtn() {
  const swiper = useSwiper();

  return (
    <button className="btnNext" onClick={() => swiper.slideNext()}><img src="../img/img_success/nextbtn.svg" alt="arrow" /></button>
  );
}