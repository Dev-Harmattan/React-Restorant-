import React, { Component } from 'react';
import Menu from "../components/MenuComponent";
import { DISHES } from "../sharedFile/dishes"
import DishDetails from './dishDetailsComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";


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
            <Header/>
            <Menu dishes={this.state.dishes} onClick={ (dishId) => this.onDishSelect(dishId) } />
            <DishDetails dish={this.state.dishes.filter( (dish) => dish.id === this.state.selectDish )[0]}/>
            <Footer/>
        </div>
    );
    
  };
}

export default Main;
