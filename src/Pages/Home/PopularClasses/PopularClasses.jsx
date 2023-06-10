import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import "./PopularClasses.css";
const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        const popularClasses = data.filter(
          (popular) => popular.studentNumber >= 8
        );
        setClasses(popularClasses);
      });
  }, []);
  console.log(classes);
  return (
    <>
      <h1 className="uppercase text-3xl text-center mb-12 font-bold">Achieve your goals with our Popular Classes</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {classes.map((singleClass) => (
          <SwiperSlide
            key={singleClass.id}
            singleClass={singleClass}
            className="custom"
          >
            <img
              className="h-[300px] w-[350px]"
              src={singleClass.classPicture}
              alt=""
            />
            <h3 className=" uppercase text-center text-black-400 mb-16  font-bold ">
              {singleClass.className}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default PopularClasses;