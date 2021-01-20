import { LOADING } from '../constants/types'
// import products from '../apis/products'

import { products } from '../db/db.json'

const fakeFeach = () => new Promise(resolve => resolve({ data: products }))

export const fetchProducts = () => async dispatch => {
    dispatch({ type: LOADING, payload: true})
    // const resData = await products.get('/products').catch(err => 'server is down')
    const resData = await fakeFeach().catch(err => 'server is down')
    return { resData, dispatch }
}