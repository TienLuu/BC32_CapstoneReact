// Import Module Css
import styles from "./styles.module.scss";

const MovieShceduleItem = ({ day, isActive, setActive }) => {
   return (
      <>
         <div
            className={`${styles.movieScheduleItem} ${
               isActive ? `${styles.active}` : ""
            }`}
            onClick={() => setActive(day.dd)}
         >
            <div className={styles.header}>{day.dd}</div>
            <div className={styles.footer}>{day.text}</div>
         </div>
      </>
   );
};

export default MovieShceduleItem;
