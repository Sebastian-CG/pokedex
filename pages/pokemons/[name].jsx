/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRef } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/pokemon-profile.module.css";

import { MdKeyboardArrowLeft } from "react-icons/md";

const PokemonProfile = ({ pokemon }) => {
  const refContainer = useRef(null);

  const handleClick = e => {
    console.log(e);
  };

  console.log(pokemon);

  const dataHead = {
    refElement: refContainer,
    favicon: "/favicon.ico",
    tabName: pokemon.name,
    themeColor: "#ffffff",
    mainContainerClass: pokemon.types[0].type.name,
    eventClick: handleClick,
  };

  return (
    <Layout {...dataHead}>
      <div>
        <Link href="/">
          <a className={styles.backButton}><MdKeyboardArrowLeft/></a>
        </Link>

        <h1 className={styles.pokemonName}>{pokemon.name}</h1>
        <figure className={styles.ImageContainer}>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
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
      pokemon: data,
    },
  };
};

export default PokemonProfile;
