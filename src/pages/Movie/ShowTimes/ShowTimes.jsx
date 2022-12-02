// Import Library's Hook
import { useState } from "react";

// Import Components
import MovieSchedule from "../../../layouts/MovieSchedule";
import MovieTheaters from "../../../layouts/MovieTheaters";
import CinemaSelect from "../CinemaSelect";

// Import Module Css
import styles from "./styles.module.scss";

const ShowTimes = () => {
   const [activeIdParent, setActiveIdParent] = useState();

   const handleSelect = (activeId) => {
      setActiveIdParent(activeId);
   };

   return (
      <>
         <div className={styles.showTimes}>
            <div className={styles.container}>
               <div className={styles.title}>
                  <h2>Show times</h2>
               </div>

               <div className={styles.showTimeDetail}>
                  <MovieSchedule
                     rb={{
                        0: { slidesPerView: 3 },
                        330: { slidesPerView: 4 },
                        400: { slidesPerView: 5 },
                        470: {
                           slidesPerView: 6,
                        },
                        560: {
                           slidesPerView: 7,
                        },
                     }}
                  />

                  <MovieTheaters />
                  <div className={styles.cinemaSelectGroup}>
                     <CinemaSelect
                        activeId={0}
                        setActive={handleSelect}
                        isActive={activeIdParent === 0}
                     />
                     <CinemaSelect
                        activeId={1}
                        setActive={handleSelect}
                        isActive={activeIdParent === 1}
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ShowTimes;
