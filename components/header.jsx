import Image from "next/image";
import SearchBar from "./search-bar";
import styles from "../styles/header.module.css";
import pokemonLogo from "../public/pokemon_logo.png";

const Header = ({ setSearch }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.ImageContainer}>
        <Image src={pokemonLogo} layout="responsive" alt="Pokemon Logo" />
      </div>
      <SearchBar setState={setSearch} />
    </header>
  );
};

export default Header;
