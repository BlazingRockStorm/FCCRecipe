import React from 'react';

class Ingredient extends React.Component {
    render() {
      return (<li>{this.props.name}</li>);
    }
}

export default Ingredient;