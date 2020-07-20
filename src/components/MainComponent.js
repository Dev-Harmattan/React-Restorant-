import React, { Component } from 'react';
import {Navbar,  NavbarBrand} from "reactstrap";
import Menu from "../components/MenuComponent";
import { DISHES } from "../sharedFile/dishes"
import DishDetails from './dishDetailsComponent';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectDish: null
    }
  }

    onDishSelect(dishId) {
        this.setState({
            selectDish: dishId
        });
    }
 
  
  render() {
    return(
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                <NavbarBrand href="/">Restorant Con Fussion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={this.state.dishes} onClick={ (dishId) => this.onDishSelect(dishId) } />
            <DishDetails dish={this.state.dishes.filter( (dish) => dish.id === this.state.selectDish )[0]}/>
        </div>
    );
    
  };
}

export default Main;
