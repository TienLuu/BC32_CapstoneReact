// Import Components
import InputSelectCinema from "../../../layouts/InputSelectCinema";
import MovieList from "../../../layouts/MovieList";

// Import Module Css
import styles from "./styles.module.scss";

const CinemaSelect = ({ activeId, setActive, isActive }) => {
   return (
      <div className={styles.cinemaSelect}>
         <div
            onClick={() => setActive(activeId)}
            className={styles.inputSelectCinema}
         >
            <InputSelectCinema isIcon={true} />
         </div>
         <div
            className={`${styles.movieList} ${
               isActive ? `${styles.active}` : ""
            }`}
         >
            {isActive ? <MovieList /> : undefined}
         </div>
      </div>
   );
};

export default CinemaSelect;
