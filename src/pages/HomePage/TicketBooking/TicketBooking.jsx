// Import Library's Hook
import { useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

// Import Components
import Movietheaters from "../../../layouts/MovieTheaters";
import InputSelectCinema from "../../../layouts/InputSelectCinema";
import CinemaList from "../../../layouts/CinemaList";
import MovieSchedule from "../../../layouts/MovieSchedule";
import MovieList from "../../../layouts/MovieList";
import Modal from "../../../components/Modal";

// Import Module Css
import styles from "./styles.module.scss";

const TicketBooking = () => {
   const { width } = useWindowSize();
   const [isOpenModal, setIsOpenModal] = useState(false);

   const handleSelect = () => {
      setIsOpenModal(!isOpenModal);
   };

   const handleSelectCinema = (cinemaId) => {
      setIsOpenModal(false);
   };

   return (
      <section className={styles.ticketBooking}>
         <div className={styles.wrapper}>
            <div className={styles.supTitle}>
               <h2>Cinema Schedule</h2>
            </div>
            <div className={styles.main}>
               <div>{width <= 768 ? undefined : <Movietheaters />}</div>
               <div className={styles.cinemaList}>
                  {width <= 768 ? (
                     <div onClick={handleSelect}>
                        <InputSelectCinema isMobile={true} isIcon={true} />
                     </div>
                  ) : undefined}
                  <Modal
                     title="Danh sách rạp"
                     isOpen={isOpenModal}
                     onClose={handleSelect}
                  >
                     <Movietheaters />
                     <CinemaList onSelect={handleSelectCinema} />
                  </Modal>
               </div>
               <div className={styles.desktop}>
                  <div className={styles.desktopAdress}>
                     {width <= 768 ? (
                        ""
                     ) : (
                        <CinemaList onSelect={handleSelectCinema} />
                     )}
                  </div>
                  <div className={styles.desktopDetails}>
                     <div className={styles.desktopDetailsWrapper}>
                        {width <= 768 ? (
                           ""
                        ) : (
                           <InputSelectCinema isMobile={false} />
                        )}

                        <MovieSchedule
                           rb={{
                              0: { slidesPerView: 3, width: 246 },
                              360: { slidesPerView: 4, width: 328 },
                              430: {
                                 slidesPerView: 5,
                                 width: 390,
                              },
                              580: {
                                 slidesPerView: 7,
                                 width: 554,
                              },
                              768: {
                                 slidesPerView: 6,
                                 width: 472,
                              },
                              880: {
                                 width: 554,
                                 slidesPerView: 7,
                              },
                           }}
                        />
                        <div>
                           <MovieList />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default TicketBooking;
