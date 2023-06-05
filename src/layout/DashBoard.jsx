import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensilSpoon, FaUser, FaBook } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin]= useAdmin();
    return (
        <>
            <div className="drawer drawer-mobile lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">

                        {
                            isAdmin ? <>

                                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/additem"><FaUtensilSpoon></FaUtensilSpoon>Add Item</NavLink></li>
                                <li><NavLink to="/dashboard/manageitem"><FaUser></FaUser> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/"><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUser></FaUser> Manage Users</NavLink></li>
                                

                            </> :

                                <>
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                    <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li>
                                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                        </NavLink>

                                    </li>
                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/menu"> Our Menu</NavLink></li>
                        <li><NavLink to="/order/salad">Order Food</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoard;