import products from '../apis/products'

export const fetchProducts = () => async dispatch => {
    const resData = await products.get('/products').catch(err => 'server is down')
    return { resData, dispatch }
}