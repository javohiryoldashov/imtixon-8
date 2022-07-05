import React from 'react';
import './login.css'
import {LoginTpken} from '../../Provider/loginToken/LoginToken'
import { useNavigate, NavLink, Navigate } from 'react-router-dom';
import { useRef, useContext } from 'react'
import logo from '../../assets/images/logo1.png'
const Login = () => {
    const {token, setToken} = useContext(LoginTpken)
    const hendRef = useRef()
    const hendRef2 = useRef()
    let navigate = useNavigate();
    const heldelGet = (e) =>{
        e.preventDefault()
        console.log(hendRef.current.value);
        if(hendRef.current.value == 'admin' && hendRef2.current.value == 'admin007'){
            localStorage.setItem('token', 'adminToken7')
            
        }
        if(token){
           Navigate('/admin/company')
        }
        
    }
    return (
        <div className='Login'>
            <form onSubmit={heldelGet} className='loginForm'>
                <ul>
                    <li>
                        <NavLink to="/" className="flex items-center">
                            <img src={logo} className="mr-3 h-6 sm:h-9 logImage" alt="Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <label htmlFor="userName">Write username</label>
                    <input ref={hendRef} type="text" name="username" id="userName" />
                </div>
                <div>
                    <label htmlFor="password">Write password</label>
                    <input ref={hendRef2} type="password" name="password" id="password" />
                </div>
                <button type='submit' className='login_btn'>Send</button>
            </form>
            
        </div>
    );
}

export default Login;
