import React, {useContext} from 'react';
import AdminMain from '../../components/adminMain/adminMain';
import CompRooms from '../../components/comp_Rooms/comp_rooms';
import {LoginTpken} from '../../Provider/loginToken/LoginToken'
import { Navigate, Outlet } from 'react-router-dom';
const Rooms = () => {
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
                    <CompRooms />
                    </div>
                </div>
                :<><Navigate to='/login' /></>
            } 
            <Outlet />
</>
    );
}

export default Rooms;
