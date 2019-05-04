import { combineReducers } from 'redux'
import productReducer from './productReducer'
import searchReducer from './searchReducer'

export default combineReducers({
    products: productReducer,
    search: searchReducer
})