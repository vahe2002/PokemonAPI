const BASE_URL = 'http://localhost:5001/api/pokemon';

export const apiClient = {
  getAllTasks() {
    console.log('Fetching pokemons');
    
     return fetch(BASE_URL).then(result => result.json());
  }

  

  

  
};
