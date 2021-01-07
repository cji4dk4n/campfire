import React from 'react'
import history from '../../utils/history'
import { connect } from 'react-redux'
import './css/ProductShop.css'

const RenderList = (props) => {
    const { products, search } = props
    const keyWord = search.keyWord

    const renderList = () => {
        const list = keyWord ? search.searchProduct : products

        return list.map(data => {
            return (
                <div className="item" key={data.id} onClick={() => history.push(`/shop/${data.id}`)}>
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

    const resultCount = () => keyWord ? search.searchProduct.length : products.length

    return (
        <div className="list-align">
            <div className="list-results">Showing {resultCount()} results</div>
            <div className="list-container">
                {renderList()}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products),
        search: state.search
    }
}

export default connect(mapStateToProps)(RenderList)