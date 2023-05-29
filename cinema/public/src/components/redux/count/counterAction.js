import axios from "axios"

// API's
const POPULAR_MOVIES = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=7cb145dba9c9ab1992201c68dcb32722`;
const CURRENT_MOVIES = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-09-15&primary_release_date.lte=2022-10-22&api_key=7cb145dba9c9ab1992201c68dcb32722`;
const BEST_MOVIES = `https://api.themoviedb.org/3/discover/movie?primary_release_year=2022&sort_by=vote_average.desc&&api_key=7cb145dba9c9ab1992201c68dcb32722`;
const KIDS_MOVIES = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=7cb145dba9c9ab1992201c68dcb32722`;
const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=7cb145dba9c9ab1992201c68dcb32722";
const DRAMA_MOVIES = `https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2022&api_key=7cb145dba9c9ab1992201c68dcb32722`;


const addItem = data => {
    return {
        type: "ADD-ITEM",
        payload: data
    }
}

const increase = data => {
    return {
        type: "INCREASE",
        payload: data
    }
}

const decrease = data => {
    return {
        type: "DECREASE",
        payload: data
    }
}
const rateError = err => {
    return {
        type: "RATE-ERROR", payload: err
    }
}

const voteRateAdder = () => {
    return dispatch => {
        axios.all([
            axios.get(POPULAR_MOVIES),
            axios.get(CURRENT_MOVIES),
            axios.get(BEST_MOVIES),
            axios.get(KIDS_MOVIES),
            axios.get(TOP_RATED_MOVIES),
            axios.get(DRAMA_MOVIES)
        ])
        .then(axios.spread((pop, cur, bes, kid, topR, dra) => {
            dispatch(addItem([...pop, ...bes, ...cur, ...kid, ...dra, ...topR]))
        }))
        .catch(err => {
            dispatch(rateError(err))
        })
    }
}
export {addItem, increase, decrease, voteRateAdder};