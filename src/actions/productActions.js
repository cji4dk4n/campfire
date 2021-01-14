import { LOADING } from '../constants/types'
import products from '../apis/products'

export const fetchProducts = () => async dispatch => {
    dispatch({ type: LOADING, payload: true})
    const resData = await products.get('/products').catch(err => 'server is down')
    return { resData, dispatch }
}