// Import Custom Hook
import useBodyScroll from "../../hooks/useBodyScroll";

// Import Module Css
import styles from "./styles.module.scss";
import getVideoId from "../../utils/EmbedVideo";

const ModalVideo = ({ isOpen, onClose, url }) => {
   useBodyScroll(isOpen);

   const videoId = getVideoId(url);

   return (
      <>
         <div className={`${styles.popup} ${isOpen ? `${styles.active}` : ""}`}>
            <div className={styles.modal}>
               <button className={styles.close} onClick={() => onClose()}>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="2"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                     ></path>
                  </svg>
               </button>
               <div className={styles.body}>
                  <div className={styles.video}>
                     {isOpen ? (
                        <iframe
                           id="my-iframe-id"
                           width="100%"
                           height="100%"
                           src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&widgetid=11`}
                           title="YouTube video player"
                           frameBorder="0"
                           allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted"
                           allowFullScreen
                        ></iframe>
                     ) : (
                        ""
                     )}
                  </div>
                  <div className={styles.text}>
                     <h1>Chiến Binh Báo Đen 2: Wakanda Bất Diệt</h1>
                     <span>- Khoa Học Viễn Tưởng, Phiêu Lưu, Hành Động</span>
                     <p>
                        Nữ hoàng Ramonda, Shuri, M’Baku, Okoye và Dora Milaje
                        chiến đấu để bảo vệ quốc gia của họ khỏi sự can thiệp
                        của các thế lực thế giới sau cái chết của Vua T’Challa.
                        Khi người Wakanda cố gắng nắm bắt chương tiếp theo của
                        họ, các anh hùng phải hợp tác với nhau với sự giúp đỡ
                        của War Dog Nakia và Everett Ross và tạo ra một con
                        đường mới cho vương quốc Wakanda.
                     </p>
                  </div>
               </div>
               <div className={styles.footer}>
                  <button onClick={() => onClose()}>Đóng</button>
               </div>
            </div>
            <div className={styles.overlay}></div>
         </div>
      </>
   );
};

export default ModalVideo;
