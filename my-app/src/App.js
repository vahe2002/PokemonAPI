import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import { apiClient } from './api/api-client';
import { PokemonList, PokemonImage } from './pokemons/pokemon-list';

const App = ()  => {
  const [pokemons, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  apiClient
    .getAllPokemons()
    .then(pokemon => {
      setPokemon(pokemon);
      setLoading(false);
    });
  }, []);

    if (loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <PokemonList pokemons={pokemons} />
          <PokemonImage pokemons={pokemons} />
        </div>
      </Fragment>
    );
}

export default App;
