// Import Library's Hook
import { useState } from "react";

// Import Component
import CinemaItem from "./CinemeItem";

// Import Module Css
import styles from "./styles.module.scss";
import dscumrapcgv from "../../data/dscumrapcgv.json";

const CinemaList = ({ onSelect }) => {
   const newDSCumRapCgv = [...dscumrapcgv.content];
   const [activeId, setActiveId] = useState();

   const handleClick = (cinemaId) => {
      setActiveId(cinemaId);
   };

   return (
      <>
         <div className={styles.cinemaList}>
            <div className={styles.inputSearch}>
               <input type="text" placeholder="Tìm tên theo rạp ..." />
            </div>
            {newDSCumRapCgv.map((item, index) => (
               <CinemaItem
                  key={index}
                  cinema={item}
                  setActive={handleClick}
                  isActive={
                     item.maCumRap === activeId || (index === 0 && !activeId)
                  }
               />
            ))}
         </div>
      </>
   );
};

export default CinemaList;
