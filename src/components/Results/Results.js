import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import arrow from "../../../src/images/Arrows---Copy_orrange.png";
import results from "../../../src/images/1.png";
import results2 from "../../../src/images/2.png";
import results3 from "../../../src/images/3.png";
import results4 from "../../../src/images/4.png";
import results5 from "../../../src/images/5.png";
import results6 from "../../../src/images/6.png";
import Horizontal from "../Horizontal/Horizontal";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

import "swiper/components/navigation/navigation.min.css";
import { useState } from "react";

// install Swiper components
SwiperCore.use([Pagination, Navigation, Autoplay]);
const Results = () => {
    const [number, setNumber] = useState(2);
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", (event) => {
                var w = window.innerWidth;
                if (w < 720) {
                    setNumber(1);
                } else {
                    setNumber(2);
                }
            });
        }
    });
    return (
        <div className="results">
            <div className="__results__top" data-aos="fade-up">
                <h2>Client Results</h2>
            </div>
            <div className="__results__img" data-aos="fade-up">
                <img src={arrow} alt="" />
            </div>

            <div className="__results__bottom__img">
                <Swiper
                    navigation
                    Autoplay={true}
                    spaceBetween={50}
                    slidesPerView={number}
                >
                    <SwiperSlide>
                        <img src={results} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={results2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={results3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={results4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={results5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={results6} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div data-aos="fade-up">
                <Horizontal></Horizontal>
            </div>
        </div>
    );
};

export default Results;
