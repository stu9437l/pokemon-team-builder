import { useEffect, useState } from "react";
import { Axios } from "../axios";
import axios from "axios";
import { Threedigit } from "../utils";
import Loading from "../component/loading";
import { Link } from "react-router-dom";
import Pokemon from "../component/pokemon-card";
import Header from "../component/header";
const Homepage = () => {
  const generations = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [generation, setGeneration] = useState(1);

  const [team, setTeam] = useState([]);

  const StoreID = (id) => {
    if (!team.includes(id)) {
      setTeam((prev) => [...prev, id]);
    } else {
      setTeam((prev) => [...prev]);
    }
  };

  useEffect(() => {
    const teamJson = JSON.stringify(team);
    localStorage.setItem("my-team", teamJson);
  }, [team]);

  useEffect(() => {
    const getPokemonByGeneratation = async (generation) => {
      try {
        const response = await Axios.get(`/generation/${generation}`);
        const results = response.data.pokemon_species;
        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            const speciesResponse = await axios.get(
              pokemonResponse.data.varieties[0].pokemon.url
            );
            return {
              name: pokemon.name,
              image: speciesResponse.data.sprites.front_default,
              types: speciesResponse.data.types.map((type) => type.type.name),
              color: pokemonResponse.data.color.name,
              id: speciesResponse.data.id,
            };
          })
        );
        setPokemonData(pokemonDetails);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getPokemonByGeneratation(generation);
  }, [generation]);

  return (
    <>
      <Header />
      <section className="pokemon">
        <div className="container">
          <div className="brand-logo">
            <img className="brand-logo__image"></img>
          </div>
          <div className="pokemon-generation">
            <h4 className="pokemon-generation__title">Select Generation</h4>
            <div className="d-flex justify-content-center">
              <ul className="pokemon-generation__filter">
                {generations.map((gen, index) => {
                  return (
                    <li key={index}>
                      <button
                        className={`pokemon-generation__number ${
                          generation === index + 1 && "active"
                        }`}
                        onClick={() => {
                          setGeneration(index + 1);
                        }}
                      >
                        {gen}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <h3 className="mb-4">Generation {generation}</h3>
          <div className="pokemon-list">
            <div className="row g-3">
              {isLoading ? (
                <Loading />
              ) : (
                pokemonData.map((pokemon, index) => {
                  return (
                    <Pokemon
                      name={pokemon.name}
                      image={pokemon.image}
                      id={pokemon.id}
                      types={pokemon.types}
                      index={index}
                      color={pokemon.color}
                      StoreID={StoreID}
                      idAddButton={true}
                      isRemoveButton={false}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
