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

// Buscar por tipo
async function buscarPokemonPorTipo(tipo) {
  try {
    const responseAPI = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
    const tipoData = await responseAPI.json();

    console.log(`\nPokémons do tipo ${tipo}:`);
    for (const p of tipoData.pokemon) {
      console.log(`- ${p.pokemon.name}`);
    }
    console.log();
  } catch (error) {
    console.error('Erro ao buscar Pokémon por tipo:', error.message);
  }
}


