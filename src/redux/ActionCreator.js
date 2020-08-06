import * as ActionType from "./ActionTypes";
import {baseUrl} from "../sharedFile/baseUrl"


export const addComment = (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) =>{
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + "comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok){
            return response
        }else{
            var error = new Error("Error " + response.status + ": " + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errorMess = new Error(error.message);
        throw errorMess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => console.log("Post comments ", error.message));
}

//dishes action declearation using thunk and fetch
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

   return fetch(baseUrl + "dishes")
    .then(response => {
        if(response.ok){
            return response
        }else{
            var error = new Error("Error " + response.status + ": " + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errorMess = new Error(error.message);
        throw errorMess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionType.DISHES_LOADING
});


export const dishesFailed = (errmess) => ({
    type: ActionType.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes
});


//comments action declearation using thunk and fetch
export const fetchComments = () => (dispatch) => {

   return fetch(baseUrl + "comments")
    .then(response => {
        if(response.ok){
            return response
        }else{
            var error = new Error("Error " + response.status + ": " + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errorMess = new Error(error.message);
        throw errorMess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type: ActionType.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionType.ADD_COMMENTS,
    payload: comments
});



//promotions action declearation using thunk and fetch
export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));

    return fetch(baseUrl + "promotions")
    .then(response => {
        if(response.ok){
            return response
        }else{
            var error = new Error("Error " + response.status + ": " + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errorMess = new Error(error.message);
        throw errorMess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionType.PROMOS_LOADING
});
 
export const promosFailed = (errmess) => ({
    type: ActionType.PROMOS_FAILED,
    payload: errmess
});
 
export const addPromos = (promos) => ({
    type: ActionType.ADD_PROMOS,
    payload: promos
});



//creating action for Leaders using thunk and fetch from server
export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + "leaders")
    .then(response => {
        if(response.ok){
            return response
        }else{
            var error = new Error("Error " + response.status + ": " + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errorMess = new Error(error.message);
        throw errorMess;
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionType.LEADERS_LOADING
});

export const addLeaders = (leaders) => ({
    type: ActionType.ADD_LEADERS,
    payload: leaders
});

export const leadersFailed = (errMess) => ({
    type: ActionType.LEADERS_FAILED,
    payload: errMess
});

//action creator for feedback using thunk and fetch ap1
export const postFeedback =  (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {

    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    };

    return fetch(baseUrl + "feedback", {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            var error = new Error("ERROR " + response.status + ": " + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errorMess = new Error(error.message);
        throw errorMess;
    })
    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .then(error => dispatch(feedbackFailed(error.message)))
}

export const addFeedback = (feedback) => ({
    type: ActionType.ADD_FEEDBACK,
    payload: feedback,
    message: (feedback) => {
        alert(feedback)
    }
});

export const feedbackFailed = (errMess) => ({
    type: ActionType.FEEDBACK_FAILED,
    payload: errMess
});