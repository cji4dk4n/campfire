import { combineReducers } from 'redux'
import productReducer from './productReducer'
import searchReducer from './searchReducer'
import loadingReducer from './loadingReducer'

export default combineReducers({
    loading: loadingReducer,
    products: productReducer,
    search: searchReducer,
})