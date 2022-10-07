import { BASE_URL } from "../constants/ApiConstants"
import { actionTypes } from "./actionTypes"

export const fetchArticles = () => {
    return (dispatch) => {
        fetch(`${BASE_URL}/articles`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: actionTypes.fetch_articles,
                payload: res.data
            })
        })
    }
}