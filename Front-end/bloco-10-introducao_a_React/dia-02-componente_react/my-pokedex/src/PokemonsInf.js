import React from "react";
import pokemons from "./data";
import Pokemons from "./Pokemons";

class PokemonsInf extends React.Component {
    render () {
        return (
            <div className="pokemons">
                {pokemons.map((item) => (
                    <Pokemons key={item.name}
                    name={ item.name }
                    type={ item.type }
                    value={ item.averageWeight.value }
                    img={ item.image }
                    />
                ))}
            </div>
        );
    }
}

export default PokemonsInf;
