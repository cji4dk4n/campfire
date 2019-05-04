import {
    FETCH_SEARCH_PRODUCTS
} from '../actios/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SEARCH_PRODUCTS:
            return action.payload
        default:
            return state
    }
}