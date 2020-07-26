import {createStore} from "redux";
import {Reducer, initialState} from "./reducer";


export const ConfigureStore = () => {
    const store = createStore(
        Reducer, //reducer
        initialState //initial state
    );
    return store;
}
