import React, { Component } from 'react';
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
      <div className="container">
        <Dishes dishes={dishes} />
      </div>
    );
  }
}

export default App;
