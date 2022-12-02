// Import Library's Hooks
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Library's Components
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import cn from "classnames";

// Import Module Css
import danhSachPhim from "../../../../data/danhSachPhim.json";

const NowShowing = () => {
   const nowShowing = danhSachPhim.content.filter(
      (movie) => movie.dangChieu === true
   );

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
            {nowShowing.map((movie, index) => (
               <SwiperSlide key={index}>
                  <div className="filmItem">
                     <div className="itemHeading">
                        <div className="itemOverlay">
                           <span className={cn({ under18: index % 2 !== 0 })}>
                              {index % 2 === 0 ? "18+" : "16+"}
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
