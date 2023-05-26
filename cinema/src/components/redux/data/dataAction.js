import axios from "axios";

// API's
const POPULAR_MOVIES = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=7cb145dba9c9ab1992201c68dcb32722`;
const CURRENT_MOVIES = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-09-15&primary_release_date.lte=2022-10-22&api_key=7cb145dba9c9ab1992201c68dcb32722`;
const BEST_MOVIES = `https://api.themoviedb.org/3/discover/movie?primary_release_year=2022&sort_by=vote_average.desc&&api_key=7cb145dba9c9ab1992201c68dcb32722`;
const KIDS_MOVIES = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=7cb145dba9c9ab1992201c68dcb32722`;
const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=7cb145dba9c9ab1992201c68dcb32722";
const DRAMA_MOVIES = `https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2022&api_key=7cb145dba9c9ab1992201c68dcb32722`;

const fetchUserRequest = () => {
    return {type: "FETCH-USER-REQUEST"}
}
const fetchUserSuccess = data => {
    return {type: "FETCH-USER-SUCCESS", payload: data}
}
const fetchDetailSuccess = data => {
    return {type: "FETCH-DETAIL-SUCCESS", payload: data}
}
const fetchUserFailure = err => {
    return {type: "FETCH-USER-FAILURE", payload: err}
}
export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUserRequest())
        axios.all([
            axios.get(POPULAR_MOVIES),
            axios.get(CURRENT_MOVIES),
            axios.get(BEST_MOVIES),
            axios.get(KIDS_MOVIES),
            axios.get(TOP_RATED_MOVIES),
            axios.get(DRAMA_MOVIES)
        ])
        .then(axios.spread((pop, cur, bes, kid, topR, dra) => {
            dispatch(fetchUserSuccess([pop, bes, cur, kid, dra, topR]))
            dispatch(fetchDetailSuccess([...pop, ...bes, ...cur, ...kid, ...dra, ...topR]))
        }))
        .catch(err => {
            dispatch(fetchUserFailure(err))
        })
    }
}
