// Import Library's Component
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ForumIcon from "@mui/icons-material/Forum";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Import Module Css
import styles from "./styles.module.scss";

const News = () => {
   return (
      <section className={styles.news}>
         <div className={styles.wrapper}>
            <div className={styles.title}>
               <h2>
                  <span>Latest</span> news
               </h2>
            </div>
            <div className={styles.newsList}>
               <div className={styles.newsItem}>
                  <div className={styles.header}>
                     <div className={styles.img}>
                        <img
                           src="./images/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png"
                           alt="news-img"
                        />
                     </div>
                  </div>
                  <div className={styles.body}>
                     <h4>
                        Dàn Mỹ Nhân Trong Thế Giới Điện Ảnh Của Quái Kiệt
                        Christopher Nolan
                     </h4>
                     <span>01 Aug 2020</span>
                     <p>
                        Eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.Eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                     </p>
                  </div>
                  <div className={styles.footer}>
                     <div className={styles.newsIcon}>
                        <div className={styles.thumb}>
                           <ThumbUpAltIcon />
                           <span>140 Like</span>
                        </div>
                        <div className={styles.comment}>
                           <ForumIcon />
                           <span>52 Comments</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.newsItem}>
                  <div className={styles.header}>
                     <div className={styles.img}>
                        <img
                           src="./images/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122361852.png"
                           alt="news-img"
                        />
                     </div>
                  </div>
                  <div className={styles.body}>
                     <h4>
                        Dàn Mỹ Nhân Trong Thế Giới Điện Ảnh Của Quái Kiệt
                        Christopher Nolan
                     </h4>
                     <span>01 Aug 2020</span>
                     <p>
                        Eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.Eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                     </p>
                  </div>
                  <div className={styles.footer}>
                     <div className={styles.newsIcon}>
                        <div className={styles.thumb}>
                           <ThumbUpAltIcon />
                           <span>140 Like</span>
                        </div>
                        <div className={styles.comment}>
                           <ForumIcon />
                           <span>52 Comments</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.newsItem}>
                  <div className={styles.header}>
                     <div className={styles.img}>
                        <img
                           src="./images/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999467501.png"
                           alt="news-img"
                        />
                     </div>
                  </div>
                  <div className={styles.body}>
                     <h4>
                        Dàn Mỹ Nhân Trong Thế Giới Điện Ảnh Của Quái Kiệt
                        Christopher Nolan
                     </h4>
                     <span>01 Aug 2020</span>
                     <p>
                        Eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.Eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                     </p>
                  </div>
                  <div className={styles.footer}>
                     <div className={styles.newsIcon}>
                        <div className={styles.thumb}>
                           <ThumbUpAltIcon />
                           <span>140 Like</span>
                        </div>
                        <div className={styles.comment}>
                           <ForumIcon />
                           <span>52 Comments</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.showMore}>
               <span>View all</span>
               <KeyboardArrowDownIcon />
            </div>
         </div>
      </section>
   );
};

export default News;
