// Import Library's Hook
import { useParams } from "react-router-dom";

// Import Components
import Poster from "./Poster";
import ShowTimes from "./ShowTimes";

// Import Module Css
import styles from "./styles.module.scss";

const Movie = () => {
   const { movieId } = useParams();

   console.log(movieId);
   return (
      <section className={styles.movie}>
         <Poster />
         <ShowTimes />
      </section>
   );
};

export default Movie;
