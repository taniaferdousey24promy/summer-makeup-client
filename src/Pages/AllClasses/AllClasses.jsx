import React from "react";
import useClasses from "../../hooks/useClasses";

const AllClasses = () => {
  const [classes] = useClasses();
  const approved = classes.filter(
    (singleClass) => singleClass.status === "approved"
  );
  return (
    <div className=" mb-20">
      <p className="mb-12 mt-20 text-center text-4xl">
        Available Makeup Courses
      </p>

      <div className=" grid  grid-cols-3 gap-20  ">
        {approved.map((singleClasses) => (
          <div
            className=""
            key={singleClasses._id}
            singleClasses={singleClasses}
          >
            <div className="card w-[500px] h-[500px] bg-base-100 shadow-xl">
              <figure>
                <img src={singleClasses.classPicture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {singleClasses.className}!
                  <div className="badge badge-secondary">APPROVED</div>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, facere.?
                </p>
                <div className="flex gap-5  ">
                  <p className="card-title">
                    Price : <span>Only {singleClasses.price}</span>
                  </p>
                  <div className="badge mt-2 badge-outline">
                    Availbale seats {singleClasses.availableSeats}
                  </div>
                  <div className="badge  mt-2 badge-outline">
                    {" "}
                    by {singleClasses.instructorName}
                  </div>
                </div>

                <div className="card-actions justify-start">
                  {/* <div className="badge badge-outline">Weekly</div> */}

                  {/* <div className="badge badge-outline"> Price: {singleClasses.price}</div> */}
                  <button className="btn mx-auto mt-5 w-[450px] btn-primary">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
