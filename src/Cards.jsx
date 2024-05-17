async function Cards() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6')

  const data = await response.json()

  const promises = data.results.map((pokemon) =>
    fetch(pokemon.url).then((res) => res.json())
  )

  const pokemonDetails = await Promise.all(promises)

  const images = pokemonDetails.map((pokemon) => pokemon.sprites.front_default)

  return images.concat(images)
}

export default Cards
