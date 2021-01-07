import {
    FETCH_SEARCH_PRODUCTS,
    SEARCH_TEXT,
} from '../constants/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SEARCH_PRODUCTS:
            return { ...state, searchProduct: action.payload  }
        case SEARCH_TEXT:
            return { ...state, keyWord: action.keyWord }
        default:
            return state
    }
}