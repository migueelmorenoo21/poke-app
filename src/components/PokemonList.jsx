import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = () => {

    const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000"

    const[pokemonList, setPokemonList] = useState([])

    const getPokemons = async () => {
        const response = await fetch (API_URL)
        const data = await response.json ()
        const allPokemons = data.results;
        //barajamos aleatoriamente los pokemons para sacar 10 unicamente de manera aleatorio
        const shuffledPokemons = allPokemons.sort(()=> 0.5 - Math.random()).slice(0,10)

        const pokemonDetails = await Promise.all (
            shuffledPokemons.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                return await response.json()
            })
        );
        setPokemonList(pokemonDetails)
    };
    const getMainType = (pokemon) =>
    pokemon.types.find((t) => t.slot === 1)?.type.name || "desconocido";

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {pokemonList.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemonName={pokemon.name}
                    mainType={getMainType(pokemon)}
                    habilities={pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
                    photoURL={pokemon.sprites.front_default}
                    borderColor={"red"}
                />
            ))}
        </div>
    )
}

export default PokemonList