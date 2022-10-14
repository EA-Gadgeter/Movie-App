import React from 'react';
import { getMovieById } from "../helpers/getMovieById";

export const useFetchMovieById = (movieId, media_type) => {
    const [movie, setMovie] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);

    const getMovie = async (movieId, media_type, language) => {
        const results = await getMovieById(movieId, media_type);
        setMovie(results);
        setIsLoading(false);
    };

    React.useEffect(() => {
        getMovie(movieId, media_type);
    }, []);

    return { movie, isLoading };
};