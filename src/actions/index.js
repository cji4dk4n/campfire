import {
    TOGGLE_TODO
} from './types'
import products from '../apis/products'


export const fetchProducts = () => async dispatch => {
    const resData = await products.get('/products').catch(err => 'server is down')
    return { resData, dispatch }
}

export const fetchProduct = id => async dispatch => {
    const resData = await products.get(`/products/${id}`).catch(err => 'server is down')
    return { resData, dispatch }
}

export const toggleTodo = index => dispatch => {
    dispatch({ type: TOGGLE_TODO, index })
}