// Import Library's Hook
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Module Css
import styles from "./styles.module.scss";
import danhSachBanner from "../../../data/danhSachBanner.json";

const Carousel = () => {
   const banners = [...danhSachBanner.content];

   return (
      <section className={styles.carousel}>
         <Swiper
            spaceBetween={10}
            pagination={{
               clickable: true,
            }}
            speed={1000}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="carousel-slide"
         >
            {banners.map((item) => (
               <SwiperSlide key={item.maBanner}>
                  <img src={item.hinhAnh} alt={item.maPhim} />
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};

export default Carousel;
