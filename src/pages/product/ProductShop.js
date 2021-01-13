import React from 'react'
import history from '../../utils/history'
import { connect } from 'react-redux'
import Loading from './Loading'
import './css/ProductShop.css'

const RenderList = (props) => {
    const { products, search, loading } = props
    const isSearch = search.keyWord && props.match.path === '/shop/search'
    const resultCount = () => isSearch ? search.searchProduct.length : products.length
    const isProductEmpty = resultCount() === 0
    const searchStatus = () => {
        if (loading) return 'Now Search...'
        else if (isProductEmpty) return 'Sorry! No product found!'
        else return `Showing ${resultCount()} results`
    }

    const renderLoading = () => {
        let loadingItem = []
        for (let i = 0; i < 9; i++) {
            loadingItem.push(<Loading key={i + 'loading'} />)
        }
        return loadingItem
    }

    const renderList = () => {
        const list = isSearch ? search.searchProduct : products

        return list.map(data => {
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

    return (
        <div className="list-align">
            <div className="list-results">{searchStatus()}</div>
            <div className="list-container">
                { loading || isProductEmpty ? renderLoading() : renderList() }
            </div>
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

export default connect(mapStateToProps)(RenderList)