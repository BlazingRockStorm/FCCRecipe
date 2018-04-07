import React from 'react';
import Dish from './Dish';

class Dishes extends React.Component {
    constructor(props){
        super(props);
        this.dishes=[];
    }

    deleteDish(dishName){
        this.dishes = this.state.dishes.slice();
        this.dishes.forEach((dish, index) => {
            if (dish.dishName === dishName) {
                dish.splice(index, 1);
            }
        });
        this.setState(this.dishes);
    }

    render() {
        this.dishes = this.props.dishes.map((dish,i)=>
            <Dish key={i} dishName={dish.dishName} ingredients={dish.ingredients} deleteDish={this.deleteDish.bind(this)} />
        );
        return(
            <div className="row">{this.dishes}</div>
        );
    }
}

export default Dishes;