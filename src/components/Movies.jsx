import React, { useState, useEffect } from "react";
import axios from 'axios';
import FadeInSection from "./FadeInSection";

const data = [
    {
        id: 1,
        title: 'Parasite',
        release_date: '2019-05-30'
    },
    {
        id: 2,
        title: 'Interstellar',
        release_date: '2014-11-05'
    },
    {
        id: 3,
        title: 'Fantastic Mr. Fox',
        release_date: '2009-10-23'
    },
    {
        id: 4,
        title: 'Chungking Express',
        release_date: '1994-07-14'
    },
    {
        id: 7,
        title: 'Django Unchained',
        release_date: '2012-12-25'
    },
    {
        id: 6,
        title: 'La La Land',
        release_date: '2016-11-29'
    },
];

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movieDataPromises = data.map(async (movie) => {
                    const response = await axios.get(
                        `https://api.themoviedb.org/3/search/movie?api_key=af82b2777245f926ab36c3ae51a37b9e&language=en-US&page=1&include_adult=false&query=${movie.title}`
                    );
                    const results = response.data.results;

                    const matchingResults = results.filter(result => result.release_date === movie.release_date && result.title === movie.title);

                    return matchingResults.length > 0 ? matchingResults[0] : null;
                });

                await new Promise(resolve => setTimeout(resolve, 2000));

                const movieData = await Promise.all(movieDataPromises);
                setMovies(movieData.filter(movie => movie !== null));
            } catch (err) {
                console.error("Error fetching movie data:", err);
                setError("Failed to fetch movie data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    if (loading) {
        return <div className="container mx-auto p-10 text-2xl font-bold">Loading...</div>;
    }

    if (error) {
        return <div className="container mx-auto p-10">{error}</div>;
    }

    return (
        <div className="container mx-auto p-10 md:p-20 md:px-[8%] min-h-[100vh] flex flex-col items-center justify-center ">
            <h1 className="text-4xl md:text-6xl mb-8 md:mb-16 text-amber-100 font-semibold underline underline-offset-8">FAVORITE MOVIES</h1>
            <div className="md:container md:mx-auto bg-neutral-900 grid grid-cols-2 md:grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <FadeInSection>
                        <div key={movie.id} className="movie-card">
                            {movie.poster_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={`${movie.title} Poster`}
                                />
                            ) : (
                                <p className="text-white text-xl">No poster available</p>
                            )}
                            <h2 className="text-white text-xl mt-2">{movie.title}</h2>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </div>
    );
};

export default Movies;
