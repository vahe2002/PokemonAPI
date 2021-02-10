import React, { Fragment } from 'react';

export const Pokemon = ({ pokemons, onCompleteChange }) => (
    <Fragment>
        {pokemons.map(pokemon => (
            <div key={pokemon.id} className="pokemon">
                <img src={pokemon.images.small} />
                <p className="poke-name">Name: {pokemon.name}</p>
                <p className="poke-hp">HP: {pokemon.hp}</p>
                <div className="attack-wrap">
                    <p className="poke-attack">Attack: {pokemon.attacks[0].name}</p>
                    <p className="poke-attack-damage">Damage: {pokemon.attacks[0].damage}</p>
                </div>
            </div>
        ))}
    </Fragment>
);


