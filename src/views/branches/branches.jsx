import React, {useContext} from 'react';
import AdminMain from '../../components/adminMain/adminMain';
import CompBranch from '../../components/Comp_branch/Comp_branch';
import {LoginTpken} from '../../Provider/loginToken/LoginToken'
import { Navigate, Outlet } from 'react-router-dom';

import './branches.css'
const Branches = () => {
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
                    <CompBranch />
                    </div>
                </div>
                :<><Navigate to='/login' /></>
            } 
            <Outlet />
</>
    );
}

export default Branches;
