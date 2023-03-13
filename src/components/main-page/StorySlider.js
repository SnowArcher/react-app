import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import StorySliderNextBtn from "./StorySliderNextBtn";
import StorySliderPrevBtn from "./StorySliderPrevBtn";

function StorySlider({src}) {
    return (
        <div className="story-card__slider">
            <Swiper
                loop={true}
                pagination={true} 
                modules={[Pagination]}>
                <StorySliderNextBtn />
                <StorySliderPrevBtn />
                {
                    src.forEach((value, index) => {
                        return <SwiperSlide key={index}><img src={value} alt="slide" /></SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default StorySlider;