import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../assets/style/Poster.scss";
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// icon
import multiplication from "../../assets/icon/icons8-multiply-30.png";

const Poster = () => {
    AOS.init();
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {query: `${search}`, include_adult: 'false', language: 'en-US', page: '2'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2IxNDVkYmE5YzlhYjE5OTIyMDFjNjhkY2IzMjcyMiIsInN1YiI6IjY0M2RhNDY3YzE0NGRkMDRkNWZiZDA1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E2ipT4fTNmIQP3eJP73SFXnBxSBKXT6iXmh9OfjenKc'
        }
    };
    const searchData = async() => {
        await axios.request(options)
        .then((response) => setData(response))
        .catch((error) => setError(error))
    }
      
    useEffect(() => {
        search && searchData()
    }, [search])

    return (
        <div className='poster' data-aos="fade-down" data-aos-delay="50">
            <div className='shadow'>
                <div className='bubble'>
                    <h1>Easily find the best movies of recent years.</h1>
                    <div className='search-input'>
                        <input type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder='search'/>
                        <img src={multiplication} alt='icon' onClick={() => setSearch("")}/>
                    </div>
                </div>
                {    
                    search && <div className='search-result'>
                        {
                            data.length ? data.map(i => <div className='result' key={i.id}>
                                    <img className='small-logo' src={IMG_URL + i.backdrop_path} alt='poster'/>
                                    {
                                        i.title.length > 10 ? <p className='orginal-title'>{i.title.split(" ").slice(0,2).join(" ")} ...</p> :
                                        <p className='orginal-title'>{i.title}</p>
                                    }
                                    <p className='date'>({i.release_date.slice(0,4)})</p>
                                </div>
                            ) : <div className='bad-result'>
                                <h1>Not Found.</h1>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Poster;