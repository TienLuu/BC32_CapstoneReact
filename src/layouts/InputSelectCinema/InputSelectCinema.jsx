// Import Library's Component
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Import Module Css
import styles from "./styles.module.scss";

const InputSelectCinema = ({ isMobile, isIcon }) => {
   return (
      <>
         <div
            className={`${styles.InputSelectCinema} ${
               isMobile ? `${styles.isSelect}` : ""
            }`}
         >
            <span>Select Cinema</span>
            <div className={styles.container}>
               <div>
                  <div className={styles.image}>
                     <img
                        src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                        alt="cgv"
                     />
                  </div>
                  <div className={styles.inforDetails}>
                     <h4>CGV Aeon Bình Tân</h4>
                     <div className={styles.address}>
                        <p>
                           Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1
                           đường số 17A, khu phố 11, phường Bình Trị Đông B,
                           quận Bình Tân, TPHCM
                        </p>
                     </div>
                  </div>
                  <div className={styles.icon}>
                     {isIcon ? <KeyboardArrowDownIcon /> : ""}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default InputSelectCinema;
