import { useRef, useState } from "react";
import ActionBar from "../components/action-bar";
import Header from "../components/header";
import useModal from "../hooks/useModal";
import PokemonGrid from "../components/pokemon-grid";
import Layout from "../components/layout";
// import styles from "../styles/home.module.css";

const Home = ({ pokemons }) => {
  const [search, setSearch] = useState("");
  const [visibleFilter, openFilter, closeFilter] = useModal();

  const refMainContainer = useRef(null);

  const handleClick = () => {
    if (visibleFilter) closeFilter();
  };

  const dataHead = {
    refElement: refMainContainer,
    favicon: "/favicon.ico",
    tabName: "Pokedex",
    themeColor: "#ffffff",
    mainContainerClass: "",
    eventClick: handleClick,
  };

  console.log(pokemons);

  return (
    <Layout {...dataHead}>
      <Header setSearch={setSearch} />
      <ActionBar visibleFilter={visibleFilter} openFilter={openFilter} />
      <PokemonGrid pokemons={pokemons} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const pokemons = [];

  for (let i = 1; i <= 100; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const result = await response.json();

    pokemons.push({
      id: result.id,
      name: result.name,
      image: result.sprites.other.dream_world.front_default,
      weight: result.weight,
      height: result.height,
      base_experience: result.base_experience,
      types: result.types.map(item => item.type.name),
    });
  }

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
