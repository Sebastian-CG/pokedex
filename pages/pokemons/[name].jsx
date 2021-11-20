/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRef } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pokemon-profile.module.css";

const PokemonProfile = ({ data }) => {
  const refContainer = useRef(null);

  const handleClick = e => {
    console.log(e);
  };

  console.log(data);

  const dataHead = {
    refElement: refContainer,
    favicon: "/favicon.ico",
    tabName: data.name || "Pokemon not found",
    themeColor: "#000000",
    mainContainerClass: data.types[0].type.name,
    eventClick: handleClick,
  };

  return (
    <Layout {...dataHead}>
      <div>
        <Link href="/">
          <a>Regresar</a>
        </Link>

        <h1 className={styles.pokemonName}>{data.name}</h1>
        <p className={styles.property}>
          <span className={styles.propertyName}>Types:</span>{" "}
          {data.types.map(type => type.type.name).join(", ")}
        </p>
        <p className={styles.property}>
          <span className={styles.propertyName}>Weight:</span> {data.weight}
        </p>
        <p className={styles.property}>
          <span className={styles.propertyName}>Height:</span> {data.height}
        </p>
        <p className={styles.property}>
          <span className={styles.propertyName}>Base Experience:</span> {data.base_experience}
        </p>

        <figure className={styles.ImageContainer}>
          <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
        </figure>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async context => {
  const { name } = context.query;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default PokemonProfile;
