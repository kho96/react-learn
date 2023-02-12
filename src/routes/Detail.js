import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <h1>Detail loading....</h1> : 
                <MovieDetail 
                    title={movie.title}
                    movImg={movie.medium_cover_image}
                    year={movie.year}
                    content={movie.description_intro}
                    raiting={movie.rating}
                    genres={movie.genres}
                />
            }
        </div>
    );
}

export default Detail;