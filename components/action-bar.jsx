import { MdFilterAlt } from "react-icons/md";
import styles from "../styles/action-bar.module.css";

const ActionBar = ({ visibleFilter, openFilter }) => {
  const pClick = e => {
    e.stopPropagation();
    console.log("Click en el element");
  };

  const btnFilter = e => {
    e.stopPropagation();
    if (!visibleFilter) openFilter();
  };

  return (
    <div className={styles.container}>
      <button onClick={btnFilter}>
        <MdFilterAlt />
        Filter
        {visibleFilter && (
          <div className={styles.filterContainer}>
            <p onClick={pClick}>Fire</p>
            <p onClick={pClick}>Water</p>
            <p onClick={pClick}>Air</p>
            <p onClick={pClick}>Ice</p>
            <p onClick={pClick}>Land</p>
            <p onClick={pClick}>Poison</p>
          </div>
        )}
      </button>
    </div>
  );
};

export default ActionBar;
