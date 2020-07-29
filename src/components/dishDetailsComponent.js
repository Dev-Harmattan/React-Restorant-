import React, { useState } from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,  Button, Modal, ModalHeader, ModalBody,Row, Col, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Link} from "react-router-dom";
import {Loading} from "./LoadingComponnt";


const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);


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

    
    function RenderComments({comments})  {

        
        if(comments != null){
            const comment = comments.map( (comment) => {
                return(
                    <div key={comment.id}>
                        <ul   className="list-unstyled">
                            <li>--{comment.comment}</li>
                            <li>--{comment.author}. {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    </div>
                );
            })

            return comment;
        }else {
            return <div></div>
        }
    }

    function CommentForm(props) {
        
        const [toggle, setToggle] = useState(false);


        const handleToggle = () => {
            setToggle(!toggle)
        }

        const handleSubmit = (values) => {
            handleToggle(); 
            props.addComment(props.dishId, values.rating, values.authorname, values.comment);
        }

        return(
            <div>
                <Button onClick={handleToggle} outline color="secondary"><i className="fa fa-pencil fa-lg"></i> Submit Comment</Button>
                <Modal isOpen={toggle} toggle={handleToggle}>
                    <ModalHeader toggle={handleToggle}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={handleSubmit}>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="rating" >Rating</Label>
                                <Control.select model = ".rating"  name="rating"
                                className="form-control">      
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="authorname"> Your Name</Label>
                            <Control.text model=".authorname" name="authorname" id="authorname" 
                                placeholder="Your Name" className="form-control" 
                                validators={{
                                    required, maxLength: maxLength(15), minLength: minLength(3)
                                }}>
                            </Control.text>
                            <Errors
                                className="text-danger" 
                                model=".authorname"
                                show="touched"
                                messages = {{
                                    required: "Required ",
                                    minLength:"Should have at least 3 characters",
                                    maxLength:"Can't be more than 15 characters"
                                }}
                                >
                            </Errors>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="comment"> Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

    function DishDetails(props) {
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }else
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <HandleRender dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
                            <CommentForm addComment={props.addComment} dishId={props.dish.id}/>
                        </div>
                    </div>
                </div>
            );
    }

    
        

export default DishDetails;