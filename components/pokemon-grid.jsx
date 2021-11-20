/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/pokemon-grid.module.css";

const PokemonGrid = ({ pokemons }) => {
  return (
    <div className={styles.gridContainer}>
      {pokemons.map(pokemon => (
        <Link
          key={pokemon.id}
          href={{
            pathname: "/pokemons/[name]",
            query: { name: pokemon.name },
          }}
        >
          <a className={`${styles.card} ${pokemon.types[0]}`}>
            <p className={styles.namePokemon}>{pokemon.name}</p>
            <p className={styles.pokemonID}>{pokemon.id}</p>

            <figure>
              <img src={pokemon.image} alt={pokemon.name} />
            </figure>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PokemonGrid;
