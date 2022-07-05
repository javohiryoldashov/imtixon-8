import React from 'react';
import HomeMain from '../../components/homemain/homeMain';
import Navbar from '../../components/navbar/navbar';

import './home.css'
const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeMain />
        </div>
    );
}

export default Home;
