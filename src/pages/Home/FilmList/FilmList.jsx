// Import Library's Hook
import { useEffect, useState } from "react";

// Import Components
import NowShowing from "./NowShowing";
import ComingSoon from "./ComingSoon";

// Import API Config
import movieAPI from "../../../services/movieAPI";

const FilmList = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      (async () => {
         try {
            const data = await movieAPI.getMovies();
            setMovies(data);
         } catch (error) {}
      })();
   }, []);

   const movieNShowing = movies.filter((movie) => movie.dangChieu === true);

   const moviesCSoon = movies.filter(
      (movie) => movie.dangChieu === false && movie.sapChieu === true
   );

   return (
      <>
         <section className="filmList">
            <div className="wrapper">
               <div className="nowShowing">
                  <h2>
                     <span>Now</span> showing
                  </h2>

                  <NowShowing movies={movieNShowing} />
               </div>

               <div className="comingSoon">
                  <h2>
                     <span>Coming</span> soon
                  </h2>

                  <ComingSoon movies={moviesCSoon} />
               </div>
            </div>
         </section>
      </>
   );
};

export default FilmList;
