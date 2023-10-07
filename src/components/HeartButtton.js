import styles from "./HeartButton.module.css";
import heartFilled from "../assets/heart-filled.png";
import heartEmpty from "../assets/heart-empty.png";


function HeartButton({like, onClick}) {

    return (
        <button className={styles.button} onClick={onClick}>
         {like? (<img className = {styles.heartImg} src={heartFilled} alt="Liked"></img>) 
          :(<img className = {styles.heartImg} src={heartEmpty} alt="Not Liked"></img>)
          }
      </button>
    );
}

export default HeartButton; 