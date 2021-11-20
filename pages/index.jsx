import { useEffect, useRef, useState } from "react";
import ActionBar from "../components/action-bar";
import Header from "../components/header";
import useModal from "../hooks/useModal";
import PokemonGrid from "../components/pokemon-grid";
import Layout from "../components/layout";
// import styles from "../styles/home.module.css";

const Home = ({ types, pokemons }) => {
  const [FilteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [visibleFilter, openFilter, closeFilter] = useModal();
  const refMainContainer = useRef(null);

  const changeFilter = newFilter => setFilter(newFilter);

  const handleClick = () => {
    if (visibleFilter) closeFilter();
  };

  useEffect(() => {
    filter === "all"
      ? setFilteredPokemons(pokemons)
      : setFilteredPokemons(pokemons.filter(pokemon => pokemon.types.includes(filter)));
  }, [filter, pokemons]);

  const dataHead = {
    refElement: refMainContainer,
    favicon: "/favicon.ico",
    tabName: "Pokedex",
    themeColor: "#ffffff",
    mainContainerClass: "",
    eventClick: handleClick,
  };

  return (
    <Layout {...dataHead}>
      <Header setSearch={setSearch} />
      <ActionBar
        types={types}
        changeFilter={changeFilter}
        visibleFilter={visibleFilter}
        openFilter={openFilter}
      />
      <PokemonGrid pokemons={FilteredPokemons} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const getData = async url => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  };

  let types = [];
  let pokemons = [];

  for (let index = 1; index <= 101; index++) {
    const getPokemon = await getData(`https://pokeapi.co/api/v2/pokemon/${index}`);
    pokemons.push(getPokemon);
  }

  const reduceData = pokemons.map(pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types.map(e => e.type.name),
    };
  });

  const getTypes = await getData("https://pokeapi.co/api/v2/type");

  types = ["all", ...getTypes.results.map(e => e.name)];
  pokemons = reduceData;

  return {
    props: {
      types,
      pokemons,
    },
  };
}

export default Home;
