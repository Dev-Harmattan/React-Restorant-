import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { comments } from "../sharedFile/comments"



    function HandleRender({dish}) {
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
    
    function RenderComments()  {

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

    function DishDetails(props) {
        return(
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1 ">
                    <HandleRender dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                   <RenderComments/>
                </div>
            </div>
            </div>
        );
    }

    
        

export default DishDetails;