import {
    TOGGLE_TODO
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_TODO:
            return !action.index
        default:
            return state
    }
}