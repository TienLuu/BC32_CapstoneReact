// Import Module Css
import styles from "./styles.module.scss";

const Ticket = () => {
   const handlePurchase = () => {};

   return (
      <div className={styles.ticket}>
         <h3>Ticket</h3>
         <div className={styles.main}>
            <div className={styles.details}>
               <div className={styles.cinemaName}>
                  <span>Cinema: </span>
                  <span>BHD Star Cineplex - Phạm Hùng</span>
               </div>
               <div className={styles.movieName}>
                  <span>Movie: </span>
                  <span>Chiến Binh Báo Đen 2: Wakanda Bất Diệt</span>
               </div>
               <div className={styles.showTime}>
                  <span>ShowTime: </span>
                  <span>25/05 - 19:00</span>
               </div>
               <div className={styles.room}>
                  <span>Room: </span>
                  <span>Rạp 2</span>
               </div>
               <div className={styles.seatNumber}>
                  <span>Seats: </span>
                  <span>A12, A15</span>
               </div>
            </div>
         </div>
         <div className={styles.purchase}>
            <div className={styles.totalPrice}>
               <span>Total Price: </span>
               <span>5000 VNĐ</span>
            </div>
            <div className={styles.btnPurchase}>
               <button onClick={handlePurchase}>Purchase</button>
            </div>
         </div>
      </div>
   );
};

export default Ticket;
