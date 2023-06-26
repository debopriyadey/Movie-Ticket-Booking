import axios from 'axios'
const movieUri = 'http://localhost:8082/api/v1/movies';

export const getAllMovie = async () => {
    const { data } = await axios.get(`${movieUri}/getAllMovie`);
    return data;
}

export const getMoviesById = async (id) => {
    const { data } = await axios.get(`${movieUri}/getMoviesById?id=${id}`);
    return data;
}

export const getCurrentMovie = async () => {
    const { data } = await axios.get(`${movieUri}/getCurrentMovie`);
    return data;
}

export const insertMovie = async (movie) => {
    const { data } = await axios.post(`${movieUri}/insertMovie`, movie);
    return data;
}

export const updateMovieScreening = async (id) => {
    const { data } = await axios.patch(`${movieUri}/updateMovieScreening?id=${id}`);
    return data;
}
