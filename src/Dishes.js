import React from 'react';
import Dish from './Dish';

class Dishes extends React.Component {
    constructor(props){
        super(props);
        this.dishes=[];
    }

    deleteDish(dishName){
        let dishes = this.state.dishes.slice();
        dishes.forEach((dish, index) => {
            if (dish.dishName === dishName) {
                dish.splice(index, 1);
            }
        });
        this.setState({dishes});
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