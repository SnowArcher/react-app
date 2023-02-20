import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import SlideNextButton from "./SlideNextButton";

function Wrapper() {
    return (
        <div className="bk-slider">
            <Swiper
                loop={true}
                //autoHeight={true}
                slidesPerView={1.2}
                effect={"creative"}
                creativeEffect={{
                prev: {
                    translate: ["240%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
                }}
                modules={[EffectCreative]}
            >
                <SwiperSlide><img src="../img/header-slider/1.png" alt="sl" /></SwiperSlide>
                <SwiperSlide><img src="../img/header-slider/2.png" alt="sl" /></SwiperSlide>
                <SwiperSlide><img src="../img/header-slider/3.png" alt="sl" /></SwiperSlide>
                <SwiperSlide><img src="../img/header-slider/4.png" alt="sl" /></SwiperSlide>
                <SwiperSlide><img src="../img/header-slider/5.png" alt="sl" /></SwiperSlide>
                <SlideNextButton />
            </Swiper>       
        </div>
    );
}

export default Wrapper;