import React, { Component } from 'react';
import Menu from "../components/MenuComponent";
import {Switch, Route, Redirect} from "react-router-dom";
import { DISHES } from "../sharedFile/dishes"
import DishDetails from './dishDetailsComponent';
import Home from "./HomeComponent";
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

  
 
  
  render() {

    const HomePage = () => {
      return(
        <Home/>
      );
    }
    return(
        <div className="App">
            <Header/>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes} />}/>
              <Redirect to="/home" />
            </Switch>
            <Footer/>
        </div>
    );
    
  };
}

export default Main;
