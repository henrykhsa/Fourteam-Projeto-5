# Bem-vindo(a) à PokéAPI!

Esta API foi criada para fornecer acesso rápido e fácil a dados detalhados sobre o universo Pokémon, incluindo informações sobre os próprios Pokémon, suas habilidades, tipos e muito mais. Use-a para desenvolver aplicativos, jogos ou qualquer projeto que precise de dados completos e atualizados sobre Pokémon.

## 🌟 Recursos

  - **Dados de Pokémon:** Obtenha informações sobre qualquer Pokémon, incluindo estatísticas, habilidades, evoluções e muito mais.
  - **Tipos e Habilidades:** Explore detalhes sobre todos os tipos de Pokémon e suas habilidades.
  - **Busca:** Encontre Pokémon por nome, ID ou tipo.
  - **Evoluções:** Acesse a cadeia de evolução completa de qualquer Pokémon.

## 🚀 Começando

Para começar a usar a PokéAPI, você precisa fazer uma chamada `GET` para o endpoint desejado. A API é **RESTful** e todas as respostas estão no formato **JSON**.

### Exemplo de Chamada

Aqui está um exemplo simples de como buscar um Pokémon por nome:

```
GET https://api.pokeapi.com/v1/pokemon/{nome-ou-id}
```

Substitua `{nome-ou-id}` pelo nome ou ID do Pokémon que você deseja buscar.

### Exemplos de Endpoints

  - **Todos os Pokémon:** `https://api.pokeapi.com/v1/pokemon`
  - **Detalhes de um Pokémon:** `https://api.pokeapi.com/v1/pokemon/pikachu`
  - **Habilidades de um Pokémon:** `https://api.pokeapi.com/v1/pokemon/pikachu/abilities`
  - **Busca por Tipo:** `https://api.pokeapi.com/v1/type/fire`

## 📖 Documentação

Para uma documentação completa e detalhada sobre todos os endpoints, parâmetros e estruturas de resposta, visite:

[PokeAPI](https://pokeapi.co)

A documentação inclui:

  - **Detalhes dos Endpoints:** Explicações sobre o que cada endpoint faz.
  - **Parâmetros de Requisição:** Quais parâmetros podem ser usados para filtrar ou buscar dados.
  - **Estruturas de Resposta:** Descrições dos campos JSON retornados.
  - **Códigos de Status HTTP:** O que significam os códigos de erro.

## 🤝 Contribuições

Sua contribuição é muito bem-vinda\! Se você encontrar um bug ou tiver uma sugestão de melhoria, sinta-se à vontade para abrir uma **issue**.

**Link do Repositório:** `https://github.com/henrykhsa/Fourteam-Projeto-5?tab=readme-ov-file`