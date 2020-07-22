import React, { Component } from 'react';
import Menu from "../components/MenuComponent";
import Contact from "./ContactUs";
import DishDetails from "./dishDetailsComponent";
import {Switch, Route, Redirect} from "react-router-dom";
import { DISHES } from "../sharedFile/dishes";
import { COMMENTS } from '../sharedFile/comments';
import {PROMOTIONS} from "../sharedFile/promotion"
import { LEADERS } from '../sharedFile/leaders';
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }

  

  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter( (dish) =>dish.featured )[0]}
          promotion={this.state.promotions.filter( (promotion) => promotion.featured)[0]}
          leader={this.state.leaders.filter( (leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };


    
    return(

      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes} />}/>
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
    
  };
}

export default Main;
