import React from 'react'
import history from '../../history'
import { connect } from 'react-redux'
import '../../css/productlist.css'

const RenderList = (props) => {

    const renderList = () => {
        const { products, search, name } = props
        const list = name === 'list' ? products : search
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

    const resultCount = () => {
        const { products, search, name } = props
        const length = name === 'list' ? products.length : search.length
        return length
    }

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
        search: Object.values(state.search)
    }
}

export default connect(mapStateToProps)(RenderList)