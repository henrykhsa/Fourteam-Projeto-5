import readline from "readline";

async function buscarPokemon(nameId) {
  try {
    const responseAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameId}`);
    const pokemon = await responseAPI.json();

    console.log(`ID: ${pokemon.id}`);
    console.log(`Nome: ${pokemon.name}`);
    console.log(`Tipos: ${pokemon.types.map((t) => t.type.name).join(", ")}`);
    console.log(`Imagem: ${pokemon.sprites.front_default}`);
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error.message);
  }
}
