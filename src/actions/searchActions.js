import { FETCH_SEARCH_PRODUCTS, LOADING } from '../constants/types'

let timeout = ''
export const fetchSearchProducts = products => dispatch => {
    clearTimeout(timeout)

    timeout =  setTimeout(() => {
        dispatch({ type: FETCH_SEARCH_PRODUCTS, payload: products })
        dispatch({ type: LOADING, payload: false })
    }, 1000)
}