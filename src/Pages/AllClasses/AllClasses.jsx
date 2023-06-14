import React from "react";
import useClasses from "../../hooks/useClasses";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const AllClasses = () => {
  const [classes] = useClasses();
  const [, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const approved = classes.filter(
    (singleClass) => singleClass.status === "approved"
  );
  const handleAddToCart = (singleClass) => {
    const {
      _id,
      className,
      classPicture,
      price,
      studentNumber,
      instructorName,
      instructorImage,
      instructorEmail,
      availableSeats,
      status,
    } = singleClass;
    console.log(singleClass);
    if (user && user.email) {
      const cartSingleClasses = {
        className,
        classPicture,
        price,
        studentNumber,
        instructorName,
        instructorImage,
        instructorEmail,
        availableSeats,
        status,
        email: user.email,
      };
      fetch(
        "https://summer-makeup-server-taniaferdousey24promy.vercel.app/carts",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cartSingleClasses),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to buy our courses",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          //here
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
                  <NavLink to="/dashboard/mycart">
                    <button
                      onClick={() => handleAddToCart(singleClasses)}
                      className="btn mx-auto mt-5 w-[450px] btn-primary"
                    >
                      Add to cart
                    </button>
                  </NavLink>
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
