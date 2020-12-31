import {
    TOGGLE_TODO
} from '../actios/types'

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_TODO:
            return !action.index
        default:
            return state
    }
}