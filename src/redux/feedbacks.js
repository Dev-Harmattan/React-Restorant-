import * as ActionType from "./ActionTypes"

export const Feedbacks = (state = {
    errMess: null,
    feedbacks: []
}, action) => {
    switch (action.type) {
        case ActionType.FEEDBACK_FAILED: 
            return {...state, errMess: action.payload, feedbacks: []};
        case ActionType.ADD_FEEDBACKS:
            return {...state, errMess: null, feedbacks: action.payload};
        case ActionType.ADD_FEEDBACK: 
            var feedback = action.payload;
            return alert("Thank you for your feedback\n", feedback);
            // return {...state, feedbacks: state.feedbacks.concat(feedback)};
        default:
            return state;
    }
}