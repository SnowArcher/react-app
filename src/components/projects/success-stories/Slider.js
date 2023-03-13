import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import "./../../../scss/blocks/_slider.scss";
// import 'swiper/swiper-bundle.min.css';

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider({stories}) {
  return (
    <>
    <div className="slider_wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {stories.map((story)=>(
            <SwiperSlide key={stories.src}>
                <img src={story.src} alt="1"/>
            </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}