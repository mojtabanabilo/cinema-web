import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from "react-redux";
import { fetchUsers } from '../redux/data/dataAction';
import { useNavigate } from 'react-router-dom';
import "../../assets/style/Details.scss";

// icons
import date from "../../assets/icon/icons8-date-48.png";
import lang from "../../assets/icon/icons8-itranslate-48.png";
import imdb from "../../assets/icon/icons8-imdb-48.png";

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Details = () => {
    const params = useParams();
    const navigator = useNavigate();
    const data = useSelector(state => state.details);
    const dispatch = useDispatch();
    const result = data.find(i => i.id === +params.id);

    useEffect(() => {
        !data.length && dispatch(fetchUsers());
        window.onbeforeunload = () => {
            return "Dude, are you sure you want to leave? Think of the kittens!";
        };
    }, [])

    return (
        <div className='details-section' 
            style={{backgroundImage: `url(${IMG_URL + result.backdrop_path})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <div className='bg-shadow'>
                <div className='details'>
                    <div className='detail-1'>
                        <div className='section-image'>
                            <img src={IMG_URL + result.poster_path}/>
                        </div>
                        <div className='section-title'>
                            <h2>{result.original_title}</h2>
                            <div className='date'>
                                <img src={date} alt='date'/>
                                <p>{result.release_date}</p>
                            </div>
                            <div className='imdb'>
                                <img src={imdb} alt='imdb'/>
                                <p>{result.vote_average}</p>
                            </div>
                            <div className='lang'>
                                <img src={lang} alt='imdb'/>
                                <p>{result.original_language}</p>
                            </div>
                        </div>
                    </div>
                    <div className='detail-2'>
                        <h2>Overview :</h2>
                        <p>{result.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;