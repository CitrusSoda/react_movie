import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//클래스로 할려면 필수
class App extends React.Component {
    //state에 안넣어도 돌아감
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        // axios 로딩하는데 오래걸리므로 async, await 해야함
        const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        // state: const = state
        this.setState({movies, isLoading: false})
    }

    componentDidMount() {
        this.getMovies()
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                <div>
                    {isLoading ? (
                        <div className="loader">
                            <span className="loader__test">Loading...</span>
                        </div>
                    ) : (
                        <div className="movies">
                            {movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default App;
