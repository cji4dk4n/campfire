import { SEARCH_TEXT, FETCH_SEARCH_PRODUCTS } from '../constants/types'

export const searchText = keyWord => dispatch => {
    dispatch({ type: SEARCH_TEXT, keyWord })
}

export const fetchSearchProducts = products => dispatch => {
    dispatch({ type: FETCH_SEARCH_PRODUCTS, payload: products })
}