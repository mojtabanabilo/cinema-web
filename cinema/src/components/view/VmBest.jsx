import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from "react-redux";
import { fetchUsers } from '../redux/data/dataAction';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../assets/style/public/View.scss";

// icons
import yellowStar from "../../assets/icon/icons8-star-48 (1).png";
import whiteStar from "../../assets/icon/icons8-star-48.png";
import imdb from "../../assets/icon/icons8-imdb-48.png";
import spinner from "../../assets/gif/Ellipsis-2.4s-200px.gif";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const VmBest = () => {
    let count;
    AOS.init();
    const [star, setStar] = useState(false);
    const newBest = useSelector(state => state.selectItem);
    const dispatch = useDispatch();

    useEffect(() => {
        !newBest.length && dispatch(fetchUsers());
    }, [])

    const starCounter = movieId => {
        setStar(true);
        const findData = newBest[2].find(i => i.id === movieId);
        console.log(findData);
        if(findData) {
            count = findData.vote_count + 1;
            console.log(count);
            return count;
        }
    }

    return (
        <div className='cards' data-aos="fade-left" data-aos-delay="100">
            <div className='head-title'>
                <h1>Best Movie's</h1>
                <Link to="/home">
                    <p>Back to home.</p>
                </Link>
            </div>
            {
                newBest[2] ? newBest[2].map(i => <div key={i.id} className='card'>
                <img src={IMG_URL + i.poster_path} className='movie-poster' alt='poster'/>
                <Link to={`/details/${i.id}`}>
                    <p className='title'>{i.original_title}</p>
                </Link>
                {<p className='release-date'>{i.release_date.slice(0,4)}</p>}
                <div className='votes'>
                    <div className='imdb'>
                        <img src={imdb} alt='imdb'/>
                        <p>{i.vote_average} ({star ? count : i.vote_count})</p>
                    </div>
                    {
                        star === false ? <img src={whiteStar} className='stars' alt='stars' onClick={() => {
                            starCounter(i.id)
                        }}/> : 
                        <img src={yellowStar} className='stars' alt='stars' onClick={() => {
                            setStar(false)
                        }}/>
                    }
                </div>
            </div>) : <img src={spinner} alt='spinner'/>
            }
        </div>
    );
};

export default VmBest;