import React from 'react';
import IngredientsList from './IngredientsList';
import ModalForm from '../Modal/ModalForm';

class Dish extends React.Component {
    handleEdit(dishName) {
        this.props.editDish(dishName);
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
                        <button className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.dishName)}  data-toggle="modal" data-target="#editModal">Edit</button>
                        <button className="btn btn-danger" onClick={this.handleDelete.bind(this, this.props.dishName)}>Delete</button>
                        <ModalForm dishName={this.props.dishName} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dish;