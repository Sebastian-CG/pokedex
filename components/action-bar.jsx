import { MdFilterAlt } from "react-icons/md";
import styles from "../styles/action-bar.module.css";

const ActionBar = ({ types, changeFilter, visibleFilter, openFilter }) => {
  const pClick = (e, type) => {
    e.stopPropagation();
    changeFilter(type);
    console.log(type);
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
            {types.map(type => (
              <p key={type} onClick={e => pClick(e, type)}>
                {type}
              </p>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default ActionBar;
