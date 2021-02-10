import React from 'react';

export const PokemonList = ({ pokemons, onCompleteChange }) => (
    <ul>
        {pokemons.map(pokemon => (
            <li key={pokemon.id}>{JSON.stringify(pokemon.name)}, 
            
            </li>
        ))}
    </ul>
    
);

export const PokemonImage = ({ pokemons, onCompleteChange }) => (
    <ul>
        {pokemons.map(pokemon => (
            <li key={pokemon.id}> 
            <image src= {pokemon.image}></image>
            </li>
        ))}
    </ul>
    
);
