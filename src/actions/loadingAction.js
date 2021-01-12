import { LOADING } from '../constants/types'

export const loadingAction = isLoading => dispatch => {
    dispatch({ type: LOADING, payload: isLoading })
}