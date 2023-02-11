import PropTypes from "prop-types";
//Link를 import 하여 Link to="path"하여 링크를 이동시킬 수 있다.
//새로고침이 되는 것이 아니다!
import {Link} from "react-router-dom"; 

function Movie({coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <Link to="/movie"><h2>{title}</h2></Link>
            <p>{summary}</p>
            {genres !== null ? <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul> : null}
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;