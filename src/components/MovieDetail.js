import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function MovieDetail({title, movImg, year, content, rating, genres}) {
    return(
        <div>
            <table border="1">
                <tbody>
                    <tr>
                        <th colSpan="2">title</th>
                        <th colSpan="2">{title}</th>
                    </tr>
                    <tr>
                        <th colSpan="2" rowSpan={4}>
                            <img src={movImg}
                                alt={title}
                            />
                        </th>
                        <th>{year}</th>
                    </tr>
                    <tr>
                        <td>{content}</td>
                    </tr>
                    <tr>
                        <td>{genres.map((g) => (
                                <li key={g}>{g}</li>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <th>★ {rating}/10.00</th>
                    </tr>
                </tbody>
            </table>
            <Link to="/Home"><h4>Go to List...</h4></Link>
        </div>
    );
}

MovieDetail.propTypes = {
    title: PropTypes.string.isRequired,
    movImg: PropTypes.string.isRequired,
    genres: PropTypes.string,
    rating: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
}
export default MovieDetail;