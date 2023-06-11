import React from 'react';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noNavbarFooter = location.pathname.includes('error')
    return (
        <div>
            {noNavbarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavbarFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;