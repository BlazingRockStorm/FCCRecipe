import React from 'react';
import IngredientsList from './IngredientsList';

class Dish extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="">
                    <div className=""><p>{this.props.dishName}</p></div>
                    <IngredientsList ingredients={this.props.ingredients} />
                </div>
            </div>
        );
    }
}

export default Dish;