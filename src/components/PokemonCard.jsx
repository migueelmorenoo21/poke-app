const PokemonCard = ({ pokemonName, mainType, habilities, photoURL, borderColor }) => {
  return (
    <div className={`border-2 border-${borderColor}-700 p-4 rounded-lg shadow-lg`}>
        <h2 className="text-xl font-bold capitalize">{pokemonName}</h2>
        <p>{mainType}</p>
        <p>{habilities}</p>
        <img className="w-40 h-40 mx-auto" src={photoURL} alt={pokemonName} />
    </div>
  )
}

export default PokemonCard;