// Import Components
import NowShowing from "./NowShowing";
import ComingSoon from "./ComingSoon";

const FilmList = () => {
   return (
      <>
         <section className="filmList">
            <div className="wrapper">
               <div className="nowShowing">
                  <h2>
                     <span>Now</span> showing
                  </h2>

                  <NowShowing />
               </div>

               <div className="comingSoon">
                  <h2>
                     <span>Coming</span> soon
                  </h2>

                  <ComingSoon />
               </div>
            </div>
         </section>
      </>
   );
};

export default FilmList;
