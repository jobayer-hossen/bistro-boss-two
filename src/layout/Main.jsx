import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/sheared/Navbar';
import Footer from '../pages/sheared/Footer';

const Main = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes('login') || location.pathname.includes('resister')
    return (
        <div>
            { noNavbarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;