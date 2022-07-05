import React,{useContext} from 'react';
import Bank from '../../components/Comp_banks/comp_banks'
import AdminMain from '../../components/adminMain/adminMain';
import './banks.css'
import { Navigate, Outlet } from 'react-router-dom';
import {LoginTpken} from '../../Provider/loginToken/LoginToken'
const Banks = () => {
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
                    <Bank />
                    </div>
                </div>
                :<><Navigate to='/login' /></>
            } 
            <Outlet />
</>
    );
}

export default Banks;
