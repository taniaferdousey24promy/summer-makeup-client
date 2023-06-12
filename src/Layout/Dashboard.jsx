import React from "react";
import { FaShoppingBag ,FaHome, FaWallet, FaShoppingBasket } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        
        <ul className="menu p-4 w-80 h-full bg-pink-200 text-base-content">
          {/* Sidebar content here */}

          <h1 className="text-left   ms-4 font-bold mt-8 mb-12 text-3xl text-pink-500">Summer Makeup</h1>
          <li>
            <NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink>
          </li>
          
          <li>
          <NavLink to="/dashboard/history"> <FaWallet></FaWallet> Payment History</NavLink>
          </li>
          <li>
          <NavLink to="/dashboard/mycart"> <FaShoppingBasket></FaShoppingBasket> My Selected Classes</NavLink>
          </li>
          <li>
          <NavLink to="/dashboard/reservations"><FaShoppingBag></FaShoppingBag> My Enrolled Classes </NavLink>
          </li>
          <div className="divider">

          </div>
          <li>
          <NavLink to="/"> <FaHome></FaHome> Home </NavLink>
          </li>
          <li>
          <NavLink to="/allclasses"> <FaWallet></FaWallet> Our Classes</NavLink>
          </li>
          
          <li>
          <NavLink to="/allinstructors"> <FaWallet></FaWallet> Our Instructors</NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
