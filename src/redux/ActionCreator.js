import * as ActionType from "./ActionTypes";
import { DISHES } from "../sharedFile/dishes";


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//using thunk to return function to perfrom mutiple dispatch
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 1000);
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