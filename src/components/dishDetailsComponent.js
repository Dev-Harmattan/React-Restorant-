import React, {Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { comments } from "../sharedFile/comments"


class DishDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dish: this.props.dish
        }
    }

    handleRender(dish) {
        if(dish != null) {
            return(
                <Card>
                  <CardImg width="100%" src={dish.image} alt={dish.name}/>  
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else {
            return(
                <div></div>
            );
        }
    }

    renderComments()  {
        if(comments != null){
            const comment = comments.map( (comment) => {
                return(
                    <div key={comment.id}>
                        <ul   className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    </div>
                    
                );
            })

            return comment;
        }else {
            return <div></div>
        }

       
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1 ">
                    {this.handleRender(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments()}
                </div>
            </div>
            </div>
        );
    }
}

export default DishDetails;