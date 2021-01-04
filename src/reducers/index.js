import { combineReducers } from 'redux'
import productReducer from './productReducer'
import searchReducer from './searchReducer'
import toggleReducer from './toggleReducer'

export default combineReducers({
    products: productReducer,
    search: searchReducer,
    toggle: toggleReducer
})