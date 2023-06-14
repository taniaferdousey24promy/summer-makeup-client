import React from 'react';
import useCart from '../../../hooks/useCart';
import { stringify } from 'postcss';
import {FaMoneyBillWave, FaTrashAlt} from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart,refetch]=useCart();
    console.log(cart);
    const total= cart.reduce((sum,singleClasses)=> 
    parseFloat(singleClasses.price) + sum, 0);

    const handleDelete =singleClasses=>{
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
              fetch(`http://localhost:5000/carts/${singleClasses._id}`, {
                method: "DELETE"
              })
                .then(res => res.json())
                .then(data => {
                  if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  }
                });
            }
          });
        };
      
    
    return (
        <div>
            <div>
            <h3>Total Items : {cart.length}</h3>
            <h3>Total Items : {cart.length}</h3>
            <h3>Total Price : {total}</h3>
            <button className='btn btn-sm bg-[#FF69B4]'>Pay</button>
        </div>
        <div className='overflow-x-auto'>
            <table className='table'>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class</th>
                        <th>ClassName</th>
                        <th>Price</th>
                        <th>Instrutor Name</th>
                        <th>Available Seats</th>
                        <th> Delete Action</th>
                        <th> Pay Action</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((singleClasses,index)=>(
                            <tr key={singleClasses._id}>
                                <td>{index +1 }</td>
                                <td>
                                    <div className='avatar'>
                                        <div className='mask mask-squircle w-12 h-12'>

                                            <img src={singleClasses.classPicture} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {singleClasses.className}
                                </td>
                                <td className='text-end'>${singleClasses.price}</td>
                                <td className='text-start'>{singleClasses.instructorName}</td>
                                <td className='text-center'>{singleClasses.availableSeats}</td>
                                <td ><button onClick={()=> handleDelete(singleClasses)} className='btn btn-red-600 btn-ghost btn-lg'><FaTrashAlt></FaTrashAlt></button></td>
                                <td ><button className='btn btn-red-600 btn-ghost btn-lg'><FaMoneyBillWave></FaMoneyBillWave></button></td>


                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
        </div>
    );
};

export default MyCart;