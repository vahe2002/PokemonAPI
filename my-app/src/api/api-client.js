const BASE_URL = 'https://localhost:5001/api/pokemon';

export const apiClient = {
  getAllPokemons() {
    console.log('Fetching pokemons');
    
     return fetch(BASE_URL).then(result => result.json());
  }
};
