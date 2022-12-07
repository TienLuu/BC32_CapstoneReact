// Import Library's Hook
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Library's Component
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import cn from "classnames";

const ComingSoon = ({ movies }) => {
   return (
      <>
         <Swiper
            navigation={{
               prevEl: ".comingSoon__prev",
               nextEl: ".comingSoon__next",
            }}
            slidesPerView={2}
            spaceBetween={10}
            slidesPerGroup={2}
            breakpoints={{
               576: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               840: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
               1150: {
                  slidesPerView: 5,
                  spaceBetween: 20,
               },
            }}
            modules={[Navigation]}
            className="comingSoon__film"
         >
            {movies.map((movie) => (
               <SwiperSlide key={movie.maPhim}>
                  <Link to={`/movie/${movie.maPhim}`}>
                     <div className="filmItem">
                        <div className="itemHeading">
                           <div className="itemOverlay">
                              <span className={cn({ under18: !movie.hot })}>
                                 {movie.hot ? "18+" : "16+"}
                              </span>
                           </div>
                           <div className="itemImage">
                              <img src={movie.hinhAnh} alt={movie.tenPhim} />
                           </div>
                        </div>
                        <div className="itemBody">
                           <div className="itemTitle">
                              <h3>{movie.tenPhim}</h3>
                           </div>
                           <div className="itemSubtitle">
                              <span>Hành động, gay cấn</span>
                           </div>
                        </div>
                     </div>
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>

         <div className="filmNavigate">
            <span className="arrowPrev comingSoon__prev">
               <ArrowRightAltIcon />
            </span>
            <span className="arrowNext comingSoon__next">
               <ArrowRightAltIcon />
            </span>
         </div>
      </>
   );
};

export default ComingSoon;
