/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRef } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pokemon-profile.module.css";

import { MdKeyboardArrowLeft } from "react-icons/md";

const PokemonProfile = ({ pokemon }) => {
  const refContainer = useRef(null);

  const dataHead = {
    refElement: refContainer,
    favicon: "/favicon.ico",
    tabName: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    themeColor: "#ffffff",
    mainContainerClass: pokemon.types[0],
  };

  return (
    <Layout {...dataHead}>
      <div>
        <Link href="/">
          <a className={styles.backButton}>
            <MdKeyboardArrowLeft />
          </a>
        </Link>

        <h1 className={styles.pokemonName}>{pokemon.name}</h1>
        <figure className={styles.ImageContainer}>
          <img src={pokemon.image} alt={pokemon.name} />
        </figure>

        <div className={styles.gridInfoBox}>
          <div className={styles.infoBox}>
            <h3>Types</h3>
            {pokemon.types.map(type => (
              <p key={type}>{type}</p>
            ))}
          </div>

          <div className={styles.infoBox}>
            <h3>Weight</h3>
            <p>{pokemon.weight}</p>
          </div>

          <div className={styles.infoBox}>
            <h3>Height</h3>
            <p>{pokemon.height}</p>
          </div>

          <div className={styles.infoBox}>
            <h3>Base Experience</h3>
            <p>{pokemon.base_experience}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async context => {
  const { name } = context.query;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  const reduceData = {
    image: data.sprites.other.dream_world.front_default,
    name: data.name,
    weight: data.weight,
    height: data.height,
    types: data.types.map(e => e.type.name),
    base_experience: data.base_experience,
  };

  return {
    props: {
      pokemon: reduceData,
    },
  };
};

export default PokemonProfile;
