// Import Library's Hook
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Components
import MovieScheduleItem from "./MovieScheduleItem";

// Import Module Css
import styles from "./styles.module.scss";

const days = [
   { dd: 25, text: "Hôm nay" },
   { dd: 26, text: "Thứ ba" },
   { dd: 27, text: "Thứ tư" },
   { dd: 28, text: "Thứ năm" },
   { dd: 29, text: "Thứ sáu" },
   { dd: 30, text: "Thứ bảy" },
   { dd: 1, text: "Chủ nhật" },
];

const MovieSchedule = ({ rb }) => {
   const [activeId, setActiveId] = useState();

   const handleClick = (movieScheduleId) => {
      setActiveId(movieScheduleId);
   };
   return (
      <>
         <div className={styles.movieSchedule}>
            <div>
               <Swiper
                  breakpoints={rb}
                  spaceBetween={2}
                  speed={300}
                  navigation={true}
                  modules={[Navigation]}
                  className="movieSchedule-slide"
               >
                  {days.map((item, index) => (
                     <SwiperSlide key={index} className="movieSchedule-item">
                        <MovieScheduleItem
                           day={item}
                           isActive={
                              item.dd === activeId ||
                              (item.dd === 25 && !activeId)
                           }
                           setActive={handleClick}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </>
   );
};

export default MovieSchedule;
