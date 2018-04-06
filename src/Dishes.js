import React from 'react';
import Dish from './Dish';

class Dishes extends React.Component {
    constructor(props){
        super(props);
        this.dishes=[];
    }

    render() {
        this.dishes = this.props.dishes.map((dish,i)=>
            <Dish key={i} dishName={dish.dishName} ingredients={dish.ingredients} />
        );
        return(
            <div>{this.dishes}</div>
        );
    }
}

export default Dishes;