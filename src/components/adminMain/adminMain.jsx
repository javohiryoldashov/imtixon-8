import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo1.png'

import './adminMain.css'
const AdminMain = () => {
    return (
        <div className='adminMain'>
            <div>
                <aside className="w-64 sidebar" aria-label="Sidebar">
                    <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                       
                    <ul className="space-y-2">
                        <li>
                            <NavLink to="/" className="flex items-center">
                                <img src={logo} className="mr-3 h-6 sm:h-9 logImage" alt="Logo" />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                            </NavLink>
                        </li>
                        <li>
                            <Link to="/admin/company" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className="ml-3">Company</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/admin/branches" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Branches</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/rooms" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Rooms</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/banks" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Banks</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </aside>
            </div>

            {/*  */}
            <div>
                
            </div>
        </div>
    );
}

export default AdminMain;
