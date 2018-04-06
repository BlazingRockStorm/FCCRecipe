import React from 'react';
import Ingredient from './Ingredient';

class IngredientsList extends React.Component {
    constructor(props){
        super(props);
        this.ingredients=[];
    }

    render() {
        this.ingredients = this.props.ingredients.map((ingredient,index)=>
            <Ingredient key={index} name={ingredient} />
        );
        return (
            <ul>{this.ingredients}</ul>	
        );
    }
}

export default IngredientsList;