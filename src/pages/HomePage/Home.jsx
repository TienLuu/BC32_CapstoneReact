// Import Components
import Carousel from "./Carousel";
import TicketBookingInput from "./TicketBookingInput";
import FilmList from "./FilmList";
import TicketBooking from "./TicketBooking";
import News from "./News";

// Import Module Css
import filmList from "../../data/filmlist.json";
import showtimes from "../../data/showtimes.json";

const Home = () => {
   return (
      <div>
         <Carousel />
         <TicketBookingInput
            movies={filmList.content}
            movieDetails={showtimes.content.heThongRapChieu}
         />
         <FilmList />
         <TicketBooking />
         <News />
      </div>
   );
};

export default Home;
