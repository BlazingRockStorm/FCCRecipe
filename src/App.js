import React, { Component } from 'react';
import IngredientsList from './IngredientsList';
import Dish from './Dish';
import Dishes from './Dishes';

var dishes = 	[{
  dishName: "Pumpkin Pie",
  ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]
}, {
  dishName: "Spaghetti",
  ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]
}, {
  dishName: "Onion Pie",
  ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]
}];

class App extends Component {
  render() {
    return (
      <Dishes dishes={dishes} />
    );
  }
}

export default App;
