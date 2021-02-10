import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import { apiClient } from './api/api-client';
import { Pokemon } from './pokemons/pokemon';
import { StartBattle } from './Btn/startbattle'

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

  const onClicked = () => {
    console.log("Clicked")

  }

    if (loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <Fragment>
        <div className="container">
          <Pokemon pokemons={pokemons} />
          <StartBattle onClicked={onClicked} />
        </div>
      </Fragment>
    );
}

export default App;
