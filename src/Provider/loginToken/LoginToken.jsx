import React, { useState } from 'react';

export const LoginTpken = React.createContext()

const LoginTokenT = ({children}) => {
    const [token, setToken] = useState(JSON.stringify(localStorage.getItem('token')) || false)
    return (
        <div>
            <LoginTpken.Provider value={{token, setToken}}>
            <LoginTpken.Consumer>
                {
                    ()=>children
                }
            </LoginTpken.Consumer>
            </LoginTpken.Provider>
        </div>
    );
}

export default LoginTokenT;
