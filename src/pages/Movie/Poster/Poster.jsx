// Import Library's Hook
import { useState } from "react";

// Import Components
import ModalVideo from "../../../layouts/ModalVideo";

// Import Module Css
import styles from "./styles.module.scss";

const Poster = () => {
   const [isFullPara, setIsFullPara] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);

   const handleClickTrailer = () => {
      setIsOpenModal(!isOpenModal);
   };

   return (
      <>
         <div className={styles.moviePoster}>
            <div className={styles.background}></div>
            <div className={styles.container}>
               <div className={styles.wrapper}>
                  <div className={styles.movieImg}>
                     <div>
                        <img src="../images/movieBlack.jpg" alt="Black" />
                        <div
                           className={styles.btnTrailer}
                           onClick={handleClickTrailer}
                        >
                           <svg
                              viewBox="0 0 48 48"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g fill="none" fillRule="evenodd">
                                 <circle
                                    stroke="#FFF"
                                    strokeWidth="2"
                                    fillOpacity=".24"
                                    fill="#000"
                                    cx="24"
                                    cy="24"
                                    r="23"
                                 ></circle>
                                 <path
                                    d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z"
                                    fill="#FFF"
                                    fillRule="nonzero"
                                 ></path>
                              </g>
                           </svg>
                        </div>
                        <ModalVideo
                           isOpen={isOpenModal}
                           onClose={handleClickTrailer}
                           url="https://www.youtube.com/embed/js7_OSmYDxg"
                        />
                     </div>
                  </div>
                  <div className={styles.movieDescription}>
                     <div className={styles.ageLimit}>13+</div>
                     <h1>Chiến Binh Báo Đen 2: Wakanda Bất Diệt</h1>
                     <h3>Nội dung</h3>
                     <div className={`${styles.text} ${styles.showMore}`}>
                        {isFullPara
                           ? `Nữ hoàng Ramonda, Shuri, M’Baku, Okoye và Dora Milaje
                        chiến đấu để bảo vệ quốc gia của họ khỏi sự can thiệp
                        của các thế lực thế giới sau cái chết của Vua T’Challa.
                        Khi người Wakanda cố gắng nắm bắt chương tiếp theo của
                        họ, các anh hùng phải hợp tác với nhau với sự giúp đỡ
                        của War Dog Nakia và Everett Ross và tạo ra một con
                        đường mới cho vương quốc Wakanda.`
                           : `Nữ hoàng Ramonda, Shuri, M’Baku, Okoye và Dora Milaje
                        chiến đấu để bảo vệ quốc gia của họ khỏi sự can thiệp
                        của các thế lực thế giới sau cái chết của Vua T’Challa.`}
                        <span onClick={() => setIsFullPara(!isFullPara)}>
                           {isFullPara ? "Thu gọn" : "...Xem thêm"}
                        </span>
                     </div>
                     <div className={styles.anotherDescription}>
                        <div className={styles.date}>
                           <p>Ngày chiếu</p>
                           <span>11/11/2022</span>
                        </div>
                        <div className={styles.type}>
                           <p>Thể loại</p>
                           <span>
                              Khoa Học Viễn Tưởng, Phiêu Lưu, Hành Động
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Poster;
