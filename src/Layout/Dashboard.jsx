import React from "react";
import { FaShoppingBag ,FaHome, FaWallet, FaShoppingBasket } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

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
            <Link> <FaHome></FaHome> User Home</Link>
          </li>
          <li>
          <Link> <FaShoppingBag></FaShoppingBag> Reservation</Link>
          </li>
          <li>
          <Link> <FaWallet></FaWallet> Payment History</Link>
          </li>
          <li>
          <Link to="/dashboard/mycart"> <FaShoppingBasket></FaShoppingBasket> My Cart</Link>
          </li>
          <div className="divider">

          </div>
          <li>
          <Link to="/"> <FaHome></FaHome> Home </Link>
          </li>
          <li>
          <Link to="/allclasses"> <FaWallet></FaWallet> Our Classes</Link>
          </li>
          
          <li>
          <Link to="/allclasses"> <FaWallet></FaWallet> Our Classes</Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
