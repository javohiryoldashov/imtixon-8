import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo1.png'
const Navbar = () => {
    return (
        <div>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-6 sm:h-9 logImage" alt="Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </NavLink>
                
                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <NavLink to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 active" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/company" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Admin</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>99 871 242-00-00</h3>
                    </div>
                </div>
                </nav>


        </div>
    );
} 

export default Navbar;
