// Import Components
import SeatItem from "../SeatItem";

// Import Module Css
import styles from "./styles.module.scss";

const SeatManagement = ({ seats }) => {
   return (
      <>
         <div className={styles.seatChoice}>
            <h1>CHOOSE SEAT</h1>
            <div className={styles.typeChose}>
               <span className={styles.seatSelected}>Selected Seat</span>
               <span className={styles.seatReserved}>Reserved Seat</span>
               <span className={styles.seatEmpty}>Empty Seat</span>
            </div>
            <div className={styles.screen}>
               <div className={styles.screenLight}></div>
            </div>
            <div className={styles.seatList}>
               <div className={styles.wrapper}>
                  {seats.map((line, indexLine) => (
                     <div key={indexLine} className={styles.seatLine}>
                        {indexLine > 0
                           ? line.danhSachGhe.map((seat, indexSeat) => (
                                <SeatItem
                                   key={seat.soGhe}
                                   number={indexSeat + 1}
                                   isSeat={line.hang}
                                   seatInfo={seat}
                                   lineName={line.hang}
                                />
                             ))
                           : ""}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default SeatManagement;
