import React, {useEffect, useState} from 'react';
import "../../assets/style/Home.scss";

// components
import Header from '../home/Header';
import Popular from '../home/Popular';
import Current from '../home/Current';
import Drama from '../home/Drama';
import TopRate from '../home/TopRate';
import Kids from '../home/Kids';
import Best from '../home/Best';
import Poster from '../home/Poster';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Header />            
            <div className='components'>
                <Poster />
                <Popular />
                <Current />
                <Drama />
                <TopRate />
                <Kids />
                <Best />
            </div>
            <Footer />
        </>
    );
};

export default Home;