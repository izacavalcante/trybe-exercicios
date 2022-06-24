import React from "react";
import PropTypes from "prop-types";

class Pokemons extends React.Component {
    render () {
        const { name, type, value, img } = this.props;
        return (
            <div>
                <p>{ name }</p>
                <p>{ type }</p>
                <p>Average weight: { value } kg</p>
                <img src={ img } alt={ name } />
            </div>
        );
    }
}

Pokemons.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
}

export default Pokemons;