import React, { useContext } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
  }
  const navOptions = (
    <>
      <li className="text-[16px]">
        <Link to="/">Home</Link>
      </li>

      <li className="text-[16px]">
      <Link to="/allinstructors">Instructor</Link>
      </li>
      <li className="text-[16px]">
      <Link to="/allclasses">Classes</Link>
      </li>

      <li className="text-[16px]">
      <Link to="/dashboard">Dashboard</Link>
      </li>

      {
        user? 
        <>
        <button className="text-[16px] ms-3 text-pink-600 text-left" onClick={handleLogOut}>Logout</button>
        </>:<>
     <li><Link className=" text-[16px] text-pink-600" to="/login">Login</Link></li> 
        </>
      }
    </>
  );
  return (
    <div>
      <div  className="navbar bg-base-300 rounded bg-transparent mt-12 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img className="rounded-full h-[50px] w-[50px]" src="https://i.ibb.co/6bz2YsT/v.jpg" alt="" />

          <a className=" font ms-3 normal-case text-2xl font-bold">Summer Makeup</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn ">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
