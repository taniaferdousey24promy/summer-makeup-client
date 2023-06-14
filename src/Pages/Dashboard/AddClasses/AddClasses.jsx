import React from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClasses = () => {
    const [axiosSecure]=useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


  const onSubmit = data =>{
    console.log(data)
    const formData = new FormData();
    formData.append('image', data.classPicture[0])
    fetch(img_hosting_url,{
        method:'POST',
        body:formData
    })
    .then(res=> res.json())
    .then(imgResponse =>{
        console.log(imgResponse)
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {className,classPicture,studentNumber,instructorName,instructorImage,instructorEmail,availableSeats,category,status,price}=data;
            const newClass = {className,classPicture:imgURL,studentNumber:parseInt(studentNumber),instructorName,instructorImage:imgURL,instructorEmail,availableSeats:parseInt(availableSeats),category,status,price:parseFloat(price)}
            console.log(newClass)
            axiosSecure.post('/allclasses' ,newClass)
            .then(data => {
                console.log('after posting new menu item', data.data)

                if(data.data.insertedId){

                    reset();
                    
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }})
        }
    })
    //const formData = new FormData();
    //formData.append('classPicture', data.classPicture[0])
   
    // fetch(img_hosting_url,{
    //     method:'POST',
    //     body: formData
    // })
    // .then(res=> res.json())
    // .then(imgResponse =>{
    //     console.log(imgResponse)
    // })
  };
  console.log(errors);
  console.log(img_hosting_token)

  const { user } = useAuth(AuthContext);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full   ">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("className", {required: true, maxLength: 80})} 
            className="input input-bordered w-full   "
          />
        </div>

        <div className="form-control w-full   ">
          <label className="label">
            <span className="label-text font-semibold">Category*</span>
          </label>
          <select defaultValue="Pick One" {...register("category", { required: true })} 
           className="select select-bordered">
            <option>Pick One</option>
            <option>Eye Makeup</option>
            <option>Natural Makeup</option>
            <option>Contouring</option>
            <option>Introduction</option>
            <option>Bridal</option>
            <option>Smokey Eye</option>
            <option>Airbrush</option>
            <option>Editorial</option>
            <option>Special Effect</option>
            <option>Colorful</option>
          </select>
        </div>
        <div className="form-control w-full   ">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full   "
          />
        </div>
        <div className="form-control w-full   ">
          <label className="label">
            <span className="label-text font-semibold">Available Seats*</span>
          </label>
          <input
            type="number"
            {...register("availableSeats", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full   "
          />
        </div>
        <div className="form-control w-full   ">
          <label className="label">
            <span className="label-text font-semibold">Student Number*</span>
          </label>
          <input
            type="number"
            {...register("studentNumber", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full   "
          />
        </div>
        <div className="form-control w-full   ">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name</span>
          </label>
          <input
            type="text"
            defaultValue={user.displayName}
            readOnly
            {...register("instructorName", { required: true })}
            // placeholder="Type here"
            className="input input-bordered w-full   "
          />
        </div>
        <div className="form-control w-full   ">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email</span>
          </label>
          <input
            type="email"
            defaultValue={user.email}
            readOnly
            {...register("instructorEmail", { required: true })}
            // placeholder="Type here"
            className="input input-bordered w-full   "
          />
        </div>
        <div className="form-control w-full   ">
          <label className="label">
            <span className="label-text font-semibold">Current Status</span>
          </label>
          <input
            type="text"
            defaultValue="pending"
            readOnly
            {...register("status", { required: true })}
            // placeholder="Type here"
            className="input input-bordered w-full   "
          />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Course  Details</span>
          </label>
          <textarea
          {...register("details", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div> */}
        <div className="form-control  w-full   ">
          <label className="label">
          <span className="label-text">Class Picture*</span>          </label>
          <input type="file" {...register("classPicture", { required: true })} className="file-input file-input-bordered w-full " />

        </div>
        <div className="form-control  w-full   ">
          <label className="label">
          <span className="label-text">Instructor Picture*</span>          </label>
          <input type="file" {...register("instructorImage", { required: true })} className="file-input file-input-bordered w-full " />

        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />

      </form>
    </div>
  );
};

export default AddClasses;