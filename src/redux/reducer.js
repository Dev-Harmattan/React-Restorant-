import { DISHES } from "../sharedFile/dishes";
import { COMMENTS } from '../sharedFile/comments';
import {PROMOTIONS} from "../sharedFile/promotion"
import { LEADERS } from '../sharedFile/leaders';


export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};


export const Reducer = (state = initialState, action) => {
    return state;
}


