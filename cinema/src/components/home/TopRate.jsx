import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from "react-redux";
import { fetchUsers } from '../redux/data/dataAction';
import { shorten } from '../../functions/functions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../assets/style/public/Cards.scss";

// icons
import yellowStar from "../../assets/icon/icons8-star-48 (1).png";
import whiteStar from "../../assets/icon/icons8-star-48.png";
import imdb from "../../assets/icon/icons8-imdb-48.png";
import spinner from "../../assets/gif/Ellipsis-2.4s-200px.gif";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const TopRate = () => {
    AOS.init();
    const [star, setStar] = useState(false);
    const newTopRate = useSelector(state => state.selectItem);
    const dispatch = useDispatch();

    useEffect(() => {
        !newTopRate.length && dispatch(fetchUsers());
    }, [])

    return (
        <div className='cards' data-aos="fade-left" data-aos-delay="100">
            <div className='head-title'>
                <h1>Top Rated</h1>
                <Link to="/vmtoprate">
                    <p>view more ...</p>
                </Link>
            </div>
            {
                newTopRate[4] ? newTopRate[4].slice(0,4).map(i => <div key={i.id} className='card'>
                    <img src={IMG_URL + i.poster_path} className='movie-poster' alt='poster'/>
                    <Link to={`/details/${i.id}`}>
                        {
                            i.original_title.length > 10 ? <p className='title'>{shorten(i.original_title, 0, 3)} ...</p> :
                            <p className='title'>{i.original_title}</p>
                        }
                    </Link>
                    <p className='release-date'>{i.release_date.slice(0,4)}</p>
                    <div className='votes'>
                        <div className='imdb'>
                            <img src={imdb} alt='imdb'/>
                            <p>{i.vote_average} ({star ? i.vote_count + 1 : i.vote_count})</p>
                        </div>
                        {
                            star === false ? <img src={whiteStar} className='stars' alt='stars' onClick={() => {
                                setStar(true);
                            }}/> : 
                            <img src={yellowStar} className='stars' alt='stars' onClick={() => {
                                setStar(false);
                            }}/>
                        }
                    </div>
                </div>) : <img src={spinner} alt='spinner'/>
            }
        </div>
    );
};

export default TopRate;