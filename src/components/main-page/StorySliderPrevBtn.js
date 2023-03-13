import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function StorySliderPrevBtn() {
  const swiper = useSwiper();

  return (
    <button className="btnPrev" onClick={() => swiper.slidePrev()}><img src="../img/img_success/prevbtn.svg" alt="arrow" /></button>
  );
}