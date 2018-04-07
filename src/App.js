import React, { Component } from 'react';
import Dishes from './Dishes';

var dishes = 	[{
  dishName: "Pumpkin Pie",
  ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]
}, {
  dishName: "Spaghetti",
  ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs","(Optional) Cheese","(Optional) Minced Beef","(Optional) Minced Pork","Butter","Wheat"]
}, {
  dishName: "Onion Pie",
  ingredients: ["Onion", "Pie Crust"]
}, {
  dishName: "Egg Coffee",
  ingredients: ["Egg", "Coffee", "Milk"]
}, {
  dishName: "Oyakodon",
  ingredients: ["Onion", "Chicken", "Egg", "Mirin", "Soy Souce"]
}];

class App extends Component {
  render() {
    return (
      <div className="container">
        <Dishes dishes={dishes} />
        <button className="btn btn-primary">Add Dish</button>
      </div>
    );
  }
}

export default App;
