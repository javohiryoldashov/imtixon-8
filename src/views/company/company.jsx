import React,{useContext} from 'react';
import AdminMain from '../../components/adminMain/adminMain';
import CompCompanent from '../../components/Comp_companent/Comp_companent';
import {LoginTpken} from '../../Provider/loginToken/LoginToken'
import { Navigate, Outlet } from 'react-router-dom';
import './company.css'
const Company = () => {
    const {token, setToken} = useContext(LoginTpken)
    if(token == 'null'){
        return <Navigate to='/login' />
    }
    return (
        <>        
            {
                token ?
                <div className='Admin'>
                    <AdminMain />   
                    <div className='two'>
                    <CompCompanent />
                    </div>
                </div>
                :<><Navigate to='/login' /></>
            } 
            <Outlet />
</>
    );
}

export default Company;
