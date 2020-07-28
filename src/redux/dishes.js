import { DISHES } from "../sharedFile/dishes";


export const Dishes = (state = DISHES, action) => {
    switch(action.type) {
        default:
            return state;
    }
}