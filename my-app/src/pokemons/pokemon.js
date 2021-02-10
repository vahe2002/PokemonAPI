import React, { Fragment } from 'react';

export const Pokemon = ({ pokemons, onCompleteChange }) => (
    <Fragment>
        {pokemons.map(pokemon => (
            <div class="pokemon">
                <img src={pokemon.images.small} />
                <p class="poke-name">Name: {pokemon.name}</p>
                <p class="poke-hp">HP: {pokemon.hp}</p>
                <div class="attack-wrap">
                    <p class="poke-attack">Attack: {pokemon.attacks[0].name}</p>
                    <p class="poke-attack-damage">Damage: {pokemon.attacks[0].damage}</p>
                </div>
            </div>
        ))}
    </Fragment>
);


