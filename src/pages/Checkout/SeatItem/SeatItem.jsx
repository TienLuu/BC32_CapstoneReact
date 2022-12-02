// Import Library's Hook
import { useState } from "react";

// Import Library's Component
import cn from "classnames";

// Import Module Css
import styles from "./styles.module.scss";

const SeatItem = ({ number, isSeat, seatInfo, lineName }) => {
   const [isSelected, setIsSelected] = useState(false);

   const handleSelect = () => {};

   return (
      <>
         <div
            className={cn(
               { [styles.seat]: isSeat },
               { [styles.colNumber]: !isSeat },
               { [styles.active]: isSelected },
               { [styles.selected]: seatInfo?.daDat }
            )}
            onClick={handleSelect}
         >
            {lineName + number}
         </div>
      </>
   );
};

export default SeatItem;
