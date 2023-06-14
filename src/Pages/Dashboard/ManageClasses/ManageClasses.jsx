import useClasses from "../../../hooks/useClasses";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const [allClasses, , refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();

  const { data: allclasses = [] } = useQuery(["allClasses"], async () => {
    const res = await axiosSecure.get("/allclasses");
    return res.data;
  });

  const handleApproved = (singleClasses) => {
    axiosSecure(`/allclasses/${singleClasses._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {

          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              refetch();

              axiosSecure
                .patch(`/allclasses/${singleClasses._id}`)
                .then((res) => {
                  console.log("deleted res", res.data);
                });
            }
          });
        }
      });
  };
  const handleDenied = (singleClasses) => {
    axiosSecure(`/allclasses/${singleClasses._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {

          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
            

              axiosSecure
                .patch(`/allclasses/${singleClasses._id}`)
                .then((res) => {
                  console.log("deleted res", res.data);
                  refetch();
                });
            }
          });
          
        }
        else{
          refetch();
        }
      });
  };

  
  return (
    <div>
      <h1>admin manager</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Picture</th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th className="text-center">Status</th>
              <th className="text-center">Instructor Email</th>
              <th className="text-center">Approve</th>
              <th className="text-center">Deny</th>
              <th className="text-center">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {allClasses.map((singleClasses, index) => (
              <tr key={singleClasses._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={singleClasses.classPicture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{singleClasses.className}</td>
                <td className="text-center">{singleClasses.availableSeats}</td>
                <td className="text-center">{singleClasses.price}</td>
                <td className="text-center">{singleClasses.status}</td>
                <td className="text-center">{singleClasses.instructorEmail}</td>

                <td>
                  {" "}
                  {singleClasses.status === "approved" ? (
                    <button disabled className=" btn bg-pink-400 btn-xs">
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => handleApproved(singleClasses)}
                      className="btn bg-pink-400 btn-xs"
                    >
                      Approve
                    </button>
                  )}
                </td>

                <td>
                  {singleClasses.status === "denied" ? (
                    <button disabled className=" btn bg-pink-400 btn-xs">
                      Denied
                    </button>
                  ) : singleClasses.status === "approved" ? (
                    <button disabled className=" btn bg-pink-400 btn-xs">
                      Deny
                    </button>
                  ) : (
                    <button
                      onClick={() => handleDenied(singleClasses)}
                      className="btn bg-pink-400 btn-xs"
                    >
                      Deny
                    </button>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleFeedback(singleClasses)}
                    className="btn bg-pink-400 btn-xs"
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;