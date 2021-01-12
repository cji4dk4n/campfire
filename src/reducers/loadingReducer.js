import { LOADING } from '../constants/types'

const initData = {
    loading: false
}

export default (state = initData, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}