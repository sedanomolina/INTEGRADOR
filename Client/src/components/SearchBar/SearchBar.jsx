import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onSearchCharacterRandom, handleCleanCharacters }) {

   const [id, setId] = useState('')

   const handleChange = (event) => {
      const { value } = event.target;
      setId(value);
   };

   const handleKeyDown = (event) => {
      const { key } = event
      if (key === 'Enter') {
         onSearch(id);
         setId('')
      }
   }

   return (
      <div className={styles.container__search} >

         <input
            className={styles.input__search}
            placeholder="Enter id"
            type='search'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={id}
         />

         <div>
            <button className={styles.button__search} onClick={onSearchCharacterRandom} >random</button>

            <button className={styles.button__search} onClick={handleCleanCharacters} >clean</button>
         </div>

      </div>
   );
};

