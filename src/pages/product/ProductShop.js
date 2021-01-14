import React, { useRef, useEffect } from 'react'
import history from '../../utils/history'
import { connect } from 'react-redux'
import Loading from './Loading'
import action from '../../actions/index'
import { FETCH_PRODUCTS, LOADING } from '../../constants/types'

import './css/ProductShop.css'

const RenderList = (props) => {
    const loadingContainer = useRef(null)
    const listContainer = useRef(null)
    const { products, search, loading } = props
    const isSearch = search.keyWord && props.match.path === '/shop/search'
    const resultCount = isSearch ? search.searchProduct.length : products.length
    const isProductEmpty = resultCount === 0

    useEffect(() => {
        props.fetchProducts().then(res => {
            res.dispatch({ type: LOADING, payload: false})
            res.dispatch({ type: FETCH_PRODUCTS, payload: res.resData.data })
        })
    }, [])

    const searchStatus = () => {
        if (loading) return 'Now Search...'
        if (!loading && !isProductEmpty) return `Showing ${resultCount} results`
        if (!loading && isProductEmpty) return 'Sorry! No product found!'
    }

    const renderLoading = () => {
        let loadingItem = []
        for (let i = 0; i < 6; i++) {
            loadingItem.push(
                <div className="loading-shower" key={i + 'loading'}>
                    <Loading />
                </div>
            )
        }
        if (!loading && loadingContainer.current !== null) loadingContainer.current.style.opacity = 0
        if (loading && loadingContainer.current !== null) loadingContainer.current.style.opacity = 1
        
        return (
            <div className="loading-container" ref={ loadingContainer }>
                { loadingItem }
            </div>
        )
    }

    const renderList = () => {
        const list = isSearch ? search.searchProduct : products
        if (!loading && listContainer.current !== null) listContainer.current.style.opacity = 1
        if (loading && listContainer.current !== null) listContainer.current.style.opacity = 0

        return (
            <div className="list-container" ref={ listContainer }>
                {
                    list.map(data => {
                        return (
                            <div className="product-shower" key={data.id} onClick={() => history.push(`/detail/${data.id}`)}>
                                <div className="plus">＋</div>
                                <div className="list-img-container"><img className="list-img1" alt="" src={data.review.imgSrc[0]} /></div>
                                <div className="list-img-container"><img className="list-img2" alt="" src={data.review.imgSrc[1]} /></div>
                                <div className="list-review">
                                    <div className="list-name">{data.title}</div>
                                    <div className="list-price">{data.price}</div>
                                </div>
                                <div className="list-add-cart">Add to cart</div>
                            </div>
                        )
                    })
                }
            </div>
        ) 
    }

    return (
        <div className="list-align">
            <div className="list-results">{searchStatus()}</div>
            { renderLoading() }
            { renderList() }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products),
        search: state.search,
        loading: state.loading.loading
    }
}

export default connect(mapStateToProps, action)(RenderList)