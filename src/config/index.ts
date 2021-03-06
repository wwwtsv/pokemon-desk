const config = {
  server: {
    protocol: 'http',
    host: 'zar.hosthot.ru',
  },
  client: {
    endpoint: {
      getPokemons: {
        method: 'GET',
        url: {
          pathname: '/api/v1/pokemons',
        },
        params: {
          query: {
            limit: 50,
          },
        },
      },
      getPokemon: {
        method: 'GET',
        url: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
    },
  },
};

export default config;
