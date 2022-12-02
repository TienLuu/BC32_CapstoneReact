// Import Module Css
import styles from "./styles.module.scss";

const MovieTheater = ({ logo, maHeThongRap, isActive, setActive }) => {
   return (
      <>
         <div
            className={`${styles.movieTheaterInfor} ${
               isActive ? `${styles.active}` : ""
            } `}
            onClick={() => setActive(maHeThongRap)}
         >
            <div className={styles.image}>
               <img src={logo} alt={maHeThongRap} />
            </div>
            <div className={styles.text}>{maHeThongRap}</div>
         </div>
      </>
   );
};

export default MovieTheater;
