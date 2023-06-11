import { useEffect, useState } from "react";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./PopularInstructor.css";
// import required modules
import { FreeMode, Pagination } from "swiper";
const PopularInstructors = () => {
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
    <div className="mb-20">
      <h1 className="uppercase text-3xl text-center mb-20 font-bold">
        Popular Instructors{" "}
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={2}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {classes.map((singleClass) => (
          <SwiperSlide
            key={singleClass.id}
            singleClass={singleClass}
            className="custom "
          >
            <img
              className="rounded-xl ms-24 h-[200px] w-[200px]"
              src={singleClass.instructorImage}
              alt=""
            />
            <h3 className=" uppercase text-center text-black-400 mb-16  font-bold ">
              {singleClass.instructorName}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularInstructors;
