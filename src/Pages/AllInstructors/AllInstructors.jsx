import React from "react";
import useClasses from "../../hooks/useClasses";
import { GiLipstick, GiEyelashes, GiLips } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import "./AllInstructors.css";

const AllInstructors = () => {
  const [classes] = useClasses();

  return (
    <div className="mb-32 ms-[400px] mt-52 ">
      {classes.map((singleClasses) => (
        <div
          className=""
          key={singleClasses._id}
          singleClasses={singleClasses}
        >
          <div className="hero   bg-base-100 mb-60 rounded-xl">
            <div className="hero-content flex-col lg:flex-row gap-0">
              <img
                src={singleClasses.instructorImage}
                className=" mt-40 img-content rounded-full h-[500px] w-[300px]  shadow-xl"
              />

              {/* div for writing */}
              <div className=" mt-8   w-[1000px] rounded h-[400px] ">
                <div className="white-background bg-base-300 mt-40">
                  <div className="mt-20 mb-20 font-bold content">
                    <span className="text-[#FA8072] text-5xl	">
                      Instructor of <br />
                      {singleClasses.className}
                    </span>
                    {/* <p className="text-black text-[14px] mt-5 mb-5">
                      a skilled professional who expertly enhances individuals'
                      appearances using cosmetic products. With a keen eye for
                      detail and a passion for creativity, they create stunning
                      looks tailored to each person's unique beauty. From
                      natural elegance to bold glamour.
                    </p> */}
                    <p className=" mt-5 text-3xl	">What I Offer</p>
                    <p className="mt-5 text-[20px]">
                      {/* <FaPaintBrush className=" ms-5 w-[40px] h-[40px]"></FaPaintBrush> */}
                      <br />
                      Weekly Classes
                      <br />
                    </p>
                    <p className="text-[14px]">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Similique perspiciatis laborum impedit?
                    </p>
                    <p className="text-[20px]">
                      {/* <GiLips className=" ms-5 w-[40px] h-[40px]"></GiLips> */}
                      <br />
                      Private Classes
                      <br />
                    </p>
                    <p className="text-[14px]">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Similique perspiciatis laborum impedit?
                    </p>
                    <p className="text-[20px]">
                      {/* <GiLips className=" ms-5 w-[40px] h-[40px]"></GiLips> */}
                      <br />
                      Seasonal  Retreats
                      <br />
                    </p>
                    <p className="text-[14px]">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     
                    </p>
                    <p className="text-[20px] mt-5"> Contact Information <br /><span className="text-[14px]"> {singleClasses.instructorEmail}</span> </p>
                  </div>

                  <div className="flex py-6 gap-4 ">
                    <p className="text-transparent">
                      Gain confidence in your makeup skills and unlock your
                      creativity with personalized guidance and exclusive
                      bonuses.
                    </p>
                  </div>
                </div>
                {/* <button className="m-4 btn bg-[#FA8072]">Buy Now</button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllInstructors;