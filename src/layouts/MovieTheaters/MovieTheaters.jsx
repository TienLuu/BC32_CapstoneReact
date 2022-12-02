// Import Library's Hook
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Components
import MovieTheater from "./MovieTheater";

// Import Module Css
import styles from "./styles.module.scss";
import heThongRap from "../../data/hethongrap.json";

const MovieTheaters = () => {
   const newHeThongRap = [...heThongRap.content];
   const [activeId, setActiveId] = useState();

   const handleClick = (movieTheaterId) => {
      setActiveId(movieTheaterId);
   };

   return (
      <div className={styles.movieTheaters}>
         <div className={styles.container}>
            <Swiper
               breakpoints={{
                  0: {
                     slidesPerView: `${newHeThongRap.length - 2}` * 1,
                  },
                  380: {
                     slidesPerView: `${newHeThongRap.length - 1}` * 1,
                  },
                  460: {
                     slidesPerView: `${newHeThongRap.length}` * 1,
                  },
                  500: {
                     slidesPerView: `${newHeThongRap.length + 1}` * 1,
                  },
               }}
               spaceBetween={2}
               speed={300}
               navigation={true}
               modules={[Navigation]}
               className="movieTheaters-slide"
            >
               <SwiperSlide className="movieTheaters-item">
                  <MovieTheater
                     logo="../images/dexuat-icon.svg"
                     maHeThongRap="Tất cả"
                     setActive={handleClick}
                     isActive={"Tất cả" === activeId || !activeId}
                  />
               </SwiperSlide>
               {newHeThongRap.map((item, index) => (
                  <SwiperSlide key={index} className="movieTheaters-item">
                     <MovieTheater
                        logo={item.logo}
                        maHeThongRap={item.maHeThongRap}
                        isActive={activeId === item.maHeThongRap}
                        setActive={handleClick}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default MovieTheaters;
