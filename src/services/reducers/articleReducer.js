import { actionTypes } from "../actions/actionTypes"

const initState = {
    articles: []
}

export const articleReducer = (state = initState, action) => {

    switch(action.type) {
        case actionTypes.fetch_articles:
            return {...state, articles: action.payload}
        default:
            return state
    }

}
