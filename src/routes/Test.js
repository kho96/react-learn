import  { useState, useEffect } from "react";


function Test() {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const apiKey = "";
        const json = await (
            await fetch(
            `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&releaseDts=20230101&ServiceKey=${apiKey}`
            )
            ).json();
            console.log("json: ", json.Data[0].Result);
            setMovies(json.Data[0].Result);
    }
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.DOCID}>
                    <h4>{movie.title}</h4>
                    {movie.posters !== "" ? <img src={movie.posters.split('|')[0]} alt="poster"></img> : <img src="./no-img.png" alt="no img"></img>}
                    <p>{movie.plots.plot[0].plotText}</p>
                </div>
            ))}
        </div>
    );
}

export default Test;