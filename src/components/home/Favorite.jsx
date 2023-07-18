import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { shorten } from '../../functions/functions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../assets/style/public/View.scss";
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// icons
import yellowStar from "../../assets/icon/icons8-star-48 (1).png";
import whiteStar from "../../assets/icon/icons8-star-48.png";
import imdb from "../../assets/icon/icons8-imdb-48.png";
import spinner from "../../assets/gif/Ellipsis-2.4s-200px.gif";


const Favorite = ({data}) => {
    AOS.init();
    const {favorite, setFavorite} = data;
    const [star, setStar] = useState(false);
    console.log(favorite);
    return (
        <div className='cards' data-aos="fade-left" data-aos-delay="100">
            <div className='head-title'>
                <h1>favorite movies</h1>
                <Link to="/home">
                    <p>Back to home.</p>
                </Link>
            </div>
            {
                favorite ? favorite.map(i => <div key={i.id} className='card'>
                <img src={IMG_URL + i.poster_path} className='movie-poster' alt='poster'/>
                <Link to={`/details/${i.id}`}>
                    {
                        i.original_title.length > 10 ? <p className='title'>{shorten(i.original_title, 0, 3)} ...</p> :
                        <p className='title'>{i.original_title}</p>
                    }
                </Link>
                {<p className='release-date'>{i.release_date.slice(0,4)}</p>}
                <div className='votes'>
                    <div className='imdb'>
                        <img src={imdb} alt='imdb'/>
                        <p>{i.vote_average} ({i.vote_count})</p>
                    </div>
                    {
                        star === false ? <img src={whiteStar} className='stars' alt='stars' onClick={() => {
                            setStar(true)
                        }}/> : 
                        <img src={yellowStar} className='stars' alt='stars' onClick={() => {
                            setStar(false)
                        }}/>
                    }
                </div>
            </div>) : <h1>please select movie</h1>
            }
        </div>
    );
};

export default Favorite;