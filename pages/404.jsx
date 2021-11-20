import Image from "next/image";
import Link from "next/link";
import pikachu from "../public/pikachu.png";
import styles from "../styles/error-404.module.css";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <Link href="/">
        <a className={styles.AssistanceLink}>
          <MdOutlineCatchingPokemon />
          Home
        </a>
      </Link>
      <figure className={styles.imgaeContainer}>
        <Image src={pikachu} layout="responsive" alt="pikachu" />
      </figure>
    </div>
  );
};

export default Error404;
