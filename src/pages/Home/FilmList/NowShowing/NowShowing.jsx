// Import Library's Hooks
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Library's Components
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import cn from "classnames";

const NowShowing = ({ movies }) => {
   return (
      <div>
         <Swiper
            navigation={{
               prevEl: ".nowShowing__prev",
               nextEl: ".nowShowing__next",
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
            className="nowShowing__film"
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
            <span className="arrowPrev nowShowing__prev">
               <ArrowRightAltIcon />
            </span>
            <span className="arrowNext nowShowing__next">
               <ArrowRightAltIcon />
            </span>
         </div>
      </div>
   );
};

export default NowShowing;
