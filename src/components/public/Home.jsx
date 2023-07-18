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

const Home = ({fav}) => {
    const {favorite, setFavorite} = fav;
    return (
        <>
            <Header />            
                <div className='components'>
                    <Poster favHC={{favorite, setFavorite}}/>
                    <Popular favHC={{favorite, setFavorite}}/>
                    <Current favHC={{favorite, setFavorite}}/>
                    <Drama favHC={{favorite, setFavorite}}/>
                    <TopRate favHC={{favorite, setFavorite}}/>
                    <Kids favHC={{favorite, setFavorite}}/>
                    <Best favHC={{favorite, setFavorite}}/>
                </div>
            <Footer />
        </>
    );
};

export default Home;