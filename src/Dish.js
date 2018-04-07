import React from 'react';
import IngredientsList from './IngredientsList';

class Dish extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-heading">{this.props.dishName}</div>
                    <div  className="panel-body">
                        <IngredientsList ingredients={this.props.ingredients} />
                        <button className="btn btn-default">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dish;