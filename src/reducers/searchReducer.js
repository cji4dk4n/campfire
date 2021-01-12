import {
    FETCH_SEARCH_PRODUCTS
} from '../constants/types'

const initData = {
    searchProduct: [],
    keyWord: ''
}

export default (state = initData, action) => {
    switch (action.type) {
        case FETCH_SEARCH_PRODUCTS:
            return { 
                ...state,
                searchProduct: action.payload.finalData,
                keyWord: action.payload.keyWord
            }
        default:
            return state
    }
}