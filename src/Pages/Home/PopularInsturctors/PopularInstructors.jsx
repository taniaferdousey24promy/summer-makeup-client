import { useEffect, useState } from "react";
import { useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import './PopularInstructor.css'
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
    <div>
              <h1 className="uppercase text-3xl text-center mb-12 font-bold">
        Achieve your goals with our Popular Classes
      </h1>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
              className=" ms-20 h-[300px] w-[350px]"
              src={singleClass.classPicture}
              alt=""
            />
            <h3 className=" uppercase text-center text-black-400 mb-16  font-bold ">
              {singleClass.className}
            </h3>
          </SwiperSlide>
        ))}


      </Swiper>
      
    </div>
  );
};

export default PopularInstructors;
