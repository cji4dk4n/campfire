import { FETCH_SEARCH_PRODUCTS, LOADING } from '../constants/types'

let timeout = ''
export const fetchSearchProducts = products => dispatch => {
    clearTimeout(timeout)

    // 故意這樣寫的，模擬loading的感覺
    timeout = setTimeout(() => {
        dispatch({ type: FETCH_SEARCH_PRODUCTS, payload: products })
        dispatch({ type: LOADING, payload: false})
    }, 3000)
}