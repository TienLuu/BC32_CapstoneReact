// Import Module Css
import styles from "./styles.module.scss";
import lichChieuCGVBT from "../../data/lichchieutheohethongrap.json";

const MovieList = () => {
   const { danhSachPhim } = lichChieuCGVBT.content[0].lstCumRap.find(
      (item) => item.maCumRap === "cgv-aeon-binh-tan"
   );
   const dsPhimDangChieu = danhSachPhim.filter(
      (item) => item.dangChieu === true
   );

   const showtime0 = [...dsPhimDangChieu[0].lstLichChieuTheoPhim];
   let arrShowTime = [];

   for (let item of showtime0) {
      let d = new Date(item.ngayChieuGioChieu);
      arrShowTime.push({ hours: d.getHours(), minutes: d.getMinutes() });
   }

   return (
      <>
         <div className={styles.movieList}>
            <div className={styles.container}>
               <div className={styles.movieItem}>
                  <div className={styles.wrapper}>
                     <div className={styles.movieItemDetails}>
                        <div className={styles.image}>
                           <img
                              src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h123_gp01.jpg"
                              alt="Img"
                           />
                        </div>
                        <div className={styles.text}>
                           <div className={styles.ageLimit}>
                              <span>13+</span>
                           </div>
                           <h3 className={styles.title}>Lat mat 48h1234</h3>
                           <p className={styles.subtitle}>hành động, gây cấn</p>
                        </div>
                        <div className={styles.showTime}>
                           <div className={styles.showTimeDetails}>
                              <span>2D Phụ đề</span>
                              <div className={styles.showTimeList}>
                                 {arrShowTime.map((item, index) => (
                                    <div
                                       key={index}
                                       className={styles.showTimeItem}
                                    >
                                       <strong>{item.hours}:00</strong> ~{" "}
                                       {item.minutes}:00
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.movieItem}>
                  <div className={styles.wrapper}>
                     <div className={styles.movieItemDetails}>
                        <div className={styles.image}>
                           <img
                              src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h123_gp01.jpg"
                              alt="Img"
                           />
                        </div>
                        <div className={styles.text}>
                           <div className={styles.ageLimit}>
                              <span>13+</span>
                           </div>
                           <h3 className={styles.title}>Lat mat 48h1234</h3>
                           <p className={styles.subtitle}>hành động, gây cấn</p>
                        </div>
                        <div className={styles.showTime}>
                           <div className={styles.showTimeDetails}>
                              <span>2D Phụ đề</span>
                              <div className={styles.showTimeList}>
                                 {arrShowTime.map((item, index) => (
                                    <div
                                       key={index}
                                       className={styles.showTimeItem}
                                    >
                                       <strong>{item.hours}:00</strong> ~{" "}
                                       {item.minutes}:00
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.movieItem}>
                  <div className={styles.wrapper}>
                     <div className={styles.movieItemDetails}>
                        <div className={styles.image}>
                           <img
                              src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h123_gp01.jpg"
                              alt="Img"
                           />
                        </div>
                        <div className={styles.text}>
                           <div className={styles.ageLimit}>
                              <span>13+</span>
                           </div>
                           <h3 className={styles.title}>Lat mat 48h1234</h3>
                           <p className={styles.subtitle}>hành động, gây cấn</p>
                        </div>
                        <div className={styles.showTime}>
                           <div className={styles.showTimeDetails}>
                              <span>2D Phụ đề</span>
                              <div className={styles.showTimeList}>
                                 {arrShowTime.map((item, index) => (
                                    <div
                                       key={index}
                                       className={styles.showTimeItem}
                                    >
                                       <strong>{item.hours}:00</strong> ~{" "}
                                       {item.minutes}:00
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default MovieList;
