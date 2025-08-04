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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function exibirMenu() {
  console.log(`
  1 - Buscar por nome ou ID
  2 - Buscar por tipo
  0 - Sair
`);

  rl.question("Escolha uma opção: ", async (opcao) => {
    if (opcao === '1') {
      rl.question("Digite o nome ou ID do Pokémon: ", async (input) => {
        await buscarPokemon(input.toLowerCase());
        exibirMenu();
      });
    } else if (opcao === '2') {
      rl.question("Digite o tipo do Pokémon : ", async (input) => {
        await buscarPokemonPorTipo(input.toLowerCase());
        exibirMenu();
      });
    } else if(opcao==='0'){
        console.log('parou aqui');
    }
    
  });
}

exibirMenu();