const key= "602347a30f23604b715b3bc136944b5c"

const requests = {
    requestTopRated : `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopular : `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestLatest : `https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=en-US`,
    requestUpComing : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;