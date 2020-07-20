import React from "react";
import { Card, CardImg, CardImgOverlay,  CardTitle } from "reactstrap";



    

    function RenderComponent({dish, onClick}) {
        return(
            <Card onClick={ () => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

   
    function Menu(props) {
        const menu = props.dishes.map( (dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                  <RenderComponent dish={dish} onClick={props.onClick}/>
                </div>
            );
        });


        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
        


export default Menu;
