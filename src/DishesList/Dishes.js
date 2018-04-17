import React from 'react';
import Dish from './Dish';

class Dishes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dishes : this.props.dishes
        };
    }

    componentDidMount() {
        var dishes = this.props.dishes
        this.setState({
            dishes: dishes
        })
    }

    // function edit

    editDish(dishName) {
        alert(dishName);
    }

    // function delete
    deleteDish(dishName) {
        let dishes = this.state.dishes;
        dishes.forEach((dish,index) => {
            if(dish.dishName === dishName)
                dishes.splice(index,1);
        });
        this.setState({dishes});
    }

    render() {
        this.dishes = this.props.dishes.map((dish,i)=>
            <Dish key={i} 
                dishName={dish.dishName} 
                ingredients={dish.ingredients} 
                deleteDish={this.deleteDish.bind(this)} 
                editDish={this.editDish.bind(this)}
            />
        );
        return(
            <div className="row">{this.dishes}</div>
        );
    }
}

export default Dishes;