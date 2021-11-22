import { RiSearchLine } from "react-icons/ri";
import styles from "../styles/search-bar.module.css";

const SearchBar = ({ setState }) => {
  return (
    <div className={styles.container}>
      <RiSearchLine />
      <input
        onChange={e => setState(e.target.value.toLowerCase())}
        className={styles.inputSearch}
        type="search"
        placeholder="Search pokemon..."
      />
    </div>
  );
};

export default SearchBar;
