/*
  propTypes 사용을 위해, npm i prop-types 설치진행
  import PropType from "prop-types"; 사용
*/
import PropTypes from "prop-types"; 
import styles from "./Button.module.css";

function Button({text}) {
    return <button className={styles.btn}>{text}</button>;
} 

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

//Button을 export하여 App.js에서 사용할 수 있게 만든다.
export default Button; 