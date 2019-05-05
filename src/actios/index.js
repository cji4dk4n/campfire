import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    FETCH_SEARCH_PRODUCTS
} from './types'
import products from '../apis/products'
import history from '../history'
import _ from 'lodash'

export const fetchProducts = () => async dispatch => {
    const response = await products.get('/products')

    dispatch({ type: FETCH_PRODUCTS, payload: response.data })
}

export const fetchProduct = id => async dispatch => {
    const response = await products.get(`/products/${id}`)

    dispatch({ type: FETCH_PRODUCT, payload: response.data })
}

export const fetchSearchProducts = (keyWord) => async dispatch => {
    const response = await products.get('/products')
    const data = response.data
    const reg = new RegExp(keyWord, "i")
    const searchData =
        data.map(data => {
            let arrayData = Object.values(data)
            if (reg.test(arrayData)) {
                return data
            }
            return null
        })
    //console.log(searchData)
    const finalData = _.filter(searchData, null)
    //console.log(finalData)
    dispatch({ type: FETCH_SEARCH_PRODUCTS, payload: finalData })
    history.push(`/shop/search/${keyWord}`)
}