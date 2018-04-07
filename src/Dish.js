import React from 'react';
import IngredientsList from './IngredientsList';

class Dish extends React.Component {
    constructor(props){
        super(props);
    }

    handleDelete(dishName) {
      this.props.deleteDish(dishName);
    }
  

    render() {
        return (
            <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-heading">{this.props.dishName}</div>
                    <div  className="panel-body">
                        <IngredientsList ingredients={this.props.ingredients} />
                        <button className="btn btn-default">Edit</button>
                        <button className="btn btn-danger" onClick={this.handleDelete.bind(this, this.props.dishName)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dish;