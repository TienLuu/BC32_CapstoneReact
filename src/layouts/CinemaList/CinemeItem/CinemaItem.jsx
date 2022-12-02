// Import Library's Component
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Import Module Css
import styles from "./styles.module.scss";

const CinemaItem = ({ cinema, setActive, isActive }) => {
   return (
      <>
         <div
            className={`${styles.cinemaItem} ${
               isActive ? `${styles.active}` : ""
            }`}
            onClick={() => setActive(cinema.maCumRap)}
         >
            <div className={styles.wrapper}>
               <div className={styles.img}>
                  <img
                     src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                     alt="123"
                  />
               </div>
               <div className={styles.text}>{cinema.tenCumRap}</div>

               <div className={styles.icon}>
                  <KeyboardArrowRightIcon />
               </div>
            </div>
         </div>
      </>
   );
};

export default CinemaItem;
