// Import Library's Hook
import { useParams } from "react-router-dom";

// Import Custom Hook
import useRequest from "../../hooks/useRequest";

// Import Library's Component
import axios from "axios";

// Import Components
import SeatManagement from "./SeatManagement";
import Ticket from "./Ticket";

// Import Module Css
import styles from "./styles.module.scss";

const Checkout = () => {
   const { checkoutId } = useParams();
   const { data = [], setData } = useRequest(async () => {
      const { data } = await axios.get(
         "https://62f50939535c0c50e76847d8.mockapi.io/seats"
      );
      return data;
   });

   return (
      <section className={styles.checkout}>
         <div className={styles.main}>
            <SeatManagement seats={data} />
            <Ticket />
         </div>
      </section>
   );
};

export default Checkout;
