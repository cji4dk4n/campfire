import { combineReducers } from 'redux'
import productReducer from './productReducer'
import searchReducer from './searchReducer'
import toggleReducer from './toggle'

export default combineReducers({
    products: productReducer,
    search: searchReducer,
    toggle: toggleReducer
})