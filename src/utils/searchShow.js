import history from './history'
import _ from 'lodash'
import { FETCH_SEARCH_PRODUCTS } from '../actions/types'

export const searchShow = (products, keyWord) => dispatch => {
    if (keyWord === '') {
        history.push(`/shop`)
        return
    }

    const reg = new RegExp(keyWord, "i")
    const searchData = products.map(data => {
            let arrayData = Object.values(data)
            if (reg.test(arrayData)) {
                return data
            }
            return null
        })
    const finalData = _.filter(searchData, null)
    
    dispatch({ type: FETCH_SEARCH_PRODUCTS, payload: finalData })
    history.push(`/shop/search/${keyWord}`)
}