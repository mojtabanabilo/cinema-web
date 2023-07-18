import React from 'react';
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

const Home = ({x}) => {
    const {favorite, setFavorite} = x;
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
                    <Best y={{favorite, setFavorite}}/>
                </div>
            <Footer />
        </>
    );
};

export default Home;