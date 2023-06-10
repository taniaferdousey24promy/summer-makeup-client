// import AwesomeSlider from "react-awesome-slider";
// import AwesomeSliderStyles from "react-awesome-slider/src/styles";
// import "react-awesome-slider/dist/custom-animations/cube-animation.css";

// const Banner = () => {
//   return (
//     <AwesomeSlider
//       animation="cubeAnimation"
//       className="h-[500px] mb-20 rounded"
//       cssModule={AwesomeSliderStyles}
//     >
//       <div data-src="https://i.ibb.co/b1dWrB4/portrait-woman-applying-make-up-with-make-up-brush.jpg">

//       </div>

//       {/* <div data-src="https://i.ibb.co/b1dWrB4/portrait-woman-applying-make-up-with-make-up-brush.jpg"></div>
//       <h3 className="text-4xl text-center uppercase -mt-16 text-white">
//         Soups
//       </h3>

//       <div data-src="https://i.ibb.co/b1dWrB4/portrait-woman-applying-make-up-with-make-up-brush.jpg"></div>
//       <h3 className="text-4xl text-center uppercase -mt-16 text-white">
//         Soups
//       </h3> */}
//     </AwesomeSlider>
//   );
// };

// export default Banner;

// import React from "react";

// const Banner = () => {
//   return (
//     <div className=" mb-96">
//       <swiper-container
//         class="mySwiper "
//         pagination="true"
//         pagination-clickable="true"
//         direction="vertical"
//         space-between="30"
//         mousewheel="true"
//       >
//         <swiper-slide>
//           <img
//             className="h-[600px] w-[2000px]"
//             src="https://i.ibb.co/b1dWrB4/portrait-woman-applying-make-up-with-make-up-brush.jpg"
//             alt=""
//           />
//           <div className="-mt-96">
//             <h3 className="text-4xl text-left uppercase  ml-20 text-white">
//               Summer Makeup Classes
//             </h3>
//           </div>
//         </swiper-slide>
//         <swiper-slide>
//           <img
//             className="h-[600px] w-[2000px]"
//             src="https://i.ibb.co/b1dWrB4/portrait-woman-applying-make-up-with-make-up-brush.jpg"
//             alt=""
//           />
//           <div className="-mt-96">
//             <h3 className="text-4xl text-left uppercase  ml-20 text-white">
//               Summer Makeup Classes
//             </h3>
//           </div>
//         </swiper-slide>

//       </swiper-container>
//     </div>
//   );
// };

// export default Banner;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <div className="mb-20">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-[700px] w-[2000px] me-40"
            src="https://i.ibb.co/rxHMfnX/front-view-young-attractive-female-white-t-shirt-smi-doing-make-up-pink-background.jpg"
            alt=""
          />

          <div className="   -mt-[600px] text-left   ml-40">
            <h3 className=" font uppercase text-5xl text-black-400 mb-8 font-bold ">
              2023
            </h3>
            <h3 className=" font uppercase text-5xl text-black-400 font-bold mb-8 ">
              Summer Camp
            </h3>

            <h3 className=" text-2xl font text-pink-800 mt-5 mb-12">
              Creativity and professional
            </h3>

            <div className="w-[500px]">
              <h3 className="mt-4  w-50">
                Welcome to our Summer Camp Makeup Classes! Get ready to enhance
                your skills, explore new techniques, and unleash your
                creativity. Join us for an unforgettable summer filled with
                makeup magic!
              </h3>
            </div>

            <h3 className=" font text-2xl text-black mt-4  mt-16">
              signup by 6-28, 2023
            </h3>
            <h3 className=" text-2xl font text-pink-800 mt-12 ">
            Hands-on & Live Demo Group Class
            </h3>
      
            <h3 className="  font  mt-5 mb-4">
            1-On-1 Session

            </h3>
         

            
            
          </div>
        </SwiperSlide>

        <SwiperSlide className=" brightness-75">
          <img
            className=" h-[700px] w-[2000px] me-40"
            src="https://i.postimg.cc/NFtrX9S4/318045-1600x1067-applying-lip-gloss.jpg"
            alt=""
          />

          {/* <div className=" bg-black text-white bg-opacity-50 p-4  -mt-[600px] text-left   ml-40"> */}
          <div className="m-4 absolute bottom-10 left-20 right-30 top-10 px-4 py-2 bg-gray-800 opacity-70">
            <div className=" mt-8 mx-8 font uppercase  text-white mb-8 font-bold">
              <h1 className="text-2xl">Offline Course on</h1>

              <br />
              <h1 className="text-2xl">Self Make-up</h1>
              <br />

              <h1 className="lowercase">by write your name here</h1>
              <h1 className="mt-12">Content</h1>

              <ul className=" lowercase list-disc pl-6">
                <li>Skin Preparation</li>
                <li>Application Strategies</li>
                <li>Bases</li>
                <li>Illumination</li>
                <li>Loose Powder</li>
                <li>Contouring</li>
                <li>Eye Makeup</li>
              </ul>

              <p className=" mt-12 lowercase">
                Makeup-classes | www.youwhere.com
              </p>
              <p className="lowercase">
                Free makeup classes flyer template from EDIT.org
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="brightness-75c">
          <img
            className=" h-[700px] w-[2000px] me-40"
            src="https://i.ibb.co/6P1jwMf/friends-getting-ready-drag-show-23-2149490841.jpg"
            alt=""
          />

          <div className="m-4 absolute bottom-10 left-30 right-20 top-10 px-4 py-2 bg-gray-800 opacity-70">
            <div className=" mt-8 mx-8 font uppercase  text-white mb-8 font-bold">
              <h1 className="text-3xl">Beginners <br /> <h1 className="mt-8">1.0</h1> </h1>

              <br />
              <h1 className="text-2xl">the 20-minute face</h1>
              <br />

              {/* <h1 className="lowercase">by write your name here</h1> */}
              <h1 className="mt-12 text-cyan-400">Skin prep</h1>
              <h1 className="lowercase">Lorem ipsum dolor sit amet.</h1>

              <h1 className="mt-12 text-cyan-400">Foundation</h1>
              <h1 className="lowercase">Lorem ipsum dolor sit amet.</h1>

              <h1 className="mt-12 text-cyan-400" >Highlight</h1>
              <h1 className="lowercase">Lorem ipsum dolor sit amet.</h1>



              

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
