import React from "react";
import useClasses from "../../hooks/useClasses";
import { GiLipstick,GiEyelashes } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";

const AllInstructors = () => {
  const [classes] = useClasses();

  return (
    <div>
      {classes.map((singleClasses) => (
        <div className="mt-20" key={singleClasses._id} singleClasses={singleClasses}>
          <div className="hero  bg-base-100 mb-20 rounded-xl">
            <div className="hero-content flex-col lg:flex-row gap-0">
              <img
                src={singleClasses.instructorImage}
                className=" rounded-full  shadow-xl"
              />
              <div className=" w-[1000px] bg-base-300 rounded h-[400px] p-12">
                <h1 className="text-4xl font-bold">
                  <span className="text-[#FA8072]	">{singleClasses.instructorName}</span> on {singleClasses.className}!
                </h1>

                <div className="flex py-6 gap-2 ">
                  <GiEyelashes className="mt-2 w-24 h-24 "></GiEyelashes>
                  <p>
                    {" "}
                    <span className="font-bold">
                      {" "}
                      What I Offer :
                    </span>{" "}
                    a skilled professional who expertly enhances individuals' appearances using cosmetic products. With a keen eye for detail and a passion for creativity, they create stunning looks tailored to each person's unique beauty. From natural elegance to bold glamour, the makeup artist brings out the best features, making clients look and feel their absolute best.
                  </p>
                </div>
                <div className="flex py-6 gap-4 ">
                  <FaPaintBrush className="mt-2 w-12 h-12 "></FaPaintBrush>
                  <p>
                    {" "}
                    <span className="font-bold">
                      {" "}
                      Exclusive bonuses: :
                    </span>{" "}
                    Gain confidence in your makeup skills and unlock your
                    creativity with personalized guidance and exclusive bonuses.
                  </p>
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
